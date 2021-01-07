/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    PKIFreeText,
    _decode_PKIFreeText,
    _encode_PKIFreeText,
} from "../PKIXCMP/PKIFreeText.ta";
import {
    PKIFailureInfo,
    _decode_PKIFailureInfo,
    _encode_PKIFailureInfo,
} from "../PKIXTSP/PKIFailureInfo.ta";
import {
    PKIStatus,
    _decode_PKIStatus,
    _encode_PKIStatus,
} from "../PKIXTSP/PKIStatus.ta";
export {
    PKIFreeText,
    _decode_PKIFreeText,
    _encode_PKIFreeText,
} from "../PKIXCMP/PKIFreeText.ta";
export {
    addInfoNotAvailable /* IMPORTED_SHORT_NAMED_BIT */,
    badAlg /* IMPORTED_SHORT_NAMED_BIT */,
    badDataFormat /* IMPORTED_SHORT_NAMED_BIT */,
    badRequest /* IMPORTED_SHORT_NAMED_BIT */,
    PKIFailureInfo,
    PKIFailureInfo_addInfoNotAvailable /* IMPORTED_LONG_NAMED_BIT */,
    PKIFailureInfo_badAlg /* IMPORTED_LONG_NAMED_BIT */,
    PKIFailureInfo_badDataFormat /* IMPORTED_LONG_NAMED_BIT */,
    PKIFailureInfo_badRequest /* IMPORTED_LONG_NAMED_BIT */,
    PKIFailureInfo_systemFailure /* IMPORTED_LONG_NAMED_BIT */,
    PKIFailureInfo_timeNotAvailable /* IMPORTED_LONG_NAMED_BIT */,
    PKIFailureInfo_unacceptedExtension /* IMPORTED_LONG_NAMED_BIT */,
    PKIFailureInfo_unacceptedPolicy /* IMPORTED_LONG_NAMED_BIT */,
    systemFailure /* IMPORTED_SHORT_NAMED_BIT */,
    timeNotAvailable /* IMPORTED_SHORT_NAMED_BIT */,
    unacceptedExtension /* IMPORTED_SHORT_NAMED_BIT */,
    unacceptedPolicy /* IMPORTED_SHORT_NAMED_BIT */,
    _decode_PKIFailureInfo,
    _encode_PKIFailureInfo,
} from "../PKIXTSP/PKIFailureInfo.ta";
export {
    granted /* IMPORTED_SHORT_NAMED_INTEGER */,
    grantedWithMods /* IMPORTED_SHORT_NAMED_INTEGER */,
    PKIStatus,
    PKIStatus_granted /* IMPORTED_LONG_NAMED_INTEGER */,
    PKIStatus_grantedWithMods /* IMPORTED_LONG_NAMED_INTEGER */,
    PKIStatus_rejection /* IMPORTED_LONG_NAMED_INTEGER */,
    PKIStatus_revocationNotification /* IMPORTED_LONG_NAMED_INTEGER */,
    PKIStatus_revocationWarning /* IMPORTED_LONG_NAMED_INTEGER */,
    PKIStatus_waiting /* IMPORTED_LONG_NAMED_INTEGER */,
    rejection /* IMPORTED_SHORT_NAMED_INTEGER */,
    revocationNotification /* IMPORTED_SHORT_NAMED_INTEGER */,
    revocationWarning /* IMPORTED_SHORT_NAMED_INTEGER */,
    waiting /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_PKIStatus,
    _encode_PKIStatus,
} from "../PKIXTSP/PKIStatus.ta";

/* START_OF_SYMBOL_DEFINITION PKIStatusInfo */
/**
 * @summary PKIStatusInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PKIStatusInfo ::= SEQUENCE {
 *     status        PKIStatus,
 *     statusString  PKIFreeText     OPTIONAL,
 *     failInfo      PKIFailureInfo  OPTIONAL  }
 * ```
 *
 * @class
 */
