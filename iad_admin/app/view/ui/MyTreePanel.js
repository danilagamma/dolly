/*
 * File: app/view/ui/MyTreePanel.js
 * Date: Mon Dec 05 2011 13:14:25 GMT+0400 (Ìîñêîâñêîå âðåìÿ (çèìà))
 *
 * This file was generated by Ext Designer version 1.2.2.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

Ext.define('IAD.view.ui.MyTreePanel', {
    extend: 'Ext.tree.Panel',

    height: 250,
    itemId: 'editClassesGrid',
    width: 400,
    title: '',
    store: 'ClassesStore',
    rootVisible: false,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            viewConfig: {
                multiSelect: true,
                plugins: [
                    Ext.create('Ext.tree.plugin.TreeViewDragDrop', {

                    })
                ]
            },
            columns: [
                {
                    xtype: 'treecolumn',
                    width: 150,
                    dataIndex: 'name',
                    editor: {
                        allowBlank: false,
                        xtype: 'textfield'
                    },
                    text: 'Компьютер'
                },
                {
                    xtype: 'gridcolumn',
                    width: 100,
                    dataIndex: 'mac',
                    text: 'MAC'
                },
                {
                    xtype: 'datecolumn',
                    text: 'Дата обновления'
                },
                {
                    xtype: 'gridcolumn',
                    flex: 1,
                    text: 'Образ'
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    itemId: 'toolbar',
                    dock: 'top',
                    items: [
                        {
                            xtype: 'button',
                            itemId: 'addClass',
                            iconCls: 'icon-add',
                            text: 'Добавить класс'
                        },
                        {
                            xtype: 'button',
                            itemId: 'addComputer',
                            iconCls: 'icon-add',
                            text: 'Добавить компьютер'
                        },
                        {
                            xtype: 'button',
                            itemId: 'deleteChecked',
                            iconCls: 'icon-delete',
                            text: 'Удалить отмеченные'
                        },
                        {
                            xtype: 'tbfill'
                        },
                        {
                            xtype: 'button',
                            height: 22,
                            itemId: 'createImage',
                            iconAlign: 'right',
                            iconCls: 'icon-create-image',
                            text: 'Создать образ'
                        },
                        {
                            xtype: 'button',
                            height: 22,
                            itemId: 'startCloning',
                            iconAlign: 'right',
                            iconCls: 'icon-start-cloning',
                            text: 'Запустить клонирование'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }
});