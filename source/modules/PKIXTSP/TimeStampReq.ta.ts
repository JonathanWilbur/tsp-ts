/* eslint-disable */
import {
    ASN1Element as _Element,
    ASN1TagClass as _TagClass,
    BOOLEAN,
    INTEGER,
    OPTIONAL,
} from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";
import {
    Extensions,
    _decode_Extensions,
    _encode_Extensions,
} from "x500-ts//dist/node/modules/AuthenticationFramework/Extensions.ta";
import {
    MessageImprint,
    _decode_MessageImprint,
    _encode_MessageImprint,
} from "../PKIXTSP/MessageImprint.ta";
import {
    TimeStampReq_version,
    _decode_TimeStampReq_version,
    _encode_TimeStampReq_version,
} from "../PKIXTSP/TimeStampReq-version.ta";
import {
    TSAPolicyId,
    _decode_TSAPolicyId,
    _encode_TSAPolicyId,
} from "../PKIXTSP/TSAPolicyId.ta";
export {
    Extensions,
    _decode_Extensions,
    _encode_Extensions,
} from "x500-ts//dist/node/modules/AuthenticationFramework/Extensions.ta";
export {
    MessageImprint,
    _decode_MessageImprint,
    _encode_MessageImprint,
} from "../PKIXTSP/MessageImprint.ta";
export {
    TimeStampReq_version,
    TimeStampReq_version_v1 /* IMPORTED_LONG_NAMED_INTEGER */,
    v1 /* IMPORTED_SHORT_NAMED_INTEGER */,
    _decode_TimeStampReq_version,
    _encode_TimeStampReq_version,
} from "../PKIXTSP/TimeStampReq-version.ta";
export {
    TSAPolicyId,
    _decode_TSAPolicyId,
    _encode_TSAPolicyId,
} from "../PKIXTSP/TSAPolicyId.ta";

/* START_OF_SYMBOL_DEFINITION TimeStampReq */
/**
 * @summary TimeStampReq
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TimeStampReq ::= SEQUENCE  {
 *     version                  INTEGER  { v1(1) },
 *     messageImprint           MessageImprint,
 *     --a hash algorithm OID and the hash value of the data to be
 *     --time-stamped
 *     reqPolicy                TSAPolicyId                OPTIONAL,
 *     nonce                    INTEGER                    OPTIONAL,
 *     certReq                  BOOLEAN                    DEFAULT FALSE,
 *     extensions               [0] IMPLICIT Extensions    OPTIONAL  }
 * ```
 *
 * @class
 */
export class TimeStampReq {
    constructor(
        /**
         * @summary `version`.
         * @public
         * @readonly
         */
        readonly version: TimeStampReq_version,
        /**
         * @summary `messageImprint`.
         * @public
         * @readonly
         */
        readonly messageImprint: MessageImprint,
        /**
         * @summary `reqPolicy`.
         * @public
         * @readonly
         */
        readonly reqPolicy: OPTIONAL<TSAPolicyId>,
        /**
         * @summary `nonce`.
         * @public
         * @readonly
         */
        readonly nonce: OPTIONAL<INTEGER>,
        /**
         * @summary `certReq`.
         * @public
         * @readonly
         */
        readonly certReq: OPTIONAL<BOOLEAN>,
        /**
         * @summary `extensions`.
         * @public
         * @readonly
         */
        readonly extensions: OPTIONAL<Extensions>
    ) {}

    /**
     * @summary Restructures an object into a TimeStampReq
     * @description
     *
     * This takes an `object` and converts it to a `TimeStampReq`.
     *
     * @public
     * @static
     * @method
     * @param {Object} _o An object having all of the keys and values of a `TimeStampReq`.
     * @returns {TimeStampReq}
     */
    public static _from_object(
        _o: { [_K in keyof TimeStampReq]: TimeStampReq[_K] },
    ): TimeStampReq {
        return new TimeStampReq(
            _o.version,
            _o.messageImprint,
            _o.reqPolicy,
            _o.nonce,
            _o.certReq,
            _o.extensions
        );
    }

    /**
     * @summary Getter that returns the default value for `certReq`.
     * @public
     * @static
     * @method
     */
    public static get _default_value_for_certReq() {
        return false;
    }
}
/* END_OF_SYMBOL_DEFINITION TimeStampReq */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TimeStampReq */
/**
 * @summary The Leading Root Component Types of TimeStampReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the leading root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_1_spec_for_TimeStampReq: $.ComponentSpec[] = [
    new $.ComponentSpec(
        "version",
        false,
        $.hasTag(_TagClass.universal, 2),
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
        "reqPolicy",
        true,
        $.hasTag(_TagClass.universal, 6),
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
        "certReq",
        true,
        $.hasTag(_TagClass.universal, 1),
        undefined,
        undefined
    ),
    new $.ComponentSpec(
        "extensions",
        true,
        $.hasTag(_TagClass.context, 0),
        undefined,
        undefined
    ),
];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_1_spec_for_TimeStampReq */

