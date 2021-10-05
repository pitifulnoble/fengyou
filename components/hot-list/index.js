Component({
    properties: {
        banner: Object
    },
    data: {
        leftItem: null,
        rightTopItem: null,
        rightBottomItem: null
    },
    observers: {
        'banner': function (banner) {
            if (!banner) {
                return
            }
            if (banner.items.length === 0) {
                return;
            }
            const leftItem = banner.items.find(i => i.name === 'left');
            const rightTopItem = banner.items.find(i => i.name === 'right-top');
            const rightBottomItem = banner.items.find(i => i.name === 'right-bottom');
            this.setData({
                leftItem: leftItem,
                rightTopItem: rightTopItem,
                rightBottomItem: rightBottomItem
            })
        }
    },
    methods: {}
});
