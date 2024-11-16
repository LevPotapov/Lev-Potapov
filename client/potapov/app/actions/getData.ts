export default async function getData(url: string): Promise<any[] | undefined> {
    try {
        const res = await fetch(url)
        const parsedJson = res.json()
        return parsedJson
    } catch (error) {
        console.log(error)
        return undefined
    }
}
