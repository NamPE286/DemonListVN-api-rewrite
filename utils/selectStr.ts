export default function (obj: any) {
    const keys = Object.keys(obj).filter(value => value !== 'initialized')

    return keys.join(', ')
}