export class PKIStatusInfo {
    constructor(
        /**
         * @summary `status`.
         * @public
         * @readonly
         */
        readonly status: PKIStatus,
        /**
         * @summary `statusString`.
         * @public
         * @readonly
         */
        readonly statusString: OPTIONAL<PKIFreeText>,
        /**
         * @summary `failInfo`.
         * @public
         * @readonly
         */
        readonly failInfo: OPTIONAL<PKIFailureInfo>
    ) {}

    /**
     * @summary Restructures an object into a PKIStatusInfo
     * @description
     *
     * This takes an `object` and converts it to a `PKIStatusInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `PKIStatusInfo`.
     * @returns {PKIStatusInfo}
     */
    public static _from_object(
        _o: { [_K in keyof PKIStatusInfo]: PKIStatusInfo[_K] },
    ): PKIStatusInfo {
        return new PKIStatusInfo(_o.status, _o.statusString, _o.failInfo);
    }
}
/* END_OF_SYMBOL_DEFINITION PKIStatusInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PKIStatusInfo */
/**
 * @summary The Leading Root Component Types of PKIStatusInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_PKIStatusInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "status",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "statusString",
        true,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "failInfo",
        true,
        $.hasTag(_TagClass.universal, 3),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_PKIStatusInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PKIStatusInfo */
/**
 * @summary The Trailing Root Component Types of PKIStatusInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_PKIStatusInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_PKIStatusInfo */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PKIStatusInfo */
/**
 * @summary The Extension Addition Component Types of PKIStatusInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_PKIStatusInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_PKIStatusInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PKIStatusInfo */
let _cached_decoder_for_PKIStatusInfo: $.ASN1Decoder<PKIStatusInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PKIStatusInfo */

/* START_OF_SYMBOL_DEFINITION _decode_PKIStatusInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) PKIStatusInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PKIStatusInfo} The decoded data structure.
 */
export function _decode_PKIStatusInfo(el: _Element) {
    if (!_cached_decoder_for_PKIStatusInfo) {
        _cached_decoder_for_PKIStatusInfo = function (
            el: _Element
        ): PKIStatusInfo {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let status!: PKIStatus;
            let statusString: OPTIONAL<PKIFreeText>;
            let failInfo: OPTIONAL<PKIFailureInfo>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                status: (_el: _Element): void => {
                    status = _decode_PKIStatus(_el);
                },
                statusString: (_el: _Element): void => {
                    statusString = _decode_PKIFreeText(_el);
                },
                failInfo: (_el: _Element): void => {
                    failInfo = _decode_PKIFailureInfo(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PKIStatusInfo,
                _extension_additions_list_spec_for_PKIStatusInfo,
                _root_component_type_list_2_spec_for_PKIStatusInfo,
                undefined
            );
            return new PKIStatusInfo(
                /* SEQUENCE_CONSTRUCTOR_CALL */ status,
                statusString,
                failInfo
            );
        };
    }
    return _cached_decoder_for_PKIStatusInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PKIStatusInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PKIStatusInfo */
let _cached_encoder_for_PKIStatusInfo: $.ASN1Encoder<PKIStatusInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PKIStatusInfo */

/* START_OF_SYMBOL_DEFINITION _encode_PKIStatusInfo */
/**
 * @summary Encodes a(n) PKIStatusInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PKIStatusInfo, encoded as an ASN.1 Element.
 */
export function _encode_PKIStatusInfo(
    value: PKIStatusInfo,
    elGetter: $.ASN1Encoder<PKIStatusInfo>
) {
    if (!_cached_encoder_for_PKIStatusInfo) {
        _cached_encoder_for_PKIStatusInfo = function (
            value: PKIStatusInfo,
            elGetter: $.ASN1Encoder<PKIStatusInfo>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_PKIStatus(value.status, $.BER),
                        /* IF_ABSENT  */ value.statusString === undefined
                            ? undefined
                            : _encode_PKIFreeText(value.statusString, $.BER),
                        /* IF_ABSENT  */ value.failInfo === undefined
                            ? undefined
                            : _encode_PKIFailureInfo(value.failInfo, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_PKIStatusInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PKIStatusInfo */

/* eslint-enable */
