class JSONresult{
    constructor(
        public name: string,
        public alpha2_code: string,
        public alpha3_code: string
    ){}
}

export class RestResponse {
    constructor(
        public messages: string[],
        public result: JSONresult
        ){}
}