/*
 * File: app/view/ui/MainWindow.js
 * Date: Tue Dec 13 2011 14:05:45 GMT+0400 (Ìîñêîâñêîå âðåìÿ (çèìà))
 *
 * This file was generated by Ext Designer version 1.2.2.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

Ext.define('IAD.view.ui.MainWindow', {
    extend: 'Ext.window.Window',
    requires: [
        'IAD.view.editClassesTree'
    ],

    height: 503,
    id: 'IADWindow',
    width: 750,
    layout: {
        type: 'fit'
    },
    title: _('Control module for Image Auto Deploy System'),

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'tabpanel',
                    autoRender: true,
                    itemId: 'navTabs',
                    activeTab: 3,
                    items: [
                        {
                            xtype: 'panel',
                            itemId: 'classesTab',
                            layout: {
                                type: 'fit'
                            },
                            title: _('Network map'),
                            items: [
                                {
                                    xtype: 'editclassestree',
                                    store: 'ClassesStore'
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            itemId: 'imagesTab',
                            layout: {
                                align: 'stretch',
                                type: 'vbox'
                            },
                            title: _('Images'),
                            items: [
                                {
                                    xtype: 'gridpanel',
                                    itemId: 'imagesGrid',
                                    stateId: 'imagesGrid',
                                    maintainFlex: true,
                                    title: '',
                                    store: 'ImagesStore',
                                    flex: 1,
                                    columns: [
                                        {
                                            xtype: 'gridcolumn',
                                            width: 200,
                                            dataIndex: 'name',
                                            text: _('Image name')
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            dataIndex: 'path',
                                            flex: 1,
                                            text: _('Path')
                                        },
                                        {
                                            xtype: 'datecolumn',
                                            dataIndex: 'addDate',
                                            text: _('Add date')
                                        },
                                        {
                                            xtype: 'actioncolumn',
                                            itemId: 'deleteRow',
                                            width: 25,
                                            sortable: false,
                                            items: [
                                                {
                                                    icon: 'icons/cross-16-ns.png'
                                                }
                                            ]
                                        }
                                    ],
                                    viewConfig: {

                                    },
                                    dockedItems: [
                                        {
                                            xtype: 'toolbar',
                                            itemId: 'toolbar',
                                            dock: 'top',
                                            items: [
                                                {
                                                    xtype: 'button',
                                                    itemId: 'addImageManual',
                                                    iconCls: 'icon-add',
                                                    text: _('Add image manual')
                                                }
                                            ]
                                        },
                                        {
                                            xtype: 'toolbar',
                                            hidden: true,
                                            itemId: 'askbar',
                                            dock: 'top',
                                            items: [
                                                {
                                                    xtype: 'tbtext',
                                                    style: 'font-weight:bold;',
                                                    text: _('Select image:')
                                                },
                                                {
                                                    xtype: 'tbfill'
                                                },
                                                {
                                                    xtype: 'button',
                                                    itemId: 'cancelCloning',
                                                    iconCls: 'icon-cancel-cloning',
                                                    text: _('Cancel cloning')
                                                },
                                                {
                                                    xtype: 'button',
                                                    itemId: 'startCloning',
                                                    iconAlign: 'right',
                                                    iconCls: 'icon-start-cloning',
                                                    text: _('Start cloning')
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            itemId: 'cloningTab',
                            layout: {
                                align: 'stretch',
                                type: 'vbox'
                            },
                            title: _('Cloning'),
                            items: [
                                {
                                    xtype: 'treepanel',
                                    itemId: 'cloningGrid',
                                    stateId: 'cloningGrid',
                                    title: '',
                                    store: 'CloningStore',
                                    rootVisible: false,
                                    flex: 1,
                                    viewConfig: {

                                    },
                                    columns: [
                                        {
                                            xtype: 'treecolumn',
                                            width: 150,
                                            dataIndex: 'name',
                                            text: _('Computer')
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            width: 100,
                                            dataIndex: 'mac',
                                            text: 'MAC'
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            width: 100,
                                            dataIndex: 'ip',
                                            text: _('Real IP')
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            width: 75,
                                            dataIndex: 'status',
                                            text: _('Status')
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            dataIndex: 'statusDesc',
                                            flex: 1,
                                            text: _('Description')
                                        }
                                    ],
                                    dockedItems: [
                                        {
                                            xtype: 'toolbar',
                                            itemId: 'toolbar',
                                            width: 674,
                                            dock: 'top',
                                            items: [
                                                {
                                                    xtype: 'button',
                                                    itemId: 'stopCloning',
                                                    iconCls: 'icon-stop-cloning',
                                                    text: _('Abort')
                                                },
                                                {
                                                    xtype: 'button',
                                                    itemId: 'getCloningLog',
                                                    text: 'getCloningLog(temp)'
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    xtype: 'gridpanel',
                                    height: 110,
                                    itemId: 'cloningStateGrid',
                                    stateId: 'cloningStateGrid',
                                    autoScroll: true,
                                    title: _('Cloning progress'),
                                    hideHeaders: true,
                                    store: 'CloningStateStore',
                                    columns: [
                                        {
                                            xtype: 'gridcolumn',
                                            itemId: 'icon',
                                            width: 30,
                                            dataIndex: 'icon'
                                        },
                                        {
                                            xtype: 'datecolumn',
                                            itemId: 'date',
                                            dataIndex: 'date',
                                            text: ''
                                        },
                                        {
                                            xtype: 'gridcolumn',
                                            itemId: 'state',
                                            dataIndex: 'state',
                                            flex: 1,
                                            text: ''
                                        }
                                    ]
                                }
                            ]
                        },
                        {
                            xtype: 'panel',
                            baseCls: 'x-frame',
                            itemId: 'settingsTab',
                            layout: {
                                align: 'stretch',
                                padding: 10,
                                type: 'vbox'
                            },
                            title: _('Settings'),
                            items: [
                                {
                                    xtype: 'fieldset',
                                    height: 205,
                                    itemId: 'daemon',
                                    layout: {
                                        align: 'stretch',
                                        type: 'vbox'
                                    },
                                    title: _('Daemon settings'),
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            itemId: 'ipxe_normal_boot',
                                            fieldLabel: _('Normal boot script'),
                                            labelWidth: 250
                                        },
                                        {
                                            xtype: 'textfield',
                                            itemId: 'ipxe_network_boot',
                                            fieldLabel: _('Network boot script'),
                                            labelWidth: 250
                                        },
                                        {
                                            xtype: 'textfield',
                                            itemId: 'clone_make_image_cmd',
                                            fieldLabel: _('Create image command'),
                                            labelWidth: 250
                                        },
                                        {
                                            xtype: 'textfield',
                                            itemId: 'clone_upload_image_cmd',
                                            fieldLabel: _('Cloning image command'),
                                            labelWidth: 250
                                        },
                                        {
                                            xtype: 'combobox',
                                            itemId: 'add_new_to_group',
                                            submitValue: false,
                                            fieldLabel: _('Add new computers to group'),
                                            labelWidth: 250,
                                            allowBlank: false,
                                            editable: false,
                                            displayField: 'name',
                                            queryMode: 'local',
                                            store: 'ClassesNamesStore',
                                            valueField: 'classId'
                                        },
                                        {
                                            xtype: 'checkboxfield',
                                            itemId: 'auto_update_ip',
                                            fieldLabel: _('Auto update IP addresses'),
                                            labelWidth: 250,
                                            boxLabel: ''
                                        },
                                        {
                                            xtype: 'container',
                                            height: 50,
                                            layout: {
                                                pack: 'end',
                                                type: 'hbox'
                                            },
                                            items: [
                                                {
                                                    xtype: 'button',
                                                    itemId: 'save',
                                                    minWidth: 70,
                                                    text: _('Save')
                                                },
                                                {
                                                    xtype: 'button',
                                                    itemId: 'reset',
                                                    margin: '0 0 0 5',
                                                    text: _('Restore default settings')
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    xtype: 'fieldset',
                                    title: _('Interface settings'),
                                    items: [
                                        {
                                            xtype: 'combobox',
                                            itemId: 'language',
                                            fieldLabel: 'Language',
                                            labelWidth: 250,
                                            editable: false,
                                            displayField: 'name',
                                            queryMode: 'local',
                                            store: 'LanguageStore',
                                            valueField: 'lang',
                                            anchor: '100%'
                                        },
                                        {
                                            xtype: 'container',
                                            margin: '0 0 10 0',
                                            layout: {
                                                pack: 'end',
                                                type: 'hbox'
                                            },
                                            items: [
                                                {
                                                    xtype: 'button',
                                                    itemId: 'saveInterface',
                                                    minWidth: 70,
                                                    text: _('Save')
                                                },
                                                {
                                                    xtype: 'button',
                                                    itemId: 'resetInterface',
                                                    minWidth: 70,
                                                    text: _('Restore default settings'),
                                                    margins: '0 0 0 10'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    height: 20,
                    itemId: 'statusbar',
                    tpl: Ext.create('Ext.XTemplate', 
                        ''
                    ),
                    dock: 'bottom',
                    items: [
                        {
                            xtype: 'tbtext',
                            itemId: 'state'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }
});