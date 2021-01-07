/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN,
    GeneralizedTime,
    OCTET_STRING,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    Extensions,
    _decode_Extensions,
    _encode_Extensions,
} from "x500-ts/dist/node/modules/AuthenticationFramework/Extensions.ta";
import {
    GeneralName,
    _decode_GeneralName,
    _encode_GeneralName,
} from "x500-ts/dist/node/modules/CertificateExtensions/GeneralName.ta";
import {
    Accuracy,
    _decode_Accuracy,
    _encode_Accuracy,
} from "../PKIXTSP/Accuracy.ta";
import {
    MessageImprint,
    _decode_MessageImprint,
    _encode_MessageImprint,
} from "../PKIXTSP/MessageImprint.ta";
import {
    TSAPolicyId,
    _decode_TSAPolicyId,
    _encode_TSAPolicyId,
} from "../PKIXTSP/TSAPolicyId.ta";
import {
    TSTInfo_version,
    _decode_TSTInfo_version,
    _encode_TSTInfo_version,
} from "../PKIXTSP/TSTInfo-version.ta";
export {
    Extensions,
    _decode_Extensions,
    _encode_Extensions,
} from "x500-ts/dist/node/modules/AuthenticationFramework/Extensions.ta";
export {
    GeneralName,
    _decode_GeneralName,
    _encode_GeneralName,
} from "x500-ts/dist/node/modules/CertificateExtensions/GeneralName.ta";
export {
    Accuracy,
    _decode_Accuracy,
    _encode_Accuracy,
} from "../PKIXTSP/Accuracy.ta";
export {
    MessageImprint,
    _decode_MessageImprint,
    _encode_MessageImprint,
} from "../PKIXTSP/MessageImprint.ta";
export {
    TSAPolicyId,
    _decode_TSAPolicyId,
    _encode_TSAPolicyId,
} from "../PKIXTSP/TSAPolicyId.ta";
export {
    TSTInfo_version,
    TSTInfo_version_v1 /* IMPORTED_LONG_NAMED_INTEGER */,
    v1 /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_TSTInfo_version,
    _encode_TSTInfo_version,
} from "../PKIXTSP/TSTInfo-version.ta";

/* START_OF_SYMBOL_DEFINITION TSTInfo */
/**
 * @summary TSTInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TSTInfo ::= SEQUENCE  {
 *     version                      INTEGER  { v1(1) },
 *     policy                       TSAPolicyId,
 *     messageImprint               MessageImprint,
 *     -- MUST have the same value as the similar field in
 *     -- TimeStampReq
 *     serialNumber                 INTEGER,
 *     -- Time-Stamping users MUST be ready to accommodate integers
 *     -- up to 160 bits.
 *     genTime                      GeneralizedTime,
 *     accuracy                     Accuracy                 OPTIONAL,
 *     ordering                     BOOLEAN             DEFAULT FALSE,
 *     nonce                        INTEGER                  OPTIONAL,
 *     -- MUST be present if the similar field was present
 *     -- in TimeStampReq.  In that case it MUST have the same value.
 *     tsa                          [0] GeneralName          OPTIONAL,
 *     extensions                   [1] IMPLICIT Extensions  OPTIONAL   }
 * ```
 *
 * @class
 */
export class TSTInfo {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: TSTInfo_version,
        /**
         * @summary `policy`.
         * @public
         * @readonly
         */
        readonly policy: TSAPolicyId,
        /**
         * @summary `messageImprint`.
         * @public
         * @readonly
         */
        readonly messageImprint: MessageImprint,
        /**
         * @summary `serialNumber`.
         * @public
         * @readonly
         */
        readonly serialNumber: OCTET_STRING,
        /**
         * @summary `genTime`.
         * @public
         * @readonly
         */
        readonly genTime: GeneralizedTime,
        /**
         * @summary `accuracy`.
         * @public
         * @readonly
         */
        readonly accuracy: OPTIONAL<Accuracy>,
        /**
         * @summary `ordering`.
         * @public
         * @readonly
         */
        readonly ordering: OPTIONAL<BOOLEAN>,
        /**
         * @summary `nonce`.
         * @public
         * @readonly
         */
        readonly nonce: OPTIONAL<OCTET_STRING>,
        /**
         * @summary `tsa`.
         * @public
         * @readonly
         */
        readonly tsa: OPTIONAL<GeneralName>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<Extensions>
    ) {}

    /**
     * @summary Restructures an object into a TSTInfo
     * @description
     *
     * This takes an `object` and converts it to a `TSTInfo`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TSTInfo`.
     * @returns {TSTInfo}
     */
    public static _from_object(
        _o: { [_K in keyof TSTInfo]: TSTInfo[_K] }
    ): TSTInfo {
        return new TSTInfo(
            _o.version,
            _o.policy,
            _o.messageImprint,
            _o.serialNumber,
            _o.genTime,
            _o.accuracy,
            _o.ordering,
            _o.nonce,
            _o.tsa,
            _o.extensions
        );
    }

    /**
     * @summary Getter that returns the default value for `ordering`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_ordering() {
        return false;
    }
}
/* END_OF_SYMBOL_DEFINITION TSTInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TSTInfo */
/**
 * @summary The Leading Root Component Types of TSTInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TSTInfo: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "policy",
        false,
        $.hasTag(_TagClass.universal, 6),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "messageImprint",
        false,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "serialNumber",
        false,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "genTime",
        false,
        $.hasTag(_TagClass.universal, 24),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "accuracy",
        true,
        $.hasTag(_TagClass.universal, 16),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "ordering",
        true,
        $.hasTag(_TagClass.universal, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "nonce",
        true,
        $.hasTag(_TagClass.universal, 2),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "tsa",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "extensions",
        true,
        $.hasTag(_TagClass.context, 1),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TSTInfo */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TSTInfo */
