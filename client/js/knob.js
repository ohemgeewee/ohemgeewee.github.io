const functions = require('firebase-functions');
const express = require('express');
const app = express();
$(function ($) {
  $(".knob").knob({
    change: function (value) {
      setMasterVolume(value);
    },
    release: function (value) {
      //console.log(this.$.attr('value'));
      //console.log("release : " + value);
      setMasterVolume(value);
    },
    cancel: function () {
      console.log("cancel : ", this);
    }
  });
});
