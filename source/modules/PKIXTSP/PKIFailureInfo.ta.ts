/* eslint-disable */
import { ASN1Element as _Element, BIT_STRING } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION PKIFailureInfo */
/**
 * @summary PKIFailureInfo
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PKIFailureInfo  ::=  BIT STRING {
 *     badAlg               (0),
 *     -- unrecognized or unsupported Algorithm Identifier
 *     badRequest           (2),
 *     -- transaction not permitted or supported
 *     badDataFormat        (5),
 *     -- the data submitted has the wrong format
 *     timeNotAvailable    (14),
 *     -- the TSA's time source is not available
 *     unacceptedPolicy    (15),
 *     -- the requested TSA policy is not supported by the TSA.
 *     unacceptedExtension (16),
 *     -- the requested extension is not supported by the TSA.
 *     addInfoNotAvailable (17),
 *     -- the additional information requested could not be understood
 *     -- or is not available
 *     systemFailure       (25)
 *     -- the request cannot be handled due to system failure
 * }
 * ```
 */
export type PKIFailureInfo = BIT_STRING;
/* END_OF_SYMBOL_DEFINITION PKIFailureInfo */

/* START_OF_SYMBOL_DEFINITION PKIFailureInfo_badAlg */
/**
 * @summary PKIFailureInfo_badAlg
 * @constant
 */
export const PKIFailureInfo_badAlg: number = 0; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PKIFailureInfo_badAlg */

/* START_OF_SYMBOL_DEFINITION badAlg */
/**
 * @summary badAlg
 * @constant
 */
export const badAlg: number = PKIFailureInfo_badAlg; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION badAlg */

/* START_OF_SYMBOL_DEFINITION PKIFailureInfo_badRequest */
/**
 * @summary PKIFailureInfo_badRequest
 * @constant
 */
export const PKIFailureInfo_badRequest: number = 2; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PKIFailureInfo_badRequest */

/* START_OF_SYMBOL_DEFINITION badRequest */
/**
 * @summary badRequest
 * @constant
 */
export const badRequest: number = PKIFailureInfo_badRequest; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION badRequest */

/* START_OF_SYMBOL_DEFINITION PKIFailureInfo_badDataFormat */
/**
 * @summary PKIFailureInfo_badDataFormat
 * @constant
 */
export const PKIFailureInfo_badDataFormat: number = 5; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PKIFailureInfo_badDataFormat */

/* START_OF_SYMBOL_DEFINITION badDataFormat */
/**
 * @summary badDataFormat
 * @constant
 */
export const badDataFormat: number = PKIFailureInfo_badDataFormat; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION badDataFormat */

/* START_OF_SYMBOL_DEFINITION PKIFailureInfo_timeNotAvailable */
/**
 * @summary PKIFailureInfo_timeNotAvailable
 * @constant
 */
export const PKIFailureInfo_timeNotAvailable: number = 14; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PKIFailureInfo_timeNotAvailable */

/* START_OF_SYMBOL_DEFINITION timeNotAvailable */
/**
 * @summary timeNotAvailable
 * @constant
 */
export const timeNotAvailable: number = PKIFailureInfo_timeNotAvailable; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION timeNotAvailable */

/* START_OF_SYMBOL_DEFINITION PKIFailureInfo_unacceptedPolicy */
/**
 * @summary PKIFailureInfo_unacceptedPolicy
 * @constant
 */
export const PKIFailureInfo_unacceptedPolicy: number = 15; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PKIFailureInfo_unacceptedPolicy */

/* START_OF_SYMBOL_DEFINITION unacceptedPolicy */
/**
 * @summary unacceptedPolicy
 * @constant
 */
export const unacceptedPolicy: number = PKIFailureInfo_unacceptedPolicy; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION unacceptedPolicy */

/* START_OF_SYMBOL_DEFINITION PKIFailureInfo_unacceptedExtension */
/**
 * @summary PKIFailureInfo_unacceptedExtension
 * @constant
 */
export const PKIFailureInfo_unacceptedExtension: number = 16; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PKIFailureInfo_unacceptedExtension */

/* START_OF_SYMBOL_DEFINITION unacceptedExtension */
/**
 * @summary unacceptedExtension
 * @constant
 */
export const unacceptedExtension: number = PKIFailureInfo_unacceptedExtension; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION unacceptedExtension */

/* START_OF_SYMBOL_DEFINITION PKIFailureInfo_addInfoNotAvailable */
/**
 * @summary PKIFailureInfo_addInfoNotAvailable
 * @constant
 */
export const PKIFailureInfo_addInfoNotAvailable: number = 17; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PKIFailureInfo_addInfoNotAvailable */

/* START_OF_SYMBOL_DEFINITION addInfoNotAvailable */
/**
 * @summary addInfoNotAvailable
 * @constant
 */
export const addInfoNotAvailable: number = PKIFailureInfo_addInfoNotAvailable; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION addInfoNotAvailable */

/* START_OF_SYMBOL_DEFINITION PKIFailureInfo_systemFailure */
/**
 * @summary PKIFailureInfo_systemFailure
 * @constant
 */
export const PKIFailureInfo_systemFailure: number = 25; /* LONG_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION PKIFailureInfo_systemFailure */

/* START_OF_SYMBOL_DEFINITION systemFailure */
/**
 * @summary systemFailure
 * @constant
 */
export const systemFailure: number = PKIFailureInfo_systemFailure; /* SHORT_NAMED_BIT */
/* END_OF_SYMBOL_DEFINITION systemFailure */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PKIFailureInfo */
let _cached_decoder_for_PKIFailureInfo: $.ASN1Decoder<PKIFailureInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PKIFailureInfo */

/* START_OF_SYMBOL_DEFINITION _decode_PKIFailureInfo */
/**
 * @summary Decodes an ASN.1 element into a(n) PKIFailureInfo
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PKIFailureInfo} The decoded data structure.
 */
export function _decode_PKIFailureInfo(el: _Element) {
    if (!_cached_decoder_for_PKIFailureInfo) {
        _cached_decoder_for_PKIFailureInfo = $._decodeBitString;
    }
    return _cached_decoder_for_PKIFailureInfo(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PKIFailureInfo */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PKIFailureInfo */
let _cached_encoder_for_PKIFailureInfo: $.ASN1Encoder<PKIFailureInfo> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PKIFailureInfo */

/* START_OF_SYMBOL_DEFINITION _encode_PKIFailureInfo */
/**
 * @summary Encodes a(n) PKIFailureInfo into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PKIFailureInfo, encoded as an ASN.1 Element.
 */
export function _encode_PKIFailureInfo(
    value: PKIFailureInfo,
    elGetter: $.ASN1Encoder<PKIFailureInfo>
) {
    if (!_cached_encoder_for_PKIFailureInfo) {
        _cached_encoder_for_PKIFailureInfo = $._encodeBitString;
    }
    return _cached_encoder_for_PKIFailureInfo(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PKIFailureInfo */

/* eslint-enable */
