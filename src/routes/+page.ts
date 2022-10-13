export const prerender = true;

function toArrayBuffer(buf: [number]) {
    const ab = new ArrayBuffer(buf.length);
    const view = new Uint8Array(ab);
    for (let i = 0; i < buf.length; ++i) {
        view[i] = buf[i];
    }
    return ab;
}


/** @type {import('./$types').PageLoad} */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function load(params: any) {
    const decoder = new TextDecoder("utf-8")
    const data = JSON.parse(params.data.body)
    const arraybuffer = toArrayBuffer(data.data)
    if (data.type === "Buffer"){
        return {GithubData: decoder.decode(arraybuffer)}
    }

  }