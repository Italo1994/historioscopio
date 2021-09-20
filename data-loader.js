
const { safeLoad } = require('js-yaml')
const {
    isUrlRequest,
    stringifyRequest,
    urlToRequest,
} = require('loader-utils')

const path = require('path')

const {
    readdirSync,
    statSync
} = require('fs')

const importRegex = /^import\((.*)\)$/
const allAtRegex = /^all@(.*)$/
const isYamlRegex = /\.ya?ml$/

function parseImportDir(ctx, dir) {
    const importUrl = path.resolve(ctx.context, dir)
    const request = readdirSync(importUrl)
        .filter(e => statSync(`${importUrl}/${e}`).isDirectory() || isYamlRegex.test(e))
        .sort()
        .map(file => {
            const relativeFile = `${dir}/${file}`
            if (statSync(`${importUrl}/${file}`).isDirectory())
                return parseImportDir(ctx, relativeFile)

            return `require(${stringifyRequest(ctx, urlToRequest(relativeFile))})`
        }).join(',')

    return `[${request}]`
}

function parseImport(ctx, url) {
    const [, dir] = url.trim().match(allAtRegex) || []
    if (dir) return parseImportDir(ctx, dir)

    if (!isUrlRequest(url)) return

    const importUrl = urlToRequest(url);
    return `require(${stringifyRequest(ctx, importUrl)})`;
}

function maybeParseImport(ctx, string) {
    if (typeof string !== 'string') return

    const [, url] = string.trim().match(importRegex) || []
    if (url) return parseImport(ctx, url)
}

function parseArray(ctx, arr) {
    const items = arr.map(parseValue.bind(this, ctx))
    return `[${items.join(',')}]`
}

function parseObject(ctx, obj) {
    const items = Object.entries(obj).map(([key, val]) => `"${key}":${parseValue(ctx, val)}`)
    return `{${items.join(',')}}`
}

function parseValue(ctx, val) {
    if (val instanceof Array) return parseArray(ctx, val)
    if (typeof val === 'object') return parseObject(ctx, val)
    return maybeParseImport(ctx, val) || JSON.stringify(val)
}

function loadYaml(ctx, string) {
    return `module.exports = ${parseValue(ctx, safeLoad(string))}`
}

module.exports = function (source) {
  this.cacheable && this.cacheable()
  try {
    return loadYaml(this, source)
  }
  catch (err) {
    this.emitError(err)
    return null
  }
}
