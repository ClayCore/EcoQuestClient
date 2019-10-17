import React from 'react';
import ReactDOM from 'react-dom';
import App, { isMobile, isSubpage } from './App';
//import registerServerWorker from './registerServerWorker.js';

(function() {
    // Global constants
    // ================
    const master_style = 'css/master.css';
    const loader_style = 'css/loader.css';
    const master_mobile_style = 'css/mobile/master.css';
    const loader_mobile_style = 'css/mobile/loader.css';

    // Utility functions
    // TODO: replace with proper libraries
    // ===================================

    // For addressing a single element
    function $(what) {
        return document.querySelector(what);
    }

    // For addressing multiple elements
    function _(what) {
        return document.querySelectorAll(what);
    }

    // Loads a file as an httprequest
    function LoadFile(path) {
        let xmlhttp = new XMLHttpRequest();
        xmlhttp.onreadystatechange = function() {
            // Okay and ready to be downloaded and returned
            if (this.readyState === 4 && this.status === 200) {
                return this.responseText;
            }
        };
    }

    // Used for dyanmic page load times
    function OnReady(callback) {
        let interval_id = window.setInterval(function() {
            if ($('body') !== undefined) {
                window.clearInterval(interval_id);
                callback.call(this);
            }
        }, 1000);
    }

    // For dynamic style switching
    function LinkStyle(style) {
        // Create a new element we will use to link the stylesheet with
        let link = document.createElement('link');

        // Set link parameters
        link.type = 'text/css';
        link.rel = 'stylesheet';
        link.href = style;

        // Add it to the <head> section of the document
        document.head.appendChild(link);
    }

    // Main initialization of the application
    // ======================================

    function Init() {
        // Wait for DOM to finish loading
        document.addEventListener('DOMContentLoaded', function() {
            let sub_root = '../'.repeat(2);
            let main_root = '../'.repeat(1);

            // Mobile or not
            if (!isMobile()) {
                if (isSubpage()) {
                    // subpage
                    LinkStyle(sub_root + master_style);
                    LinkStyle(sub_root + loader_style);
                } else {
                    // index.html
                    LinkStyle(main_root + master_style);
                    LinkStyle(main_root + loader_style);

                    // Add the loader only to the main page
                    OnReady(function() {
                        $('body').classList.add('loaded');
                        $('body').classList.add('changed');
                    });
                }
            } else {
                if (isSubpage()) {
                    // subpage, mobile
                    LinkStyle(sub_root + master_mobile_style);
                    LinkStyle(sub_root + loader_mobile_style);
                } else if (isMobile()) {
                    // main page, mobile
                    LinkStyle(main_root + master_mobile_style);
                    LinkStyle(main_root + loader_mobile_style);

                    // Add the loader only to the main page
                    OnReady(function() {
                        $('body').classList.add('loaded');
                        $('body').classList.add('changed');
                    });
                }
            }

            // Render the app
            ReactDOM.render(<App />, $('#root'));
            //registerServerWorker();
        });
    }

    Init();
})();
