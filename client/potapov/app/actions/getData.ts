export default async function getData(url: string): Promise<Array<any>> {
    const res = await fetch(url)
    const parsedJson = res.json()
    return parsedJson
}
