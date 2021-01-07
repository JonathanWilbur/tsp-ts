/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION TimeStampReq_version */
/**
 * @summary TimeStampReq_version
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TimeStampReq-version ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type TimeStampReq_version = INTEGER;
/* END_OF_SYMBOL_DEFINITION TimeStampReq_version */

/* START_OF_SYMBOL_DEFINITION TimeStampReq_version_v1 */
/**
 * @summary TimeStampReq_version_v1
 * @constant
 * @type {number}
 */
export const TimeStampReq_version_v1: TimeStampReq_version = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TimeStampReq_version_v1 */

/* START_OF_SYMBOL_DEFINITION v1 */
/**
 * @summary TimeStampReq_version_v1
 * @constant
 * @type {number}
 */
export const v1: TimeStampReq_version = TimeStampReq_version_v1; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION v1 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TimeStampReq_version */
let _cached_decoder_for_TimeStampReq_version: $.ASN1Decoder<TimeStampReq_version> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TimeStampReq_version */

/* START_OF_SYMBOL_DEFINITION _decode_TimeStampReq_version */
/**
 * @summary Decodes an ASN.1 element into a(n) TimeStampReq_version
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TimeStampReq_version} The decoded data structure.
 */
export function _decode_TimeStampReq_version(el: _Element) {
    if (!_cached_decoder_for_TimeStampReq_version) {
        _cached_decoder_for_TimeStampReq_version = $._decodeInteger;
    }
    return _cached_decoder_for_TimeStampReq_version(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TimeStampReq_version */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TimeStampReq_version */
let _cached_encoder_for_TimeStampReq_version: $.ASN1Encoder<TimeStampReq_version> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TimeStampReq_version */

/* START_OF_SYMBOL_DEFINITION _encode_TimeStampReq_version */
/**
 * @summary Encodes a(n) TimeStampReq_version into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TimeStampReq_version, encoded as an ASN.1 Element.
 */
export function _encode_TimeStampReq_version(
    value: TimeStampReq_version,
    elGetter: $.ASN1Encoder<TimeStampReq_version>
) {
    if (!_cached_encoder_for_TimeStampReq_version) {
        _cached_encoder_for_TimeStampReq_version = $._encodeInteger;
    }
    return _cached_encoder_for_TimeStampReq_version(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TimeStampReq_version */

/* eslint-enable */
