import {Theme} from "../../model/theme";
import {Banner} from "../../model/banner";
import {Category} from "../../model/category";
import {Activity} from "../../model/activity";

Page({
    data: {
        themeA: null,
        bannerB: null,
        gridC: [],
        activityD: null,
        themeE: null,
        themeESpu: null,
        themeF: null,
        bannerG: null,
        themeH: null
    },
    onLoad: async function (options) {
        const theme = new Theme();
        const themeA = await theme.getHomeLocationA()
        const bannerB = await Banner.getHomeLocationB()
        const gridC = await Category.getHomeLocationC()
        const activityD = await Activity.getHomeLocationD()
        const themeE = await theme.getHomeLocationE()
        const themeF = await theme.getHomeLocationF()
        const bannerG = await Banner.getHomeLocationG()
        const themeH = await theme.getHomeLocationH()
        let themeESpu = null
        if (themeE.online) {
            const data = await Theme.getHomeLocationESpu();
            if (data) {
                themeESpu = data.spu_list.slice(0, 8)
            }
        }
        this.setData({
            themeA,
            bannerB,
            gridC,
            activityD,
            themeE,
            themeESpu,
            themeF,
            bannerG,
            themeH
        })
    }
});
