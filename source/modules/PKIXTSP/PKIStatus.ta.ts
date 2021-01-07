/* eslint-disable */
import { ASN1Element as _Element, INTEGER } from "asn1-ts";
import * as $ from "asn1-ts/dist/node/functional";

/* START_OF_SYMBOL_DEFINITION PKIStatus */
/**
 * @summary PKIStatus
 * @description
 *
 * ### ASN.1 Definition:
 *
 * ```asn1
 * PKIStatus  ::=  INTEGER {
 *     granted                (0),
 *     -- when the PKIStatus contains the value zero a TimeStampToken, as requested, is present.
 *     grantedWithMods        (1),
 *     -- when the PKIStatus contains the value one a TimeStampToken, with modifications, is present.
 *     rejection              (2),
 *     waiting                (3),
 *     revocationWarning      (4),
 *     -- this message contains a warning that a revocation is
 *     -- imminent
 *     revocationNotification (5)
 *     -- notification that a revocation has occurred
 * }
 * ```
 */
export type PKIStatus = INTEGER;
/* END_OF_SYMBOL_DEFINITION PKIStatus */

/* START_OF_SYMBOL_DEFINITION PKIStatus_granted */
/**
 * @summary PKIStatus_granted
 * @constant
 * @type {number}
 */
export const PKIStatus_granted: PKIStatus = 0; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION PKIStatus_granted */

/* START_OF_SYMBOL_DEFINITION granted */
/**
 * @summary PKIStatus_granted
 * @constant
 * @type {number}
 */
export const granted: PKIStatus = PKIStatus_granted; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION granted */

/* START_OF_SYMBOL_DEFINITION PKIStatus_grantedWithMods */
/**
 * @summary PKIStatus_grantedWithMods
 * @constant
 * @type {number}
 */
export const PKIStatus_grantedWithMods: PKIStatus = 1; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION PKIStatus_grantedWithMods */

/* START_OF_SYMBOL_DEFINITION grantedWithMods */
/**
 * @summary PKIStatus_grantedWithMods
 * @constant
 * @type {number}
 */
export const grantedWithMods: PKIStatus = PKIStatus_grantedWithMods; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION grantedWithMods */

/* START_OF_SYMBOL_DEFINITION PKIStatus_rejection */
/**
 * @summary PKIStatus_rejection
 * @constant
 * @type {number}
 */
export const PKIStatus_rejection: PKIStatus = 2; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION PKIStatus_rejection */

/* START_OF_SYMBOL_DEFINITION rejection */
/**
 * @summary PKIStatus_rejection
 * @constant
 * @type {number}
 */
export const rejection: PKIStatus = PKIStatus_rejection; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION rejection */

/* START_OF_SYMBOL_DEFINITION PKIStatus_waiting */
/**
 * @summary PKIStatus_waiting
 * @constant
 * @type {number}
 */
export const PKIStatus_waiting: PKIStatus = 3; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION PKIStatus_waiting */

/* START_OF_SYMBOL_DEFINITION waiting */
/**
 * @summary PKIStatus_waiting
 * @constant
 * @type {number}
 */
export const waiting: PKIStatus = PKIStatus_waiting; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION waiting */

/* START_OF_SYMBOL_DEFINITION PKIStatus_revocationWarning */
/**
 * @summary PKIStatus_revocationWarning
 * @constant
 * @type {number}
 */
export const PKIStatus_revocationWarning: PKIStatus = 4; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION PKIStatus_revocationWarning */

/* START_OF_SYMBOL_DEFINITION revocationWarning */
/**
 * @summary PKIStatus_revocationWarning
 * @constant
 * @type {number}
 */
export const revocationWarning: PKIStatus = PKIStatus_revocationWarning; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION revocationWarning */

/* START_OF_SYMBOL_DEFINITION PKIStatus_revocationNotification */
/**
 * @summary PKIStatus_revocationNotification
 * @constant
 * @type {number}
 */
export const PKIStatus_revocationNotification: PKIStatus = 5; /* LONG_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION PKIStatus_revocationNotification */

/* START_OF_SYMBOL_DEFINITION revocationNotification */
/**
 * @summary PKIStatus_revocationNotification
 * @constant
 * @type {number}
 */
export const revocationNotification: PKIStatus = PKIStatus_revocationNotification; /* SHORT_NAMED_INTEGER_VALUE */
/* END_OF_SYMBOL_DEFINITION revocationNotification */

/* START_OF_SYMBOL_DEFINITION _cached_decoder_for_PKIStatus */
let _cached_decoder_for_PKIStatus: $.ASN1Decoder<PKIStatus> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_decoder_for_PKIStatus */

/* START_OF_SYMBOL_DEFINITION _decode_PKIStatus */
/**
 * @summary Decodes an ASN.1 element into a(n) PKIStatus
 * @function
 * @param {_Element} el The element being decoded.
 * @returns {PKIStatus} The decoded data structure.
 */
export function _decode_PKIStatus(el: _Element) {
    if (!_cached_decoder_for_PKIStatus) {
        _cached_decoder_for_PKIStatus = $._decodeInteger;
    }
    return _cached_decoder_for_PKIStatus(el);
}
/* END_OF_SYMBOL_DEFINITION _decode_PKIStatus */

/* START_OF_SYMBOL_DEFINITION _cached_encoder_for_PKIStatus */
let _cached_encoder_for_PKIStatus: $.ASN1Encoder<PKIStatus> | null = null;
/* END_OF_SYMBOL_DEFINITION _cached_encoder_for_PKIStatus */

/* START_OF_SYMBOL_DEFINITION _encode_PKIStatus */
/**
 * @summary Encodes a(n) PKIStatus into an ASN.1 Element.
 * @function
 * @param {value} el The element being decoded.
 * @param elGetter A function that can be used to get new ASN.1 elements.
 * @returns {_Element} The PKIStatus, encoded as an ASN.1 Element.
 */
export function _encode_PKIStatus(
    value: PKIStatus,
    elGetter: $.ASN1Encoder<PKIStatus>
) {
    if (!_cached_encoder_for_PKIStatus) {
        _cached_encoder_for_PKIStatus = $._encodeInteger;
    }
    return _cached_encoder_for_PKIStatus(value, elGetter);
}

/* END_OF_SYMBOL_DEFINITION _encode_PKIStatus */

/* eslint-enable */
