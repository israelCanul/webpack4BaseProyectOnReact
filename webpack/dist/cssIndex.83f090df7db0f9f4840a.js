(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{82:function(n,o,e){(n.exports=e(35)(!1)).push([n.i,"/*** COLORS **/\n.header {\n  height: 52px; }\n  .header .navbar-item {\n    padding-top: 0px;\n    padding-bottom: 0px; }\n  .header-wrap {\n    position: relative;\n    height: 52px;\n    width: 100%; }\n    .header-wrap-icon {\n      width: 50px;\n      float: left;\n      transition: transform 0.3s ease-in-out, width 0.3s ease-in-out;\n      display: block;\n      overflow: hidden;\n      display: none;\n      position: relative; }\n      @media only screen and (min-width: 1088px) {\n        .header-wrap-icon {\n          display: block; } }\n      .header-wrap-icon a {\n        display: block;\n        height: 52px; }\n        .header-wrap-icon a span {\n          font-size: 1.3rem;\n          color: #464646;\n          background: #fafafa;\n          box-sizing: border-box; }\n          .header-wrap-icon a span.icon-small {\n            display: block;\n            line-height: 52px;\n            text-align: center; }\n          .header-wrap-icon a span.icon-large {\n            display: none;\n            line-height: 52px;\n            text-align: center; }\n        .header-wrap-icon a.navbar-burger {\n          z-index: 10;\n          position: absolute;\n          top: 0px;\n          right: 0;\n          background: #fafafa; }\n          .header-wrap-icon a.navbar-burger span {\n            background-color: #464646; }\n    .header-wrap-container .navbar {\n      box-shadow: 1px 1px 1px -1px gainsboro; }\n    .header-wrap-container .navbar-item.userInfo .buttons {\n      margin: 0px; }\n      .header-wrap-container .navbar-item.userInfo .buttons .button {\n        margin-bottom: 0px; }\n    .header-wrap-container .navbar-item.userInfo figure {\n      cursor: pointer; }\n    .header-wrap-container .navbar-item.userInfo .card-user {\n      position: absolute;\n      right: calc(0% + 10px);\n      width: 300px;\n      max-width: 300px;\n      top: 100%;\n      overflow: hidden;\n      border-color: transparent;\n      transition: all 0.3s ease-out; }\n      .header-wrap-container .navbar-item.userInfo .card-user.noActive {\n        height: 0px !important;\n        box-shadow: none; }\n\nbody.sidebar-open .header {\n  height: 52px; }\n  body.sidebar-open .header-wrap {\n    position: relative;\n    height: 52px;\n    width: 100%; }\n    body.sidebar-open .header-wrap-icon {\n      width: 300px; }\n      body.sidebar-open .header-wrap-icon a span.icon-small {\n        display: none; }\n      body.sidebar-open .header-wrap-icon a span.icon-large {\n        display: block; }\n\n#root footer.footer {\n  transition: all 0.3s ease-in-out;\n  width: calc(100%);\n  z-index: 1000;\n  padding: 1rem 1.5rem; }\n  @media only screen and (min-width: 1088px) {\n    #root footer.footer {\n      padding: 1rem 1.5rem;\n      width: calc(100% - 50px);\n      margin-left: 50px; } }\n\nbody.sidebar-open #root footer.footer {\n  width: calc(100%);\n  transform: translate(300px, 0); }\n  @media only screen and (min-width: 1088px) {\n    body.sidebar-open #root footer.footer {\n      width: calc(100%);\n      margin-left: 0px; } }\n\n.appContent {\n  width: 100%;\n  transition: transform 0.3s ease-in-out, width 0.3s ease-in-out;\n  background-color: #e6e6e6;\n  position: relative;\n  overflow: auto; }\n  @media only screen and (min-width: 1088px) {\n    .appContent {\n      width: calc(100% - 50px);\n      transform: translate(50px, 0); } }\n  .appContent .dashboard {\n    position: absolute;\n    width: 100%;\n    height: 100%; }\n    .appContent .dashboard .panelWrappers {\n      position: absolute;\n      width: 100%;\n      height: 100%;\n      overflow-y: scroll; }\n\nbody.sidebar-open .appContent {\n  transform: translate(300px, 0); }\n\n.Dashboard-Default {\n  max-width: 300px;\n  width: 300px;\n  height: 300px;\n  background-color: white;\n  margin-right: 5px;\n  margin-bottom: 5px;\n  margin-top: 5px;\n  margin-left: 5px;\n  box-sizing: border-box;\n  float: left; }\n  .Dashboard-Default:hover {\n    cursor: pointer; }\n  .Dashboard-Default .panel-block {\n    height: 300px; }\n  @media only screen and (max-width: 769px) {\n    .Dashboard-Default {\n      margin-left: calc(50% - (300px / 2)); } }\n\n#formAdmin .preview {\n  position: relative; }\n  #formAdmin .preview .wrapper-preview {\n    position: absolute;\n    top: 0px;\n    width: 100%;\n    background-color: white;\n    z-index: 10;\n    left: 0;\n    height: 0px;\n    overflow: hidden; }\n    #formAdmin .preview .wrapper-preview.active {\n      height: auto; }\n\n#formAdmin .columns {\n  width: 100%; }\n\n@media only screen and (max-width: 769px) {\n  #formAdmin .section {\n    padding: 0px; } }\n\n@media only screen and (max-width: 769px) {\n  #formAdmin .section .panel-block {\n    padding: 1px; } }\n\n#formAdmin .section .panel-block.submit {\n  justify-content: center; }\n  @media only screen and (max-width: 769px) {\n    #formAdmin .section .panel-block.submit {\n      padding: 5px 1px; } }\n\n#formAdmin .section .card-content {\n  margin: 10px 5px 15px 5px;\n  padding: 10px 3px 10px 3px; }\n\n#formAdmin .formConfiguration .columns {\n  margin: 0.2rem !important; }\n  @media only screen and (max-width: 769px) {\n    #formAdmin .formConfiguration .columns {\n      margin: 0rem !important;\n      padding: 2px 0.5rem; } }\n  @media only screen and (max-width: 769px) {\n    #formAdmin .formConfiguration .columns .column {\n      padding: 0.25rem !important; } }\n\n#formAdmin .form-content {\n  width: 100%;\n  display: flex;\n  align-items: center; }\n  @media only screen and (max-width: 769px) {\n    #formAdmin .form-content {\n      padding: 0px !important; } }\n  #formAdmin .form-content .columns {\n    width: 100%;\n    margin: 0px !important; }\n    @media only screen and (max-width: 769px) {\n      #formAdmin .form-content .columns {\n        padding: 0px !important; } }\n    @media only screen and (max-width: 769px) {\n      #formAdmin .form-content .columns .column {\n        padding: 0px !important; } }\n    @media only screen and (max-width: 769px) {\n      #formAdmin .form-content .columns .column.buttonInputs {\n        padding: 5px !important; } }\n  #formAdmin .form-content .itemsForm.container {\n    max-width: 100%;\n    width: 100% !important;\n    /** ITEMS */ }\n    @media only screen and (max-width: 769px) {\n      #formAdmin .form-content .itemsForm.container {\n        padding: 0px !important; } }\n    #formAdmin .form-content .itemsForm.container .itemForm.card .card-header {\n      justify-content: flex-end; }\n      #formAdmin .form-content .itemsForm.container .itemForm.card .card-header-title {\n        padding: 0.25rem 0.75rem; }\n      #formAdmin .form-content .itemsForm.container .itemForm.card .card-header-icon {\n        padding: 0.25rem; }\n    #formAdmin .form-content .itemsForm.container .itemForm {\n      width: 100%; }\n      @media only screen and (max-width: 769px) {\n        #formAdmin .form-content .itemsForm.container .itemForm {\n          padding: 0px !important; } }\n      #formAdmin .form-content .itemsForm.container .itemForm-content {\n        display: flex;\n        flex-direction: row;\n        justify-content: center;\n        align-items: center;\n        flex-wrap: wrap; }\n        @media only screen and (max-width: 769px) {\n          #formAdmin .form-content .itemsForm.container .itemForm-content {\n            padding: 0px !important; } }\n        #formAdmin .form-content .itemsForm.container .itemForm-content-field {\n          width: 50%;\n          min-width: 280px; }\n          @media only screen and (max-width: 769px) {\n            #formAdmin .form-content .itemsForm.container .itemForm-content-field {\n              padding: 0px !important; } }\n      #formAdmin .form-content .itemsForm.container .itemForm.SelectControl .options-section {\n        width: 100%;\n        margin: 0px;\n        padding: 1px; }\n        @media only screen and (max-width: 769px) {\n          #formAdmin .form-content .itemsForm.container .itemForm.SelectControl .options-section {\n            border: 1px solid rgba(200, 200, 200, 0.4); } }\n        @media only screen and (min-width: 769px) {\n          #formAdmin .form-content .itemsForm.container .itemForm.SelectControl .options-section {\n            margin: 10px 5px;\n            padding: 5px; } }\n        @media only screen and (min-width: 769px) {\n          #formAdmin .form-content .itemsForm.container .itemForm.SelectControl .options-section-content {\n            border: 1px solid rgba(200, 200, 200, 0.4); } }\n        #formAdmin .form-content .itemsForm.container .itemForm.SelectControl .options-section-header {\n          margin: 0px; }\n          @media only screen and (max-width: 769px) {\n            #formAdmin .form-content .itemsForm.container .itemForm.SelectControl .options-section-header .level-left + .level-right {\n              margin-top: 0.25rem; } }\n\n.first-row {\n  margin-bottom: 5px; }\n",""])},94:function(n,o,e){var t=e(82);"string"==typeof t&&(t=[[n.i,t,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};e(36)(t,i);t.locals&&(n.exports=t.locals)}}]);