/**
* @fileoverview This file is generated by the Angular template compiler.
* Do not edit.
* @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride}
* tslint:disable
*/ 
import * as i0 from "@angular/core";
import * as i1 from "@angular/common";
import * as i2 from "@angular/forms";
import * as i3 from "./rating";
import * as i4 from "./rating-config";
var styles_NgbRating = [];
var RenderType_NgbRating = i0.ɵcrt({ encapsulation: 2, styles: styles_NgbRating, data: {} });
export { RenderType_NgbRating as RenderType_NgbRating };
function View_NgbRating_1(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵted(0, null, ["", ""]))], null, function (_ck, _v) { var currVal_0 = ((_v.context.fill === 100) ? "\u2605" : "\u2606"); _ck(_v, 0, 0, currVal_0); }); }
function View_NgbRating_3(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵand(0, null, null, 0))], null, null); }
function View_NgbRating_2(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵeld(1, 0, null, null, 1, "span", [["class", "sr-only"]], null, null, null, null, null)), (_l()(), i0.ɵted(2, null, ["(", ")"])), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵeld(4, 0, null, null, 4, "span", [], [[4, "cursor", null]], [[null, "mouseenter"], [null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("mouseenter" === en)) {
        var pd_0 = (_co.enter((_v.context.index + 1)) !== false);
        ad = (pd_0 && ad);
    } if (("click" === en)) {
        var pd_1 = (_co.handleClick((_v.context.index + 1)) !== false);
        ad = (pd_1 && ad);
    } return ad; }, null, null)), (_l()(), i0.ɵted(-1, null, ["\n        "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbRating_3)), i0.ɵdid(7, 540672, null, 0, i1.NgTemplateOutlet, [i0.ViewContainerRef], { ngTemplateOutletContext: [0, "ngTemplateOutletContext"], ngTemplateOutlet: [1, "ngTemplateOutlet"] }, null), (_l()(), i0.ɵted(-1, null, ["\n      "])), (_l()(), i0.ɵted(-1, null, ["\n    "]))], function (_ck, _v) { var _co = _v.component; var currVal_2 = _co.contexts[_v.context.index]; var currVal_3 = (_co.starTemplate || i0.ɵnov(_v.parent, 1)); _ck(_v, 7, 0, currVal_2, currVal_3); }, function (_ck, _v) { var _co = _v.component; var currVal_0 = ((_v.context.index < _co.nextRate) ? "*" : " "); _ck(_v, 2, 0, currVal_0); var currVal_1 = ((_co.readonly || _co.disabled) ? "default" : "pointer"); _ck(_v, 4, 0, currVal_1); }); }
export function View_NgbRating_0(_l) { return i0.ɵvid(2, [(_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵand(0, [["t", 2]], null, 0, null, View_NgbRating_1)), (_l()(), i0.ɵted(-1, null, ["\n    "])), (_l()(), i0.ɵand(16777216, null, null, 1, null, View_NgbRating_2)), i0.ɵdid(4, 802816, null, 0, i1.NgForOf, [i0.ViewContainerRef, i0.TemplateRef, i0.IterableDiffers], { ngForOf: [0, "ngForOf"] }, null), (_l()(), i0.ɵted(-1, null, ["\n  "]))], function (_ck, _v) { var _co = _v.component; var currVal_0 = _co.contexts; _ck(_v, 4, 0, currVal_0); }, null); }
export function View_NgbRating_Host_0(_l) { return i0.ɵvid(0, [(_l()(), i0.ɵeld(0, 0, null, null, 3, "ngb-rating", [["aria-valuemin", "0"], ["class", "d-inline-flex"], ["role", "slider"], ["tabindex", "0"]], [[1, "aria-valuemax", 0], [1, "aria-valuenow", 0], [1, "aria-valuetext", 0], [1, "aria-disabled", 0]], [[null, "blur"], [null, "keydown"], [null, "mouseleave"]], function (_v, en, $event) { var ad = true; if (("blur" === en)) {
        var pd_0 = (i0.ɵnov(_v, 2).handleBlur() !== false);
        ad = (pd_0 && ad);
    } if (("keydown" === en)) {
        var pd_1 = (i0.ɵnov(_v, 2).handleKeyDown($event) !== false);
        ad = (pd_1 && ad);
    } if (("mouseleave" === en)) {
        var pd_2 = (i0.ɵnov(_v, 2).reset() !== false);
        ad = (pd_2 && ad);
    } return ad; }, View_NgbRating_0, RenderType_NgbRating)), i0.ɵprd(5120, null, i2.NG_VALUE_ACCESSOR, function (p0_0) { return [p0_0]; }, [i3.NgbRating]), i0.ɵdid(2, 638976, null, 1, i3.NgbRating, [i4.NgbRatingConfig, i0.ChangeDetectorRef], null, null), i0.ɵqud(335544320, 1, { starTemplate: 0 })], function (_ck, _v) { _ck(_v, 2, 0); }, function (_ck, _v) { var currVal_0 = i0.ɵnov(_v, 2).max; var currVal_1 = i0.ɵnov(_v, 2).nextRate; var currVal_2 = i0.ɵnov(_v, 2).ariaValueText(); var currVal_3 = (i0.ɵnov(_v, 2).readonly ? true : null); _ck(_v, 0, 0, currVal_0, currVal_1, currVal_2, currVal_3); }); }
var NgbRatingNgFactory = i0.ɵccf("ngb-rating", i3.NgbRating, View_NgbRating_Host_0, { max: "max", rate: "rate", readonly: "readonly", resettable: "resettable", starTemplate: "starTemplate" }, { hover: "hover", leave: "leave", rateChange: "rateChange" }, []);
export { NgbRatingNgFactory as NgbRatingNgFactory };
//# sourceMappingURL=rating.ngfactory.js.map