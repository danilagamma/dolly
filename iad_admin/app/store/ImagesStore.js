/*
 * File: app/store/ImagesStore.js
 * Date: Sat Oct 01 2011 20:11:19 GMT+0400
 *
 * This file was generated by Ext Designer version 1.2.2.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

Ext.define('IAD.store.ImagesStore', {
    extend: 'Ext.data.Store',

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'ImagesStore',
            proxy: {
                type: 'memory',
                reader: {
                    type: 'array'
                }
            },
            fields: [
                {
                    name: 'imageId'
                },
                {
                    name: 'name'
                },
                {
                    name: 'path'
                },
                {
                    dateFormat: 'U',
                    name: 'addDate',
                    type: 'date'
                }
            ]
        }, cfg)]);
    }
});