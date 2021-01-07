/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION TSTInfo_version */
/**
 * @summary TSTInfo_version
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TSTInfo-version ::= INTEGER { -- REMOVED_FROM_UNNESTING -- }
 * ```
 */
export type TSTInfo_version = INTEGER;
/* END_OF_SYMBOL_DEFINITION TSTInfo_version */

/* START_OF_SYMBOL_DEFINITION TSTInfo_version_v1 */
/**
 * @summary TSTInfo_version_v1
 * @constant
 * @type {number}
 */
export const TSTInfo_version_v1: TSTInfo_version = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION TSTInfo_version_v1 */

/* START_OF_SYMBOL_DEFINITION v1 */
/**
 * @summary TSTInfo_version_v1
 * @constant
 * @type {number}
 */
export const v1: TSTInfo_version = TSTInfo_version_v1; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION v1 */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TSTInfo_version */
let _cached_decoder_for_TSTInfo_version: $.ASN1Decoder<TSTInfo_version> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TSTInfo_version */

/* START_OF_SYMBOL_DEFINITION _decode_TSTInfo_version */
/**
 * @summary Decodes an ASN.1 element into a(n) TSTInfo_version
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TSTInfo_version} The decoded data structure.
 */
export function _decode_TSTInfo_version(el: _Element) {
    if (!_cached_decoder_for_TSTInfo_version) {
        _cached_decoder_for_TSTInfo_version = $._decodeInteger;
    }
    return _cached_decoder_for_TSTInfo_version(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TSTInfo_version */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TSTInfo_version */
let _cached_encoder_for_TSTInfo_version: $.ASN1Encoder<TSTInfo_version> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TSTInfo_version */

/* START_OF_SYMBOL_DEFINITION _encode_TSTInfo_version */
/**
 * @summary Encodes a(n) TSTInfo_version into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TSTInfo_version, encoded as an ASN.1 Element.
 */
export function _encode_TSTInfo_version(
    value: TSTInfo_version,
    elGetter: $.ASN1Encoder<TSTInfo_version>
) {
    if (!_cached_encoder_for_TSTInfo_version) {
        _cached_encoder_for_TSTInfo_version = $._encodeInteger;
    }
    return _cached_encoder_for_TSTInfo_version(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TSTInfo_version */

/* eslint-enable */
