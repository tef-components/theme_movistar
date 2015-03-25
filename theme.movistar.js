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
    "white";

  CoreStyle.g.borderHover =
    "#1e7091";

  CoreStyle.g.colorActive =
    "#195f7c";

  CoreStyle.g.textActive =
    "white";

  CoreStyle.g.borderActive =
    "#195f7c";

  CoreStyle.g.positive =
    "#8cc238";

  CoreStyle.g.positiveText =
    "white";

  CoreStyle.g.positiveBorder =
    "#8cc238";

  CoreStyle.g.positiveHover =
    "#7eae32";

  CoreStyle.g.positiveTextHover =
    "white";

  CoreStyle.g.positiveBorderHover =
    "#7eae32";

  CoreStyle.g.positiveActive =
    "#6f9a2d";

  CoreStyle.g.positiveTextActive =
    "white";

  CoreStyle.g.positiveBorderActive =
    "#6f9a2d";

  CoreStyle.g.negative =
    "#c60606";

  CoreStyle.g.negativeText =
    "white";

  CoreStyle.g.negativeBorder =
    "#c60606";

  CoreStyle.g.negativeHover =
    "#ad0505";

  CoreStyle.g.negativeTextHover =
    "white";

  CoreStyle.g.negativeBorderHover =
    "#ad0505";

  CoreStyle.g.negativeActive =
    "#950505";

  CoreStyle.g.negativeTextActive =
    "white";

  CoreStyle.g.negativeBorderActive =
    "#950505";

  CoreStyle.g.subdued =
    "#75777b";

  CoreStyle.g.subduedText =
    "white";

  CoreStyle.g.subduedBorder =
    "#75777b";

  CoreStyle.g.subduedHover =
    "#696a6e";

  CoreStyle.g.subduedTextHover =
    "white";

  CoreStyle.g.subduedBorderHover =
    "#696a6e";

  CoreStyle.g.subduedActive =
    "#5c5e61";

  CoreStyle.g.subduedTextActive =
    "white";

  CoreStyle.g.subduedBorderActive =
    "#5c5e61";

  CoreStyle.g.significant =
    "#00c6d6";

  CoreStyle.g.significantText =
    "white";

  CoreStyle.g.significantBorder =
    "#00c6d6";

  CoreStyle.g.significantHover =
    "#00aebd";

  CoreStyle.g.significantTextHover =
    "white";

  CoreStyle.g.significantBorderHover =
    "#00aebd";

  CoreStyle.g.significantActive =
    "#0097a3";

  CoreStyle.g.significantTextActive =
    "white";

  CoreStyle.g.significantBorderActive =
    "#0097a3";

  CoreStyle.g.neutral =
    "#84959e";

  CoreStyle.g.neutralText =
    "white";

  CoreStyle.g.neutralBorder =
    "#84959e";

  CoreStyle.g.neutralHover =
    "#768993";

  CoreStyle.g.neutralTextHover =
    "white";

  CoreStyle.g.neutralBorderHover =
    "#768993";

  CoreStyle.g.neutralActive =
    "#697c86";

  CoreStyle.g.neutralTextActive =
    "white";

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

  CoreStyle.g.headerNav =
    "#00344e";

  CoreStyle.g.headerText =
    "white";

  CoreStyle.g.headerIcon =
    "#6e8e9d";

  CoreStyle.g.headerReverse =
    "#00344e";

  CoreStyle.g.shadow =
    "0 2px 6px rgba(0, 0, 0, 0.3)";

  CoreStyle.g.widthXS =
    "480px";

  CoreStyle.g.widthSM =
    "768px";

  CoreStyle.g.widthMD =
    "992px";

  CoreStyle.g.widthLG =
    "1167px";

  CoreStyle.g.widthMin =
    "320px";

  CoreStyle.g.widthMax =
    "1167px";

  CoreStyle.g.gutter =
    "32px";

  CoreStyle.g.columnGutter =
    "16px";


}

if (typeof CoreStyle === 'undefined'){
  // If core-style has not been loaded we set setVars()
  // to execute when polymer is ready
  window.addEventListener('polymer-ready', setVars);
} else {
  // If core-style has already been loaded we execute setVars()
  setVars();
}
