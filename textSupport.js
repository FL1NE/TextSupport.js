/*******************************************************************************
* Text Support js (textSupport.js)                                    [_][O][X]*
********************************************************************************
* Version 0.0.1                                                                *
* Coded by Tomoki "FL1NE" SHISHIKURA (@FL1NE)                                  *
*                                                                              *
* Copyright (c) 2017 FRONTL1NE All rights reserved                             *
* https://fl1ne.rtx1911.net                                                    *
*******************************************************************************/

(function(window){
    'use strict';


    var no_all_message = false;
    var no_debug = false;
    var no_info = false;
    var no_warning = false;
    var no_error = false;
    var no_fatal = false;
    var no_message = false;


    function textSupport_FormatBackward(word, length, fill){
        var ret = '' + word;
        while(ret.length < length){ ret = fill + ret; }
        return ret;
    }


    function textSupport_FormatForward(word, length, fill){
        var ret = '' + word;
        while(ret.length < length){ ret = ret + fill; }
        return ret;
    }


    window.textSupport_getSupport = function(type = ''){
        if(!no_all_message){
            var type_text = null;
            if(!no_debug && (type === 'debug' || type === 'Debug' || type === 'DEBUG' || type === 'dbg' || type === 'Dbg' || type === 'DBG'))
                type_text = '[DBG]';
            else if(!no_info && (type === 'information' || type === 'Information' || type === 'INFORMATION' || type === 'info' || type === 'Info' || type === 'INFO'))
                type_text = '[INFO]';
            else if(!no_warning && (type === 'warning' || type === 'Warning' || type === 'WARNING' || type === 'warn' || type === 'Warn' || type === 'WARN'))
                type_text = '[WARN]';
            else if(!no_error && (type === 'error' || type === 'Error' || type === 'ERROR' || type === 'err' || type === 'Err' || type === 'ERR'))
                type_text = '[ERR]';
            else if(!no_fatal && (type === 'fatalerror' || type === 'Fatalerror' || type === 'FatalError' || type === 'FATALERROR' || type === 'fatal error' || type === 'Fatal error' || type === 'Fatal Error' || type === 'FATAL ERROR' || type === 'fatal' || type === 'Fatal' || type === 'FATAL'))
                type_text = '[FATAL]';
            else if(!no_message && (type === 'message' || type === 'Message' || type === 'MESSAGE' || type === 'msg' || type === 'Msg' || type === 'MSG'))
                type_text = '[MSG]'
            else
                return null; // If Match with disable type OR not match with anytype

            var date = new Date();
            var date_text =
                textSupport_FormatBackward(date.getFullYear(), 4, 0) + '-' +
                textSupport_FormatBackward(date.getMonth(), 2, 0) + '-' +
                textSupport_FormatBackward(date.getDay(), 2, 0) + ' ' +
                textSupport_FormatBackward(date.getHours(), 2, 0) + ':' +
                textSupport_FormatBackward(date.getMinutes(), 2, 0) + ':' +
                textSupport_FormatBackward(date.getSeconds(), 2, 0);
            return textSupport_FormatForward(type_text, 8, ' ') + date_text;
        }else{
            return null;
        }
    };


    window.textSupport_console_out = function(message, type){
        var support = textSupport_getSupport(type);
        if(support !== null) console.log(support + ' ' + message);
    };


    window.textSupport_testMessage = function(){
            textSupport_console_out('This is DEBUG message.', 'DEBUG');
            textSupport_console_out('This is INFORMATION message.', 'INFORMATION');
            textSupport_console_out('This is WARNING message.', 'WARNING');
            textSupport_console_out('This is ERROR message.', 'ERROR');
            textSupport_console_out('This is FATAL message.', 'FATAL');
            textSupport_console_out('This is MSG message.', 'MSG');
    };

})(this);
