/*
    BEGIN_MODULE PKIXTSP
    OID: iso.identified-organization.dod.internet.security.mechanisms.pkix.id-mod.id-mod-tsp
    IRI: undefined
    EXTENSIBLE: false
    ENCODINGREF: undefined
    FILE: undefined
    Produced by Jonathan M. Wilbur's <jonathan@wilbur.space> ASN.1 Compiler.
*/
import * as asn1 from "asn1-ts";
import {
    ContentInfo,
    _decode_ContentInfo,
    _encode_ContentInfo,
} from "cms-ts/dist/node/CryptographicMessageSyntax-2010";
import {
    AlgorithmIdentifier,
    Extensions,
    _decode_AlgorithmIdentifier,
    _decode_Extensions,
    _encode_AlgorithmIdentifier,
    _encode_Extensions,
} from "x500-ts/dist/node/AuthenticationFramework";
import {
    GeneralName,
    _decode_GeneralName,
    _encode_GeneralName,
} from "x500-ts/dist/node/CertificateExtensions";
import {
    PKIFreeText,
    _decode_PKIFreeText,
    _encode_PKIFreeText,
} from "./PKIXCMP";
import * as __utils from "./__utils";

export const id_ct_TSTInfo: asn1.OBJECT_IDENTIFIER = new asn1.ObjectIdentifier([
    /* iso */ 1,
    /* member-body */ 2,
    /* us */ 840,
    /* rsadsi */ 113549,
    /* pkcs */ 1,
    /* pkcs-9 */ 9,
    /* smime */ 16,
    /* ct */ 1,
    4,
]);

export type TimeStampReq_version = asn1.INTEGER;
export const TimeStampReq_version_v1: TimeStampReq_version = 1; /* LONG_NAMED_INTEGER_VALUE */
let _cached_decoder_for_TimeStampReq_version: __utils.ASN1Decoder<
    TimeStampReq_version
> | null = null;
let _cached_encoder_for_TimeStampReq_version: __utils.ASN1Encoder<
    TimeStampReq_version
> | null = null;
export function _decode_TimeStampReq_version(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_TimeStampReq_version) {
        _cached_decoder_for_TimeStampReq_version = __utils._decodeInteger;
    }
    return _cached_decoder_for_TimeStampReq_version(el);
}
export function _encode_TimeStampReq_version(
    value: TimeStampReq_version,
    elGetter: __utils.ASN1Encoder<TimeStampReq_version>
) {
    if (!_cached_encoder_for_TimeStampReq_version) {
        _cached_encoder_for_TimeStampReq_version = __utils._encodeInteger;
    }
    return _cached_encoder_for_TimeStampReq_version(value, elGetter);
}

export class MessageImprint {
    constructor(
        readonly hashAlgorithm: AlgorithmIdentifier,
        readonly hashedMessage: asn1.OCTET_STRING
    ) {}
}
export const _root_component_type_list_1_spec_for_MessageImprint: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "hashAlgorithm",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "hashedMessage",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 4),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_MessageImprint: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_MessageImprint: __utils.ComponentSpec[] = [];
let _cached_decoder_for_MessageImprint: __utils.ASN1Decoder<
    MessageImprint
> | null = null;
let _cached_encoder_for_MessageImprint: __utils.ASN1Encoder<
    MessageImprint
