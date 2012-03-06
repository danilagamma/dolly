/*
 * File: designer.js
 * Date: Sat Oct 01 2011 20:11:19 GMT+0400
 *
 * This file was generated by Ext Designer version 1.2.2.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

Ext.Loader.setConfig({
    enabled: true
});

Ext.application({
    name: 'IAD',

    stores: [
        'ClassesStore',
        'CloningStore',
        'ImagesStore',
        'CloningStateStore',
        'ClassesNamesStore',
        'LanguageStore'
    ],

    launch: function() {
        Ext.QuickTips.init();

        var cmp1 = Ext.create('IAD.view.MainWindow', {
            renderTo: Ext.getBody()
        });
        cmp1.show();
        var cmp2 = Ext.create('IAD.view.AddComputerWindow', {
            renderTo: Ext.getBody()
        });
        var cmp3 = Ext.create('IAD.view.AddImageWindow', {
            renderTo: Ext.getBody()
        });
    }
});
