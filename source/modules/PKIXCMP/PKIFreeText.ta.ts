/* eslint-disable */
import { ASN1Element as _Element, UTF8String } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION PKIFreeText */
/**
 * @summary PKIFreeText
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PKIFreeText  ::=  SEQUENCE SIZE (1..MAX) OF UTF8String
 * ```
 */
export type PKIFreeText = UTF8String[]; // SequenceOfType
/* END_OF_SYMBOL_DEFINITION PKIFreeText */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PKIFreeText */
let _cached_decoder_for_PKIFreeText: $.ASN1Decoder<PKIFreeText> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PKIFreeText */

/* START_OF_SYMBOL_DEFINITION _decode_PKIFreeText */
/**
 * @summary Decodes an ASN.1 element into a(n) PKIFreeText
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PKIFreeText} The decoded data structure.
 */
export function _decode_PKIFreeText(el: _Element) {
    if (!_cached_decoder_for_PKIFreeText) {
        _cached_decoder_for_PKIFreeText = $._decodeSequenceOf<UTF8String>(
            () => $._decodeUTF8String
        );
    }
    return _cached_decoder_for_PKIFreeText(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PKIFreeText */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PKIFreeText */
let _cached_encoder_for_PKIFreeText: $.ASN1Encoder<PKIFreeText> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PKIFreeText */

/* START_OF_SYMBOL_DEFINITION _encode_PKIFreeText */
/**
 * @summary Encodes a(n) PKIFreeText into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PKIFreeText, encoded as an ASN.1 Element.
 */
export function _encode_PKIFreeText(
    value: PKIFreeText,
    elGetter: $.ASN1Encoder<PKIFreeText>
) {
    if (!_cached_encoder_for_PKIFreeText) {
        _cached_encoder_for_PKIFreeText = $._encodeSequenceOf<UTF8String>(
            () => $._encodeUTF8String,
            $.BER
        );
    }
    return _cached_encoder_for_PKIFreeText(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PKIFreeText */

/* eslint-enable */
