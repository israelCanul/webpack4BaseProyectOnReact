export function initFrame() {
  window.nRoyal = {
    CheckUserOnCookies: () => {
      if (window.nRoyal.getCookieForm("UserSession") != "") {
        return true;
      } else {
        return false;
      }
    },
    getCookieForm: cname => {
      var name = cname + "=";
      var decodedCookie = decodeURIComponent(document.cookie);
      var ca = decodedCookie.split(";");
      for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") {
          c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
          return c.substring(name.length, c.length);
        }
      }
      return "";
    },
    setCookieForm: (cname, cvalue) => {
      var d = new Date();
      d.setTime(d.getTime() + 10 * 60 * 1000);
      var expires = "expires=" + d.toUTCString();
      document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
    },
    toggleClass: (obj, clase) => {
      let classExist = false;
      let listClass = [];

      Object.keys(obj.classList).map(id => {
        if (obj.classList[id] == clase) {
          classExist = true;
        } else {
          listClass.push(obj.classList[id]);
        }
      });
      if (classExist == false) {
        listClass.push(clase + " ");
      }
      let textClass = "";
      Object.keys(listClass).map(id => {
        textClass += " " + listClass[id];
      });
      obj.className = textClass;
    },
    checkClass: (obj, clase) => {
      let classExist = false;
      Object.keys(obj.classList).map(id => {
        if (obj.classList[id] == clase) {
          classExist = true;
        }
      });
      return classExist;
    },
    addClass: (obj, clase) => {
      let classExist = false;
      let listClass = [];
      Object.keys(obj.classList).map(id => {
        listClass.push(obj.classList[id]);
      });
      listClass.push(clase + " ");
      let textClass = "";
      Object.keys(listClass).map(id => {
        textClass += " " + listClass[id];
      });
      obj.className = textClass;
    },
    removeClass: (obj, clase) => {
      let classExist = false;
      let listClass = [];
      Object.keys(obj.classList).map(id => {
        if (obj.classList[id] != clase) {
          listClass.push(obj.classList[id]);
        }
      });
      let textClass = "";
      Object.keys(listClass).map(id => {
        textClass += " " + listClass[id];
      });
      obj.className = textClass;
    }
  };
}