> | null = null;
export function _decode_MessageImprint(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_MessageImprint) {
        _cached_decoder_for_MessageImprint = function (
            el: asn1.ASN1Element
        ): MessageImprint {
            const sequence: asn1.ASN1Element[] = el.sequence;
            if (sequence.length < 2) {
                throw new asn1.ASN1ConstructionError(
                    "MessageImprint contained only " +
                        sequence.length.toString() +
                        " elements."
                );
            }
            // TODO: Validate tags.
            sequence[0].name = "hashAlgorithm";
            sequence[1].name = "hashedMessage";
            let hashAlgorithm!: AlgorithmIdentifier;
            let hashedMessage!: asn1.OCTET_STRING;
            hashAlgorithm = _decode_AlgorithmIdentifier(sequence[0]);
            hashedMessage = __utils._decodeOctetString(sequence[1]);
            // TODO: Validate values.
            return new MessageImprint(hashAlgorithm, hashedMessage);
        };
    }
    return _cached_decoder_for_MessageImprint(el);
}
export function _encode_MessageImprint(
    value: MessageImprint,
    elGetter: __utils.ASN1Encoder<MessageImprint>
) {
    if (!_cached_encoder_for_MessageImprint) {
        _cached_encoder_for_MessageImprint = function (
            value: MessageImprint,
            elGetter: __utils.ASN1Encoder<MessageImprint>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_AlgorithmIdentifier(
                            value.hashAlgorithm,
                            __utils.BER
                        ),
                        /* REQUIRED   */ __utils._encodeOctetString(
                            value.hashedMessage,
                            __utils.BER
                        ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_MessageImprint(value, elGetter);
}

export type TSAPolicyId = asn1.OBJECT_IDENTIFIER; // ObjectIdentifierType
let _cached_decoder_for_TSAPolicyId: __utils.ASN1Decoder<
    TSAPolicyId
> | null = null;
let _cached_encoder_for_TSAPolicyId: __utils.ASN1Encoder<
    TSAPolicyId
> | null = null;
export function _decode_TSAPolicyId(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_TSAPolicyId) {
        _cached_decoder_for_TSAPolicyId = __utils._decodeObjectIdentifier;
    }
    return _cached_decoder_for_TSAPolicyId(el);
}
export function _encode_TSAPolicyId(
    value: TSAPolicyId,
    elGetter: __utils.ASN1Encoder<TSAPolicyId>
) {
    if (!_cached_encoder_for_TSAPolicyId) {
        _cached_encoder_for_TSAPolicyId = __utils._encodeObjectIdentifier;
    }
    return _cached_encoder_for_TSAPolicyId(value, elGetter);
}

export class TimeStampReq {
    constructor(
        readonly version: TimeStampReq_version,
        readonly messageImprint: MessageImprint,
        readonly reqPolicy: asn1.OPTIONAL<TSAPolicyId>,
        readonly nonce: asn1.OPTIONAL<asn1.INTEGER>,
        readonly certReq: asn1.OPTIONAL<asn1.BOOLEAN>,
        readonly extensions: asn1.OPTIONAL<Extensions>
    ) {}
    public static get _default_value_for_certReq() {
        return false;
    }
}
export const _root_component_type_list_1_spec_for_TimeStampReq: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "version",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "messageImprint",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "reqPolicy",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "nonce",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "certReq",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "extensions",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_TimeStampReq: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_TimeStampReq: __utils.ComponentSpec[] = [];
let _cached_decoder_for_TimeStampReq: __utils.ASN1Decoder<
    TimeStampReq
> | null = null;
let _cached_encoder_for_TimeStampReq: __utils.ASN1Encoder<
    TimeStampReq
> | null = null;
export function _decode_TimeStampReq(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_TimeStampReq) {
        _cached_decoder_for_TimeStampReq = function (
            el: asn1.ASN1Element
        ): TimeStampReq {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version!: TimeStampReq_version;
            let messageImprint!: MessageImprint;
            let reqPolicy: asn1.OPTIONAL<TSAPolicyId>;
            let nonce: asn1.OPTIONAL<asn1.INTEGER>;
            let certReq: asn1.OPTIONAL<asn1.BOOLEAN> =
                TimeStampReq._default_value_for_certReq;
            let extensions: asn1.OPTIONAL<Extensions>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                version: (_el: asn1.ASN1Element): void => {
                    version = _decode_TimeStampReq_version(_el);
                },
                messageImprint: (_el: asn1.ASN1Element): void => {
                    messageImprint = _decode_MessageImprint(_el);
                },
                reqPolicy: (_el: asn1.ASN1Element): void => {
                    reqPolicy = _decode_TSAPolicyId(_el);
                },
                nonce: (_el: asn1.ASN1Element): void => {
                    nonce = __utils._decodeInteger(_el);
                },
                certReq: (_el: asn1.ASN1Element): void => {
                    certReq = __utils._decodeBoolean(_el);
                },
                extensions: (_el: asn1.ASN1Element): void => {
                    extensions = __utils._decode_implicit<Extensions>(
                        () => _decode_Extensions
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TimeStampReq,
                _extension_additions_list_spec_for_TimeStampReq,
                _root_component_type_list_2_spec_for_TimeStampReq,
                undefined
            );
            return new TimeStampReq /* SEQUENCE_CONSTRUCTOR_CALL */(
                version,
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
export function _encode_TimeStampReq(
    value: TimeStampReq,
    elGetter: __utils.ASN1Encoder<TimeStampReq>
) {
    if (!_cached_encoder_for_TimeStampReq) {
        _cached_encoder_for_TimeStampReq = function (
            value: TimeStampReq,
            elGetter: __utils.ASN1Encoder<TimeStampReq>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_TimeStampReq_version(
                            value.version,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_MessageImprint(
                            value.messageImprint,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.reqPolicy === undefined
                            ? undefined
                            : _encode_TSAPolicyId(value.reqPolicy, __utils.BER),
                        /* IF_ABSENT  */ value.nonce === undefined
                            ? undefined
                            : __utils._encodeInteger(value.nonce, __utils.BER),
                        /* IF_DEFAULT */ value.certReq === undefined ||
                        __utils.deepEq(
                            value.certReq,
                            TimeStampReq._default_value_for_certReq
                        )
                            ? undefined
                            : __utils._encodeBoolean(
                                  value.certReq,
                                  __utils.BER
                              ),
                        /* IF_ABSENT  */ value.extensions === undefined
                            ? undefined
                            : __utils._encode_implicit(
                                  asn1.ASN1TagClass.context,
                                  0,
                                  () => _encode_Extensions,
                                  __utils.BER
                              )(value.extensions, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_TimeStampReq(value, elGetter);
}

export type PKIStatus = asn1.INTEGER;
export const PKIStatus_granted: PKIStatus = 0; /* LONG_NAMED_INTEGER_VALUE */
export const PKIStatus_grantedWithMods: PKIStatus = 1; /* LONG_NAMED_INTEGER_VALUE */
export const PKIStatus_rejection: PKIStatus = 2; /* LONG_NAMED_INTEGER_VALUE */
export const PKIStatus_waiting: PKIStatus = 3; /* LONG_NAMED_INTEGER_VALUE */
export const PKIStatus_revocationWarning: PKIStatus = 4; /* LONG_NAMED_INTEGER_VALUE */
export const PKIStatus_revocationNotification: PKIStatus = 5; /* LONG_NAMED_INTEGER_VALUE */
let _cached_decoder_for_PKIStatus: __utils.ASN1Decoder<PKIStatus> | null = null;
let _cached_encoder_for_PKIStatus: __utils.ASN1Encoder<PKIStatus> | null = null;
export function _decode_PKIStatus(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PKIStatus) {
        _cached_decoder_for_PKIStatus = __utils._decodeInteger;
    }
    return _cached_decoder_for_PKIStatus(el);
}
export function _encode_PKIStatus(
    value: PKIStatus,
    elGetter: __utils.ASN1Encoder<PKIStatus>
) {
    if (!_cached_encoder_for_PKIStatus) {
        _cached_encoder_for_PKIStatus = __utils._encodeInteger;
    }
    return _cached_encoder_for_PKIStatus(value, elGetter);
}

export type PKIFailureInfo = asn1.BIT_STRING;
export const PKIFailureInfo_badAlg: number = 0; /* LONG_NAMED_BIT */
export const PKIFailureInfo_badRequest: number = 2; /* LONG_NAMED_BIT */
export const PKIFailureInfo_badDataFormat: number = 5; /* LONG_NAMED_BIT */
export const PKIFailureInfo_timeNotAvailable: number = 14; /* LONG_NAMED_BIT */
export const PKIFailureInfo_unacceptedPolicy: number = 15; /* LONG_NAMED_BIT */
export const PKIFailureInfo_unacceptedExtension: number = 16; /* LONG_NAMED_BIT */
export const PKIFailureInfo_addInfoNotAvailable: number = 17; /* LONG_NAMED_BIT */
export const PKIFailureInfo_systemFailure: number = 25; /* LONG_NAMED_BIT */
let _cached_decoder_for_PKIFailureInfo: __utils.ASN1Decoder<
    PKIFailureInfo
> | null = null;
let _cached_encoder_for_PKIFailureInfo: __utils.ASN1Encoder<
    PKIFailureInfo
> | null = null;
export function _decode_PKIFailureInfo(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PKIFailureInfo) {
        _cached_decoder_for_PKIFailureInfo = __utils._decodeBitString;
    }
    return _cached_decoder_for_PKIFailureInfo(el);
}
export function _encode_PKIFailureInfo(
    value: PKIFailureInfo,
    elGetter: __utils.ASN1Encoder<PKIFailureInfo>
) {
    if (!_cached_encoder_for_PKIFailureInfo) {
        _cached_encoder_for_PKIFailureInfo = __utils._encodeBitString;
    }
    return _cached_encoder_for_PKIFailureInfo(value, elGetter);
}

export class PKIStatusInfo {
    constructor(
        readonly status: PKIStatus,
        readonly statusString: asn1.OPTIONAL<PKIFreeText>,
        readonly failInfo: asn1.OPTIONAL<PKIFailureInfo>
    ) {}
}
export const _root_component_type_list_1_spec_for_PKIStatusInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "status",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "statusString",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "failInfo",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 3),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_PKIStatusInfo: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_PKIStatusInfo: __utils.ComponentSpec[] = [];
let _cached_decoder_for_PKIStatusInfo: __utils.ASN1Decoder<
    PKIStatusInfo
> | null = null;
let _cached_encoder_for_PKIStatusInfo: __utils.ASN1Encoder<
    PKIStatusInfo
> | null = null;
export function _decode_PKIStatusInfo(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_PKIStatusInfo) {
        _cached_decoder_for_PKIStatusInfo = function (
            el: asn1.ASN1Element
        ): PKIStatusInfo {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let status!: PKIStatus;
            let statusString: asn1.OPTIONAL<PKIFreeText>;
            let failInfo: asn1.OPTIONAL<PKIFailureInfo>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                status: (_el: asn1.ASN1Element): void => {
                    status = _decode_PKIStatus(_el);
                },
                statusString: (_el: asn1.ASN1Element): void => {
                    statusString = _decode_PKIFreeText(_el);
                },
                failInfo: (_el: asn1.ASN1Element): void => {
                    failInfo = _decode_PKIFailureInfo(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_PKIStatusInfo,
                _extension_additions_list_spec_for_PKIStatusInfo,
                _root_component_type_list_2_spec_for_PKIStatusInfo,
                undefined
            );
            return new PKIStatusInfo /* SEQUENCE_CONSTRUCTOR_CALL */(
                status,
                statusString,
                failInfo
            );
        };
    }
    return _cached_decoder_for_PKIStatusInfo(el);
}
export function _encode_PKIStatusInfo(
    value: PKIStatusInfo,
    elGetter: __utils.ASN1Encoder<PKIStatusInfo>
) {
    if (!_cached_encoder_for_PKIStatusInfo) {
        _cached_encoder_for_PKIStatusInfo = function (
            value: PKIStatusInfo,
            elGetter: __utils.ASN1Encoder<PKIStatusInfo>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_PKIStatus(
                            value.status,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.statusString === undefined
                            ? undefined
                            : _encode_PKIFreeText(
                                  value.statusString,
                                  __utils.BER
                              ),
                        /* IF_ABSENT  */ value.failInfo === undefined
                            ? undefined
                            : _encode_PKIFailureInfo(
                                  value.failInfo,
                                  __utils.BER
                              ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_PKIStatusInfo(value, elGetter);
}

export type TimeStampToken = ContentInfo; // DefinedType
let _cached_decoder_for_TimeStampToken: __utils.ASN1Decoder<
    TimeStampToken
> | null = null;
let _cached_encoder_for_TimeStampToken: __utils.ASN1Encoder<
    TimeStampToken
> | null = null;
export function _decode_TimeStampToken(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_TimeStampToken) {
        _cached_decoder_for_TimeStampToken = _decode_ContentInfo;
    }
    return _cached_decoder_for_TimeStampToken(el);
}
export function _encode_TimeStampToken(
    value: TimeStampToken,
    elGetter: __utils.ASN1Encoder<TimeStampToken>
) {
    if (!_cached_encoder_for_TimeStampToken) {
        _cached_encoder_for_TimeStampToken = _encode_ContentInfo;
    }
    return _cached_encoder_for_TimeStampToken(value, elGetter);
}

export class TimeStampResp {
    constructor(
        readonly status: PKIStatusInfo,
        readonly timeStampToken: asn1.OPTIONAL<TimeStampToken>
    ) {}
}
export const _root_component_type_list_1_spec_for_TimeStampResp: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "status",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "timeStampToken",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_TimeStampResp: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_TimeStampResp: __utils.ComponentSpec[] = [];
let _cached_decoder_for_TimeStampResp: __utils.ASN1Decoder<
    TimeStampResp
> | null = null;
let _cached_encoder_for_TimeStampResp: __utils.ASN1Encoder<
    TimeStampResp
> | null = null;
export function _decode_TimeStampResp(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_TimeStampResp) {
        _cached_decoder_for_TimeStampResp = function (
            el: asn1.ASN1Element
        ): TimeStampResp {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let status!: PKIStatusInfo;
            let timeStampToken: asn1.OPTIONAL<TimeStampToken>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                status: (_el: asn1.ASN1Element): void => {
                    status = _decode_PKIStatusInfo(_el);
                },
                timeStampToken: (_el: asn1.ASN1Element): void => {
                    timeStampToken = _decode_TimeStampToken(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TimeStampResp,
                _extension_additions_list_spec_for_TimeStampResp,
                _root_component_type_list_2_spec_for_TimeStampResp,
                undefined
            );
            return new TimeStampResp /* SEQUENCE_CONSTRUCTOR_CALL */(
                status,
                timeStampToken
            );
        };
    }
    return _cached_decoder_for_TimeStampResp(el);
}
export function _encode_TimeStampResp(
    value: TimeStampResp,
    elGetter: __utils.ASN1Encoder<TimeStampResp>
) {
    if (!_cached_encoder_for_TimeStampResp) {
        _cached_encoder_for_TimeStampResp = function (
            value: TimeStampResp,
            elGetter: __utils.ASN1Encoder<TimeStampResp>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_PKIStatusInfo(
                            value.status,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.timeStampToken === undefined
                            ? undefined
                            : _encode_TimeStampToken(
                                  value.timeStampToken,
                                  __utils.BER
                              ),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_TimeStampResp(value, elGetter);
}

export type TSTInfo_version = asn1.INTEGER;
export const TSTInfo_version_v1: TSTInfo_version = 1; /* LONG_NAMED_INTEGER_VALUE */
let _cached_decoder_for_TSTInfo_version: __utils.ASN1Decoder<
    TSTInfo_version
> | null = null;
let _cached_encoder_for_TSTInfo_version: __utils.ASN1Encoder<
    TSTInfo_version
> | null = null;
export function _decode_TSTInfo_version(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_TSTInfo_version) {
        _cached_decoder_for_TSTInfo_version = __utils._decodeInteger;
    }
    return _cached_decoder_for_TSTInfo_version(el);
}
export function _encode_TSTInfo_version(
    value: TSTInfo_version,
    elGetter: __utils.ASN1Encoder<TSTInfo_version>
) {
    if (!_cached_encoder_for_TSTInfo_version) {
        _cached_encoder_for_TSTInfo_version = __utils._encodeInteger;
    }
    return _cached_encoder_for_TSTInfo_version(value, elGetter);
}

export class Accuracy {
    constructor(
        readonly seconds: asn1.OPTIONAL<asn1.INTEGER>,
        readonly millis: asn1.OPTIONAL<asn1.INTEGER>,
        readonly micros: asn1.OPTIONAL<asn1.INTEGER>
    ) {}
}
export const _root_component_type_list_1_spec_for_Accuracy: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "seconds",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "millis",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "micros",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_Accuracy: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_Accuracy: __utils.ComponentSpec[] = [];
let _cached_decoder_for_Accuracy: __utils.ASN1Decoder<Accuracy> | null = null;
let _cached_encoder_for_Accuracy: __utils.ASN1Encoder<Accuracy> | null = null;
export function _decode_Accuracy(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_Accuracy) {
        _cached_decoder_for_Accuracy = function (
            el: asn1.ASN1Element
        ): Accuracy {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let seconds: asn1.OPTIONAL<asn1.INTEGER>;
            let millis: asn1.OPTIONAL<asn1.INTEGER>;
            let micros: asn1.OPTIONAL<asn1.INTEGER>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                seconds: (_el: asn1.ASN1Element): void => {
                    seconds = __utils._decodeInteger(_el);
                },
                millis: (_el: asn1.ASN1Element): void => {
                    millis = __utils._decode_implicit<asn1.INTEGER>(
                        () => __utils._decodeInteger
                    )(_el);
                },
                micros: (_el: asn1.ASN1Element): void => {
                    micros = __utils._decode_implicit<asn1.INTEGER>(
                        () => __utils._decodeInteger
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_Accuracy,
                _extension_additions_list_spec_for_Accuracy,
                _root_component_type_list_2_spec_for_Accuracy,
                undefined
            );
            return new Accuracy /* SEQUENCE_CONSTRUCTOR_CALL */(
                seconds,
                millis,
                micros
            );
        };
    }
    return _cached_decoder_for_Accuracy(el);
}
export function _encode_Accuracy(
    value: Accuracy,
    elGetter: __utils.ASN1Encoder<Accuracy>
) {
    if (!_cached_encoder_for_Accuracy) {
        _cached_encoder_for_Accuracy = function (
            value: Accuracy,
            elGetter: __utils.ASN1Encoder<Accuracy>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* IF_ABSENT  */ value.seconds === undefined
                            ? undefined
                            : __utils._encodeInteger(
                                  value.seconds,
                                  __utils.BER
                              ),
                        /* IF_ABSENT  */ value.millis === undefined
                            ? undefined
                            : __utils._encode_implicit(
                                  asn1.ASN1TagClass.context,
                                  0,
                                  () => __utils._encodeInteger,
                                  __utils.BER
                              )(value.millis, __utils.BER),
                        /* IF_ABSENT  */ value.micros === undefined
                            ? undefined
                            : __utils._encode_implicit(
                                  asn1.ASN1TagClass.context,
                                  1,
                                  () => __utils._encodeInteger,
                                  __utils.BER
                              )(value.micros, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_Accuracy(value, elGetter);
}

export class TSTInfo {
    constructor(
        readonly version: TSTInfo_version,
        readonly policy: TSAPolicyId,
        readonly messageImprint: MessageImprint,
        readonly serialNumber: asn1.INTEGER,
        readonly genTime: asn1.GeneralizedTime,
        readonly accuracy: asn1.OPTIONAL<Accuracy>,
        readonly ordering: asn1.OPTIONAL<asn1.BOOLEAN>,
        readonly nonce: asn1.OPTIONAL<asn1.INTEGER>,
        readonly tsa: asn1.OPTIONAL<GeneralName>,
        readonly extensions: asn1.OPTIONAL<Extensions>
    ) {}
    public static get _default_value_for_ordering() {
        return false;
    }
}
export const _root_component_type_list_1_spec_for_TSTInfo: __utils.ComponentSpec[] = [
    new __utils.ComponentSpec(
        "version",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "policy",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 6),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "messageImprint",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "serialNumber",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "genTime",
        false,
        __utils.hasTag(asn1.ASN1TagClass.universal, 24),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "accuracy",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 16),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "ordering",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 1),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "nonce",
        true,
        __utils.hasTag(asn1.ASN1TagClass.universal, 2),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "tsa",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 0),
        undefined,
        undefined
    ),
    new __utils.ComponentSpec(
        "extensions",
        true,
        __utils.hasTag(asn1.ASN1TagClass.context, 1),
        undefined,
        undefined
    ),
];
export const _root_component_type_list_2_spec_for_TSTInfo: __utils.ComponentSpec[] = [];
export const _extension_additions_list_spec_for_TSTInfo: __utils.ComponentSpec[] = [];
let _cached_decoder_for_TSTInfo: __utils.ASN1Decoder<TSTInfo> | null = null;
let _cached_encoder_for_TSTInfo: __utils.ASN1Encoder<TSTInfo> | null = null;
export function _decode_TSTInfo(el: asn1.ASN1Element) {
    if (!_cached_decoder_for_TSTInfo) {
        _cached_decoder_for_TSTInfo = function (el: asn1.ASN1Element): TSTInfo {
            /* START_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            let version!: TSTInfo_version;
            let policy!: TSAPolicyId;
            let messageImprint!: MessageImprint;
            let serialNumber!: asn1.INTEGER;
            let genTime!: asn1.GeneralizedTime;
            let accuracy: asn1.OPTIONAL<Accuracy>;
            let ordering: asn1.OPTIONAL<asn1.BOOLEAN> =
                TSTInfo._default_value_for_ordering;
            let nonce: asn1.OPTIONAL<asn1.INTEGER>;
            let tsa: asn1.OPTIONAL<GeneralName>;
            let extensions: asn1.OPTIONAL<Extensions>;
            /* END_OF_SEQUENCE_COMPONENT_DECLARATIONS */
            /* START_OF_CALLBACKS_MAP */
            const callbacks: __utils.DecodingMap = {
                version: (_el: asn1.ASN1Element): void => {
                    version = _decode_TSTInfo_version(_el);
                },
                policy: (_el: asn1.ASN1Element): void => {
                    policy = _decode_TSAPolicyId(_el);
                },
                messageImprint: (_el: asn1.ASN1Element): void => {
                    messageImprint = _decode_MessageImprint(_el);
                },
                serialNumber: (_el: asn1.ASN1Element): void => {
                    serialNumber = __utils._decodeInteger(_el);
                },
                genTime: (_el: asn1.ASN1Element): void => {
                    genTime = __utils._decodeGeneralizedTime(_el);
                },
                accuracy: (_el: asn1.ASN1Element): void => {
                    accuracy = _decode_Accuracy(_el);
                },
                ordering: (_el: asn1.ASN1Element): void => {
                    ordering = __utils._decodeBoolean(_el);
                },
                nonce: (_el: asn1.ASN1Element): void => {
                    nonce = __utils._decodeInteger(_el);
                },
                tsa: (_el: asn1.ASN1Element): void => {
                    tsa = __utils._decode_implicit<GeneralName>(
                        () => _decode_GeneralName
                    )(_el);
                },
                extensions: (_el: asn1.ASN1Element): void => {
                    extensions = __utils._decode_implicit<Extensions>(
                        () => _decode_Extensions
                    )(_el);
                },
            };
            /* END_OF_CALLBACKS_MAP */
            __utils._parse_sequence(
                el,
                callbacks,
                _root_component_type_list_1_spec_for_TSTInfo,
                _extension_additions_list_spec_for_TSTInfo,
                _root_component_type_list_2_spec_for_TSTInfo,
                undefined
            );
            return new TSTInfo /* SEQUENCE_CONSTRUCTOR_CALL */(
                version,
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
export function _encode_TSTInfo(
    value: TSTInfo,
    elGetter: __utils.ASN1Encoder<TSTInfo>
) {
    if (!_cached_encoder_for_TSTInfo) {
        _cached_encoder_for_TSTInfo = function (
            value: TSTInfo,
            elGetter: __utils.ASN1Encoder<TSTInfo>
        ): asn1.ASN1Element {
            return __utils._encodeSequence(
                ([] as (asn1.ASN1Element | undefined)[])
                    .concat([
                        /* REQUIRED   */ _encode_TSTInfo_version(
                            value.version,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_TSAPolicyId(
                            value.policy,
                            __utils.BER
                        ),
                        /* REQUIRED   */ _encode_MessageImprint(
                            value.messageImprint,
                            __utils.BER
                        ),
                        /* REQUIRED   */ __utils._encodeInteger(
                            value.serialNumber,
                            __utils.BER
                        ),
                        /* REQUIRED   */ __utils._encodeGeneralizedTime(
                            value.genTime,
                            __utils.BER
                        ),
                        /* IF_ABSENT  */ value.accuracy === undefined
                            ? undefined
                            : _encode_Accuracy(value.accuracy, __utils.BER),
                        /* IF_DEFAULT */ value.ordering === undefined ||
                        __utils.deepEq(
                            value.ordering,
                            TSTInfo._default_value_for_ordering
                        )
                            ? undefined
                            : __utils._encodeBoolean(
                                  value.ordering,
                                  __utils.BER
                              ),
                        /* IF_ABSENT  */ value.nonce === undefined
                            ? undefined
                            : __utils._encodeInteger(value.nonce, __utils.BER),
                        /* IF_ABSENT  */ value.tsa === undefined
                            ? undefined
                            : __utils._encode_implicit(
                                  asn1.ASN1TagClass.context,
                                  0,
                                  () => _encode_GeneralName,
                                  __utils.BER
                              )(value.tsa, __utils.BER),
                        /* IF_ABSENT  */ value.extensions === undefined
                            ? undefined
                            : __utils._encode_implicit(
                                  asn1.ASN1TagClass.context,
                                  1,
                                  () => _encode_Extensions,
                                  __utils.BER
                              )(value.extensions, __utils.BER),
                    ])
                    .filter(
                        (c: asn1.ASN1Element | undefined): boolean => !!c
                    ) as asn1.ASN1Element[],
                __utils.BER
            );
        };
    }
    return _cached_encoder_for_TSTInfo(value, elGetter);
}

/* END_MODULE PKIXTSP */
