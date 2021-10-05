import {Http} from "../utils/http";

export class Theme {
    static locationA = 't-1'
    static locationE = 't-2'
    static locationF = 't-3'
    static locationH = 't-4'
    themes = []

    async getThemes() {
        const data = `${Theme.locationA},${Theme.locationE},${Theme.locationF},${Theme.locationH}`
        this.themes = await Http.request({
            url: 'theme/by/names',
            data: {
                names: data
            }
        })
    }

    async getHomeLocationA() {
        if (this.themes.length <= 0) {
            await this.getThemes()
        }
        return this.themes.find(t => t.name === Theme.locationA)
    }

    async getHomeLocationE() {
        if (this.themes.length <= 0) {
            await this.getThemes()
        }
        return this.themes.find(t => t.name === Theme.locationE)
    }

    async getHomeLocationF() {
        if (this.themes.length <= 0) {
            await this.getThemes()
        }
        return this.themes.find(t => t.name === Theme.locationF)
    }

    async getHomeLocationH() {
        if (this.themes.length <= 0) {
            await this.getThemes()
        }
        return this.themes.find(t => t.name === Theme.locationH)
    }

    static async getHomeLocationESpu() {
        return Theme.getThemeSpuByName(Theme.locationE)
    }

    static async getThemeSpuByName(name) {
        return await Http.request({
            url: `theme/name/${name}/with_spu`
        })
    }
}
