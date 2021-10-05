import {config} from "../config/config";
import {promisic} from "../miniprogram_npm/lin-ui/utils/util";

export class Http {
    static async request({url, data, method = 'GET'}) {
        const res = await promisic(wx.request)({
            url: `${config.apiBaseUrl}${url}`,
            method,
            data,
            header: {
                appKey: config.appKey
            }
        })
        return res.data
    }
}
