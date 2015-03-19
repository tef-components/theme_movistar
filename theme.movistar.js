// Function that sets the CoreStyle variables
var setVars = function(){
  CoreStyle.g.color =
    "#2280a6";

  CoreStyle.g.text =
    "white";

  CoreStyle.g.border =
    "#2280a6";

  CoreStyle.g.colorHover =
    "#1e7091";

  CoreStyle.g.textHover =
    "#ffffff";

  CoreStyle.g.borderHover =
    "#1e7091";

  CoreStyle.g.colorActive =
    "#195f7c";

  CoreStyle.g.textActive =
    "#ffffff";

  CoreStyle.g.borderActive =
    "#195f7c";

  CoreStyle.g.positive =
    "#8cc238";

  CoreStyle.g.positiveText =
    "#ffffff";

  CoreStyle.g.positiveBorder =
    "#8cc238";

  CoreStyle.g.positiveHover =
    "#7eae32";

  CoreStyle.g.positiveTextHover =
    "#ffffff";

  CoreStyle.g.positiveBorderHover =
    "#7eae32";

  CoreStyle.g.positiveActive =
    "#6f9a2d";

  CoreStyle.g.positiveTextActive =
    "#ffffff";

  CoreStyle.g.positiveBorderActive =
    "#6f9a2d";

  CoreStyle.g.negative =
    "#c60606";

  CoreStyle.g.negativeText =
    "#ffffff";

  CoreStyle.g.negativeBorder =
    "#c60606";

  CoreStyle.g.negativeHover =
    "#ad0505";

  CoreStyle.g.negativeTextHover =
    "#ffffff";

  CoreStyle.g.negativeBorderHover =
    "#ad0505";

  CoreStyle.g.negativeActive =
    "#950505";

  CoreStyle.g.negativeTextActive =
    "#ffffff";

  CoreStyle.g.negativeBorderActive =
    "#950505";

  CoreStyle.g.subdued =
    "#75777b";

  CoreStyle.g.subduedText =
    "#ffffff";

  CoreStyle.g.subduedBorder =
    "#75777b";

  CoreStyle.g.subduedHover =
    "#696a6e";

  CoreStyle.g.subduedTextHover =
    "#ffffff";

  CoreStyle.g.subduedBorderHover =
    "#696a6e";

  CoreStyle.g.subduedActive =
    "#5c5e61";

  CoreStyle.g.subduedTextActive =
    "#ffffff";

  CoreStyle.g.subduedBorderActive =
    "#5c5e61";

  CoreStyle.g.significant =
    "#00c6d6";

  CoreStyle.g.significantText =
    "#ffffff";

  CoreStyle.g.significantBorder =
    "#00c6d6";

  CoreStyle.g.significantHover =
    "#00aebd";

  CoreStyle.g.significantTextHover =
    "#ffffff";

  CoreStyle.g.significantBorderHover =
    "#00aebd";

  CoreStyle.g.significantActive =
    "#0097a3";

  CoreStyle.g.significantTextActive =
    "#ffffff";

  CoreStyle.g.significantBorderActive =
    "#0097a3";

  CoreStyle.g.neutral =
    "#84959e";

  CoreStyle.g.neutralText =
    "#ffffff";

  CoreStyle.g.neutralBorder =
    "#84959e";

  CoreStyle.g.neutralHover =
    "#768993";

  CoreStyle.g.neutralTextHover =
    "#ffffff";

  CoreStyle.g.neutralBorderHover =
    "#768993";

  CoreStyle.g.neutralActive =
    "#697c86";

  CoreStyle.g.neutralTextActive =
    "#ffffff";

  CoreStyle.g.neutralBorderActive =
    "#697c86";

  CoreStyle.g.grey1 =
    "#f2f2f2";

  CoreStyle.g.grey2 =
    "#cfcece";

  CoreStyle.g.grey3 =
    "#b3b5b7";

  CoreStyle.g.grey4 =
    "#aeadad";

  CoreStyle.g.grey5 =
    "#686868";

  CoreStyle.g.grey6 =
    "#31313d";

  CoreStyle.g.widthXS =
    "480px";

  CoreStyle.g.widthSM =
    "768px";

  CoreStyle.g.widthMD =
    "992px";

  CoreStyle.g.widthLG =
    "1200px";

  CoreStyle.g.widthXL =
    "1400px";

  CoreStyle.g.widthMin =
    "320px";

  CoreStyle.g.widthMaxSM =
    "728px";

  CoreStyle.g.widthMaxMD =
    "952px";

  CoreStyle.g.widthMaxLG =
    "1160px";

  CoreStyle.g.widthMaxXL =
    "1360px";

  CoreStyle.g.gutter =
    "1.6%";

  CoreStyle.g.columnGutter =
    "0.8%";


}

if (typeof CoreStyle === 'undefined'){
  // If core-style has not been loaded we set setVars()
  // to execute when polymer is ready
  window.addEventListener('polymer-ready', setVars);
} else {
  // If core-style has already been loaded we execute setVars()
  setVars();
}
