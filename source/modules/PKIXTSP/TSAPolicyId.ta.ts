/* eslint-disable */
import { ASN1Element as _Element, OBJECT_IDENTIFIER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION TSAPolicyId */
/**
 * @summary TSAPolicyId
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * TSAPolicyId  ::=  OBJECT IDENTIFIER
 * ```
 */
export type TSAPolicyId = OBJECT_IDENTIFIER; // ObjectIdentifierType
/* END_OF_SYMBOL_DEFINITION TSAPolicyId */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_TSAPolicyId */
let _cached_decoder_for_TSAPolicyId: $.ASN1Decoder<TSAPolicyId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_TSAPolicyId */

/* START_OF_SYMBOL_DEFINITION _decode_TSAPolicyId */
/**
 * @summary Decodes an ASN.1 element into a(n) TSAPolicyId
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {TSAPolicyId} The decoded data structure.
 */
export function _decode_TSAPolicyId(el: _Element) {
    if (!_cached_decoder_for_TSAPolicyId) {
        _cached_decoder_for_TSAPolicyId = $._decodeObjectIdentifier;
    }
    return _cached_decoder_for_TSAPolicyId(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_TSAPolicyId */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_TSAPolicyId */
let _cached_encoder_for_TSAPolicyId: $.ASN1Encoder<TSAPolicyId> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_TSAPolicyId */

/* START_OF_SYMBOL_DEFINITION _encode_TSAPolicyId */
/**
 * @summary Encodes a(n) TSAPolicyId into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The TSAPolicyId, encoded as an ASN.1 Element.
 */
export function _encode_TSAPolicyId(
    value: TSAPolicyId,
    elGetter: $.ASN1Encoder<TSAPolicyId>
) {
    if (!_cached_encoder_for_TSAPolicyId) {
        _cached_encoder_for_TSAPolicyId = $._encodeObjectIdentifier;
    }
    return _cached_encoder_for_TSAPolicyId(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_TSAPolicyId */

/* eslint-enable */
