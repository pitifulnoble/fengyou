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
    },
    onLoad: async function (options) {
        const theme = new Theme();
        const themeA = await theme.getHomeLocationA()
        const bannerB = await Banner.getHomeLocationB()
        const gridC = await Category.getHomeLocationC()
        const activityD = await Activity.getHomeLocationD();
        this.setData({
            themeA: themeA,
            bannerB: bannerB,
            gridC: gridC,
            activityD: activityD
        })
    }
});
