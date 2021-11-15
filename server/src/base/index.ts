export class JsonResult {
  code: number;
  msg: string;
  data: any;
  constructor(code: number, msg: string, data: any) {
    this.code = code;
    this.msg = msg;
    this.data = data;
  }
  static ok(data: any) {
    return new JsonResult(200, 'ok', data);
  }
  static err(code: number, msg: string) {
    return new JsonResult(code, msg, null);
  }
}
