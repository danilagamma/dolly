/*
 * File: app/view/ui/AddComputerWindow.js
 * Date: Tue Dec 13 2011 14:05:45 GMT+0400 (Ìîñêîâñêîå âðåìÿ (çèìà))
 *
 * This file was generated by Ext Designer version 1.2.2.
 * http://www.sencha.com/products/designer/
 *
 * This file will be auto-generated each and everytime you export.
 *
 * Do NOT hand edit this file.
 */

Ext.define('IAD.view.ui.AddComputerWindow', {
    extend: 'Ext.window.Window',

    height: 181,
    id: 'AddComputerWindow',
    width: 294,
    layout: {
        align: 'stretch',
        type: 'vbox'
    },
    bodyPadding: 10,
    title: _('Add computer'),
    modal: true,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'displayfield',
                    itemId: 'className',
                    fieldStyle: 'font-weight: bold',
                    value: 'Display Field',
                    fieldLabel: _('Group'),
                    flex: 1
                },
                {
                    xtype: 'textfield',
                    itemId: 'name',
                    fieldLabel: _('Name')
                },
                {
                    xtype: 'textfield',
                    itemId: 'mac',
                    fieldLabel: 'MAC',
                    flex: 1
                },
                {
                    xtype: 'textfield',
                    itemId: 'ip',
                    fieldLabel: 'IP',
                    flex: 1
                },
                {
                    xtype: 'container',
                    layout: {
                        align: 'middle',
                        pack: 'end',
                        type: 'hbox'
                    },
                    items: [
                        {
                            xtype: 'button',
                            itemId: 'addComputer',
                            text: _('Add'),
                            margins: '0 5 0 0'
                        },
                        {
                            xtype: 'button',
                            itemId: 'cancel',
                            text: _('Cancel')
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }
});