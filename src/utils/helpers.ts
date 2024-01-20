// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function queryParamFromObject(params: any) {
    return (
      Object.keys(params)
        // eslint-disable-next-line @typescript-eslint/restrict-plus-operands
        .map(key => key + "=" + params[key])
        .join("&")
    );
}