/*
    BEGIN_MODULE PKIXCMP
    OID: iso.identified-organization.dod.internet.security.mechanisms.pkix.id-mod.id-mod-cmp
    IRI: undefined
    EXTENSIBLE: false
    ENCODINGREF: undefined
    FILE: undefined
    Produced by Jonathan M. Wilbur's <jonathan@wilbur.space> ASN.1 Compiler.
*/
import * as asn1 from "asn1-ts";
import * as __utils from "./__utils";

// Definitions unnecessary for this module omitted.

export type PKIFreeText = asn1.UTF8String[]; // SequenceOfType
let _cached_decoder_for_PKIFreeText: __utils.ASN1Decoder<
    PKIFreeText
> | null = null;
let _cached_encoder_for_PKIFreeText: __utils.ASN1Encoder<
    PKIFreeText
> | null = null;
export function _decode_PKIFreeText(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PKIFreeText) {
        _cached_decoder_for_PKIFreeText = __utils._decodeSequenceOf<
            asn1.UTF8String
        >(() => __utils._decodeUTF8String);
    }
    return _cached_decoder_for_PKIFreeText(el);
}
export function _encode_PKIFreeText(
    value: PKIFreeText,
    elGetter: __utils.ASN1Encoder<PKIFreeText>
) {
    if (!_cached_encoder_for_PKIFreeText) {
        _cached_encoder_for_PKIFreeText = __utils._encodeSequenceOf<
            asn1.UTF8String
        >(() => __utils._encodeUTF8String, __utils.BER);
    }
    return _cached_encoder_for_PKIFreeText(value, elGetter);
}

// Definitions unnecessary for this module omitted.

/* END_MODULE PKIXCMP */