/**
 * @summary The Trailing Root Component Types of TSTInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TSTInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TSTInfo */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TSTInfo */
/**
 * @summary The Extension Addition Component Types of TSTInfo
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TSTInfo: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TSTInfo */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TSTInfo */
let _cached_decoder_for_TSTInfo: $.ASN1Decoder<TSTInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TSTInfo */

/* START_OF_SYMBOL_DEFINITION _decode_TSTInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) TSTInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TSTInfo} The decoded data structure.
 */
export function _decode_TSTInfo(el: _Element) {
    if (!_cached_decoder_for_TSTInfo) {
        _cached_decoder_for_TSTInfo = function (el: _Element): TSTInfo {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version!: TSTInfo_version;
            let policy!: TSAPolicyId;
            let messageImprint!: MessageImprint;
            let serialNumber!: OCTET_STRING;
            let genTime!: GeneralizedTime;
            let accuracy: OPTIONAL<Accuracy>;
            let ordering: OPTIONAL<BOOLEAN> =
                TSTInfo._default_value_for_ordering;
            let nonce: OPTIONAL<OCTET_STRING>;
            let tsa: OPTIONAL<GeneralName>;
            let extensions: OPTIONAL<Extensions>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_TSTInfo_version(_el);
                },
                policy: (_el: _Element): void => {
                    policy = _decode_TSAPolicyId(_el);
                },
                messageImprint: (_el: _Element): void => {
                    messageImprint = _decode_MessageImprint(_el);
                },
                serialNumber: (_el: _Element): void => {
                    serialNumber = $._decodeBigInt(_el);
                },
                genTime: (_el: _Element): void => {
                    genTime = $._decodeGeneralizedTime(_el);
                },
                accuracy: (_el: _Element): void => {
                    accuracy = _decode_Accuracy(_el);
                },
                ordering: (_el: _Element): void => {
                    ordering = $._decodeBoolean(_el);
                },
                nonce: (_el: _Element): void => {
                    nonce = $._decodeBigInt(_el);
                },
                tsa: (_el: _Element): void => {
                    tsa = $._decode_explicit<GeneralName>(
                        () => _decode_GeneralName
                    )(_el);
                },
                extensions: (_el: _Element): void => {
                    extensions = $._decode_implicit<Extensions>(
                        () => _decode_Extensions
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            $._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TSTInfo,
                _extension_additions_list_spec_for_TSTInfo,
                _root_component_type_list_2_spec_for_TSTInfo,
                undefined
            );
            return new TSTInfo(
                /* SEQUENCE_CONSTRUCTOR_CALL */ version,
                policy,
                messageImprint,
                serialNumber,
                genTime,
                accuracy,
                ordering,
                nonce,
                tsa,
                extensions
            );
        };
    }
    return _cached_decoder_for_TSTInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TSTInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TSTInfo */
let _cached_encoder_for_TSTInfo: $.ASN1Encoder<TSTInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TSTInfo */

/* START_OF_SYMBOL_DEFINITION _encode_TSTInfo */
/**
 * @summary Encodes a(n) TSTInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TSTInfo, encoded as an ASN.1 Element.
 */
export function _encode_TSTInfo(
    value: TSTInfo,
    elGetter: $.ASN1Encoder<TSTInfo>
) {
    if (!_cached_encoder_for_TSTInfo) {
        _cached_encoder_for_TSTInfo = function (
            value: TSTInfo,
            elGetter: $.ASN1Encoder<TSTInfo>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_TSTInfo_version(
                            value.version,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_TSAPolicyId(
                            value.policy,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_MessageImprint(
                            value.messageImprint,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeBigInt(
                            value.serialNumber,
                            $.BER
                        ),
                        /* REQUIRED   */ $._encodeGeneralizedTime(
                            value.genTime,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.accuracy === undefined
                            ? undefined
                            : _encode_Accuracy(value.accuracy, $.BER),
                        /* IF_DEFAULT */ value.ordering === undefined ||
                        $.deepEq(
                            value.ordering,
                            TSTInfo._default_value_for_ordering
                        )
                            ? undefined
                            : $._encodeBoolean(value.ordering, $.BER),
                        /* IF_ABSENT  */ value.nonce === undefined
                            ? undefined
                            : $._encodeBigInt(value.nonce, $.BER),
                        /* IF_ABSENT  */ value.tsa === undefined
                            ? undefined
                            : $._encode_explicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_GeneralName,
                                  $.BER
                              )(value.tsa, $.BER),
                        /* IF_ABSENT  */ value.extensions === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  1,
                                  () => _encode_Extensions,
                                  $.BER
                              )(value.extensions, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_TSTInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TSTInfo */

/* eslint-enable */