/* START_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TimeStampReq */
/**
 * @summary The Trailing Root Component Types of TimeStampReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the trailing root component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _root_component_type_list_2_spec_for_TimeStampReq: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _root_component_type_list_2_spec_for_TimeStampReq */

/* START_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TimeStampReq */
/**
 * @summary The Extension Addition Component Types of TimeStampReq
 * @description
 *
 * This is an array of `ComponentSpec`s that define how to decode the extension addition component type list of a SET or SEQUENCE.
 *
 * @constant
 */
export const _extension_additions_list_spec_for_TimeStampReq: $.ComponentSpec[] = [];
/* END_OF_SYMBOL_DEFINITION _extension_additions_list_spec_for_TimeStampReq */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TimeStampReq */
let _cached_decoder_for_TimeStampReq: $.ASN1Decoder<TimeStampReq> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TimeStampReq */

/* START_OF_SYMBOL_DEFINITION _decode_TimeStampReq */
/**
 * @summary Decodes an ASN.1 element into a(n) TimeStampReq
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TimeStampReq} The decoded data structure.
 */
export function _decode_TimeStampReq(el: _Element) {
    if (!_cached_decoder_for_TimeStampReq) {
        _cached_decoder_for_TimeStampReq = function (
            el: _Element
        ): TimeStampReq {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version!: TimeStampReq_version;
            let messageImprint!: MessageImprint;
            let reqPolicy: OPTIONAL<TSAPolicyId>;
            let nonce: OPTIONAL<INTEGER>;
            let certReq: OPTIONAL<BOOLEAN> =
                TimeStampReq._default_value_for_certReq;
            let extensions: OPTIONAL<Extensions>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: $.DecodingMap = {
                version: (_el: _Element): void => {
                    version = _decode_TimeStampReq_version(_el);
                },
                messageImprint: (_el: _Element): void => {
                    messageImprint = _decode_MessageImprint(_el);
                },
                reqPolicy: (_el: _Element): void => {
                    reqPolicy = _decode_TSAPolicyId(_el);
                },
                nonce: (_el: _Element): void => {
                    nonce = $._decodeInteger(_el);
                },
                certReq: (_el: _Element): void => {
                    certReq = $._decodeBoolean(_el);
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
                _root_component_type_list_1_spec_for_TimeStampReq,
                _extension_additions_list_spec_for_TimeStampReq,
                _root_component_type_list_2_spec_for_TimeStampReq,
                undefined
            );
            return new TimeStampReq(
                /* SEQUENCE_CONSTRUCTOR_CALL */ version,
                messageImprint,
                reqPolicy,
                nonce,
                certReq,
                extensions
            );
        };
    }
    return _cached_decoder_for_TimeStampReq(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TimeStampReq */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TimeStampReq */
let _cached_encoder_for_TimeStampReq: $.ASN1Encoder<TimeStampReq> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TimeStampReq */

/* START_OF_SYMBOL_DEFINITION _encode_TimeStampReq */
/**
 * @summary Encodes a(n) TimeStampReq into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TimeStampReq, encoded as an ASN.1 Element.
 */
export function _encode_TimeStampReq(
    value: TimeStampReq,
    elGetter: $.ASN1Encoder<TimeStampReq>
) {
    if (!_cached_encoder_for_TimeStampReq) {
        _cached_encoder_for_TimeStampReq = function (
            value: TimeStampReq,
            elGetter: $.ASN1Encoder<TimeStampReq>
        ): _Element {
            return $._encodeSequence(
                ([] as (_Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_TimeStampReq_version(
                            value.version,
                            $.BER
                        ),
                        /* REQUIRED   */ _encode_MessageImprint(
                            value.messageImprint,
                            $.BER
                        ),
                        /* IF_ABSENT  */ value.reqPolicy === undefined
                            ? undefined
                            : _encode_TSAPolicyId(value.reqPolicy, $.BER),
                        /* IF_ABSENT  */ value.nonce === undefined
                            ? undefined
                            : $._encodeInteger(value.nonce, $.BER),
                        /* IF_DEFAULT */ value.certReq === undefined ||
                        $.deepEq(
                            value.certReq,
                            TimeStampReq._default_value_for_certReq
                        )
                            ? undefined
                            : $._encodeBoolean(value.certReq, $.BER),
                        /* IF_ABSENT  */ value.extensions === undefined
                            ? undefined
                            : $._encode_implicit(
                                  _TagClass.context,
                                  0,
                                  () => _encode_Extensions,
                                  $.BER
                              )(value.extensions, $.BER),
                    ])
                    .filter((c: _Element | undefined): c is _Element => !!c),
                $.BER
            );
        };
    }
    return _cached_encoder_for_TimeStampReq(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TimeStampReq */

/* eslint-enable */
