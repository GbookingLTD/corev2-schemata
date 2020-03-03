# To use this code, make sure you
#
#     import json
#
# and then, to convert JSON from a string, do
#
#     result = common_from_dict(json.loads(json_string))
#     result = models_from_dict(json.loads(json_string))

from enum import Enum
from typing import Optional, Any, List, Dict, Union, TypeVar, Type, cast, Callable


T = TypeVar("T")
EnumT = TypeVar("EnumT", bound=Enum)


def from_str(x: Any) -> str:
    assert isinstance(x, str)
    return x


def from_none(x: Any) -> Any:
    assert x is None
    return x


def from_union(fs, x):
    for f in fs:
        try:
            return f(x)
        except:
            pass
    assert False


def to_enum(c: Type[EnumT], x: Any) -> EnumT:
    assert isinstance(x, c)
    return x.value


def to_class(c: Type[T], x: Any) -> dict:
    assert isinstance(x, c)
    return cast(Any, x).to_dict()


def from_list(f: Callable[[Any], T], x: Any) -> List[T]:
    assert isinstance(x, list)
    return [f(y) for y in x]


def from_bool(x: Any) -> bool:
    assert isinstance(x, bool)
    return x


def from_dict(f: Callable[[Any], T], x: Any) -> Dict[str, T]:
    assert isinstance(x, dict)
    return { k: f(v) for (k, v) in x.items() }


def from_int(x: Any) -> int:
    assert isinstance(x, int) and not isinstance(x, bool)
    return x


class TypeElement(Enum):
    ARRAY = "array"
    BOOLEAN = "boolean"
    NULL = "null"
    NUMBER = "number"
    OBJECT = "object"
    STRING = "string"


class HammerfestPonies:
    description: Optional[str]
    type: TypeElement

    def __init__(self, description: Optional[str], type: TypeElement) -> None:
        self.description = description
        self.type = type

    @staticmethod
    def from_dict(obj: Any) -> 'HammerfestPonies':
        assert isinstance(obj, dict)
        description = from_union([from_str, from_none], obj.get("description"))
        type = TypeElement(obj.get("type"))
        return HammerfestPonies(description, type)

    def to_dict(self) -> dict:
        result: dict = {}
        result["description"] = from_union([from_str, from_none], self.description)
        result["type"] = to_enum(TypeElement, self.type)
        return result


class OneOfProperties:
    user: HammerfestPonies
    token: HammerfestPonies

    def __init__(self, user: HammerfestPonies, token: HammerfestPonies) -> None:
        self.user = user
        self.token = token

    @staticmethod
    def from_dict(obj: Any) -> 'OneOfProperties':
        assert isinstance(obj, dict)
        user = HammerfestPonies.from_dict(obj.get("user"))
        token = HammerfestPonies.from_dict(obj.get("token"))
        return OneOfProperties(user, token)

    def to_dict(self) -> dict:
        result: dict = {}
        result["user"] = to_class(HammerfestPonies, self.user)
        result["token"] = to_class(HammerfestPonies, self.token)
        return result


class CredOneOf:
    type: TypeElement
    params: Optional[List[Any]]
    required: List[str]
    additional_properties: bool
    properties: Optional[OneOfProperties]

    def __init__(self, type: TypeElement, params: Optional[List[Any]], required: List[str], additional_properties: bool, properties: Optional[OneOfProperties]) -> None:
        self.type = type
        self.params = params
        self.required = required
        self.additional_properties = additional_properties
        self.properties = properties

    @staticmethod
    def from_dict(obj: Any) -> 'CredOneOf':
        assert isinstance(obj, dict)
        type = TypeElement(obj.get("type"))
        params = from_union([lambda x: from_list(lambda x: x, x), from_none], obj.get("params"))
        required = from_list(from_str, obj.get("required"))
        additional_properties = from_bool(obj.get("additionalProperties"))
        properties = from_union([OneOfProperties.from_dict, from_none], obj.get("properties"))
        return CredOneOf(type, params, required, additional_properties, properties)

    def to_dict(self) -> dict:
        result: dict = {}
        result["type"] = to_enum(TypeElement, self.type)
        result["params"] = from_union([lambda x: from_list(lambda x: x, x), from_none], self.params)
        result["required"] = from_list(from_str, self.required)
        result["additionalProperties"] = from_bool(self.additional_properties)
        result["properties"] = from_union([lambda x: to_class(OneOfProperties, x), from_none], self.properties)
        return result


class Cred:
    description: str
    one_of: List[CredOneOf]

    def __init__(self, description: str, one_of: List[CredOneOf]) -> None:
        self.description = description
        self.one_of = one_of

    @staticmethod
    def from_dict(obj: Any) -> 'Cred':
        assert isinstance(obj, dict)
        description = from_str(obj.get("description"))
        one_of = from_list(CredOneOf.from_dict, obj.get("oneOf"))
        return Cred(description, one_of)

    def to_dict(self) -> dict:
        result: dict = {}
        result["description"] = from_str(self.description)
        result["oneOf"] = from_list(lambda x: to_class(CredOneOf, x), self.one_of)
        return result


class Code:
    description: str
    type: TypeElement
    meta_enum: Dict[str, str]
    enum: List[int]

    def __init__(self, description: str, type: TypeElement, meta_enum: Dict[str, str], enum: List[int]) -> None:
        self.description = description
        self.type = type
        self.meta_enum = meta_enum
        self.enum = enum

    @staticmethod
    def from_dict(obj: Any) -> 'Code':
        assert isinstance(obj, dict)
        description = from_str(obj.get("description"))
        type = TypeElement(obj.get("type"))
        meta_enum = from_dict(from_str, obj.get("meta:enum"))
        enum = from_list(from_int, obj.get("enum"))
        return Code(description, type, meta_enum, enum)

    def to_dict(self) -> dict:
        result: dict = {}
        result["description"] = from_str(self.description)
        result["type"] = to_enum(TypeElement, self.type)
        result["meta:enum"] = from_dict(from_str, self.meta_enum)
        result["enum"] = from_list(from_int, self.enum)
        return result


class ErrorProperties:
    code: Code
    message: HammerfestPonies
    data: HammerfestPonies

    def __init__(self, code: Code, message: HammerfestPonies, data: HammerfestPonies) -> None:
        self.code = code
        self.message = message
        self.data = data

    @staticmethod
    def from_dict(obj: Any) -> 'ErrorProperties':
        assert isinstance(obj, dict)
        code = Code.from_dict(obj.get("code"))
        message = HammerfestPonies.from_dict(obj.get("message"))
        data = HammerfestPonies.from_dict(obj.get("data"))
        return ErrorProperties(code, message, data)

    def to_dict(self) -> dict:
        result: dict = {}
        result["code"] = to_class(Code, self.code)
        result["message"] = to_class(HammerfestPonies, self.message)
        result["data"] = to_class(HammerfestPonies, self.data)
        return result


class Error:
    description: str
    type: TypeElement
    properties: ErrorProperties
    required: List[str]

    def __init__(self, description: str, type: TypeElement, properties: ErrorProperties, required: List[str]) -> None:
        self.description = description
        self.type = type
        self.properties = properties
        self.required = required

    @staticmethod
    def from_dict(obj: Any) -> 'Error':
        assert isinstance(obj, dict)
        description = from_str(obj.get("description"))
        type = TypeElement(obj.get("type"))
        properties = ErrorProperties.from_dict(obj.get("properties"))
        required = from_list(from_str, obj.get("required"))
        return Error(description, type, properties, required)

    def to_dict(self) -> dict:
        result: dict = {}
        result["description"] = from_str(self.description)
        result["type"] = to_enum(TypeElement, self.type)
        result["properties"] = to_class(ErrorProperties, self.properties)
        result["required"] = from_list(from_str, self.required)
        return result


class ID:
    description: str
    type: Union[List[TypeElement], TypeElement]

    def __init__(self, description: str, type: Union[List[TypeElement], TypeElement]) -> None:
        self.description = description
        self.type = type

    @staticmethod
    def from_dict(obj: Any) -> 'ID':
        assert isinstance(obj, dict)
        description = from_str(obj.get("description"))
        type = from_union([lambda x: from_list(TypeElement, x), TypeElement], obj.get("type"))
        return ID(description, type)

    def to_dict(self) -> dict:
        result: dict = {}
        result["description"] = from_str(self.description)
        result["type"] = from_union([lambda x: from_list(lambda x: to_enum(TypeElement, x), x), lambda x: to_enum(TypeElement, x)], self.type)
        return result


class Jsonrpc:
    description: str
    type: TypeElement
    const: str

    def __init__(self, description: str, type: TypeElement, const: str) -> None:
        self.description = description
        self.type = type
        self.const = const

    @staticmethod
    def from_dict(obj: Any) -> 'Jsonrpc':
        assert isinstance(obj, dict)
        description = from_str(obj.get("description"))
        type = TypeElement(obj.get("type"))
        const = from_str(obj.get("const"))
        return Jsonrpc(description, type, const)

    def to_dict(self) -> dict:
        result: dict = {}
        result["description"] = from_str(self.description)
        result["type"] = to_enum(TypeElement, self.type)
        result["const"] = from_str(self.const)
        return result


class CommonProperties:
    jsonrpc: Jsonrpc
    id: ID
    error: Optional[Error]
    cred: Optional[Cred]
    method: Optional[HammerfestPonies]
    params: Optional[HammerfestPonies]
    result: Optional[HammerfestPonies]

    def __init__(self, jsonrpc: Jsonrpc, id: ID, error: Optional[Error], cred: Optional[Cred], method: Optional[HammerfestPonies], params: Optional[HammerfestPonies], result: Optional[HammerfestPonies]) -> None:
        self.jsonrpc = jsonrpc
        self.id = id
        self.error = error
        self.cred = cred
        self.method = method
        self.params = params
        self.result = result

    @staticmethod
    def from_dict(obj: Any) -> 'CommonProperties':
        assert isinstance(obj, dict)
        jsonrpc = Jsonrpc.from_dict(obj.get("jsonrpc"))
        id = ID.from_dict(obj.get("id"))
        error = from_union([Error.from_dict, from_none], obj.get("error"))
        cred = from_union([Cred.from_dict, from_none], obj.get("cred"))
        method = from_union([HammerfestPonies.from_dict, from_none], obj.get("method"))
        params = from_union([HammerfestPonies.from_dict, from_none], obj.get("params"))
        result = from_union([HammerfestPonies.from_dict, from_none], obj.get("result"))
        return CommonProperties(jsonrpc, id, error, cred, method, params, result)

    def to_dict(self) -> dict:
        result: dict = {}
        result["jsonrpc"] = to_class(Jsonrpc, self.jsonrpc)
        result["id"] = to_class(ID, self.id)
        result["error"] = from_union([lambda x: to_class(Error, x), from_none], self.error)
        result["cred"] = from_union([lambda x: to_class(Cred, x), from_none], self.cred)
        result["method"] = from_union([lambda x: to_class(HammerfestPonies, x), from_none], self.method)
        result["params"] = from_union([lambda x: to_class(HammerfestPonies, x), from_none], self.params)
        result["result"] = from_union([lambda x: to_class(HammerfestPonies, x), from_none], self.result)
        return result


class Common:
    id: str
    title: str
    properties: CommonProperties
    required: List[str]
    additional_properties: bool
    description: Optional[str]

    def __init__(self, id: str, title: str, properties: CommonProperties, required: List[str], additional_properties: bool, description: Optional[str]) -> None:
        self.id = id
        self.title = title
        self.properties = properties
        self.required = required
        self.additional_properties = additional_properties
        self.description = description

    @staticmethod
    def from_dict(obj: Any) -> 'Common':
        assert isinstance(obj, dict)
        id = from_str(obj.get("$id"))
        title = from_str(obj.get("title"))
        properties = CommonProperties.from_dict(obj.get("properties"))
        required = from_list(from_str, obj.get("required"))
        additional_properties = from_bool(obj.get("additionalProperties"))
        description = from_union([from_str, from_none], obj.get("description"))
        return Common(id, title, properties, required, additional_properties, description)

    def to_dict(self) -> dict:
        result: dict = {}
        result["$id"] = from_str(self.id)
        result["title"] = from_str(self.title)
        result["properties"] = to_class(CommonProperties, self.properties)
        result["required"] = from_list(from_str, self.required)
        result["additionalProperties"] = from_bool(self.additional_properties)
        result["description"] = from_union([from_str, from_none], self.description)
        return result


class Amount:
    description: str
    type: TypeElement
    default: int

    def __init__(self, description: str, type: TypeElement, default: int) -> None:
        self.description = description
        self.type = type
        self.default = default

    @staticmethod
    def from_dict(obj: Any) -> 'Amount':
        assert isinstance(obj, dict)
        description = from_str(obj.get("description"))
        type = TypeElement(obj.get("type"))
        default = int(from_str(obj.get("default")))
        return Amount(description, type, default)

    def to_dict(self) -> dict:
        result: dict = {}
        result["description"] = from_str(self.description)
        result["type"] = to_enum(TypeElement, self.type)
        result["default"] = from_str(str(self.default))
        return result


class Currency:
    description: str
    ref: str

    def __init__(self, description: str, ref: str) -> None:
        self.description = description
        self.ref = ref

    @staticmethod
    def from_dict(obj: Any) -> 'Currency':
        assert isinstance(obj, dict)
        description = from_str(obj.get("description"))
        ref = from_str(obj.get("$ref"))
        return Currency(description, ref)

    def to_dict(self) -> dict:
        result: dict = {}
        result["description"] = from_str(self.description)
        result["$ref"] = from_str(self.ref)
        return result


class TypeMetaEnum:
    equal: Optional[str]
    begin_with: Optional[str]
    average: Optional[str]

    def __init__(self, equal: Optional[str], begin_with: Optional[str], average: Optional[str]) -> None:
        self.equal = equal
        self.begin_with = begin_with
        self.average = average

    @staticmethod
    def from_dict(obj: Any) -> 'TypeMetaEnum':
        assert isinstance(obj, dict)
        equal = from_union([from_str, from_none], obj.get("equal"))
        begin_with = from_union([from_str, from_none], obj.get("begin_with"))
        average = from_union([from_str, from_none], obj.get("average"))
        return TypeMetaEnum(equal, begin_with, average)

    def to_dict(self) -> dict:
        result: dict = {}
        result["equal"] = from_union([from_str, from_none], self.equal)
        result["begin_with"] = from_union([from_str, from_none], self.begin_with)
        result["average"] = from_union([from_str, from_none], self.average)
        return result


class TypeClass:
    description: str
    type: TypeElement
    enum: List[str]
    meta_enum: Optional[List[TypeMetaEnum]]

    def __init__(self, description: str, type: TypeElement, enum: List[str], meta_enum: Optional[List[TypeMetaEnum]]) -> None:
        self.description = description
        self.type = type
        self.enum = enum
        self.meta_enum = meta_enum

    @staticmethod
    def from_dict(obj: Any) -> 'TypeClass':
        assert isinstance(obj, dict)
        description = from_str(obj.get("description"))
        type = TypeElement(obj.get("type"))
        enum = from_list(from_str, obj.get("enum"))
        meta_enum = from_union([lambda x: from_list(TypeMetaEnum.from_dict, x), from_none], obj.get("meta:enum"))
        return TypeClass(description, type, enum, meta_enum)

    def to_dict(self) -> dict:
        result: dict = {}
        result["description"] = from_str(self.description)
        result["type"] = to_enum(TypeElement, self.type)
        result["enum"] = from_list(from_str, self.enum)
        result["meta:enum"] = from_union([lambda x: from_list(lambda x: to_class(TypeMetaEnum, x), x), from_none], self.meta_enum)
        return result


class AdditionalBusinessTaxonomyPriceProperties:
    resource_level: HammerfestPonies
    currency: Currency
    amount: Amount
    stock_amount: Amount
    type: TypeClass

    def __init__(self, resource_level: HammerfestPonies, currency: Currency, amount: Amount, stock_amount: Amount, type: TypeClass) -> None:
        self.resource_level = resource_level
        self.currency = currency
        self.amount = amount
        self.stock_amount = stock_amount
        self.type = type

    @staticmethod
    def from_dict(obj: Any) -> 'AdditionalBusinessTaxonomyPriceProperties':
        assert isinstance(obj, dict)
        resource_level = HammerfestPonies.from_dict(obj.get("resourceLevel"))
        currency = Currency.from_dict(obj.get("currency"))
        amount = Amount.from_dict(obj.get("amount"))
        stock_amount = Amount.from_dict(obj.get("stockAmount"))
        type = TypeClass.from_dict(obj.get("type"))
        return AdditionalBusinessTaxonomyPriceProperties(resource_level, currency, amount, stock_amount, type)

    def to_dict(self) -> dict:
        result: dict = {}
        result["resourceLevel"] = to_class(HammerfestPonies, self.resource_level)
        result["currency"] = to_class(Currency, self.currency)
        result["amount"] = to_class(Amount, self.amount)
        result["stockAmount"] = to_class(Amount, self.stock_amount)
        result["type"] = to_class(TypeClass, self.type)
        return result


class AdditionalBusinessTaxonomyPrice:
    title: str
    type: TypeElement
    properties: AdditionalBusinessTaxonomyPriceProperties
    required: List[str]
    additional_properties: bool

    def __init__(self, title: str, type: TypeElement, properties: AdditionalBusinessTaxonomyPriceProperties, required: List[str], additional_properties: bool) -> None:
        self.title = title
        self.type = type
        self.properties = properties
        self.required = required
        self.additional_properties = additional_properties

    @staticmethod
    def from_dict(obj: Any) -> 'AdditionalBusinessTaxonomyPrice':
        assert isinstance(obj, dict)
        title = from_str(obj.get("title"))
        type = TypeElement(obj.get("type"))
        properties = AdditionalBusinessTaxonomyPriceProperties.from_dict(obj.get("properties"))
        required = from_list(from_str, obj.get("required"))
        additional_properties = from_bool(obj.get("additionalProperties"))
        return AdditionalBusinessTaxonomyPrice(title, type, properties, required, additional_properties)

    def to_dict(self) -> dict:
        result: dict = {}
        result["title"] = from_str(self.title)
        result["type"] = to_enum(TypeElement, self.type)
        result["properties"] = to_class(AdditionalBusinessTaxonomyPriceProperties, self.properties)
        result["required"] = from_list(from_str, self.required)
        result["additionalProperties"] = from_bool(self.additional_properties)
        return result


class AdditionalBusinessTaxonomyProductProperties:
    id: HammerfestPonies
    extra_id: HammerfestPonies
    required: HammerfestPonies

    def __init__(self, id: HammerfestPonies, extra_id: HammerfestPonies, required: HammerfestPonies) -> None:
        self.id = id
        self.extra_id = extra_id
        self.required = required

    @staticmethod
    def from_dict(obj: Any) -> 'AdditionalBusinessTaxonomyProductProperties':
        assert isinstance(obj, dict)
        id = HammerfestPonies.from_dict(obj.get("id"))
        extra_id = HammerfestPonies.from_dict(obj.get("extraID"))
        required = HammerfestPonies.from_dict(obj.get("required"))
        return AdditionalBusinessTaxonomyProductProperties(id, extra_id, required)

    def to_dict(self) -> dict:
        result: dict = {}
        result["id"] = to_class(HammerfestPonies, self.id)
        result["extraID"] = to_class(HammerfestPonies, self.extra_id)
        result["required"] = to_class(HammerfestPonies, self.required)
        return result


class AdditionalBusinessTaxonomyProduct:
    title: str
    type: TypeElement
    properties: AdditionalBusinessTaxonomyProductProperties
    required: List[str]
    additional_properties: bool

    def __init__(self, title: str, type: TypeElement, properties: AdditionalBusinessTaxonomyProductProperties, required: List[str], additional_properties: bool) -> None:
        self.title = title
        self.type = type
        self.properties = properties
        self.required = required
        self.additional_properties = additional_properties

    @staticmethod
    def from_dict(obj: Any) -> 'AdditionalBusinessTaxonomyProduct':
        assert isinstance(obj, dict)
        title = from_str(obj.get("title"))
        type = TypeElement(obj.get("type"))
        properties = AdditionalBusinessTaxonomyProductProperties.from_dict(obj.get("properties"))
        required = from_list(from_str, obj.get("required"))
        additional_properties = from_bool(obj.get("additionalProperties"))
        return AdditionalBusinessTaxonomyProduct(title, type, properties, required, additional_properties)

    def to_dict(self) -> dict:
        result: dict = {}
        result["title"] = from_str(self.title)
        result["type"] = to_enum(TypeElement, self.type)
        result["properties"] = to_class(AdditionalBusinessTaxonomyProductProperties, self.properties)
        result["required"] = from_list(from_str, self.required)
        result["additionalProperties"] = from_bool(self.additional_properties)
        return result


class Birthday:
    type: List[TypeElement]

    def __init__(self, type: List[TypeElement]) -> None:
        self.type = type

    @staticmethod
    def from_dict(obj: Any) -> 'Birthday':
        assert isinstance(obj, dict)
        type = from_list(TypeElement, obj.get("type"))
        return Birthday(type)

    def to_dict(self) -> dict:
        result: dict = {}
        result["type"] = from_list(lambda x: to_enum(TypeElement, x), self.type)
        return result


class BeijingPigeon:
    type: TypeElement

    def __init__(self, type: TypeElement) -> None:
        self.type = type

    @staticmethod
    def from_dict(obj: Any) -> 'BeijingPigeon':
        assert isinstance(obj, dict)
        type = TypeElement(obj.get("type"))
        return BeijingPigeon(type)

    def to_dict(self) -> dict:
        result: dict = {}
        result["type"] = to_enum(TypeElement, self.type)
        return result


class AdditionalDurationProperties:
    level: BeijingPigeon
    duration: Birthday

    def __init__(self, level: BeijingPigeon, duration: Birthday) -> None:
        self.level = level
        self.duration = duration

    @staticmethod
    def from_dict(obj: Any) -> 'AdditionalDurationProperties':
        assert isinstance(obj, dict)
        level = BeijingPigeon.from_dict(obj.get("level"))
        duration = Birthday.from_dict(obj.get("duration"))
        return AdditionalDurationProperties(level, duration)

    def to_dict(self) -> dict:
        result: dict = {}
        result["level"] = to_class(BeijingPigeon, self.level)
        result["duration"] = to_class(Birthday, self.duration)
        return result


class AdditionalDuration:
    title: str
    type: TypeElement
    properties: AdditionalDurationProperties
    additional_properties: bool

    def __init__(self, title: str, type: TypeElement, properties: AdditionalDurationProperties, additional_properties: bool) -> None:
        self.title = title
        self.type = type
        self.properties = properties
        self.additional_properties = additional_properties

    @staticmethod
    def from_dict(obj: Any) -> 'AdditionalDuration':
        assert isinstance(obj, dict)
        title = from_str(obj.get("title"))
        type = TypeElement(obj.get("type"))
        properties = AdditionalDurationProperties.from_dict(obj.get("properties"))
        additional_properties = from_bool(obj.get("additionalProperties"))
        return AdditionalDuration(title, type, properties, additional_properties)

    def to_dict(self) -> dict:
        result: dict = {}
        result["title"] = from_str(self.title)
        result["type"] = to_enum(TypeElement, self.type)
        result["properties"] = to_class(AdditionalDurationProperties, self.properties)
        result["additionalProperties"] = from_bool(self.additional_properties)
        return result


class TrapaniSnowLeopard:
    type: TypeElement
    default: int

    def __init__(self, type: TypeElement, default: int) -> None:
        self.type = type
        self.default = default

    @staticmethod
    def from_dict(obj: Any) -> 'TrapaniSnowLeopard':
        assert isinstance(obj, dict)
        type = TypeElement(obj.get("type"))
        default = from_int(obj.get("default"))
        return TrapaniSnowLeopard(type, default)

    def to_dict(self) -> dict:
        result: dict = {}
        result["type"] = to_enum(TypeElement, self.type)
        result["default"] = from_int(self.default)
        return result


class ChiangMaiGoose:
    type: TypeElement
    default: bool

    def __init__(self, type: TypeElement, default: bool) -> None:
        self.type = type
        self.default = default

    @staticmethod
    def from_dict(obj: Any) -> 'ChiangMaiGoose':
        assert isinstance(obj, dict)
        type = TypeElement(obj.get("type"))
        default = from_bool(obj.get("default"))
        return ChiangMaiGoose(type, default)

    def to_dict(self) -> dict:
        result: dict = {}
        result["type"] = to_enum(TypeElement, self.type)
        result["default"] = from_bool(self.default)
        return result


class FeedBackMinRating:
    type: TypeElement
    enum: List[int]
    default: int

    def __init__(self, type: TypeElement, enum: List[int], default: int) -> None:
        self.type = type
        self.enum = enum
        self.default = default

    @staticmethod
    def from_dict(obj: Any) -> 'FeedBackMinRating':
        assert isinstance(obj, dict)
        type = TypeElement(obj.get("type"))
        enum = from_list(lambda x: int(from_str(x)), obj.get("enum"))
        default = from_int(obj.get("default"))
        return FeedBackMinRating(type, enum, default)

    def to_dict(self) -> dict:
        result: dict = {}
        result["type"] = to_enum(TypeElement, self.type)
        result["enum"] = from_list(lambda x: from_str((lambda x: str(x))(x)), self.enum)
        result["default"] = from_int(self.default)
        return result


class BackofficeType:
    type: TypeElement
    enum: Optional[List[str]]

    def __init__(self, type: TypeElement, enum: Optional[List[str]]) -> None:
        self.type = type
        self.enum = enum

    @staticmethod
    def from_dict(obj: Any) -> 'BackofficeType':
        assert isinstance(obj, dict)
        type = TypeElement(obj.get("type"))
        enum = from_union([lambda x: from_list(from_str, x), from_none], obj.get("enum"))
        return BackofficeType(type, enum)

    def to_dict(self) -> dict:
        result: dict = {}
        result["type"] = to_enum(TypeElement, self.type)
        result["enum"] = from_union([lambda x: from_list(from_str, x), from_none], self.enum)
        return result


class PurpleMetaEnum:
    plan_clinic: Optional[str]
    plan_clinic_online: Optional[str]
    oncall_online: Optional[str]
    plan_online: Optional[str]

    def __init__(self, plan_clinic: Optional[str], plan_clinic_online: Optional[str], oncall_online: Optional[str], plan_online: Optional[str]) -> None:
        self.plan_clinic = plan_clinic
        self.plan_clinic_online = plan_clinic_online
        self.oncall_online = oncall_online
        self.plan_online = plan_online

    @staticmethod
    def from_dict(obj: Any) -> 'PurpleMetaEnum':
        assert isinstance(obj, dict)
        plan_clinic = from_union([from_str, from_none], obj.get("PLAN_CLINIC"))
        plan_clinic_online = from_union([from_str, from_none], obj.get("PLAN_CLINIC_ONLINE"))
        oncall_online = from_union([from_str, from_none], obj.get("ONCALL_ONLINE"))
        plan_online = from_union([from_str, from_none], obj.get("PLAN_ONLINE"))
        return PurpleMetaEnum(plan_clinic, plan_clinic_online, oncall_online, plan_online)

    def to_dict(self) -> dict:
        result: dict = {}
        result["PLAN_CLINIC"] = from_union([from_str, from_none], self.plan_clinic)
        result["PLAN_CLINIC_ONLINE"] = from_union([from_str, from_none], self.plan_clinic_online)
        result["ONCALL_ONLINE"] = from_union([from_str, from_none], self.oncall_online)
        result["PLAN_ONLINE"] = from_union([from_str, from_none], self.plan_online)
        return result


class Repeats:
    type: TypeElement
    enum: List[str]
    default: str
    meta_enum: Optional[List[PurpleMetaEnum]]

    def __init__(self, type: TypeElement, enum: List[str], default: str, meta_enum: Optional[List[PurpleMetaEnum]]) -> None:
        self.type = type
        self.enum = enum
        self.default = default
        self.meta_enum = meta_enum

    @staticmethod
    def from_dict(obj: Any) -> 'Repeats':
        assert isinstance(obj, dict)
        type = TypeElement(obj.get("type"))
        enum = from_list(from_str, obj.get("enum"))
        default = from_str(obj.get("default"))
        meta_enum = from_union([lambda x: from_list(PurpleMetaEnum.from_dict, x), from_none], obj.get("meta:enum"))
        return Repeats(type, enum, default, meta_enum)

    def to_dict(self) -> dict:
        result: dict = {}
        result["type"] = to_enum(TypeElement, self.type)
        result["enum"] = from_list(from_str, self.enum)
        result["default"] = from_str(self.default)
        result["meta:enum"] = from_union([lambda x: from_list(lambda x: to_class(PurpleMetaEnum, x), x), from_none], self.meta_enum)
        return result


class DefaultFilteredWorkers:
    type: TypeElement
    items: BeijingPigeon

    def __init__(self, type: TypeElement, items: BeijingPigeon) -> None:
        self.type = type
        self.items = items

    @staticmethod
    def from_dict(obj: Any) -> 'DefaultFilteredWorkers':
        assert isinstance(obj, dict)
        type = TypeElement(obj.get("type"))
        items = BeijingPigeon.from_dict(obj.get("items"))
        return DefaultFilteredWorkers(type, items)

    def to_dict(self) -> dict:
        result: dict = {}
        result["type"] = to_enum(TypeElement, self.type)
        result["items"] = to_class(BeijingPigeon, self.items)
        return result


class BackofficeConfigurationProperties:
    revision_version: BeijingPigeon
    schedule_default_workers_limit: TrapaniSnowLeopard
    resource_timetable_type: Repeats
    enable_master_importance: ChiangMaiGoose
    show_test_record: ChiangMaiGoose
    skip_service_filtering: ChiangMaiGoose
    skip_appointment_price_update: ChiangMaiGoose
    show_manual_changes: ChiangMaiGoose
    enable_extended_records_client_statistics: ChiangMaiGoose
    past_time_edit: TrapaniSnowLeopard
    cabinets_enabled: ChiangMaiGoose
    appointment_future_moving: ChiangMaiGoose
    show_client_contract_number: ChiangMaiGoose
    show_gap_window: ChiangMaiGoose
    show_first_available_slot: ChiangMaiGoose
    no_internet_alert: ChiangMaiGoose
    show_worker_description_in_event: ChiangMaiGoose
    schdule_week_view_is_default: ChiangMaiGoose
    show_passport_id: ChiangMaiGoose
    show_fax: ChiangMaiGoose
    show_birth_date: ChiangMaiGoose
    show_email: ChiangMaiGoose
    show_address: ChiangMaiGoose
    show_israel_city: ChiangMaiGoose
    show_house_number: ChiangMaiGoose
    show_kupat_holim: ChiangMaiGoose
    show_department_filter: ChiangMaiGoose
    show_departments: ChiangMaiGoose
    show_departments_configuration: ChiangMaiGoose
    show_rooms: ChiangMaiGoose
    show_client_appear_on_schedule: ChiangMaiGoose
    show_client_appear: ChiangMaiGoose
    skip_cancel_if_client_not_appear: ChiangMaiGoose
    show_client_payment: ChiangMaiGoose
    show_extra_client_info: ChiangMaiGoose
    show_utm: ChiangMaiGoose
    show_worker_status: ChiangMaiGoose
    enable_black_list: ChiangMaiGoose
    enable_calculate_shedule: ChiangMaiGoose
    show_season_tickets: ChiangMaiGoose
    show_leads_screen: ChiangMaiGoose
    show_generatable_reports_screen: ChiangMaiGoose
    scheduler_week_view_type: Repeats
    work_week_start: TrapaniSnowLeopard
    work_week_end: TrapaniSnowLeopard
    schedule_worker_hours: ChiangMaiGoose
    show_taxonomy_localization: ChiangMaiGoose
    highlighted_resource: ChiangMaiGoose
    show_additional_fields: ChiangMaiGoose
    export_to_excel_removed_clients: ChiangMaiGoose
    check_client_overlapping: ChiangMaiGoose
    hide_customer_portal_footer: ChiangMaiGoose
    readonly_resource_schedule: ChiangMaiGoose
    show_client_image: ChiangMaiGoose
    state_level_holidays: DefaultFilteredWorkers
    state_level_holidays_not_working: ChiangMaiGoose
    payment_provider: BackofficeType
    show_defaulter_blockscreen: ChiangMaiGoose
    allow_sms_translit: ChiangMaiGoose
    default_gt_schedule_day_view: ChiangMaiGoose
    enable_source_choice: ChiangMaiGoose
    manual_exception_support: ChiangMaiGoose
    show_worker_extra_id: ChiangMaiGoose
    edit_app_extra_id: ChiangMaiGoose
    use_gt_app_method: ChiangMaiGoose
    disable_appointment_client_inline_editor: ChiangMaiGoose
    enable_client_card: ChiangMaiGoose
    enable_client_medical_card_report: ChiangMaiGoose
    enable_custom_online_payment_confirmation: ChiangMaiGoose
    custom_online_payment_confirmation_template: ChiangMaiGoose
    show_fired_worker_appointment_alert: ChiangMaiGoose
    show_delivery_status: ChiangMaiGoose
    show_taxonomy_children: ChiangMaiGoose
    edit_taxonomy_children: ChiangMaiGoose
    show_taxonomy_visit_type: ChiangMaiGoose
    edit_taxonomy_visit_type: ChiangMaiGoose
    fin_id: BeijingPigeon
    fin_name: BeijingPigeon
    enable_service_time_limit: ChiangMaiGoose
    show_gender: ChiangMaiGoose
    show_gender_in_records: ChiangMaiGoose
    show_widget_color_theme: ChiangMaiGoose
    enable_extended_phone: ChiangMaiGoose
    enable_taxonomy_children_age_check: ChiangMaiGoose
    taxonomy_children_max_age: BeijingPigeon
    use_adjacent_taxonomies: ChiangMaiGoose
    use_additional_durations: ChiangMaiGoose
    split_full_name_xls_export: ChiangMaiGoose
    use_adjacent_taxonomies_slot_splitting: ChiangMaiGoose
    adjacent_taxonomies_treshold: TrapaniSnowLeopard
    allow_hide_workers_from_schdeule: ChiangMaiGoose
    allow_hide_service_for_booking: ChiangMaiGoose
    block_notification_for_any_available_adjacent_service: ChiangMaiGoose
    feedback_customer_portal_message: BeijingPigeon
    feedback_customer_portal_title: BeijingPigeon
    feedback_customer_portal_thank_you_message: BeijingPigeon
    feed_back_min_rating: FeedBackMinRating
    enable_client_language: ChiangMaiGoose
    show_client_birthday_filter: ChiangMaiGoose

    def __init__(self, revision_version: BeijingPigeon, schedule_default_workers_limit: TrapaniSnowLeopard, resource_timetable_type: Repeats, enable_master_importance: ChiangMaiGoose, show_test_record: ChiangMaiGoose, skip_service_filtering: ChiangMaiGoose, skip_appointment_price_update: ChiangMaiGoose, show_manual_changes: ChiangMaiGoose, enable_extended_records_client_statistics: ChiangMaiGoose, past_time_edit: TrapaniSnowLeopard, cabinets_enabled: ChiangMaiGoose, appointment_future_moving: ChiangMaiGoose, show_client_contract_number: ChiangMaiGoose, show_gap_window: ChiangMaiGoose, show_first_available_slot: ChiangMaiGoose, no_internet_alert: ChiangMaiGoose, show_worker_description_in_event: ChiangMaiGoose, schdule_week_view_is_default: ChiangMaiGoose, show_passport_id: ChiangMaiGoose, show_fax: ChiangMaiGoose, show_birth_date: ChiangMaiGoose, show_email: ChiangMaiGoose, show_address: ChiangMaiGoose, show_israel_city: ChiangMaiGoose, show_house_number: ChiangMaiGoose, show_kupat_holim: ChiangMaiGoose, show_department_filter: ChiangMaiGoose, show_departments: ChiangMaiGoose, show_departments_configuration: ChiangMaiGoose, show_rooms: ChiangMaiGoose, show_client_appear_on_schedule: ChiangMaiGoose, show_client_appear: ChiangMaiGoose, skip_cancel_if_client_not_appear: ChiangMaiGoose, show_client_payment: ChiangMaiGoose, show_extra_client_info: ChiangMaiGoose, show_utm: ChiangMaiGoose, show_worker_status: ChiangMaiGoose, enable_black_list: ChiangMaiGoose, enable_calculate_shedule: ChiangMaiGoose, show_season_tickets: ChiangMaiGoose, show_leads_screen: ChiangMaiGoose, show_generatable_reports_screen: ChiangMaiGoose, scheduler_week_view_type: Repeats, work_week_start: TrapaniSnowLeopard, work_week_end: TrapaniSnowLeopard, schedule_worker_hours: ChiangMaiGoose, show_taxonomy_localization: ChiangMaiGoose, highlighted_resource: ChiangMaiGoose, show_additional_fields: ChiangMaiGoose, export_to_excel_removed_clients: ChiangMaiGoose, check_client_overlapping: ChiangMaiGoose, hide_customer_portal_footer: ChiangMaiGoose, readonly_resource_schedule: ChiangMaiGoose, show_client_image: ChiangMaiGoose, state_level_holidays: DefaultFilteredWorkers, state_level_holidays_not_working: ChiangMaiGoose, payment_provider: BackofficeType, show_defaulter_blockscreen: ChiangMaiGoose, allow_sms_translit: ChiangMaiGoose, default_gt_schedule_day_view: ChiangMaiGoose, enable_source_choice: ChiangMaiGoose, manual_exception_support: ChiangMaiGoose, show_worker_extra_id: ChiangMaiGoose, edit_app_extra_id: ChiangMaiGoose, use_gt_app_method: ChiangMaiGoose, disable_appointment_client_inline_editor: ChiangMaiGoose, enable_client_card: ChiangMaiGoose, enable_client_medical_card_report: ChiangMaiGoose, enable_custom_online_payment_confirmation: ChiangMaiGoose, custom_online_payment_confirmation_template: ChiangMaiGoose, show_fired_worker_appointment_alert: ChiangMaiGoose, show_delivery_status: ChiangMaiGoose, show_taxonomy_children: ChiangMaiGoose, edit_taxonomy_children: ChiangMaiGoose, show_taxonomy_visit_type: ChiangMaiGoose, edit_taxonomy_visit_type: ChiangMaiGoose, fin_id: BeijingPigeon, fin_name: BeijingPigeon, enable_service_time_limit: ChiangMaiGoose, show_gender: ChiangMaiGoose, show_gender_in_records: ChiangMaiGoose, show_widget_color_theme: ChiangMaiGoose, enable_extended_phone: ChiangMaiGoose, enable_taxonomy_children_age_check: ChiangMaiGoose, taxonomy_children_max_age: BeijingPigeon, use_adjacent_taxonomies: ChiangMaiGoose, use_additional_durations: ChiangMaiGoose, split_full_name_xls_export: ChiangMaiGoose, use_adjacent_taxonomies_slot_splitting: ChiangMaiGoose, adjacent_taxonomies_treshold: TrapaniSnowLeopard, allow_hide_workers_from_schdeule: ChiangMaiGoose, allow_hide_service_for_booking: ChiangMaiGoose, block_notification_for_any_available_adjacent_service: ChiangMaiGoose, feedback_customer_portal_message: BeijingPigeon, feedback_customer_portal_title: BeijingPigeon, feedback_customer_portal_thank_you_message: BeijingPigeon, feed_back_min_rating: FeedBackMinRating, enable_client_language: ChiangMaiGoose, show_client_birthday_filter: ChiangMaiGoose) -> None:
        self.revision_version = revision_version
        self.schedule_default_workers_limit = schedule_default_workers_limit
        self.resource_timetable_type = resource_timetable_type
        self.enable_master_importance = enable_master_importance
        self.show_test_record = show_test_record
        self.skip_service_filtering = skip_service_filtering
        self.skip_appointment_price_update = skip_appointment_price_update
        self.show_manual_changes = show_manual_changes
        self.enable_extended_records_client_statistics = enable_extended_records_client_statistics
        self.past_time_edit = past_time_edit
        self.cabinets_enabled = cabinets_enabled
        self.appointment_future_moving = appointment_future_moving
        self.show_client_contract_number = show_client_contract_number
        self.show_gap_window = show_gap_window
        self.show_first_available_slot = show_first_available_slot
        self.no_internet_alert = no_internet_alert
        self.show_worker_description_in_event = show_worker_description_in_event
        self.schdule_week_view_is_default = schdule_week_view_is_default
        self.show_passport_id = show_passport_id
        self.show_fax = show_fax
        self.show_birth_date = show_birth_date
        self.show_email = show_email
        self.show_address = show_address
        self.show_israel_city = show_israel_city
        self.show_house_number = show_house_number
        self.show_kupat_holim = show_kupat_holim
        self.show_department_filter = show_department_filter
        self.show_departments = show_departments
        self.show_departments_configuration = show_departments_configuration
        self.show_rooms = show_rooms
        self.show_client_appear_on_schedule = show_client_appear_on_schedule
        self.show_client_appear = show_client_appear
        self.skip_cancel_if_client_not_appear = skip_cancel_if_client_not_appear
        self.show_client_payment = show_client_payment
        self.show_extra_client_info = show_extra_client_info
        self.show_utm = show_utm
        self.show_worker_status = show_worker_status
        self.enable_black_list = enable_black_list
        self.enable_calculate_shedule = enable_calculate_shedule
        self.show_season_tickets = show_season_tickets
        self.show_leads_screen = show_leads_screen
        self.show_generatable_reports_screen = show_generatable_reports_screen
        self.scheduler_week_view_type = scheduler_week_view_type
        self.work_week_start = work_week_start
        self.work_week_end = work_week_end
        self.schedule_worker_hours = schedule_worker_hours
        self.show_taxonomy_localization = show_taxonomy_localization
        self.highlighted_resource = highlighted_resource
        self.show_additional_fields = show_additional_fields
        self.export_to_excel_removed_clients = export_to_excel_removed_clients
        self.check_client_overlapping = check_client_overlapping
        self.hide_customer_portal_footer = hide_customer_portal_footer
        self.readonly_resource_schedule = readonly_resource_schedule
        self.show_client_image = show_client_image
        self.state_level_holidays = state_level_holidays
        self.state_level_holidays_not_working = state_level_holidays_not_working
        self.payment_provider = payment_provider
        self.show_defaulter_blockscreen = show_defaulter_blockscreen
        self.allow_sms_translit = allow_sms_translit
        self.default_gt_schedule_day_view = default_gt_schedule_day_view
        self.enable_source_choice = enable_source_choice
        self.manual_exception_support = manual_exception_support
        self.show_worker_extra_id = show_worker_extra_id
        self.edit_app_extra_id = edit_app_extra_id
        self.use_gt_app_method = use_gt_app_method
        self.disable_appointment_client_inline_editor = disable_appointment_client_inline_editor
        self.enable_client_card = enable_client_card
        self.enable_client_medical_card_report = enable_client_medical_card_report
        self.enable_custom_online_payment_confirmation = enable_custom_online_payment_confirmation
        self.custom_online_payment_confirmation_template = custom_online_payment_confirmation_template
        self.show_fired_worker_appointment_alert = show_fired_worker_appointment_alert
        self.show_delivery_status = show_delivery_status
        self.show_taxonomy_children = show_taxonomy_children
        self.edit_taxonomy_children = edit_taxonomy_children
        self.show_taxonomy_visit_type = show_taxonomy_visit_type
        self.edit_taxonomy_visit_type = edit_taxonomy_visit_type
        self.fin_id = fin_id
        self.fin_name = fin_name
        self.enable_service_time_limit = enable_service_time_limit
        self.show_gender = show_gender
        self.show_gender_in_records = show_gender_in_records
        self.show_widget_color_theme = show_widget_color_theme
        self.enable_extended_phone = enable_extended_phone
        self.enable_taxonomy_children_age_check = enable_taxonomy_children_age_check
        self.taxonomy_children_max_age = taxonomy_children_max_age
        self.use_adjacent_taxonomies = use_adjacent_taxonomies
        self.use_additional_durations = use_additional_durations
        self.split_full_name_xls_export = split_full_name_xls_export
        self.use_adjacent_taxonomies_slot_splitting = use_adjacent_taxonomies_slot_splitting
        self.adjacent_taxonomies_treshold = adjacent_taxonomies_treshold
        self.allow_hide_workers_from_schdeule = allow_hide_workers_from_schdeule
        self.allow_hide_service_for_booking = allow_hide_service_for_booking
        self.block_notification_for_any_available_adjacent_service = block_notification_for_any_available_adjacent_service
        self.feedback_customer_portal_message = feedback_customer_portal_message
        self.feedback_customer_portal_title = feedback_customer_portal_title
        self.feedback_customer_portal_thank_you_message = feedback_customer_portal_thank_you_message
        self.feed_back_min_rating = feed_back_min_rating
        self.enable_client_language = enable_client_language
        self.show_client_birthday_filter = show_client_birthday_filter

    @staticmethod
    def from_dict(obj: Any) -> 'BackofficeConfigurationProperties':
        assert isinstance(obj, dict)
        revision_version = BeijingPigeon.from_dict(obj.get("revisionVersion"))
        schedule_default_workers_limit = TrapaniSnowLeopard.from_dict(obj.get("scheduleDefaultWorkersLimit"))
        resource_timetable_type = Repeats.from_dict(obj.get("resourceTimetableType"))
        enable_master_importance = ChiangMaiGoose.from_dict(obj.get("enableMasterImportance"))
        show_test_record = ChiangMaiGoose.from_dict(obj.get("showTestRecord"))
        skip_service_filtering = ChiangMaiGoose.from_dict(obj.get("skipServiceFiltering"))
        skip_appointment_price_update = ChiangMaiGoose.from_dict(obj.get("skipAppointmentPriceUpdate"))
        show_manual_changes = ChiangMaiGoose.from_dict(obj.get("showManualChanges"))
        enable_extended_records_client_statistics = ChiangMaiGoose.from_dict(obj.get("enableExtendedRecordsClientStatistics"))
        past_time_edit = TrapaniSnowLeopard.from_dict(obj.get("pastTimeEdit"))
        cabinets_enabled = ChiangMaiGoose.from_dict(obj.get("cabinetsEnabled"))
        appointment_future_moving = ChiangMaiGoose.from_dict(obj.get("appointmentFutureMoving"))
        show_client_contract_number = ChiangMaiGoose.from_dict(obj.get("showClientContractNumber"))
        show_gap_window = ChiangMaiGoose.from_dict(obj.get("showGapWindow"))
        show_first_available_slot = ChiangMaiGoose.from_dict(obj.get("showFirstAvailableSlot"))
        no_internet_alert = ChiangMaiGoose.from_dict(obj.get("noInternetAlert"))
        show_worker_description_in_event = ChiangMaiGoose.from_dict(obj.get("showWorkerDescriptionInEvent"))
        schdule_week_view_is_default = ChiangMaiGoose.from_dict(obj.get("schduleWeekViewIsDefault"))
        show_passport_id = ChiangMaiGoose.from_dict(obj.get("showPassportId"))
        show_fax = ChiangMaiGoose.from_dict(obj.get("showFax"))
        show_birth_date = ChiangMaiGoose.from_dict(obj.get("showBirthDate"))
        show_email = ChiangMaiGoose.from_dict(obj.get("showEmail"))
        show_address = ChiangMaiGoose.from_dict(obj.get("showAddress"))
        show_israel_city = ChiangMaiGoose.from_dict(obj.get("showIsraelCity"))
        show_house_number = ChiangMaiGoose.from_dict(obj.get("showHouseNumber"))
        show_kupat_holim = ChiangMaiGoose.from_dict(obj.get("showKupatHolim"))
        show_department_filter = ChiangMaiGoose.from_dict(obj.get("showDepartmentFilter"))
        show_departments = ChiangMaiGoose.from_dict(obj.get("showDepartments"))
        show_departments_configuration = ChiangMaiGoose.from_dict(obj.get("showDepartmentsConfiguration"))
        show_rooms = ChiangMaiGoose.from_dict(obj.get("showRooms"))
        show_client_appear_on_schedule = ChiangMaiGoose.from_dict(obj.get("showClientAppearOnSchedule"))
        show_client_appear = ChiangMaiGoose.from_dict(obj.get("showClientAppear"))
        skip_cancel_if_client_not_appear = ChiangMaiGoose.from_dict(obj.get("skipCancelIfClientNotAppear"))
        show_client_payment = ChiangMaiGoose.from_dict(obj.get("showClientPayment"))
        show_extra_client_info = ChiangMaiGoose.from_dict(obj.get("showExtraClientInfo"))
        show_utm = ChiangMaiGoose.from_dict(obj.get("showUTM"))
        show_worker_status = ChiangMaiGoose.from_dict(obj.get("showWorkerStatus"))
        enable_black_list = ChiangMaiGoose.from_dict(obj.get("enableBlackList"))
        enable_calculate_shedule = ChiangMaiGoose.from_dict(obj.get("enableCalculateShedule"))
        show_season_tickets = ChiangMaiGoose.from_dict(obj.get("showSeasonTickets"))
        show_leads_screen = ChiangMaiGoose.from_dict(obj.get("showLeadsScreen"))
        show_generatable_reports_screen = ChiangMaiGoose.from_dict(obj.get("showGeneratableReportsScreen"))
        scheduler_week_view_type = Repeats.from_dict(obj.get("schedulerWeekViewType"))
        work_week_start = TrapaniSnowLeopard.from_dict(obj.get("workWeekStart"))
        work_week_end = TrapaniSnowLeopard.from_dict(obj.get("workWeekEnd"))
        schedule_worker_hours = ChiangMaiGoose.from_dict(obj.get("scheduleWorkerHours"))
        show_taxonomy_localization = ChiangMaiGoose.from_dict(obj.get("showTaxonomyLocalization"))
        highlighted_resource = ChiangMaiGoose.from_dict(obj.get("highlightedResource"))
        show_additional_fields = ChiangMaiGoose.from_dict(obj.get("showAdditionalFields"))
        export_to_excel_removed_clients = ChiangMaiGoose.from_dict(obj.get("exportToExcelRemovedClients"))
        check_client_overlapping = ChiangMaiGoose.from_dict(obj.get("checkClientOverlapping"))
        hide_customer_portal_footer = ChiangMaiGoose.from_dict(obj.get("hideCustomerPortalFooter"))
        readonly_resource_schedule = ChiangMaiGoose.from_dict(obj.get("readonlyResourceSchedule"))
        show_client_image = ChiangMaiGoose.from_dict(obj.get("showClientImage"))
        state_level_holidays = DefaultFilteredWorkers.from_dict(obj.get("stateLevelHolidays"))
        state_level_holidays_not_working = ChiangMaiGoose.from_dict(obj.get("stateLevelHolidaysNotWorking"))
        payment_provider = BackofficeType.from_dict(obj.get("paymentProvider"))
        show_defaulter_blockscreen = ChiangMaiGoose.from_dict(obj.get("showDefaulterBlockscreen"))
        allow_sms_translit = ChiangMaiGoose.from_dict(obj.get("allowSmsTranslit"))
        default_gt_schedule_day_view = ChiangMaiGoose.from_dict(obj.get("defaultGTScheduleDayView"))
        enable_source_choice = ChiangMaiGoose.from_dict(obj.get("enableSourceChoice"))
        manual_exception_support = ChiangMaiGoose.from_dict(obj.get("manualExceptionSupport"))
        show_worker_extra_id = ChiangMaiGoose.from_dict(obj.get("showWorkerExtraId"))
        edit_app_extra_id = ChiangMaiGoose.from_dict(obj.get("editAppExtraId"))
        use_gt_app_method = ChiangMaiGoose.from_dict(obj.get("useGtAppMethod"))
        disable_appointment_client_inline_editor = ChiangMaiGoose.from_dict(obj.get("disableAppointmentClientInlineEditor"))
        enable_client_card = ChiangMaiGoose.from_dict(obj.get("enableClientCard"))
        enable_client_medical_card_report = ChiangMaiGoose.from_dict(obj.get("enableClientMedicalCardReport"))
        enable_custom_online_payment_confirmation = ChiangMaiGoose.from_dict(obj.get("enableCustomOnlinePaymentConfirmation"))
        custom_online_payment_confirmation_template = ChiangMaiGoose.from_dict(obj.get("customOnlinePaymentConfirmationTemplate"))
        show_fired_worker_appointment_alert = ChiangMaiGoose.from_dict(obj.get("showFiredWorkerAppointmentAlert"))
        show_delivery_status = ChiangMaiGoose.from_dict(obj.get("showDeliveryStatus"))
        show_taxonomy_children = ChiangMaiGoose.from_dict(obj.get("showTaxonomyChildren"))
        edit_taxonomy_children = ChiangMaiGoose.from_dict(obj.get("editTaxonomyChildren"))
        show_taxonomy_visit_type = ChiangMaiGoose.from_dict(obj.get("showTaxonomyVisitType"))
        edit_taxonomy_visit_type = ChiangMaiGoose.from_dict(obj.get("editTaxonomyVisitType"))
        fin_id = BeijingPigeon.from_dict(obj.get("finId"))
        fin_name = BeijingPigeon.from_dict(obj.get("finName"))
        enable_service_time_limit = ChiangMaiGoose.from_dict(obj.get("enableServiceTimeLimit"))
        show_gender = ChiangMaiGoose.from_dict(obj.get("showGender"))
        show_gender_in_records = ChiangMaiGoose.from_dict(obj.get("showGenderInRecords"))
        show_widget_color_theme = ChiangMaiGoose.from_dict(obj.get("showWidgetColorTheme"))
        enable_extended_phone = ChiangMaiGoose.from_dict(obj.get("enableExtendedPhone"))
        enable_taxonomy_children_age_check = ChiangMaiGoose.from_dict(obj.get("enableTaxonomyChildrenAgeCheck"))
        taxonomy_children_max_age = BeijingPigeon.from_dict(obj.get("taxonomyChildrenMaxAge"))
        use_adjacent_taxonomies = ChiangMaiGoose.from_dict(obj.get("useAdjacentTaxonomies"))
        use_additional_durations = ChiangMaiGoose.from_dict(obj.get("useAdditionalDurations"))
        split_full_name_xls_export = ChiangMaiGoose.from_dict(obj.get("splitFullNameXlsExport"))
        use_adjacent_taxonomies_slot_splitting = ChiangMaiGoose.from_dict(obj.get("useAdjacentTaxonomiesSlotSplitting"))
        adjacent_taxonomies_treshold = TrapaniSnowLeopard.from_dict(obj.get("adjacentTaxonomiesTreshold"))
        allow_hide_workers_from_schdeule = ChiangMaiGoose.from_dict(obj.get("allowHideWorkersFromSchdeule"))
        allow_hide_service_for_booking = ChiangMaiGoose.from_dict(obj.get("allowHideServiceForBooking"))
        block_notification_for_any_available_adjacent_service = ChiangMaiGoose.from_dict(obj.get("blockNotificationForAnyAvailableAdjacentService"))
        feedback_customer_portal_message = BeijingPigeon.from_dict(obj.get("feedbackCustomerPortalMessage"))
        feedback_customer_portal_title = BeijingPigeon.from_dict(obj.get("feedbackCustomerPortalTitle"))
        feedback_customer_portal_thank_you_message = BeijingPigeon.from_dict(obj.get("feedbackCustomerPortalThankYouMessage"))
        feed_back_min_rating = FeedBackMinRating.from_dict(obj.get("feedBackMinRating"))
        enable_client_language = ChiangMaiGoose.from_dict(obj.get("enableClientLanguage"))
        show_client_birthday_filter = ChiangMaiGoose.from_dict(obj.get("showClientBirthdayFilter"))
        return BackofficeConfigurationProperties(revision_version, schedule_default_workers_limit, resource_timetable_type, enable_master_importance, show_test_record, skip_service_filtering, skip_appointment_price_update, show_manual_changes, enable_extended_records_client_statistics, past_time_edit, cabinets_enabled, appointment_future_moving, show_client_contract_number, show_gap_window, show_first_available_slot, no_internet_alert, show_worker_description_in_event, schdule_week_view_is_default, show_passport_id, show_fax, show_birth_date, show_email, show_address, show_israel_city, show_house_number, show_kupat_holim, show_department_filter, show_departments, show_departments_configuration, show_rooms, show_client_appear_on_schedule, show_client_appear, skip_cancel_if_client_not_appear, show_client_payment, show_extra_client_info, show_utm, show_worker_status, enable_black_list, enable_calculate_shedule, show_season_tickets, show_leads_screen, show_generatable_reports_screen, scheduler_week_view_type, work_week_start, work_week_end, schedule_worker_hours, show_taxonomy_localization, highlighted_resource, show_additional_fields, export_to_excel_removed_clients, check_client_overlapping, hide_customer_portal_footer, readonly_resource_schedule, show_client_image, state_level_holidays, state_level_holidays_not_working, payment_provider, show_defaulter_blockscreen, allow_sms_translit, default_gt_schedule_day_view, enable_source_choice, manual_exception_support, show_worker_extra_id, edit_app_extra_id, use_gt_app_method, disable_appointment_client_inline_editor, enable_client_card, enable_client_medical_card_report, enable_custom_online_payment_confirmation, custom_online_payment_confirmation_template, show_fired_worker_appointment_alert, show_delivery_status, show_taxonomy_children, edit_taxonomy_children, show_taxonomy_visit_type, edit_taxonomy_visit_type, fin_id, fin_name, enable_service_time_limit, show_gender, show_gender_in_records, show_widget_color_theme, enable_extended_phone, enable_taxonomy_children_age_check, taxonomy_children_max_age, use_adjacent_taxonomies, use_additional_durations, split_full_name_xls_export, use_adjacent_taxonomies_slot_splitting, adjacent_taxonomies_treshold, allow_hide_workers_from_schdeule, allow_hide_service_for_booking, block_notification_for_any_available_adjacent_service, feedback_customer_portal_message, feedback_customer_portal_title, feedback_customer_portal_thank_you_message, feed_back_min_rating, enable_client_language, show_client_birthday_filter)

    def to_dict(self) -> dict:
        result: dict = {}
        result["revisionVersion"] = to_class(BeijingPigeon, self.revision_version)
        result["scheduleDefaultWorkersLimit"] = to_class(TrapaniSnowLeopard, self.schedule_default_workers_limit)
        result["resourceTimetableType"] = to_class(Repeats, self.resource_timetable_type)
        result["enableMasterImportance"] = to_class(ChiangMaiGoose, self.enable_master_importance)
        result["showTestRecord"] = to_class(ChiangMaiGoose, self.show_test_record)
        result["skipServiceFiltering"] = to_class(ChiangMaiGoose, self.skip_service_filtering)
        result["skipAppointmentPriceUpdate"] = to_class(ChiangMaiGoose, self.skip_appointment_price_update)
        result["showManualChanges"] = to_class(ChiangMaiGoose, self.show_manual_changes)
        result["enableExtendedRecordsClientStatistics"] = to_class(ChiangMaiGoose, self.enable_extended_records_client_statistics)
        result["pastTimeEdit"] = to_class(TrapaniSnowLeopard, self.past_time_edit)
        result["cabinetsEnabled"] = to_class(ChiangMaiGoose, self.cabinets_enabled)
        result["appointmentFutureMoving"] = to_class(ChiangMaiGoose, self.appointment_future_moving)
        result["showClientContractNumber"] = to_class(ChiangMaiGoose, self.show_client_contract_number)
        result["showGapWindow"] = to_class(ChiangMaiGoose, self.show_gap_window)
        result["showFirstAvailableSlot"] = to_class(ChiangMaiGoose, self.show_first_available_slot)
        result["noInternetAlert"] = to_class(ChiangMaiGoose, self.no_internet_alert)
        result["showWorkerDescriptionInEvent"] = to_class(ChiangMaiGoose, self.show_worker_description_in_event)
        result["schduleWeekViewIsDefault"] = to_class(ChiangMaiGoose, self.schdule_week_view_is_default)
        result["showPassportId"] = to_class(ChiangMaiGoose, self.show_passport_id)
        result["showFax"] = to_class(ChiangMaiGoose, self.show_fax)
        result["showBirthDate"] = to_class(ChiangMaiGoose, self.show_birth_date)
        result["showEmail"] = to_class(ChiangMaiGoose, self.show_email)
        result["showAddress"] = to_class(ChiangMaiGoose, self.show_address)
        result["showIsraelCity"] = to_class(ChiangMaiGoose, self.show_israel_city)
        result["showHouseNumber"] = to_class(ChiangMaiGoose, self.show_house_number)
        result["showKupatHolim"] = to_class(ChiangMaiGoose, self.show_kupat_holim)
        result["showDepartmentFilter"] = to_class(ChiangMaiGoose, self.show_department_filter)
        result["showDepartments"] = to_class(ChiangMaiGoose, self.show_departments)
        result["showDepartmentsConfiguration"] = to_class(ChiangMaiGoose, self.show_departments_configuration)
        result["showRooms"] = to_class(ChiangMaiGoose, self.show_rooms)
        result["showClientAppearOnSchedule"] = to_class(ChiangMaiGoose, self.show_client_appear_on_schedule)
        result["showClientAppear"] = to_class(ChiangMaiGoose, self.show_client_appear)
        result["skipCancelIfClientNotAppear"] = to_class(ChiangMaiGoose, self.skip_cancel_if_client_not_appear)
        result["showClientPayment"] = to_class(ChiangMaiGoose, self.show_client_payment)
        result["showExtraClientInfo"] = to_class(ChiangMaiGoose, self.show_extra_client_info)
        result["showUTM"] = to_class(ChiangMaiGoose, self.show_utm)
        result["showWorkerStatus"] = to_class(ChiangMaiGoose, self.show_worker_status)
        result["enableBlackList"] = to_class(ChiangMaiGoose, self.enable_black_list)
        result["enableCalculateShedule"] = to_class(ChiangMaiGoose, self.enable_calculate_shedule)
        result["showSeasonTickets"] = to_class(ChiangMaiGoose, self.show_season_tickets)
        result["showLeadsScreen"] = to_class(ChiangMaiGoose, self.show_leads_screen)
        result["showGeneratableReportsScreen"] = to_class(ChiangMaiGoose, self.show_generatable_reports_screen)
        result["schedulerWeekViewType"] = to_class(Repeats, self.scheduler_week_view_type)
        result["workWeekStart"] = to_class(TrapaniSnowLeopard, self.work_week_start)
        result["workWeekEnd"] = to_class(TrapaniSnowLeopard, self.work_week_end)
        result["scheduleWorkerHours"] = to_class(ChiangMaiGoose, self.schedule_worker_hours)
        result["showTaxonomyLocalization"] = to_class(ChiangMaiGoose, self.show_taxonomy_localization)
        result["highlightedResource"] = to_class(ChiangMaiGoose, self.highlighted_resource)
        result["showAdditionalFields"] = to_class(ChiangMaiGoose, self.show_additional_fields)
        result["exportToExcelRemovedClients"] = to_class(ChiangMaiGoose, self.export_to_excel_removed_clients)
        result["checkClientOverlapping"] = to_class(ChiangMaiGoose, self.check_client_overlapping)
        result["hideCustomerPortalFooter"] = to_class(ChiangMaiGoose, self.hide_customer_portal_footer)
        result["readonlyResourceSchedule"] = to_class(ChiangMaiGoose, self.readonly_resource_schedule)
        result["showClientImage"] = to_class(ChiangMaiGoose, self.show_client_image)
        result["stateLevelHolidays"] = to_class(DefaultFilteredWorkers, self.state_level_holidays)
        result["stateLevelHolidaysNotWorking"] = to_class(ChiangMaiGoose, self.state_level_holidays_not_working)
        result["paymentProvider"] = to_class(BackofficeType, self.payment_provider)
        result["showDefaulterBlockscreen"] = to_class(ChiangMaiGoose, self.show_defaulter_blockscreen)
        result["allowSmsTranslit"] = to_class(ChiangMaiGoose, self.allow_sms_translit)
        result["defaultGTScheduleDayView"] = to_class(ChiangMaiGoose, self.default_gt_schedule_day_view)
        result["enableSourceChoice"] = to_class(ChiangMaiGoose, self.enable_source_choice)
        result["manualExceptionSupport"] = to_class(ChiangMaiGoose, self.manual_exception_support)
        result["showWorkerExtraId"] = to_class(ChiangMaiGoose, self.show_worker_extra_id)
        result["editAppExtraId"] = to_class(ChiangMaiGoose, self.edit_app_extra_id)
        result["useGtAppMethod"] = to_class(ChiangMaiGoose, self.use_gt_app_method)
        result["disableAppointmentClientInlineEditor"] = to_class(ChiangMaiGoose, self.disable_appointment_client_inline_editor)
        result["enableClientCard"] = to_class(ChiangMaiGoose, self.enable_client_card)
        result["enableClientMedicalCardReport"] = to_class(ChiangMaiGoose, self.enable_client_medical_card_report)
        result["enableCustomOnlinePaymentConfirmation"] = to_class(ChiangMaiGoose, self.enable_custom_online_payment_confirmation)
        result["customOnlinePaymentConfirmationTemplate"] = to_class(ChiangMaiGoose, self.custom_online_payment_confirmation_template)
        result["showFiredWorkerAppointmentAlert"] = to_class(ChiangMaiGoose, self.show_fired_worker_appointment_alert)
        result["showDeliveryStatus"] = to_class(ChiangMaiGoose, self.show_delivery_status)
        result["showTaxonomyChildren"] = to_class(ChiangMaiGoose, self.show_taxonomy_children)
        result["editTaxonomyChildren"] = to_class(ChiangMaiGoose, self.edit_taxonomy_children)
        result["showTaxonomyVisitType"] = to_class(ChiangMaiGoose, self.show_taxonomy_visit_type)
        result["editTaxonomyVisitType"] = to_class(ChiangMaiGoose, self.edit_taxonomy_visit_type)
        result["finId"] = to_class(BeijingPigeon, self.fin_id)
        result["finName"] = to_class(BeijingPigeon, self.fin_name)
        result["enableServiceTimeLimit"] = to_class(ChiangMaiGoose, self.enable_service_time_limit)
        result["showGender"] = to_class(ChiangMaiGoose, self.show_gender)
        result["showGenderInRecords"] = to_class(ChiangMaiGoose, self.show_gender_in_records)
        result["showWidgetColorTheme"] = to_class(ChiangMaiGoose, self.show_widget_color_theme)
        result["enableExtendedPhone"] = to_class(ChiangMaiGoose, self.enable_extended_phone)
        result["enableTaxonomyChildrenAgeCheck"] = to_class(ChiangMaiGoose, self.enable_taxonomy_children_age_check)
        result["taxonomyChildrenMaxAge"] = to_class(BeijingPigeon, self.taxonomy_children_max_age)
        result["useAdjacentTaxonomies"] = to_class(ChiangMaiGoose, self.use_adjacent_taxonomies)
        result["useAdditionalDurations"] = to_class(ChiangMaiGoose, self.use_additional_durations)
        result["splitFullNameXlsExport"] = to_class(ChiangMaiGoose, self.split_full_name_xls_export)
        result["useAdjacentTaxonomiesSlotSplitting"] = to_class(ChiangMaiGoose, self.use_adjacent_taxonomies_slot_splitting)
        result["adjacentTaxonomiesTreshold"] = to_class(TrapaniSnowLeopard, self.adjacent_taxonomies_treshold)
        result["allowHideWorkersFromSchdeule"] = to_class(ChiangMaiGoose, self.allow_hide_workers_from_schdeule)
        result["allowHideServiceForBooking"] = to_class(ChiangMaiGoose, self.allow_hide_service_for_booking)
        result["blockNotificationForAnyAvailableAdjacentService"] = to_class(ChiangMaiGoose, self.block_notification_for_any_available_adjacent_service)
        result["feedbackCustomerPortalMessage"] = to_class(BeijingPigeon, self.feedback_customer_portal_message)
        result["feedbackCustomerPortalTitle"] = to_class(BeijingPigeon, self.feedback_customer_portal_title)
        result["feedbackCustomerPortalThankYouMessage"] = to_class(BeijingPigeon, self.feedback_customer_portal_thank_you_message)
        result["feedBackMinRating"] = to_class(FeedBackMinRating, self.feed_back_min_rating)
        result["enableClientLanguage"] = to_class(ChiangMaiGoose, self.enable_client_language)
        result["showClientBirthdayFilter"] = to_class(ChiangMaiGoose, self.show_client_birthday_filter)
        return result


class BackofficeConfiguration:
    title: str
    type: TypeElement
    properties: BackofficeConfigurationProperties
    additional_properties: bool

    def __init__(self, title: str, type: TypeElement, properties: BackofficeConfigurationProperties, additional_properties: bool) -> None:
        self.title = title
        self.type = type
        self.properties = properties
        self.additional_properties = additional_properties

    @staticmethod
    def from_dict(obj: Any) -> 'BackofficeConfiguration':
        assert isinstance(obj, dict)
        title = from_str(obj.get("title"))
        type = TypeElement(obj.get("type"))
        properties = BackofficeConfigurationProperties.from_dict(obj.get("properties"))
        additional_properties = from_bool(obj.get("additionalProperties"))
        return BackofficeConfiguration(title, type, properties, additional_properties)

    def to_dict(self) -> dict:
        result: dict = {}
        result["title"] = from_str(self.title)
        result["type"] = to_enum(TypeElement, self.type)
        result["properties"] = to_class(BackofficeConfigurationProperties, self.properties)
        result["additionalProperties"] = from_bool(self.additional_properties)
        return result


class GeneralInfo:
    ref: str

    def __init__(self, ref: str) -> None:
        self.ref = ref

    @staticmethod
    def from_dict(obj: Any) -> 'GeneralInfo':
        assert isinstance(obj, dict)
        ref = from_str(obj.get("$ref"))
        return GeneralInfo(ref)

    def to_dict(self) -> dict:
        result: dict = {}
        result["$ref"] = from_str(self.ref)
        return result


class Cabinets:
    type: TypeElement
    items: GeneralInfo

    def __init__(self, type: TypeElement, items: GeneralInfo) -> None:
        self.type = type
        self.items = items

    @staticmethod
    def from_dict(obj: Any) -> 'Cabinets':
        assert isinstance(obj, dict)
        type = TypeElement(obj.get("type"))
        items = GeneralInfo.from_dict(obj.get("items"))
        return Cabinets(type, items)

    def to_dict(self) -> dict:
        result: dict = {}
        result["type"] = to_enum(TypeElement, self.type)
        result["items"] = to_class(GeneralInfo, self.items)
        return result


class Properies:
    taxonomy_extra_id: BeijingPigeon
    extra_id: BeijingPigeon

    def __init__(self, taxonomy_extra_id: BeijingPigeon, extra_id: BeijingPigeon) -> None:
        self.taxonomy_extra_id = taxonomy_extra_id
        self.extra_id = extra_id

    @staticmethod
    def from_dict(obj: Any) -> 'Properies':
        assert isinstance(obj, dict)
        taxonomy_extra_id = BeijingPigeon.from_dict(obj.get("taxonomyExtraID"))
        extra_id = BeijingPigeon.from_dict(obj.get("extraId"))
        return Properies(taxonomy_extra_id, extra_id)

    def to_dict(self) -> dict:
        result: dict = {}
        result["taxonomyExtraID"] = to_class(BeijingPigeon, self.taxonomy_extra_id)
        result["extraId"] = to_class(BeijingPigeon, self.extra_id)
        return result


class AdditionalTaxonomyExtraIDItems:
    type: TypeElement
    properies: Properies

    def __init__(self, type: TypeElement, properies: Properies) -> None:
        self.type = type
        self.properies = properies

    @staticmethod
    def from_dict(obj: Any) -> 'AdditionalTaxonomyExtraIDItems':
        assert isinstance(obj, dict)
        type = TypeElement(obj.get("type"))
        properies = Properies.from_dict(obj.get("properies"))
        return AdditionalTaxonomyExtraIDItems(type, properies)

    def to_dict(self) -> dict:
        result: dict = {}
        result["type"] = to_enum(TypeElement, self.type)
        result["properies"] = to_class(Properies, self.properies)
        return result


class AdditionalTaxonomyExtraID:
    type: TypeElement
    items: AdditionalTaxonomyExtraIDItems

    def __init__(self, type: TypeElement, items: AdditionalTaxonomyExtraIDItems) -> None:
        self.type = type
        self.items = items

    @staticmethod
    def from_dict(obj: Any) -> 'AdditionalTaxonomyExtraID':
        assert isinstance(obj, dict)
        type = TypeElement(obj.get("type"))
        items = AdditionalTaxonomyExtraIDItems.from_dict(obj.get("items"))
        return AdditionalTaxonomyExtraID(type, items)

    def to_dict(self) -> dict:
        result: dict = {}
        result["type"] = to_enum(TypeElement, self.type)
        result["items"] = to_class(AdditionalTaxonomyExtraIDItems, self.items)
        return result


class PurpleProperties:
    slot_duration: TrapaniSnowLeopard
    is_any_available: ChiangMaiGoose
    taxonomy_id: BeijingPigeon
    order: BeijingPigeon

    def __init__(self, slot_duration: TrapaniSnowLeopard, is_any_available: ChiangMaiGoose, taxonomy_id: BeijingPigeon, order: BeijingPigeon) -> None:
        self.slot_duration = slot_duration
        self.is_any_available = is_any_available
        self.taxonomy_id = taxonomy_id
        self.order = order

    @staticmethod
    def from_dict(obj: Any) -> 'PurpleProperties':
        assert isinstance(obj, dict)
        slot_duration = TrapaniSnowLeopard.from_dict(obj.get("slotDuration"))
        is_any_available = ChiangMaiGoose.from_dict(obj.get("isAnyAvailable"))
        taxonomy_id = BeijingPigeon.from_dict(obj.get("taxonomyID"))
        order = BeijingPigeon.from_dict(obj.get("order"))
        return PurpleProperties(slot_duration, is_any_available, taxonomy_id, order)

    def to_dict(self) -> dict:
        result: dict = {}
        result["slotDuration"] = to_class(TrapaniSnowLeopard, self.slot_duration)
        result["isAnyAvailable"] = to_class(ChiangMaiGoose, self.is_any_available)
        result["taxonomyID"] = to_class(BeijingPigeon, self.taxonomy_id)
        result["order"] = to_class(BeijingPigeon, self.order)
        return result


class AdjacentTaxonomiesItems:
    type: TypeElement
    properties: PurpleProperties
    additional_properties: bool

    def __init__(self, type: TypeElement, properties: PurpleProperties, additional_properties: bool) -> None:
        self.type = type
        self.properties = properties
        self.additional_properties = additional_properties

    @staticmethod
    def from_dict(obj: Any) -> 'AdjacentTaxonomiesItems':
        assert isinstance(obj, dict)
        type = TypeElement(obj.get("type"))
        properties = PurpleProperties.from_dict(obj.get("properties"))
        additional_properties = from_bool(obj.get("additionalProperties"))
        return AdjacentTaxonomiesItems(type, properties, additional_properties)

    def to_dict(self) -> dict:
        result: dict = {}
        result["type"] = to_enum(TypeElement, self.type)
        result["properties"] = to_class(PurpleProperties, self.properties)
        result["additionalProperties"] = from_bool(self.additional_properties)
        return result


class AdjacentTaxonomies:
    type: TypeElement
    items: AdjacentTaxonomiesItems

    def __init__(self, type: TypeElement, items: AdjacentTaxonomiesItems) -> None:
        self.type = type
        self.items = items

    @staticmethod
    def from_dict(obj: Any) -> 'AdjacentTaxonomies':
        assert isinstance(obj, dict)
        type = TypeElement(obj.get("type"))
        items = AdjacentTaxonomiesItems.from_dict(obj.get("items"))
        return AdjacentTaxonomies(type, items)

    def to_dict(self) -> dict:
        result: dict = {}
        result["type"] = to_enum(TypeElement, self.type)
        result["items"] = to_class(AdjacentTaxonomiesItems, self.items)
        return result


class Fields:
    type: TypeElement
    items: BackofficeType

    def __init__(self, type: TypeElement, items: BackofficeType) -> None:
        self.type = type
        self.items = items

    @staticmethod
    def from_dict(obj: Any) -> 'Fields':
        assert isinstance(obj, dict)
        type = TypeElement(obj.get("type"))
        items = BackofficeType.from_dict(obj.get("items"))
        return Fields(type, items)

    def to_dict(self) -> dict:
        result: dict = {}
        result["type"] = to_enum(TypeElement, self.type)
        result["items"] = to_class(BackofficeType, self.items)
        return result


class CreatedOn:
    type: TypeElement
    format: str

    def __init__(self, type: TypeElement, format: str) -> None:
        self.type = type
        self.format = format

    @staticmethod
    def from_dict(obj: Any) -> 'CreatedOn':
        assert isinstance(obj, dict)
        type = TypeElement(obj.get("type"))
        format = from_str(obj.get("format"))
        return CreatedOn(type, format)

    def to_dict(self) -> dict:
        result: dict = {}
        result["type"] = to_enum(TypeElement, self.type)
        result["format"] = from_str(self.format)
        return result


class FluffyProperties:
    date_limit_from: CreatedOn
    date_limit_to: CreatedOn

    def __init__(self, date_limit_from: CreatedOn, date_limit_to: CreatedOn) -> None:
        self.date_limit_from = date_limit_from
        self.date_limit_to = date_limit_to

    @staticmethod
    def from_dict(obj: Any) -> 'FluffyProperties':
        assert isinstance(obj, dict)
        date_limit_from = CreatedOn.from_dict(obj.get("dateLimitFrom"))
        date_limit_to = CreatedOn.from_dict(obj.get("dateLimitTo"))
        return FluffyProperties(date_limit_from, date_limit_to)

    def to_dict(self) -> dict:
        result: dict = {}
        result["dateLimitFrom"] = to_class(CreatedOn, self.date_limit_from)
        result["dateLimitTo"] = to_class(CreatedOn, self.date_limit_to)
        return result


class DateLimitsItems:
    type: TypeElement
    properties: FluffyProperties
    additional_properties: bool

    def __init__(self, type: TypeElement, properties: FluffyProperties, additional_properties: bool) -> None:
        self.type = type
        self.properties = properties
        self.additional_properties = additional_properties

    @staticmethod
    def from_dict(obj: Any) -> 'DateLimitsItems':
        assert isinstance(obj, dict)
        type = TypeElement(obj.get("type"))
        properties = FluffyProperties.from_dict(obj.get("properties"))
        additional_properties = from_bool(obj.get("additionalProperties"))
        return DateLimitsItems(type, properties, additional_properties)

    def to_dict(self) -> dict:
        result: dict = {}
        result["type"] = to_enum(TypeElement, self.type)
        result["properties"] = to_class(FluffyProperties, self.properties)
        result["additionalProperties"] = from_bool(self.additional_properties)
        return result


class DateLimits:
    type: TypeElement
    items: DateLimitsItems

    def __init__(self, type: TypeElement, items: DateLimitsItems) -> None:
        self.type = type
        self.items = items

    @staticmethod
    def from_dict(obj: Any) -> 'DateLimits':
        assert isinstance(obj, dict)
        type = TypeElement(obj.get("type"))
        items = DateLimitsItems.from_dict(obj.get("items"))
        return DateLimits(type, items)

    def to_dict(self) -> dict:
        result: dict = {}
        result["type"] = to_enum(TypeElement, self.type)
        result["items"] = to_class(DateLimitsItems, self.items)
        return result


class BackofficeConfigurationClass:
    type: Optional[TypeElement]
    ref: Optional[str]

    def __init__(self, type: Optional[TypeElement], ref: Optional[str]) -> None:
        self.type = type
        self.ref = ref

    @staticmethod
    def from_dict(obj: Any) -> 'BackofficeConfigurationClass':
        assert isinstance(obj, dict)
        type = from_union([TypeElement, from_none], obj.get("type"))
        ref = from_union([from_str, from_none], obj.get("$ref"))
        return BackofficeConfigurationClass(type, ref)

    def to_dict(self) -> dict:
        result: dict = {}
        result["type"] = from_union([lambda x: to_enum(TypeElement, x), from_none], self.type)
        result["$ref"] = from_union([from_str, from_none], self.ref)
        return result


class StickyProperties:
    id: BeijingPigeon
    level: HammerfestPonies
    duration: TrapaniSnowLeopard

    def __init__(self, id: BeijingPigeon, level: HammerfestPonies, duration: TrapaniSnowLeopard) -> None:
        self.id = id
        self.level = level
        self.duration = duration

    @staticmethod
    def from_dict(obj: Any) -> 'StickyProperties':
        assert isinstance(obj, dict)
        id = BeijingPigeon.from_dict(obj.get("_id"))
        level = HammerfestPonies.from_dict(obj.get("level"))
        duration = TrapaniSnowLeopard.from_dict(obj.get("duration"))
        return StickyProperties(id, level, duration)

    def to_dict(self) -> dict:
        result: dict = {}
        result["_id"] = to_class(BeijingPigeon, self.id)
        result["level"] = to_class(HammerfestPonies, self.level)
        result["duration"] = to_class(TrapaniSnowLeopard, self.duration)
        return result


class AdditionalDurationsItems:
    type: TypeElement
    properties: StickyProperties
    additional_properties: bool

    def __init__(self, type: TypeElement, properties: StickyProperties, additional_properties: bool) -> None:
        self.type = type
        self.properties = properties
        self.additional_properties = additional_properties

    @staticmethod
    def from_dict(obj: Any) -> 'AdditionalDurationsItems':
        assert isinstance(obj, dict)
        type = TypeElement(obj.get("type"))
        properties = StickyProperties.from_dict(obj.get("properties"))
        additional_properties = from_bool(obj.get("additionalProperties"))
        return AdditionalDurationsItems(type, properties, additional_properties)

    def to_dict(self) -> dict:
        result: dict = {}
        result["type"] = to_enum(TypeElement, self.type)
        result["properties"] = to_class(StickyProperties, self.properties)
        result["additionalProperties"] = from_bool(self.additional_properties)
        return result


class AdditionalDurations:
    type: TypeElement
    items: AdditionalDurationsItems

    def __init__(self, type: TypeElement, items: AdditionalDurationsItems) -> None:
        self.type = type
        self.items = items

    @staticmethod
    def from_dict(obj: Any) -> 'AdditionalDurations':
        assert isinstance(obj, dict)
        type = TypeElement(obj.get("type"))
        items = AdditionalDurationsItems.from_dict(obj.get("items"))
        return AdditionalDurations(type, items)

    def to_dict(self) -> dict:
        result: dict = {}
        result["type"] = to_enum(TypeElement, self.type)
        result["items"] = to_class(AdditionalDurationsItems, self.items)
        return result


class TentacledProperties:
    id: BeijingPigeon
    taxonomy_id: BeijingPigeon
    additional_durations: AdditionalDurations
    business_id: BeijingPigeon

    def __init__(self, id: BeijingPigeon, taxonomy_id: BeijingPigeon, additional_durations: AdditionalDurations, business_id: BeijingPigeon) -> None:
        self.id = id
        self.taxonomy_id = taxonomy_id
        self.additional_durations = additional_durations
        self.business_id = business_id

    @staticmethod
    def from_dict(obj: Any) -> 'TentacledProperties':
        assert isinstance(obj, dict)
        id = BeijingPigeon.from_dict(obj.get("_id"))
        taxonomy_id = BeijingPigeon.from_dict(obj.get("taxonomyID"))
        additional_durations = AdditionalDurations.from_dict(obj.get("additionalDurations"))
        business_id = BeijingPigeon.from_dict(obj.get("businessID"))
        return TentacledProperties(id, taxonomy_id, additional_durations, business_id)

    def to_dict(self) -> dict:
        result: dict = {}
        result["_id"] = to_class(BeijingPigeon, self.id)
        result["taxonomyID"] = to_class(BeijingPigeon, self.taxonomy_id)
        result["additionalDurations"] = to_class(AdditionalDurations, self.additional_durations)
        result["businessID"] = to_class(BeijingPigeon, self.business_id)
        return result


class ShowcaseItemsItems:
    type: TypeElement
    properties: TentacledProperties
    additional_properties: bool

    def __init__(self, type: TypeElement, properties: TentacledProperties, additional_properties: bool) -> None:
        self.type = type
        self.properties = properties
        self.additional_properties = additional_properties

    @staticmethod
    def from_dict(obj: Any) -> 'ShowcaseItemsItems':
        assert isinstance(obj, dict)
        type = TypeElement(obj.get("type"))
        properties = TentacledProperties.from_dict(obj.get("properties"))
        additional_properties = from_bool(obj.get("additionalProperties"))
        return ShowcaseItemsItems(type, properties, additional_properties)

    def to_dict(self) -> dict:
        result: dict = {}
        result["type"] = to_enum(TypeElement, self.type)
        result["properties"] = to_class(TentacledProperties, self.properties)
        result["additionalProperties"] = from_bool(self.additional_properties)
        return result


class ShowcaseItems:
    type: TypeElement
    items: ShowcaseItemsItems

    def __init__(self, type: TypeElement, items: ShowcaseItemsItems) -> None:
        self.type = type
        self.items = items

    @staticmethod
    def from_dict(obj: Any) -> 'ShowcaseItems':
        assert isinstance(obj, dict)
        type = TypeElement(obj.get("type"))
        items = ShowcaseItemsItems.from_dict(obj.get("items"))
        return ShowcaseItems(type, items)

    def to_dict(self) -> dict:
        result: dict = {}
        result["type"] = to_enum(TypeElement, self.type)
        result["items"] = to_class(ShowcaseItemsItems, self.items)
        return result


class BusinessTaxonomyProperties:
    id: BeijingPigeon
    taxonomy_parent_id: BeijingPigeon
    taxonomy_category_extra_id: BeijingPigeon
    taxonomy_app_extra_id: BeijingPigeon
    extra_id: BeijingPigeon
    site_id: HammerfestPonies
    alias: BeijingPigeon
    showcases: Cabinets
    rooms: DefaultFilteredWorkers
    cabinets_enabled: ChiangMaiGoose
    cabinets: DefaultFilteredWorkers
    special_cabinet: BeijingPigeon
    last_modified: CreatedOn
    price: BackofficeConfigurationClass
    additional_prices: Cabinets
    additional_products: Cabinets
    capacity: BeijingPigeon
    capacity_decrease: TrapaniSnowLeopard
    duration: BeijingPigeon
    popularity: BeijingPigeon
    active: BeijingPigeon
    extra_description: BeijingPigeon
    confirmation_alert: BeijingPigeon
    extra_link: BeijingPigeon
    price_link: BeijingPigeon
    color: BeijingPigeon
    order: BeijingPigeon
    images: DefaultFilteredWorkers
    manual_changes: BeijingPigeon
    discounts: GeneralInfo
    additional_durations: Cabinets
    additional_taxonomy_extra_id: AdditionalTaxonomyExtraID
    parallel_taxonomies: DefaultFilteredWorkers
    only_after_taxonomies: DefaultFilteredWorkers
    display_in_widget: BeijingPigeon
    allow_next_booking_in_days: TrapaniSnowLeopard
    allow_next_booking_in_days_text: BeijingPigeon
    taxonomy_type: GeneralInfo
    designs: DefaultFilteredWorkers
    is_other: BeijingPigeon
    charge_units_step: BeijingPigeon
    for_pay: ChiangMaiGoose
    children_taxonomy_types: Fields
    visit_type: BeijingPigeon
    timetable: GeneralInfo
    exceptions: BeijingPigeon
    leaves: DefaultFilteredWorkers
    showcase_taxonomy_id: HammerfestPonies
    new_taxonomy: ChiangMaiGoose
    adjacent_taxonomies: AdjacentTaxonomies
    adjacent_same_time_start: BeijingPigeon
    date_limit_type: Repeats
    date_limits: DateLimits
    allow_next_booking_count: TrapaniSnowLeopard
    allow_booking_in_bo: ChiangMaiGoose
    confirmation_sms_alert: BeijingPigeon
    use_confirmation_sms_alert: BeijingPigeon
    online_mode: Repeats
    showcase_items: ShowcaseItems

    def __init__(self, id: BeijingPigeon, taxonomy_parent_id: BeijingPigeon, taxonomy_category_extra_id: BeijingPigeon, taxonomy_app_extra_id: BeijingPigeon, extra_id: BeijingPigeon, site_id: HammerfestPonies, alias: BeijingPigeon, showcases: Cabinets, rooms: DefaultFilteredWorkers, cabinets_enabled: ChiangMaiGoose, cabinets: DefaultFilteredWorkers, special_cabinet: BeijingPigeon, last_modified: CreatedOn, price: BackofficeConfigurationClass, additional_prices: Cabinets, additional_products: Cabinets, capacity: BeijingPigeon, capacity_decrease: TrapaniSnowLeopard, duration: BeijingPigeon, popularity: BeijingPigeon, active: BeijingPigeon, extra_description: BeijingPigeon, confirmation_alert: BeijingPigeon, extra_link: BeijingPigeon, price_link: BeijingPigeon, color: BeijingPigeon, order: BeijingPigeon, images: DefaultFilteredWorkers, manual_changes: BeijingPigeon, discounts: GeneralInfo, additional_durations: Cabinets, additional_taxonomy_extra_id: AdditionalTaxonomyExtraID, parallel_taxonomies: DefaultFilteredWorkers, only_after_taxonomies: DefaultFilteredWorkers, display_in_widget: BeijingPigeon, allow_next_booking_in_days: TrapaniSnowLeopard, allow_next_booking_in_days_text: BeijingPigeon, taxonomy_type: GeneralInfo, designs: DefaultFilteredWorkers, is_other: BeijingPigeon, charge_units_step: BeijingPigeon, for_pay: ChiangMaiGoose, children_taxonomy_types: Fields, visit_type: BeijingPigeon, timetable: GeneralInfo, exceptions: BeijingPigeon, leaves: DefaultFilteredWorkers, showcase_taxonomy_id: HammerfestPonies, new_taxonomy: ChiangMaiGoose, adjacent_taxonomies: AdjacentTaxonomies, adjacent_same_time_start: BeijingPigeon, date_limit_type: Repeats, date_limits: DateLimits, allow_next_booking_count: TrapaniSnowLeopard, allow_booking_in_bo: ChiangMaiGoose, confirmation_sms_alert: BeijingPigeon, use_confirmation_sms_alert: BeijingPigeon, online_mode: Repeats, showcase_items: ShowcaseItems) -> None:
        self.id = id
        self.taxonomy_parent_id = taxonomy_parent_id
        self.taxonomy_category_extra_id = taxonomy_category_extra_id
        self.taxonomy_app_extra_id = taxonomy_app_extra_id
        self.extra_id = extra_id
        self.site_id = site_id
        self.alias = alias
        self.showcases = showcases
        self.rooms = rooms
        self.cabinets_enabled = cabinets_enabled
        self.cabinets = cabinets
        self.special_cabinet = special_cabinet
        self.last_modified = last_modified
        self.price = price
        self.additional_prices = additional_prices
        self.additional_products = additional_products
        self.capacity = capacity
        self.capacity_decrease = capacity_decrease
        self.duration = duration
        self.popularity = popularity
        self.active = active
        self.extra_description = extra_description
        self.confirmation_alert = confirmation_alert
        self.extra_link = extra_link
        self.price_link = price_link
        self.color = color
        self.order = order
        self.images = images
        self.manual_changes = manual_changes
        self.discounts = discounts
        self.additional_durations = additional_durations
        self.additional_taxonomy_extra_id = additional_taxonomy_extra_id
        self.parallel_taxonomies = parallel_taxonomies
        self.only_after_taxonomies = only_after_taxonomies
        self.display_in_widget = display_in_widget
        self.allow_next_booking_in_days = allow_next_booking_in_days
        self.allow_next_booking_in_days_text = allow_next_booking_in_days_text
        self.taxonomy_type = taxonomy_type
        self.designs = designs
        self.is_other = is_other
        self.charge_units_step = charge_units_step
        self.for_pay = for_pay
        self.children_taxonomy_types = children_taxonomy_types
        self.visit_type = visit_type
        self.timetable = timetable
        self.exceptions = exceptions
        self.leaves = leaves
        self.showcase_taxonomy_id = showcase_taxonomy_id
        self.new_taxonomy = new_taxonomy
        self.adjacent_taxonomies = adjacent_taxonomies
        self.adjacent_same_time_start = adjacent_same_time_start
        self.date_limit_type = date_limit_type
        self.date_limits = date_limits
        self.allow_next_booking_count = allow_next_booking_count
        self.allow_booking_in_bo = allow_booking_in_bo
        self.confirmation_sms_alert = confirmation_sms_alert
        self.use_confirmation_sms_alert = use_confirmation_sms_alert
        self.online_mode = online_mode
        self.showcase_items = showcase_items

    @staticmethod
    def from_dict(obj: Any) -> 'BusinessTaxonomyProperties':
        assert isinstance(obj, dict)
        id = BeijingPigeon.from_dict(obj.get("id"))
        taxonomy_parent_id = BeijingPigeon.from_dict(obj.get("taxonomyParentID"))
        taxonomy_category_extra_id = BeijingPigeon.from_dict(obj.get("taxonomyCategoryExtraID"))
        taxonomy_app_extra_id = BeijingPigeon.from_dict(obj.get("taxonomyAppExtraID"))
        extra_id = BeijingPigeon.from_dict(obj.get("extraId"))
        site_id = HammerfestPonies.from_dict(obj.get("siteId"))
        alias = BeijingPigeon.from_dict(obj.get("alias"))
        showcases = Cabinets.from_dict(obj.get("showcases"))
        rooms = DefaultFilteredWorkers.from_dict(obj.get("rooms"))
        cabinets_enabled = ChiangMaiGoose.from_dict(obj.get("cabinetsEnabled"))
        cabinets = DefaultFilteredWorkers.from_dict(obj.get("cabinets"))
        special_cabinet = BeijingPigeon.from_dict(obj.get("specialCabinet"))
        last_modified = CreatedOn.from_dict(obj.get("lastModified"))
        price = BackofficeConfigurationClass.from_dict(obj.get("price"))
        additional_prices = Cabinets.from_dict(obj.get("additionalPrices"))
        additional_products = Cabinets.from_dict(obj.get("additionalProducts"))
        capacity = BeijingPigeon.from_dict(obj.get("capacity"))
        capacity_decrease = TrapaniSnowLeopard.from_dict(obj.get("capacity_decrease"))
        duration = BeijingPigeon.from_dict(obj.get("duration"))
        popularity = BeijingPigeon.from_dict(obj.get("popularity"))
        active = BeijingPigeon.from_dict(obj.get("active"))
        extra_description = BeijingPigeon.from_dict(obj.get("extraDescription"))
        confirmation_alert = BeijingPigeon.from_dict(obj.get("confirmationAlert"))
        extra_link = BeijingPigeon.from_dict(obj.get("extraLink"))
        price_link = BeijingPigeon.from_dict(obj.get("priceLink"))
        color = BeijingPigeon.from_dict(obj.get("color"))
        order = BeijingPigeon.from_dict(obj.get("order"))
        images = DefaultFilteredWorkers.from_dict(obj.get("images"))
        manual_changes = BeijingPigeon.from_dict(obj.get("manualChanges"))
        discounts = GeneralInfo.from_dict(obj.get("discounts"))
        additional_durations = Cabinets.from_dict(obj.get("additionalDurations"))
        additional_taxonomy_extra_id = AdditionalTaxonomyExtraID.from_dict(obj.get("additionalTaxonomyExtraId"))
        parallel_taxonomies = DefaultFilteredWorkers.from_dict(obj.get("parallelTaxonomies"))
        only_after_taxonomies = DefaultFilteredWorkers.from_dict(obj.get("onlyAfterTaxonomies"))
        display_in_widget = BeijingPigeon.from_dict(obj.get("displayInWidget"))
        allow_next_booking_in_days = TrapaniSnowLeopard.from_dict(obj.get("allowNextBookingInDays"))
        allow_next_booking_in_days_text = BeijingPigeon.from_dict(obj.get("allowNextBookingInDaysText"))
        taxonomy_type = GeneralInfo.from_dict(obj.get("taxonomyType"))
        designs = DefaultFilteredWorkers.from_dict(obj.get("designs"))
        is_other = BeijingPigeon.from_dict(obj.get("isOther"))
        charge_units_step = BeijingPigeon.from_dict(obj.get("chargeUnitsStep"))
        for_pay = ChiangMaiGoose.from_dict(obj.get("forPay"))
        children_taxonomy_types = Fields.from_dict(obj.get("childrenTaxonomyTypes"))
        visit_type = BeijingPigeon.from_dict(obj.get("visitType"))
        timetable = GeneralInfo.from_dict(obj.get("timetable"))
        exceptions = BeijingPigeon.from_dict(obj.get("exceptions"))
        leaves = DefaultFilteredWorkers.from_dict(obj.get("leaves"))
        showcase_taxonomy_id = HammerfestPonies.from_dict(obj.get("showcaseTaxonomyID"))
        new_taxonomy = ChiangMaiGoose.from_dict(obj.get("newTaxonomy"))
        adjacent_taxonomies = AdjacentTaxonomies.from_dict(obj.get("adjacentTaxonomies"))
        adjacent_same_time_start = BeijingPigeon.from_dict(obj.get("adjacentSameTimeStart"))
        date_limit_type = Repeats.from_dict(obj.get("dateLimitType"))
        date_limits = DateLimits.from_dict(obj.get("dateLimits"))
        allow_next_booking_count = TrapaniSnowLeopard.from_dict(obj.get("allowNextBookingCount"))
        allow_booking_in_bo = ChiangMaiGoose.from_dict(obj.get("allowBookingInBO"))
        confirmation_sms_alert = BeijingPigeon.from_dict(obj.get("confirmationSmsAlert"))
        use_confirmation_sms_alert = BeijingPigeon.from_dict(obj.get("useConfirmationSmsAlert"))
        online_mode = Repeats.from_dict(obj.get("onlineMode"))
        showcase_items = ShowcaseItems.from_dict(obj.get("showcaseItems"))
        return BusinessTaxonomyProperties(id, taxonomy_parent_id, taxonomy_category_extra_id, taxonomy_app_extra_id, extra_id, site_id, alias, showcases, rooms, cabinets_enabled, cabinets, special_cabinet, last_modified, price, additional_prices, additional_products, capacity, capacity_decrease, duration, popularity, active, extra_description, confirmation_alert, extra_link, price_link, color, order, images, manual_changes, discounts, additional_durations, additional_taxonomy_extra_id, parallel_taxonomies, only_after_taxonomies, display_in_widget, allow_next_booking_in_days, allow_next_booking_in_days_text, taxonomy_type, designs, is_other, charge_units_step, for_pay, children_taxonomy_types, visit_type, timetable, exceptions, leaves, showcase_taxonomy_id, new_taxonomy, adjacent_taxonomies, adjacent_same_time_start, date_limit_type, date_limits, allow_next_booking_count, allow_booking_in_bo, confirmation_sms_alert, use_confirmation_sms_alert, online_mode, showcase_items)

    def to_dict(self) -> dict:
        result: dict = {}
        result["id"] = to_class(BeijingPigeon, self.id)
        result["taxonomyParentID"] = to_class(BeijingPigeon, self.taxonomy_parent_id)
        result["taxonomyCategoryExtraID"] = to_class(BeijingPigeon, self.taxonomy_category_extra_id)
        result["taxonomyAppExtraID"] = to_class(BeijingPigeon, self.taxonomy_app_extra_id)
        result["extraId"] = to_class(BeijingPigeon, self.extra_id)
        result["siteId"] = to_class(HammerfestPonies, self.site_id)
        result["alias"] = to_class(BeijingPigeon, self.alias)
        result["showcases"] = to_class(Cabinets, self.showcases)
        result["rooms"] = to_class(DefaultFilteredWorkers, self.rooms)
        result["cabinetsEnabled"] = to_class(ChiangMaiGoose, self.cabinets_enabled)
        result["cabinets"] = to_class(DefaultFilteredWorkers, self.cabinets)
        result["specialCabinet"] = to_class(BeijingPigeon, self.special_cabinet)
        result["lastModified"] = to_class(CreatedOn, self.last_modified)
        result["price"] = to_class(BackofficeConfigurationClass, self.price)
        result["additionalPrices"] = to_class(Cabinets, self.additional_prices)
        result["additionalProducts"] = to_class(Cabinets, self.additional_products)
        result["capacity"] = to_class(BeijingPigeon, self.capacity)
        result["capacity_decrease"] = to_class(TrapaniSnowLeopard, self.capacity_decrease)
        result["duration"] = to_class(BeijingPigeon, self.duration)
        result["popularity"] = to_class(BeijingPigeon, self.popularity)
        result["active"] = to_class(BeijingPigeon, self.active)
        result["extraDescription"] = to_class(BeijingPigeon, self.extra_description)
        result["confirmationAlert"] = to_class(BeijingPigeon, self.confirmation_alert)
        result["extraLink"] = to_class(BeijingPigeon, self.extra_link)
        result["priceLink"] = to_class(BeijingPigeon, self.price_link)
        result["color"] = to_class(BeijingPigeon, self.color)
        result["order"] = to_class(BeijingPigeon, self.order)
        result["images"] = to_class(DefaultFilteredWorkers, self.images)
        result["manualChanges"] = to_class(BeijingPigeon, self.manual_changes)
        result["discounts"] = to_class(GeneralInfo, self.discounts)
        result["additionalDurations"] = to_class(Cabinets, self.additional_durations)
        result["additionalTaxonomyExtraId"] = to_class(AdditionalTaxonomyExtraID, self.additional_taxonomy_extra_id)
        result["parallelTaxonomies"] = to_class(DefaultFilteredWorkers, self.parallel_taxonomies)
        result["onlyAfterTaxonomies"] = to_class(DefaultFilteredWorkers, self.only_after_taxonomies)
        result["displayInWidget"] = to_class(BeijingPigeon, self.display_in_widget)
        result["allowNextBookingInDays"] = to_class(TrapaniSnowLeopard, self.allow_next_booking_in_days)
        result["allowNextBookingInDaysText"] = to_class(BeijingPigeon, self.allow_next_booking_in_days_text)
        result["taxonomyType"] = to_class(GeneralInfo, self.taxonomy_type)
        result["designs"] = to_class(DefaultFilteredWorkers, self.designs)
        result["isOther"] = to_class(BeijingPigeon, self.is_other)
        result["chargeUnitsStep"] = to_class(BeijingPigeon, self.charge_units_step)
        result["forPay"] = to_class(ChiangMaiGoose, self.for_pay)
        result["childrenTaxonomyTypes"] = to_class(Fields, self.children_taxonomy_types)
        result["visitType"] = to_class(BeijingPigeon, self.visit_type)
        result["timetable"] = to_class(GeneralInfo, self.timetable)
        result["exceptions"] = to_class(BeijingPigeon, self.exceptions)
        result["leaves"] = to_class(DefaultFilteredWorkers, self.leaves)
        result["showcaseTaxonomyID"] = to_class(HammerfestPonies, self.showcase_taxonomy_id)
        result["newTaxonomy"] = to_class(ChiangMaiGoose, self.new_taxonomy)
        result["adjacentTaxonomies"] = to_class(AdjacentTaxonomies, self.adjacent_taxonomies)
        result["adjacentSameTimeStart"] = to_class(BeijingPigeon, self.adjacent_same_time_start)
        result["dateLimitType"] = to_class(Repeats, self.date_limit_type)
        result["dateLimits"] = to_class(DateLimits, self.date_limits)
        result["allowNextBookingCount"] = to_class(TrapaniSnowLeopard, self.allow_next_booking_count)
        result["allowBookingInBO"] = to_class(ChiangMaiGoose, self.allow_booking_in_bo)
        result["confirmationSmsAlert"] = to_class(BeijingPigeon, self.confirmation_sms_alert)
        result["useConfirmationSmsAlert"] = to_class(BeijingPigeon, self.use_confirmation_sms_alert)
        result["onlineMode"] = to_class(Repeats, self.online_mode)
        result["showcaseItems"] = to_class(ShowcaseItems, self.showcase_items)
        return result


class BusinessTaxonomy:
    title: str
    type: TypeElement
    properties: BusinessTaxonomyProperties
    additional_properties: bool

    def __init__(self, title: str, type: TypeElement, properties: BusinessTaxonomyProperties, additional_properties: bool) -> None:
        self.title = title
        self.type = type
        self.properties = properties
        self.additional_properties = additional_properties

    @staticmethod
    def from_dict(obj: Any) -> 'BusinessTaxonomy':
        assert isinstance(obj, dict)
        title = from_str(obj.get("title"))
        type = TypeElement(obj.get("type"))
        properties = BusinessTaxonomyProperties.from_dict(obj.get("properties"))
        additional_properties = from_bool(obj.get("additionalProperties"))
        return BusinessTaxonomy(title, type, properties, additional_properties)

    def to_dict(self) -> dict:
        result: dict = {}
        result["title"] = from_str(self.title)
        result["type"] = to_enum(TypeElement, self.type)
        result["properties"] = to_class(BusinessTaxonomyProperties, self.properties)
        result["additionalProperties"] = from_bool(self.additional_properties)
        return result


class StockAmount:
    description: str
    type: List[TypeElement]
    default: int

    def __init__(self, description: str, type: List[TypeElement], default: int) -> None:
        self.description = description
        self.type = type
        self.default = default

    @staticmethod
    def from_dict(obj: Any) -> 'StockAmount':
        assert isinstance(obj, dict)
        description = from_str(obj.get("description"))
        type = from_list(TypeElement, obj.get("type"))
        default = int(from_str(obj.get("default")))
        return StockAmount(description, type, default)

    def to_dict(self) -> dict:
        result: dict = {}
        result["description"] = from_str(self.description)
        result["type"] = from_list(lambda x: to_enum(TypeElement, x), self.type)
        result["default"] = from_str(str(self.default))
        return result


class BusinessTaxonomyPriceProperties:
    currency: Currency
    amount: Amount
    stock_amount: StockAmount
    type: TypeClass

    def __init__(self, currency: Currency, amount: Amount, stock_amount: StockAmount, type: TypeClass) -> None:
        self.currency = currency
        self.amount = amount
        self.stock_amount = stock_amount
        self.type = type

    @staticmethod
    def from_dict(obj: Any) -> 'BusinessTaxonomyPriceProperties':
        assert isinstance(obj, dict)
        currency = Currency.from_dict(obj.get("currency"))
        amount = Amount.from_dict(obj.get("amount"))
        stock_amount = StockAmount.from_dict(obj.get("stockAmount"))
        type = TypeClass.from_dict(obj.get("type"))
        return BusinessTaxonomyPriceProperties(currency, amount, stock_amount, type)

    def to_dict(self) -> dict:
        result: dict = {}
        result["currency"] = to_class(Currency, self.currency)
        result["amount"] = to_class(Amount, self.amount)
        result["stockAmount"] = to_class(StockAmount, self.stock_amount)
        result["type"] = to_class(TypeClass, self.type)
        return result


class BusinessTaxonomyPrice:
    title: str
    type: TypeElement
    properties: BusinessTaxonomyPriceProperties
    required: List[str]
    additional_properties: bool

    def __init__(self, title: str, type: TypeElement, properties: BusinessTaxonomyPriceProperties, required: List[str], additional_properties: bool) -> None:
        self.title = title
        self.type = type
        self.properties = properties
        self.required = required
        self.additional_properties = additional_properties

    @staticmethod
    def from_dict(obj: Any) -> 'BusinessTaxonomyPrice':
        assert isinstance(obj, dict)
        title = from_str(obj.get("title"))
        type = TypeElement(obj.get("type"))
        properties = BusinessTaxonomyPriceProperties.from_dict(obj.get("properties"))
        required = from_list(from_str, obj.get("required"))
        additional_properties = from_bool(obj.get("additionalProperties"))
        return BusinessTaxonomyPrice(title, type, properties, required, additional_properties)

    def to_dict(self) -> dict:
        result: dict = {}
        result["title"] = from_str(self.title)
        result["type"] = to_enum(TypeElement, self.type)
        result["properties"] = to_class(BusinessTaxonomyPriceProperties, self.properties)
        result["required"] = from_list(from_str, self.required)
        result["additionalProperties"] = from_bool(self.additional_properties)
        return result


class CabinetProperties:
    id: BeijingPigeon
    name: BeijingPigeon
    active: BeijingPigeon

    def __init__(self, id: BeijingPigeon, name: BeijingPigeon, active: BeijingPigeon) -> None:
        self.id = id
        self.name = name
        self.active = active

    @staticmethod
    def from_dict(obj: Any) -> 'CabinetProperties':
        assert isinstance(obj, dict)
        id = BeijingPigeon.from_dict(obj.get("id"))
        name = BeijingPigeon.from_dict(obj.get("name"))
        active = BeijingPigeon.from_dict(obj.get("active"))
        return CabinetProperties(id, name, active)

    def to_dict(self) -> dict:
        result: dict = {}
        result["id"] = to_class(BeijingPigeon, self.id)
        result["name"] = to_class(BeijingPigeon, self.name)
        result["active"] = to_class(BeijingPigeon, self.active)
        return result


class Cabinet:
    title: str
    type: TypeElement
    properties: CabinetProperties
    additional_properties: bool

    def __init__(self, title: str, type: TypeElement, properties: CabinetProperties, additional_properties: bool) -> None:
        self.title = title
        self.type = type
        self.properties = properties
        self.additional_properties = additional_properties

    @staticmethod
    def from_dict(obj: Any) -> 'Cabinet':
        assert isinstance(obj, dict)
        title = from_str(obj.get("title"))
        type = TypeElement(obj.get("type"))
        properties = CabinetProperties.from_dict(obj.get("properties"))
        additional_properties = from_bool(obj.get("additionalProperties"))
        return Cabinet(title, type, properties, additional_properties)

    def to_dict(self) -> dict:
        result: dict = {}
        result["title"] = from_str(self.title)
        result["type"] = to_enum(TypeElement, self.type)
        result["properties"] = to_class(CabinetProperties, self.properties)
        result["additionalProperties"] = from_bool(self.additional_properties)
        return result


class ConsumableProperties:
    extra_id: BeijingPigeon
    name: BeijingPigeon
    quantity: BeijingPigeon

    def __init__(self, extra_id: BeijingPigeon, name: BeijingPigeon, quantity: BeijingPigeon) -> None:
        self.extra_id = extra_id
        self.name = name
        self.quantity = quantity

    @staticmethod
    def from_dict(obj: Any) -> 'ConsumableProperties':
        assert isinstance(obj, dict)
        extra_id = BeijingPigeon.from_dict(obj.get("extraID"))
        name = BeijingPigeon.from_dict(obj.get("name"))
        quantity = BeijingPigeon.from_dict(obj.get("quantity"))
        return ConsumableProperties(extra_id, name, quantity)

    def to_dict(self) -> dict:
        result: dict = {}
        result["extraID"] = to_class(BeijingPigeon, self.extra_id)
        result["name"] = to_class(BeijingPigeon, self.name)
        result["quantity"] = to_class(BeijingPigeon, self.quantity)
        return result


class Consumable:
    title: str
    type: TypeElement
    properties: ConsumableProperties
    required: List[str]

    def __init__(self, title: str, type: TypeElement, properties: ConsumableProperties, required: List[str]) -> None:
        self.title = title
        self.type = type
        self.properties = properties
        self.required = required

    @staticmethod
    def from_dict(obj: Any) -> 'Consumable':
        assert isinstance(obj, dict)
        title = from_str(obj.get("title"))
        type = TypeElement(obj.get("type"))
        properties = ConsumableProperties.from_dict(obj.get("properties"))
        required = from_list(from_str, obj.get("required"))
        return Consumable(title, type, properties, required)

    def to_dict(self) -> dict:
        result: dict = {}
        result["title"] = from_str(self.title)
        result["type"] = to_enum(TypeElement, self.type)
        result["properties"] = to_class(ConsumableProperties, self.properties)
        result["required"] = from_list(from_str, self.required)
        return result


class DepartmentProperties:
    properties_id: BeijingPigeon
    id: BeijingPigeon
    name: BeijingPigeon

    def __init__(self, properties_id: BeijingPigeon, id: BeijingPigeon, name: BeijingPigeon) -> None:
        self.properties_id = properties_id
        self.id = id
        self.name = name

    @staticmethod
    def from_dict(obj: Any) -> 'DepartmentProperties':
        assert isinstance(obj, dict)
        properties_id = BeijingPigeon.from_dict(obj.get("id_"))
        id = BeijingPigeon.from_dict(obj.get("id"))
        name = BeijingPigeon.from_dict(obj.get("name"))
        return DepartmentProperties(properties_id, id, name)

    def to_dict(self) -> dict:
        result: dict = {}
        result["id_"] = to_class(BeijingPigeon, self.properties_id)
        result["id"] = to_class(BeijingPigeon, self.id)
        result["name"] = to_class(BeijingPigeon, self.name)
        return result


class Department:
    title: str
    type: TypeElement
    properties: DepartmentProperties
    required: List[str]
    additional_properties: bool

    def __init__(self, title: str, type: TypeElement, properties: DepartmentProperties, required: List[str], additional_properties: bool) -> None:
        self.title = title
        self.type = type
        self.properties = properties
        self.required = required
        self.additional_properties = additional_properties

    @staticmethod
    def from_dict(obj: Any) -> 'Department':
        assert isinstance(obj, dict)
        title = from_str(obj.get("title"))
        type = TypeElement(obj.get("type"))
        properties = DepartmentProperties.from_dict(obj.get("properties"))
        required = from_list(from_str, obj.get("required"))
        additional_properties = from_bool(obj.get("additionalProperties"))
        return Department(title, type, properties, required, additional_properties)

    def to_dict(self) -> dict:
        result: dict = {}
        result["title"] = from_str(self.title)
        result["type"] = to_enum(TypeElement, self.type)
        result["properties"] = to_class(DepartmentProperties, self.properties)
        result["required"] = from_list(from_str, self.required)
        result["additionalProperties"] = from_bool(self.additional_properties)
        return result


class TaxonomyChildren:
    description: str
    type: TypeElement
    items: GeneralInfo

    def __init__(self, description: str, type: TypeElement, items: GeneralInfo) -> None:
        self.description = description
        self.type = type
        self.items = items

    @staticmethod
    def from_dict(obj: Any) -> 'TaxonomyChildren':
        assert isinstance(obj, dict)
        description = from_str(obj.get("description"))
        type = TypeElement(obj.get("type"))
        items = GeneralInfo.from_dict(obj.get("items"))
        return TaxonomyChildren(description, type, items)

    def to_dict(self) -> dict:
        result: dict = {}
        result["description"] = from_str(self.description)
        result["type"] = to_enum(TypeElement, self.type)
        result["items"] = to_class(GeneralInfo, self.items)
        return result


class EvenOddTimetableProperties:
    start_period: TypeClass
    even: TaxonomyChildren
    odd: TaxonomyChildren

    def __init__(self, start_period: TypeClass, even: TaxonomyChildren, odd: TaxonomyChildren) -> None:
        self.start_period = start_period
        self.even = even
        self.odd = odd

    @staticmethod
    def from_dict(obj: Any) -> 'EvenOddTimetableProperties':
        assert isinstance(obj, dict)
        start_period = TypeClass.from_dict(obj.get("startPeriod"))
        even = TaxonomyChildren.from_dict(obj.get("even"))
        odd = TaxonomyChildren.from_dict(obj.get("odd"))
        return EvenOddTimetableProperties(start_period, even, odd)

    def to_dict(self) -> dict:
        result: dict = {}
        result["startPeriod"] = to_class(TypeClass, self.start_period)
        result["even"] = to_class(TaxonomyChildren, self.even)
        result["odd"] = to_class(TaxonomyChildren, self.odd)
        return result


class EvenOddTimetable:
    meta_extensible: bool
    meta_extends: List[str]
    type: TypeElement
    properties: EvenOddTimetableProperties
    required: List[str]

    def __init__(self, meta_extensible: bool, meta_extends: List[str], type: TypeElement, properties: EvenOddTimetableProperties, required: List[str]) -> None:
        self.meta_extensible = meta_extensible
        self.meta_extends = meta_extends
        self.type = type
        self.properties = properties
        self.required = required

    @staticmethod
    def from_dict(obj: Any) -> 'EvenOddTimetable':
        assert isinstance(obj, dict)
        meta_extensible = from_bool(obj.get("meta:extensible"))
        meta_extends = from_list(from_str, obj.get("meta:extends"))
        type = TypeElement(obj.get("type"))
        properties = EvenOddTimetableProperties.from_dict(obj.get("properties"))
        required = from_list(from_str, obj.get("required"))
        return EvenOddTimetable(meta_extensible, meta_extends, type, properties, required)

    def to_dict(self) -> dict:
        result: dict = {}
        result["meta:extensible"] = from_bool(self.meta_extensible)
        result["meta:extends"] = from_list(from_str, self.meta_extends)
        result["type"] = to_enum(TypeElement, self.type)
        result["properties"] = to_class(EvenOddTimetableProperties, self.properties)
        result["required"] = from_list(from_str, self.required)
        return result


class MetroStationProperties:
    id: BeijingPigeon
    name: BeijingPigeon
    description: BeijingPigeon

    def __init__(self, id: BeijingPigeon, name: BeijingPigeon, description: BeijingPigeon) -> None:
        self.id = id
        self.name = name
        self.description = description

    @staticmethod
    def from_dict(obj: Any) -> 'MetroStationProperties':
        assert isinstance(obj, dict)
        id = BeijingPigeon.from_dict(obj.get("_id"))
        name = BeijingPigeon.from_dict(obj.get("name"))
        description = BeijingPigeon.from_dict(obj.get("description"))
        return MetroStationProperties(id, name, description)

    def to_dict(self) -> dict:
        result: dict = {}
        result["_id"] = to_class(BeijingPigeon, self.id)
        result["name"] = to_class(BeijingPigeon, self.name)
        result["description"] = to_class(BeijingPigeon, self.description)
        return result


class MetroStation:
    type: TypeElement
    properties: MetroStationProperties
    required: List[str]
    additional_properties: bool

    def __init__(self, type: TypeElement, properties: MetroStationProperties, required: List[str], additional_properties: bool) -> None:
        self.type = type
        self.properties = properties
        self.required = required
        self.additional_properties = additional_properties

    @staticmethod
    def from_dict(obj: Any) -> 'MetroStation':
        assert isinstance(obj, dict)
        type = TypeElement(obj.get("type"))
        properties = MetroStationProperties.from_dict(obj.get("properties"))
        required = from_list(from_str, obj.get("required"))
        additional_properties = from_bool(obj.get("additionalProperties"))
        return MetroStation(type, properties, required, additional_properties)

    def to_dict(self) -> dict:
        result: dict = {}
        result["type"] = to_enum(TypeElement, self.type)
        result["properties"] = to_class(MetroStationProperties, self.properties)
        result["required"] = from_list(from_str, self.required)
        result["additionalProperties"] = from_bool(self.additional_properties)
        return result


class ResourceLocationProperties:
    longitude: BeijingPigeon
    latitude: BeijingPigeon
    time: HammerfestPonies

    def __init__(self, longitude: BeijingPigeon, latitude: BeijingPigeon, time: HammerfestPonies) -> None:
        self.longitude = longitude
        self.latitude = latitude
        self.time = time

    @staticmethod
    def from_dict(obj: Any) -> 'ResourceLocationProperties':
        assert isinstance(obj, dict)
        longitude = BeijingPigeon.from_dict(obj.get("longitude"))
        latitude = BeijingPigeon.from_dict(obj.get("latitude"))
        time = HammerfestPonies.from_dict(obj.get("time"))
        return ResourceLocationProperties(longitude, latitude, time)

    def to_dict(self) -> dict:
        result: dict = {}
        result["longitude"] = to_class(BeijingPigeon, self.longitude)
        result["latitude"] = to_class(BeijingPigeon, self.latitude)
        result["time"] = to_class(HammerfestPonies, self.time)
        return result


class ResourceLocation:
    type: TypeElement
    properties: ResourceLocationProperties
    required: List[Any]

    def __init__(self, type: TypeElement, properties: ResourceLocationProperties, required: List[Any]) -> None:
        self.type = type
        self.properties = properties
        self.required = required

    @staticmethod
    def from_dict(obj: Any) -> 'ResourceLocation':
        assert isinstance(obj, dict)
        type = TypeElement(obj.get("type"))
        properties = ResourceLocationProperties.from_dict(obj.get("properties"))
        required = from_list(lambda x: x, obj.get("required"))
        return ResourceLocation(type, properties, required)

    def to_dict(self) -> dict:
        result: dict = {}
        result["type"] = to_enum(TypeElement, self.type)
        result["properties"] = to_class(ResourceLocationProperties, self.properties)
        result["required"] = from_list(lambda x: x, self.required)
        return result


class ResourceProfileProperties:
    email: HammerfestPonies
    profile_id: HammerfestPonies
    user_id: HammerfestPonies
    access_type: TypeClass

    def __init__(self, email: HammerfestPonies, profile_id: HammerfestPonies, user_id: HammerfestPonies, access_type: TypeClass) -> None:
        self.email = email
        self.profile_id = profile_id
        self.user_id = user_id
        self.access_type = access_type

    @staticmethod
    def from_dict(obj: Any) -> 'ResourceProfileProperties':
        assert isinstance(obj, dict)
        email = HammerfestPonies.from_dict(obj.get("email"))
        profile_id = HammerfestPonies.from_dict(obj.get("profileID"))
        user_id = HammerfestPonies.from_dict(obj.get("userID"))
        access_type = TypeClass.from_dict(obj.get("accessType"))
        return ResourceProfileProperties(email, profile_id, user_id, access_type)

    def to_dict(self) -> dict:
        result: dict = {}
        result["email"] = to_class(HammerfestPonies, self.email)
        result["profileID"] = to_class(HammerfestPonies, self.profile_id)
        result["userID"] = to_class(HammerfestPonies, self.user_id)
        result["accessType"] = to_class(TypeClass, self.access_type)
        return result


class ResourceProfile:
    title: str
    description: str
    type: TypeElement
    properties: ResourceProfileProperties
    required: List[str]

    def __init__(self, title: str, description: str, type: TypeElement, properties: ResourceProfileProperties, required: List[str]) -> None:
        self.title = title
        self.description = description
        self.type = type
        self.properties = properties
        self.required = required

    @staticmethod
    def from_dict(obj: Any) -> 'ResourceProfile':
        assert isinstance(obj, dict)
        title = from_str(obj.get("title"))
        description = from_str(obj.get("description"))
        type = TypeElement(obj.get("type"))
        properties = ResourceProfileProperties.from_dict(obj.get("properties"))
        required = from_list(from_str, obj.get("required"))
        return ResourceProfile(title, description, type, properties, required)

    def to_dict(self) -> dict:
        result: dict = {}
        result["title"] = from_str(self.title)
        result["description"] = from_str(self.description)
        result["type"] = to_enum(TypeElement, self.type)
        result["properties"] = to_class(ResourceProfileProperties, self.properties)
        result["required"] = from_list(from_str, self.required)
        return result


class ResourceTaxonomyChildrenProperties:
    taxonomy_id: HammerfestPonies
    children: HammerfestPonies

    def __init__(self, taxonomy_id: HammerfestPonies, children: HammerfestPonies) -> None:
        self.taxonomy_id = taxonomy_id
        self.children = children

    @staticmethod
    def from_dict(obj: Any) -> 'ResourceTaxonomyChildrenProperties':
        assert isinstance(obj, dict)
        taxonomy_id = HammerfestPonies.from_dict(obj.get("taxonomyID"))
        children = HammerfestPonies.from_dict(obj.get("children"))
        return ResourceTaxonomyChildrenProperties(taxonomy_id, children)

    def to_dict(self) -> dict:
        result: dict = {}
        result["taxonomyID"] = to_class(HammerfestPonies, self.taxonomy_id)
        result["children"] = to_class(HammerfestPonies, self.children)
        return result


class ResourceTaxonomyChildren:
    type: TypeElement
    properties: ResourceTaxonomyChildrenProperties
    required: List[str]

    def __init__(self, type: TypeElement, properties: ResourceTaxonomyChildrenProperties, required: List[str]) -> None:
        self.type = type
        self.properties = properties
        self.required = required

    @staticmethod
    def from_dict(obj: Any) -> 'ResourceTaxonomyChildren':
        assert isinstance(obj, dict)
        type = TypeElement(obj.get("type"))
        properties = ResourceTaxonomyChildrenProperties.from_dict(obj.get("properties"))
        required = from_list(from_str, obj.get("required"))
        return ResourceTaxonomyChildren(type, properties, required)

    def to_dict(self) -> dict:
        result: dict = {}
        result["type"] = to_enum(TypeElement, self.type)
        result["properties"] = to_class(ResourceTaxonomyChildrenProperties, self.properties)
        result["required"] = from_list(from_str, self.required)
        return result


class ResourceTaxonomyLevelProperties:
    level: HammerfestPonies
    id: HammerfestPonies

    def __init__(self, level: HammerfestPonies, id: HammerfestPonies) -> None:
        self.level = level
        self.id = id

    @staticmethod
    def from_dict(obj: Any) -> 'ResourceTaxonomyLevelProperties':
        assert isinstance(obj, dict)
        level = HammerfestPonies.from_dict(obj.get("level"))
        id = HammerfestPonies.from_dict(obj.get("id"))
        return ResourceTaxonomyLevelProperties(level, id)

    def to_dict(self) -> dict:
        result: dict = {}
        result["level"] = to_class(HammerfestPonies, self.level)
        result["id"] = to_class(HammerfestPonies, self.id)
        return result


class ResourceTaxonomyLevel:
    id: str
    type: TypeElement
    properties: ResourceTaxonomyLevelProperties
    required: List[str]

    def __init__(self, id: str, type: TypeElement, properties: ResourceTaxonomyLevelProperties, required: List[str]) -> None:
        self.id = id
        self.type = type
        self.properties = properties
        self.required = required

    @staticmethod
    def from_dict(obj: Any) -> 'ResourceTaxonomyLevel':
        assert isinstance(obj, dict)
        id = from_str(obj.get("$id"))
        type = TypeElement(obj.get("type"))
        properties = ResourceTaxonomyLevelProperties.from_dict(obj.get("properties"))
        required = from_list(from_str, obj.get("required"))
        return ResourceTaxonomyLevel(id, type, properties, required)

    def to_dict(self) -> dict:
        result: dict = {}
        result["$id"] = from_str(self.id)
        result["type"] = to_enum(TypeElement, self.type)
        result["properties"] = to_class(ResourceTaxonomyLevelProperties, self.properties)
        result["required"] = from_list(from_str, self.required)
        return result


class TaxonomyShowcaseProperties:
    base_business_id: BeijingPigeon
    origin_business_id: BeijingPigeon
    showcase_item_id: BeijingPigeon
    is_base_node: BeijingPigeon

    def __init__(self, base_business_id: BeijingPigeon, origin_business_id: BeijingPigeon, showcase_item_id: BeijingPigeon, is_base_node: BeijingPigeon) -> None:
        self.base_business_id = base_business_id
        self.origin_business_id = origin_business_id
        self.showcase_item_id = showcase_item_id
        self.is_base_node = is_base_node

    @staticmethod
    def from_dict(obj: Any) -> 'TaxonomyShowcaseProperties':
        assert isinstance(obj, dict)
        base_business_id = BeijingPigeon.from_dict(obj.get("baseBusinessID"))
        origin_business_id = BeijingPigeon.from_dict(obj.get("originBusinessID"))
        showcase_item_id = BeijingPigeon.from_dict(obj.get("showcaseItemID"))
        is_base_node = BeijingPigeon.from_dict(obj.get("isBaseNode"))
        return TaxonomyShowcaseProperties(base_business_id, origin_business_id, showcase_item_id, is_base_node)

    def to_dict(self) -> dict:
        result: dict = {}
        result["baseBusinessID"] = to_class(BeijingPigeon, self.base_business_id)
        result["originBusinessID"] = to_class(BeijingPigeon, self.origin_business_id)
        result["showcaseItemID"] = to_class(BeijingPigeon, self.showcase_item_id)
        result["isBaseNode"] = to_class(BeijingPigeon, self.is_base_node)
        return result


class TaxonomyShowcase:
    title: str
    type: TypeElement
    properties: TaxonomyShowcaseProperties
    additional_properties: bool

    def __init__(self, title: str, type: TypeElement, properties: TaxonomyShowcaseProperties, additional_properties: bool) -> None:
        self.title = title
        self.type = type
        self.properties = properties
        self.additional_properties = additional_properties

    @staticmethod
    def from_dict(obj: Any) -> 'TaxonomyShowcase':
        assert isinstance(obj, dict)
        title = from_str(obj.get("title"))
        type = TypeElement(obj.get("type"))
        properties = TaxonomyShowcaseProperties.from_dict(obj.get("properties"))
        additional_properties = from_bool(obj.get("additionalProperties"))
        return TaxonomyShowcase(title, type, properties, additional_properties)

    def to_dict(self) -> dict:
        result: dict = {}
        result["title"] = from_str(self.title)
        result["type"] = to_enum(TypeElement, self.type)
        result["properties"] = to_class(TaxonomyShowcaseProperties, self.properties)
        result["additionalProperties"] = from_bool(self.additional_properties)
        return result


class EndOneOf:
    type: Optional[TypeElement]
    format: Optional[str]
    const: None

    def __init__(self, type: Optional[TypeElement], format: Optional[str], const: None) -> None:
        self.type = type
        self.format = format
        self.const = const

    @staticmethod
    def from_dict(obj: Any) -> 'EndOneOf':
        assert isinstance(obj, dict)
        type = from_union([TypeElement, from_none], obj.get("type"))
        format = from_union([from_str, from_none], obj.get("format"))
        const = from_none(obj.get("const"))
        return EndOneOf(type, format, const)

    def to_dict(self) -> dict:
        result: dict = {}
        result["type"] = from_union([lambda x: to_enum(TypeElement, x), from_none], self.type)
        result["format"] = from_union([from_str, from_none], self.format)
        result["const"] = from_none(self.const)
        return result


class End:
    one_of: List[EndOneOf]

    def __init__(self, one_of: List[EndOneOf]) -> None:
        self.one_of = one_of

    @staticmethod
    def from_dict(obj: Any) -> 'End':
        assert isinstance(obj, dict)
        one_of = from_list(EndOneOf.from_dict, obj.get("oneOf"))
        return End(one_of)

    def to_dict(self) -> dict:
        result: dict = {}
        result["oneOf"] = from_list(lambda x: to_class(EndOneOf, x), self.one_of)
        return result


class BookableDateRangesProperties:
    enabled: ChiangMaiGoose
    start: End
    end: End

    def __init__(self, enabled: ChiangMaiGoose, start: End, end: End) -> None:
        self.enabled = enabled
        self.start = start
        self.end = end

    @staticmethod
    def from_dict(obj: Any) -> 'BookableDateRangesProperties':
        assert isinstance(obj, dict)
        enabled = ChiangMaiGoose.from_dict(obj.get("enabled"))
        start = End.from_dict(obj.get("start"))
        end = End.from_dict(obj.get("end"))
        return BookableDateRangesProperties(enabled, start, end)

    def to_dict(self) -> dict:
        result: dict = {}
        result["enabled"] = to_class(ChiangMaiGoose, self.enabled)
        result["start"] = to_class(End, self.start)
        result["end"] = to_class(End, self.end)
        return result


class BookableDateRanges:
    type: TypeElement
    properties: BookableDateRangesProperties

    def __init__(self, type: TypeElement, properties: BookableDateRangesProperties) -> None:
        self.type = type
        self.properties = properties

    @staticmethod
    def from_dict(obj: Any) -> 'BookableDateRanges':
        assert isinstance(obj, dict)
        type = TypeElement(obj.get("type"))
        properties = BookableDateRangesProperties.from_dict(obj.get("properties"))
        return BookableDateRanges(type, properties)

    def to_dict(self) -> dict:
        result: dict = {}
        result["type"] = to_enum(TypeElement, self.type)
        result["properties"] = to_class(BookableDateRangesProperties, self.properties)
        return result


class ClientBlockingSettingsProperties:
    block_if_future_record_exists: ChiangMaiGoose
    block_repeated_records_range: TrapaniSnowLeopard
    block_repeated_records_count: TrapaniSnowLeopard
    block_repeated_records_text: BeijingPigeon
    appointment_client_block: ChiangMaiGoose
    appointment_client_block_days: TrapaniSnowLeopard
    appointment_client_block_text: BeijingPigeon

    def __init__(self, block_if_future_record_exists: ChiangMaiGoose, block_repeated_records_range: TrapaniSnowLeopard, block_repeated_records_count: TrapaniSnowLeopard, block_repeated_records_text: BeijingPigeon, appointment_client_block: ChiangMaiGoose, appointment_client_block_days: TrapaniSnowLeopard, appointment_client_block_text: BeijingPigeon) -> None:
        self.block_if_future_record_exists = block_if_future_record_exists
        self.block_repeated_records_range = block_repeated_records_range
        self.block_repeated_records_count = block_repeated_records_count
        self.block_repeated_records_text = block_repeated_records_text
        self.appointment_client_block = appointment_client_block
        self.appointment_client_block_days = appointment_client_block_days
        self.appointment_client_block_text = appointment_client_block_text

    @staticmethod
    def from_dict(obj: Any) -> 'ClientBlockingSettingsProperties':
        assert isinstance(obj, dict)
        block_if_future_record_exists = ChiangMaiGoose.from_dict(obj.get("blockIfFutureRecordExists"))
        block_repeated_records_range = TrapaniSnowLeopard.from_dict(obj.get("blockRepeatedRecordsRange"))
        block_repeated_records_count = TrapaniSnowLeopard.from_dict(obj.get("blockRepeatedRecordsCount"))
        block_repeated_records_text = BeijingPigeon.from_dict(obj.get("blockRepeatedRecordsText"))
        appointment_client_block = ChiangMaiGoose.from_dict(obj.get("appointmentClientBlock"))
        appointment_client_block_days = TrapaniSnowLeopard.from_dict(obj.get("appointmentClientBlockDays"))
        appointment_client_block_text = BeijingPigeon.from_dict(obj.get("appointmentClientBlockText"))
        return ClientBlockingSettingsProperties(block_if_future_record_exists, block_repeated_records_range, block_repeated_records_count, block_repeated_records_text, appointment_client_block, appointment_client_block_days, appointment_client_block_text)

    def to_dict(self) -> dict:
        result: dict = {}
        result["blockIfFutureRecordExists"] = to_class(ChiangMaiGoose, self.block_if_future_record_exists)
        result["blockRepeatedRecordsRange"] = to_class(TrapaniSnowLeopard, self.block_repeated_records_range)
        result["blockRepeatedRecordsCount"] = to_class(TrapaniSnowLeopard, self.block_repeated_records_count)
        result["blockRepeatedRecordsText"] = to_class(BeijingPigeon, self.block_repeated_records_text)
        result["appointmentClientBlock"] = to_class(ChiangMaiGoose, self.appointment_client_block)
        result["appointmentClientBlockDays"] = to_class(TrapaniSnowLeopard, self.appointment_client_block_days)
        result["appointmentClientBlockText"] = to_class(BeijingPigeon, self.appointment_client_block_text)
        return result


class ClientBlockingSettings:
    type: TypeElement
    properties: ClientBlockingSettingsProperties
    additional_properties: bool

    def __init__(self, type: TypeElement, properties: ClientBlockingSettingsProperties, additional_properties: bool) -> None:
        self.type = type
        self.properties = properties
        self.additional_properties = additional_properties

    @staticmethod
    def from_dict(obj: Any) -> 'ClientBlockingSettings':
        assert isinstance(obj, dict)
        type = TypeElement(obj.get("type"))
        properties = ClientBlockingSettingsProperties.from_dict(obj.get("properties"))
        additional_properties = from_bool(obj.get("additionalProperties"))
        return ClientBlockingSettings(type, properties, additional_properties)

    def to_dict(self) -> dict:
        result: dict = {}
        result["type"] = to_enum(TypeElement, self.type)
        result["properties"] = to_class(ClientBlockingSettingsProperties, self.properties)
        result["additionalProperties"] = from_bool(self.additional_properties)
        return result


class CracSlotSize:
    type: TypeElement
    enum: List[int]
    default: int

    def __init__(self, type: TypeElement, enum: List[int], default: int) -> None:
        self.type = type
        self.enum = enum
        self.default = default

    @staticmethod
    def from_dict(obj: Any) -> 'CracSlotSize':
        assert isinstance(obj, dict)
        type = TypeElement(obj.get("type"))
        enum = from_list(from_int, obj.get("enum"))
        default = from_int(obj.get("default"))
        return CracSlotSize(type, enum, default)

    def to_dict(self) -> dict:
        result: dict = {}
        result["type"] = to_enum(TypeElement, self.type)
        result["enum"] = from_list(from_int, self.enum)
        result["default"] = from_int(self.default)
        return result


class DefaultWorkerImgURL:
    type: TypeElement
    default: str

    def __init__(self, type: TypeElement, default: str) -> None:
        self.type = type
        self.default = default

    @staticmethod
    def from_dict(obj: Any) -> 'DefaultWorkerImgURL':
        assert isinstance(obj, dict)
        type = TypeElement(obj.get("type"))
        default = from_str(obj.get("default"))
        return DefaultWorkerImgURL(type, default)

    def to_dict(self) -> dict:
        result: dict = {}
        result["type"] = to_enum(TypeElement, self.type)
        result["default"] = from_str(self.default)
        return result


class DiscountedPriceRoundingProperties:
    rule: BackofficeType
    value: TrapaniSnowLeopard

    def __init__(self, rule: BackofficeType, value: TrapaniSnowLeopard) -> None:
        self.rule = rule
        self.value = value

    @staticmethod
    def from_dict(obj: Any) -> 'DiscountedPriceRoundingProperties':
        assert isinstance(obj, dict)
        rule = BackofficeType.from_dict(obj.get("rule"))
        value = TrapaniSnowLeopard.from_dict(obj.get("value"))
        return DiscountedPriceRoundingProperties(rule, value)

    def to_dict(self) -> dict:
        result: dict = {}
        result["rule"] = to_class(BackofficeType, self.rule)
        result["value"] = to_class(TrapaniSnowLeopard, self.value)
        return result


class DiscountedPriceRounding:
    type: TypeElement
    properties: DiscountedPriceRoundingProperties

    def __init__(self, type: TypeElement, properties: DiscountedPriceRoundingProperties) -> None:
        self.type = type
        self.properties = properties

    @staticmethod
    def from_dict(obj: Any) -> 'DiscountedPriceRounding':
        assert isinstance(obj, dict)
        type = TypeElement(obj.get("type"))
        properties = DiscountedPriceRoundingProperties.from_dict(obj.get("properties"))
        return DiscountedPriceRounding(type, properties)

    def to_dict(self) -> dict:
        result: dict = {}
        result["type"] = to_enum(TypeElement, self.type)
        result["properties"] = to_class(DiscountedPriceRoundingProperties, self.properties)
        return result


class NewWidgetTheme:
    type: TypeElement
    additional_properties: bool

    def __init__(self, type: TypeElement, additional_properties: bool) -> None:
        self.type = type
        self.additional_properties = additional_properties

    @staticmethod
    def from_dict(obj: Any) -> 'NewWidgetTheme':
        assert isinstance(obj, dict)
        type = TypeElement(obj.get("type"))
        additional_properties = from_bool(obj.get("additionalProperties"))
        return NewWidgetTheme(type, additional_properties)

    def to_dict(self) -> dict:
        result: dict = {}
        result["type"] = to_enum(TypeElement, self.type)
        result["additionalProperties"] = from_bool(self.additional_properties)
        return result


class SocialSharingProperties:
    active: ChiangMaiGoose
    widget_text: Birthday
    text: Birthday
    discount_enabled: BeijingPigeon
    discount_type: BackofficeType
    discount_amount: Birthday

    def __init__(self, active: ChiangMaiGoose, widget_text: Birthday, text: Birthday, discount_enabled: BeijingPigeon, discount_type: BackofficeType, discount_amount: Birthday) -> None:
        self.active = active
        self.widget_text = widget_text
        self.text = text
        self.discount_enabled = discount_enabled
        self.discount_type = discount_type
        self.discount_amount = discount_amount

    @staticmethod
    def from_dict(obj: Any) -> 'SocialSharingProperties':
        assert isinstance(obj, dict)
        active = ChiangMaiGoose.from_dict(obj.get("active"))
        widget_text = Birthday.from_dict(obj.get("widgetText"))
        text = Birthday.from_dict(obj.get("text"))
        discount_enabled = BeijingPigeon.from_dict(obj.get("discountEnabled"))
        discount_type = BackofficeType.from_dict(obj.get("discountType"))
        discount_amount = Birthday.from_dict(obj.get("discountAmount"))
        return SocialSharingProperties(active, widget_text, text, discount_enabled, discount_type, discount_amount)

    def to_dict(self) -> dict:
        result: dict = {}
        result["active"] = to_class(ChiangMaiGoose, self.active)
        result["widgetText"] = to_class(Birthday, self.widget_text)
        result["text"] = to_class(Birthday, self.text)
        result["discountEnabled"] = to_class(BeijingPigeon, self.discount_enabled)
        result["discountType"] = to_class(BackofficeType, self.discount_type)
        result["discountAmount"] = to_class(Birthday, self.discount_amount)
        return result


class SocialSharing:
    type: TypeElement
    properties: SocialSharingProperties

    def __init__(self, type: TypeElement, properties: SocialSharingProperties) -> None:
        self.type = type
        self.properties = properties

    @staticmethod
    def from_dict(obj: Any) -> 'SocialSharing':
        assert isinstance(obj, dict)
        type = TypeElement(obj.get("type"))
        properties = SocialSharingProperties.from_dict(obj.get("properties"))
        return SocialSharing(type, properties)

    def to_dict(self) -> dict:
        result: dict = {}
        result["type"] = to_enum(TypeElement, self.type)
        result["properties"] = to_class(SocialSharingProperties, self.properties)
        return result


class WidgetConfigurationProperties:
    revision_version: BeijingPigeon
    crunchv2: ChiangMaiGoose
    use_crac: ChiangMaiGoose
    crac_slot_size: CracSlotSize
    widget_use_crac: ChiangMaiGoose
    skip_days_forward: ChiangMaiGoose
    days_forward: TrapaniSnowLeopard
    crac_server: BackofficeType
    use_med_auth: ChiangMaiGoose
    use_sort_by_name: ChiangMaiGoose
    use_middle_name: ChiangMaiGoose
    show_surname_first: ChiangMaiGoose
    hide_prices: ChiangMaiGoose
    hide_empty_days: ChiangMaiGoose
    show_map: ChiangMaiGoose
    tentative_ttl: BeijingPigeon
    show_drink_question: ChiangMaiGoose
    show_talk_question: ChiangMaiGoose
    show_client_address: ChiangMaiGoose
    skip_mobile_map: ChiangMaiGoose
    skip_authentication: ChiangMaiGoose
    skip_service_selection: ChiangMaiGoose
    show_taxonomy_confirmation_alert: ChiangMaiGoose
    show_client_comment: ChiangMaiGoose
    client_comment_title: ChiangMaiGoose
    calendar_mode: ChiangMaiGoose
    calendar_mode_hide_time: ChiangMaiGoose
    use_coupon: ChiangMaiGoose
    dont_require_email: ChiangMaiGoose
    email_is_mandatory: ChiangMaiGoose
    display_slot_size: BeijingPigeon
    additional_name: BeijingPigeon
    short_link: BeijingPigeon
    appointment_confirmation_title: BeijingPigeon
    appointment_confirmation_text: BeijingPigeon
    theme: DefaultWorkerImgURL
    social_sharing: SocialSharing
    no_default_images: ChiangMaiGoose
    without_workers: ChiangMaiGoose
    bookable_months_count: TrapaniSnowLeopard
    day_unavailable_label: BeijingPigeon
    day_off_label: BeijingPigeon
    use_business_schedule_for_unavailable_label: ChiangMaiGoose
    hide_any_worker_booking: ChiangMaiGoose
    disable_mobile_widget: ChiangMaiGoose
    social_network_image: ChiangMaiGoose
    payment: Repeats
    payment_provider: Repeats
    alignment_taxonomy_slots: ChiangMaiGoose
    bookable_date_ranges: BookableDateRanges
    discounted_price_rounding: DiscountedPriceRounding
    multi_service_booking: ChiangMaiGoose
    max_service_booking: TrapaniSnowLeopard
    multi_timeslot_booking: ChiangMaiGoose
    max_timeslot_booking: TrapaniSnowLeopard
    multi_timeslot_booking_all_days: ChiangMaiGoose
    show_all_workers: ChiangMaiGoose
    sort_by_most_free: ChiangMaiGoose
    skip_time_selection: ChiangMaiGoose
    skip_time_selection_service_i_ds: DefaultFilteredWorkers
    skip_worker_services_selection: ChiangMaiGoose
    skip_worker_selected_service_i_ds: DefaultFilteredWorkers
    require_agreement: ChiangMaiGoose
    require_agreement_link: DefaultWorkerImgURL
    hide_gray_slots: ChiangMaiGoose
    extra_visitors: ChiangMaiGoose
    override_footer: DefaultWorkerImgURL
    enable_override_footer: ChiangMaiGoose
    hide_g_booking_logo: ChiangMaiGoose
    hide_call_button: ChiangMaiGoose
    hide_new_appointment_button: ChiangMaiGoose
    hide_social_networks_authentication: ChiangMaiGoose
    skip_service_duration_alignment: ChiangMaiGoose
    warning_contact_data_text: DefaultWorkerImgURL
    enable_warning_contact_data: ChiangMaiGoose
    split_name: ChiangMaiGoose
    use_default_worker_img: ChiangMaiGoose
    default_worker_img_url: DefaultWorkerImgURL
    use_clusters_map: ChiangMaiGoose
    use_appointment_reminder: ChiangMaiGoose
    disable_widget: ChiangMaiGoose
    disable_widget_message: BeijingPigeon
    deny_same_time_records: ChiangMaiGoose
    sort_workers_by_workload: ChiangMaiGoose
    most_free_enable: ChiangMaiGoose
    ask_client_birthday: ChiangMaiGoose
    ask_client_gender: ChiangMaiGoose
    split_insurance_client: ChiangMaiGoose
    insurance_client_support_phone: Cabinets
    show_disabled_taxonomies: ChiangMaiGoose
    disabled_taxonomies_text: BeijingPigeon
    worker_name_reverse: ChiangMaiGoose
    use_default_service_img: ChiangMaiGoose
    client_blocking_settings: ClientBlockingSettings
    default_service_img_url: BeijingPigeon
    allow_book_visitor: ChiangMaiGoose
    use_new_reserve_api: ChiangMaiGoose
    allow_auto_select: ChiangMaiGoose
    use_direct_schedule_read: Repeats
    allow_skip_time_check: ChiangMaiGoose
    use_insurance_select: ChiangMaiGoose
    filter_non_insurance_schedule: ChiangMaiGoose
    use_insurance_guarantee_letter: ChiangMaiGoose
    use_resource_page_loading: ChiangMaiGoose
    new_widget_theme: NewWidgetTheme
    worker_unavailability_text: BeijingPigeon

    def __init__(self, revision_version: BeijingPigeon, crunchv2: ChiangMaiGoose, use_crac: ChiangMaiGoose, crac_slot_size: CracSlotSize, widget_use_crac: ChiangMaiGoose, skip_days_forward: ChiangMaiGoose, days_forward: TrapaniSnowLeopard, crac_server: BackofficeType, use_med_auth: ChiangMaiGoose, use_sort_by_name: ChiangMaiGoose, use_middle_name: ChiangMaiGoose, show_surname_first: ChiangMaiGoose, hide_prices: ChiangMaiGoose, hide_empty_days: ChiangMaiGoose, show_map: ChiangMaiGoose, tentative_ttl: BeijingPigeon, show_drink_question: ChiangMaiGoose, show_talk_question: ChiangMaiGoose, show_client_address: ChiangMaiGoose, skip_mobile_map: ChiangMaiGoose, skip_authentication: ChiangMaiGoose, skip_service_selection: ChiangMaiGoose, show_taxonomy_confirmation_alert: ChiangMaiGoose, show_client_comment: ChiangMaiGoose, client_comment_title: ChiangMaiGoose, calendar_mode: ChiangMaiGoose, calendar_mode_hide_time: ChiangMaiGoose, use_coupon: ChiangMaiGoose, dont_require_email: ChiangMaiGoose, email_is_mandatory: ChiangMaiGoose, display_slot_size: BeijingPigeon, additional_name: BeijingPigeon, short_link: BeijingPigeon, appointment_confirmation_title: BeijingPigeon, appointment_confirmation_text: BeijingPigeon, theme: DefaultWorkerImgURL, social_sharing: SocialSharing, no_default_images: ChiangMaiGoose, without_workers: ChiangMaiGoose, bookable_months_count: TrapaniSnowLeopard, day_unavailable_label: BeijingPigeon, day_off_label: BeijingPigeon, use_business_schedule_for_unavailable_label: ChiangMaiGoose, hide_any_worker_booking: ChiangMaiGoose, disable_mobile_widget: ChiangMaiGoose, social_network_image: ChiangMaiGoose, payment: Repeats, payment_provider: Repeats, alignment_taxonomy_slots: ChiangMaiGoose, bookable_date_ranges: BookableDateRanges, discounted_price_rounding: DiscountedPriceRounding, multi_service_booking: ChiangMaiGoose, max_service_booking: TrapaniSnowLeopard, multi_timeslot_booking: ChiangMaiGoose, max_timeslot_booking: TrapaniSnowLeopard, multi_timeslot_booking_all_days: ChiangMaiGoose, show_all_workers: ChiangMaiGoose, sort_by_most_free: ChiangMaiGoose, skip_time_selection: ChiangMaiGoose, skip_time_selection_service_i_ds: DefaultFilteredWorkers, skip_worker_services_selection: ChiangMaiGoose, skip_worker_selected_service_i_ds: DefaultFilteredWorkers, require_agreement: ChiangMaiGoose, require_agreement_link: DefaultWorkerImgURL, hide_gray_slots: ChiangMaiGoose, extra_visitors: ChiangMaiGoose, override_footer: DefaultWorkerImgURL, enable_override_footer: ChiangMaiGoose, hide_g_booking_logo: ChiangMaiGoose, hide_call_button: ChiangMaiGoose, hide_new_appointment_button: ChiangMaiGoose, hide_social_networks_authentication: ChiangMaiGoose, skip_service_duration_alignment: ChiangMaiGoose, warning_contact_data_text: DefaultWorkerImgURL, enable_warning_contact_data: ChiangMaiGoose, split_name: ChiangMaiGoose, use_default_worker_img: ChiangMaiGoose, default_worker_img_url: DefaultWorkerImgURL, use_clusters_map: ChiangMaiGoose, use_appointment_reminder: ChiangMaiGoose, disable_widget: ChiangMaiGoose, disable_widget_message: BeijingPigeon, deny_same_time_records: ChiangMaiGoose, sort_workers_by_workload: ChiangMaiGoose, most_free_enable: ChiangMaiGoose, ask_client_birthday: ChiangMaiGoose, ask_client_gender: ChiangMaiGoose, split_insurance_client: ChiangMaiGoose, insurance_client_support_phone: Cabinets, show_disabled_taxonomies: ChiangMaiGoose, disabled_taxonomies_text: BeijingPigeon, worker_name_reverse: ChiangMaiGoose, use_default_service_img: ChiangMaiGoose, client_blocking_settings: ClientBlockingSettings, default_service_img_url: BeijingPigeon, allow_book_visitor: ChiangMaiGoose, use_new_reserve_api: ChiangMaiGoose, allow_auto_select: ChiangMaiGoose, use_direct_schedule_read: Repeats, allow_skip_time_check: ChiangMaiGoose, use_insurance_select: ChiangMaiGoose, filter_non_insurance_schedule: ChiangMaiGoose, use_insurance_guarantee_letter: ChiangMaiGoose, use_resource_page_loading: ChiangMaiGoose, new_widget_theme: NewWidgetTheme, worker_unavailability_text: BeijingPigeon) -> None:
        self.revision_version = revision_version
        self.crunchv2 = crunchv2
        self.use_crac = use_crac
        self.crac_slot_size = crac_slot_size
        self.widget_use_crac = widget_use_crac
        self.skip_days_forward = skip_days_forward
        self.days_forward = days_forward
        self.crac_server = crac_server
        self.use_med_auth = use_med_auth
        self.use_sort_by_name = use_sort_by_name
        self.use_middle_name = use_middle_name
        self.show_surname_first = show_surname_first
        self.hide_prices = hide_prices
        self.hide_empty_days = hide_empty_days
        self.show_map = show_map
        self.tentative_ttl = tentative_ttl
        self.show_drink_question = show_drink_question
        self.show_talk_question = show_talk_question
        self.show_client_address = show_client_address
        self.skip_mobile_map = skip_mobile_map
        self.skip_authentication = skip_authentication
        self.skip_service_selection = skip_service_selection
        self.show_taxonomy_confirmation_alert = show_taxonomy_confirmation_alert
        self.show_client_comment = show_client_comment
        self.client_comment_title = client_comment_title
        self.calendar_mode = calendar_mode
        self.calendar_mode_hide_time = calendar_mode_hide_time
        self.use_coupon = use_coupon
        self.dont_require_email = dont_require_email
        self.email_is_mandatory = email_is_mandatory
        self.display_slot_size = display_slot_size
        self.additional_name = additional_name
        self.short_link = short_link
        self.appointment_confirmation_title = appointment_confirmation_title
        self.appointment_confirmation_text = appointment_confirmation_text
        self.theme = theme
        self.social_sharing = social_sharing
        self.no_default_images = no_default_images
        self.without_workers = without_workers
        self.bookable_months_count = bookable_months_count
        self.day_unavailable_label = day_unavailable_label
        self.day_off_label = day_off_label
        self.use_business_schedule_for_unavailable_label = use_business_schedule_for_unavailable_label
        self.hide_any_worker_booking = hide_any_worker_booking
        self.disable_mobile_widget = disable_mobile_widget
        self.social_network_image = social_network_image
        self.payment = payment
        self.payment_provider = payment_provider
        self.alignment_taxonomy_slots = alignment_taxonomy_slots
        self.bookable_date_ranges = bookable_date_ranges
        self.discounted_price_rounding = discounted_price_rounding
        self.multi_service_booking = multi_service_booking
        self.max_service_booking = max_service_booking
        self.multi_timeslot_booking = multi_timeslot_booking
        self.max_timeslot_booking = max_timeslot_booking
        self.multi_timeslot_booking_all_days = multi_timeslot_booking_all_days
        self.show_all_workers = show_all_workers
        self.sort_by_most_free = sort_by_most_free
        self.skip_time_selection = skip_time_selection
        self.skip_time_selection_service_i_ds = skip_time_selection_service_i_ds
        self.skip_worker_services_selection = skip_worker_services_selection
        self.skip_worker_selected_service_i_ds = skip_worker_selected_service_i_ds
        self.require_agreement = require_agreement
        self.require_agreement_link = require_agreement_link
        self.hide_gray_slots = hide_gray_slots
        self.extra_visitors = extra_visitors
        self.override_footer = override_footer
        self.enable_override_footer = enable_override_footer
        self.hide_g_booking_logo = hide_g_booking_logo
        self.hide_call_button = hide_call_button
        self.hide_new_appointment_button = hide_new_appointment_button
        self.hide_social_networks_authentication = hide_social_networks_authentication
        self.skip_service_duration_alignment = skip_service_duration_alignment
        self.warning_contact_data_text = warning_contact_data_text
        self.enable_warning_contact_data = enable_warning_contact_data
        self.split_name = split_name
        self.use_default_worker_img = use_default_worker_img
        self.default_worker_img_url = default_worker_img_url
        self.use_clusters_map = use_clusters_map
        self.use_appointment_reminder = use_appointment_reminder
        self.disable_widget = disable_widget
        self.disable_widget_message = disable_widget_message
        self.deny_same_time_records = deny_same_time_records
        self.sort_workers_by_workload = sort_workers_by_workload
        self.most_free_enable = most_free_enable
        self.ask_client_birthday = ask_client_birthday
        self.ask_client_gender = ask_client_gender
        self.split_insurance_client = split_insurance_client
        self.insurance_client_support_phone = insurance_client_support_phone
        self.show_disabled_taxonomies = show_disabled_taxonomies
        self.disabled_taxonomies_text = disabled_taxonomies_text
        self.worker_name_reverse = worker_name_reverse
        self.use_default_service_img = use_default_service_img
        self.client_blocking_settings = client_blocking_settings
        self.default_service_img_url = default_service_img_url
        self.allow_book_visitor = allow_book_visitor
        self.use_new_reserve_api = use_new_reserve_api
        self.allow_auto_select = allow_auto_select
        self.use_direct_schedule_read = use_direct_schedule_read
        self.allow_skip_time_check = allow_skip_time_check
        self.use_insurance_select = use_insurance_select
        self.filter_non_insurance_schedule = filter_non_insurance_schedule
        self.use_insurance_guarantee_letter = use_insurance_guarantee_letter
        self.use_resource_page_loading = use_resource_page_loading
        self.new_widget_theme = new_widget_theme
        self.worker_unavailability_text = worker_unavailability_text

    @staticmethod
    def from_dict(obj: Any) -> 'WidgetConfigurationProperties':
        assert isinstance(obj, dict)
        revision_version = BeijingPigeon.from_dict(obj.get("revisionVersion"))
        crunchv2 = ChiangMaiGoose.from_dict(obj.get("crunchv2"))
        use_crac = ChiangMaiGoose.from_dict(obj.get("useCRAC"))
        crac_slot_size = CracSlotSize.from_dict(obj.get("cracSlotSize"))
        widget_use_crac = ChiangMaiGoose.from_dict(obj.get("widgetUseCRAC"))
        skip_days_forward = ChiangMaiGoose.from_dict(obj.get("skipDaysForward"))
        days_forward = TrapaniSnowLeopard.from_dict(obj.get("daysForward"))
        crac_server = BackofficeType.from_dict(obj.get("cracServer"))
        use_med_auth = ChiangMaiGoose.from_dict(obj.get("useMedAuth"))
        use_sort_by_name = ChiangMaiGoose.from_dict(obj.get("useSortByName"))
        use_middle_name = ChiangMaiGoose.from_dict(obj.get("useMiddleName"))
        show_surname_first = ChiangMaiGoose.from_dict(obj.get("showSurnameFirst"))
        hide_prices = ChiangMaiGoose.from_dict(obj.get("hidePrices"))
        hide_empty_days = ChiangMaiGoose.from_dict(obj.get("hideEmptyDays"))
        show_map = ChiangMaiGoose.from_dict(obj.get("showMap"))
        tentative_ttl = BeijingPigeon.from_dict(obj.get("tentativeTTL"))
        show_drink_question = ChiangMaiGoose.from_dict(obj.get("showDrinkQuestion"))
        show_talk_question = ChiangMaiGoose.from_dict(obj.get("showTalkQuestion"))
        show_client_address = ChiangMaiGoose.from_dict(obj.get("showClientAddress"))
        skip_mobile_map = ChiangMaiGoose.from_dict(obj.get("skipMobileMap"))
        skip_authentication = ChiangMaiGoose.from_dict(obj.get("skipAuthentication"))
        skip_service_selection = ChiangMaiGoose.from_dict(obj.get("skipServiceSelection"))
        show_taxonomy_confirmation_alert = ChiangMaiGoose.from_dict(obj.get("showTaxonomyConfirmationAlert"))
        show_client_comment = ChiangMaiGoose.from_dict(obj.get("showClientComment"))
        client_comment_title = ChiangMaiGoose.from_dict(obj.get("clientCommentTitle"))
        calendar_mode = ChiangMaiGoose.from_dict(obj.get("calendarMode"))
        calendar_mode_hide_time = ChiangMaiGoose.from_dict(obj.get("calendarModeHideTime"))
        use_coupon = ChiangMaiGoose.from_dict(obj.get("useCoupon"))
        dont_require_email = ChiangMaiGoose.from_dict(obj.get("dontRequireEmail"))
        email_is_mandatory = ChiangMaiGoose.from_dict(obj.get("emailIsMandatory"))
        display_slot_size = BeijingPigeon.from_dict(obj.get("displaySlotSize"))
        additional_name = BeijingPigeon.from_dict(obj.get("additionalName"))
        short_link = BeijingPigeon.from_dict(obj.get("shortLink"))
        appointment_confirmation_title = BeijingPigeon.from_dict(obj.get("appointment_confirmation_title"))
        appointment_confirmation_text = BeijingPigeon.from_dict(obj.get("appointment_confirmation_text"))
        theme = DefaultWorkerImgURL.from_dict(obj.get("theme"))
        social_sharing = SocialSharing.from_dict(obj.get("socialSharing"))
        no_default_images = ChiangMaiGoose.from_dict(obj.get("noDefaultImages"))
        without_workers = ChiangMaiGoose.from_dict(obj.get("withoutWorkers"))
        bookable_months_count = TrapaniSnowLeopard.from_dict(obj.get("bookableMonthsCount"))
        day_unavailable_label = BeijingPigeon.from_dict(obj.get("dayUnavailableLabel"))
        day_off_label = BeijingPigeon.from_dict(obj.get("dayOffLabel"))
        use_business_schedule_for_unavailable_label = ChiangMaiGoose.from_dict(obj.get("useBusinessScheduleForUnavailableLabel"))
        hide_any_worker_booking = ChiangMaiGoose.from_dict(obj.get("hideAnyWorkerBooking"))
        disable_mobile_widget = ChiangMaiGoose.from_dict(obj.get("disableMobileWidget"))
        social_network_image = ChiangMaiGoose.from_dict(obj.get("socialNetworkImage"))
        payment = Repeats.from_dict(obj.get("payment"))
        payment_provider = Repeats.from_dict(obj.get("paymentProvider"))
        alignment_taxonomy_slots = ChiangMaiGoose.from_dict(obj.get("alignmentTaxonomySlots"))
        bookable_date_ranges = BookableDateRanges.from_dict(obj.get("bookableDateRanges"))
        discounted_price_rounding = DiscountedPriceRounding.from_dict(obj.get("discountedPriceRounding"))
        multi_service_booking = ChiangMaiGoose.from_dict(obj.get("multiServiceBooking"))
        max_service_booking = TrapaniSnowLeopard.from_dict(obj.get("maxServiceBooking"))
        multi_timeslot_booking = ChiangMaiGoose.from_dict(obj.get("multiTimeslotBooking"))
        max_timeslot_booking = TrapaniSnowLeopard.from_dict(obj.get("maxTimeslotBooking"))
        multi_timeslot_booking_all_days = ChiangMaiGoose.from_dict(obj.get("multiTimeslotBookingAllDays"))
        show_all_workers = ChiangMaiGoose.from_dict(obj.get("showAllWorkers"))
        sort_by_most_free = ChiangMaiGoose.from_dict(obj.get("sortByMostFree"))
        skip_time_selection = ChiangMaiGoose.from_dict(obj.get("skipTimeSelection"))
        skip_time_selection_service_i_ds = DefaultFilteredWorkers.from_dict(obj.get("skipTimeSelectionServiceIDs"))
        skip_worker_services_selection = ChiangMaiGoose.from_dict(obj.get("skipWorkerServicesSelection"))
        skip_worker_selected_service_i_ds = DefaultFilteredWorkers.from_dict(obj.get("skipWorkerSelectedServiceIDs"))
        require_agreement = ChiangMaiGoose.from_dict(obj.get("requireAgreement"))
        require_agreement_link = DefaultWorkerImgURL.from_dict(obj.get("requireAgreementLink"))
        hide_gray_slots = ChiangMaiGoose.from_dict(obj.get("hideGraySlots"))
        extra_visitors = ChiangMaiGoose.from_dict(obj.get("extraVisitors"))
        override_footer = DefaultWorkerImgURL.from_dict(obj.get("overrideFooter"))
        enable_override_footer = ChiangMaiGoose.from_dict(obj.get("enableOverrideFooter"))
        hide_g_booking_logo = ChiangMaiGoose.from_dict(obj.get("hideGBookingLogo"))
        hide_call_button = ChiangMaiGoose.from_dict(obj.get("hideCallButton"))
        hide_new_appointment_button = ChiangMaiGoose.from_dict(obj.get("hideNewAppointmentButton"))
        hide_social_networks_authentication = ChiangMaiGoose.from_dict(obj.get("hideSocialNetworksAuthentication"))
        skip_service_duration_alignment = ChiangMaiGoose.from_dict(obj.get("skipServiceDurationAlignment"))
        warning_contact_data_text = DefaultWorkerImgURL.from_dict(obj.get("warningContactDataText"))
        enable_warning_contact_data = ChiangMaiGoose.from_dict(obj.get("enableWarningContactData"))
        split_name = ChiangMaiGoose.from_dict(obj.get("splitName"))
        use_default_worker_img = ChiangMaiGoose.from_dict(obj.get("useDefaultWorkerImg"))
        default_worker_img_url = DefaultWorkerImgURL.from_dict(obj.get("defaultWorkerImgUrl"))
        use_clusters_map = ChiangMaiGoose.from_dict(obj.get("useClustersMap"))
        use_appointment_reminder = ChiangMaiGoose.from_dict(obj.get("useAppointmentReminder"))
        disable_widget = ChiangMaiGoose.from_dict(obj.get("disableWidget"))
        disable_widget_message = BeijingPigeon.from_dict(obj.get("disableWidgetMessage"))
        deny_same_time_records = ChiangMaiGoose.from_dict(obj.get("denySameTimeRecords"))
        sort_workers_by_workload = ChiangMaiGoose.from_dict(obj.get("sortWorkersByWorkload"))
        most_free_enable = ChiangMaiGoose.from_dict(obj.get("mostFreeEnable"))
        ask_client_birthday = ChiangMaiGoose.from_dict(obj.get("askClientBirthday"))
        ask_client_gender = ChiangMaiGoose.from_dict(obj.get("askClientGender"))
        split_insurance_client = ChiangMaiGoose.from_dict(obj.get("splitInsuranceClient"))
        insurance_client_support_phone = Cabinets.from_dict(obj.get("insuranceClientSupportPhone"))
        show_disabled_taxonomies = ChiangMaiGoose.from_dict(obj.get("showDisabledTaxonomies"))
        disabled_taxonomies_text = BeijingPigeon.from_dict(obj.get("disabledTaxonomiesText"))
        worker_name_reverse = ChiangMaiGoose.from_dict(obj.get("workerNameReverse"))
        use_default_service_img = ChiangMaiGoose.from_dict(obj.get("useDefaultServiceImg"))
        client_blocking_settings = ClientBlockingSettings.from_dict(obj.get("clientBlockingSettings"))
        default_service_img_url = BeijingPigeon.from_dict(obj.get("defaultServiceImgUrl"))
        allow_book_visitor = ChiangMaiGoose.from_dict(obj.get("allowBookVisitor"))
        use_new_reserve_api = ChiangMaiGoose.from_dict(obj.get("useNewReserveAPI"))
        allow_auto_select = ChiangMaiGoose.from_dict(obj.get("allowAutoSelect"))
        use_direct_schedule_read = Repeats.from_dict(obj.get("useDirectScheduleRead"))
        allow_skip_time_check = ChiangMaiGoose.from_dict(obj.get("allowSkipTimeCheck"))
        use_insurance_select = ChiangMaiGoose.from_dict(obj.get("useInsuranceSelect"))
        filter_non_insurance_schedule = ChiangMaiGoose.from_dict(obj.get("filterNonInsuranceSchedule"))
        use_insurance_guarantee_letter = ChiangMaiGoose.from_dict(obj.get("useInsuranceGuaranteeLetter"))
        use_resource_page_loading = ChiangMaiGoose.from_dict(obj.get("useResourcePageLoading"))
        new_widget_theme = NewWidgetTheme.from_dict(obj.get("newWidgetTheme"))
        worker_unavailability_text = BeijingPigeon.from_dict(obj.get("worker_unavailability_text"))
        return WidgetConfigurationProperties(revision_version, crunchv2, use_crac, crac_slot_size, widget_use_crac, skip_days_forward, days_forward, crac_server, use_med_auth, use_sort_by_name, use_middle_name, show_surname_first, hide_prices, hide_empty_days, show_map, tentative_ttl, show_drink_question, show_talk_question, show_client_address, skip_mobile_map, skip_authentication, skip_service_selection, show_taxonomy_confirmation_alert, show_client_comment, client_comment_title, calendar_mode, calendar_mode_hide_time, use_coupon, dont_require_email, email_is_mandatory, display_slot_size, additional_name, short_link, appointment_confirmation_title, appointment_confirmation_text, theme, social_sharing, no_default_images, without_workers, bookable_months_count, day_unavailable_label, day_off_label, use_business_schedule_for_unavailable_label, hide_any_worker_booking, disable_mobile_widget, social_network_image, payment, payment_provider, alignment_taxonomy_slots, bookable_date_ranges, discounted_price_rounding, multi_service_booking, max_service_booking, multi_timeslot_booking, max_timeslot_booking, multi_timeslot_booking_all_days, show_all_workers, sort_by_most_free, skip_time_selection, skip_time_selection_service_i_ds, skip_worker_services_selection, skip_worker_selected_service_i_ds, require_agreement, require_agreement_link, hide_gray_slots, extra_visitors, override_footer, enable_override_footer, hide_g_booking_logo, hide_call_button, hide_new_appointment_button, hide_social_networks_authentication, skip_service_duration_alignment, warning_contact_data_text, enable_warning_contact_data, split_name, use_default_worker_img, default_worker_img_url, use_clusters_map, use_appointment_reminder, disable_widget, disable_widget_message, deny_same_time_records, sort_workers_by_workload, most_free_enable, ask_client_birthday, ask_client_gender, split_insurance_client, insurance_client_support_phone, show_disabled_taxonomies, disabled_taxonomies_text, worker_name_reverse, use_default_service_img, client_blocking_settings, default_service_img_url, allow_book_visitor, use_new_reserve_api, allow_auto_select, use_direct_schedule_read, allow_skip_time_check, use_insurance_select, filter_non_insurance_schedule, use_insurance_guarantee_letter, use_resource_page_loading, new_widget_theme, worker_unavailability_text)

    def to_dict(self) -> dict:
        result: dict = {}
        result["revisionVersion"] = to_class(BeijingPigeon, self.revision_version)
        result["crunchv2"] = to_class(ChiangMaiGoose, self.crunchv2)
        result["useCRAC"] = to_class(ChiangMaiGoose, self.use_crac)
        result["cracSlotSize"] = to_class(CracSlotSize, self.crac_slot_size)
        result["widgetUseCRAC"] = to_class(ChiangMaiGoose, self.widget_use_crac)
        result["skipDaysForward"] = to_class(ChiangMaiGoose, self.skip_days_forward)
        result["daysForward"] = to_class(TrapaniSnowLeopard, self.days_forward)
        result["cracServer"] = to_class(BackofficeType, self.crac_server)
        result["useMedAuth"] = to_class(ChiangMaiGoose, self.use_med_auth)
        result["useSortByName"] = to_class(ChiangMaiGoose, self.use_sort_by_name)
        result["useMiddleName"] = to_class(ChiangMaiGoose, self.use_middle_name)
        result["showSurnameFirst"] = to_class(ChiangMaiGoose, self.show_surname_first)
        result["hidePrices"] = to_class(ChiangMaiGoose, self.hide_prices)
        result["hideEmptyDays"] = to_class(ChiangMaiGoose, self.hide_empty_days)
        result["showMap"] = to_class(ChiangMaiGoose, self.show_map)
        result["tentativeTTL"] = to_class(BeijingPigeon, self.tentative_ttl)
        result["showDrinkQuestion"] = to_class(ChiangMaiGoose, self.show_drink_question)
        result["showTalkQuestion"] = to_class(ChiangMaiGoose, self.show_talk_question)
        result["showClientAddress"] = to_class(ChiangMaiGoose, self.show_client_address)
        result["skipMobileMap"] = to_class(ChiangMaiGoose, self.skip_mobile_map)
        result["skipAuthentication"] = to_class(ChiangMaiGoose, self.skip_authentication)
        result["skipServiceSelection"] = to_class(ChiangMaiGoose, self.skip_service_selection)
        result["showTaxonomyConfirmationAlert"] = to_class(ChiangMaiGoose, self.show_taxonomy_confirmation_alert)
        result["showClientComment"] = to_class(ChiangMaiGoose, self.show_client_comment)
        result["clientCommentTitle"] = to_class(ChiangMaiGoose, self.client_comment_title)
        result["calendarMode"] = to_class(ChiangMaiGoose, self.calendar_mode)
        result["calendarModeHideTime"] = to_class(ChiangMaiGoose, self.calendar_mode_hide_time)
        result["useCoupon"] = to_class(ChiangMaiGoose, self.use_coupon)
        result["dontRequireEmail"] = to_class(ChiangMaiGoose, self.dont_require_email)
        result["emailIsMandatory"] = to_class(ChiangMaiGoose, self.email_is_mandatory)
        result["displaySlotSize"] = to_class(BeijingPigeon, self.display_slot_size)
        result["additionalName"] = to_class(BeijingPigeon, self.additional_name)
        result["shortLink"] = to_class(BeijingPigeon, self.short_link)
        result["appointment_confirmation_title"] = to_class(BeijingPigeon, self.appointment_confirmation_title)
        result["appointment_confirmation_text"] = to_class(BeijingPigeon, self.appointment_confirmation_text)
        result["theme"] = to_class(DefaultWorkerImgURL, self.theme)
        result["socialSharing"] = to_class(SocialSharing, self.social_sharing)
        result["noDefaultImages"] = to_class(ChiangMaiGoose, self.no_default_images)
        result["withoutWorkers"] = to_class(ChiangMaiGoose, self.without_workers)
        result["bookableMonthsCount"] = to_class(TrapaniSnowLeopard, self.bookable_months_count)
        result["dayUnavailableLabel"] = to_class(BeijingPigeon, self.day_unavailable_label)
        result["dayOffLabel"] = to_class(BeijingPigeon, self.day_off_label)
        result["useBusinessScheduleForUnavailableLabel"] = to_class(ChiangMaiGoose, self.use_business_schedule_for_unavailable_label)
        result["hideAnyWorkerBooking"] = to_class(ChiangMaiGoose, self.hide_any_worker_booking)
        result["disableMobileWidget"] = to_class(ChiangMaiGoose, self.disable_mobile_widget)
        result["socialNetworkImage"] = to_class(ChiangMaiGoose, self.social_network_image)
        result["payment"] = to_class(Repeats, self.payment)
        result["paymentProvider"] = to_class(Repeats, self.payment_provider)
        result["alignmentTaxonomySlots"] = to_class(ChiangMaiGoose, self.alignment_taxonomy_slots)
        result["bookableDateRanges"] = to_class(BookableDateRanges, self.bookable_date_ranges)
        result["discountedPriceRounding"] = to_class(DiscountedPriceRounding, self.discounted_price_rounding)
        result["multiServiceBooking"] = to_class(ChiangMaiGoose, self.multi_service_booking)
        result["maxServiceBooking"] = to_class(TrapaniSnowLeopard, self.max_service_booking)
        result["multiTimeslotBooking"] = to_class(ChiangMaiGoose, self.multi_timeslot_booking)
        result["maxTimeslotBooking"] = to_class(TrapaniSnowLeopard, self.max_timeslot_booking)
        result["multiTimeslotBookingAllDays"] = to_class(ChiangMaiGoose, self.multi_timeslot_booking_all_days)
        result["showAllWorkers"] = to_class(ChiangMaiGoose, self.show_all_workers)
        result["sortByMostFree"] = to_class(ChiangMaiGoose, self.sort_by_most_free)
        result["skipTimeSelection"] = to_class(ChiangMaiGoose, self.skip_time_selection)
        result["skipTimeSelectionServiceIDs"] = to_class(DefaultFilteredWorkers, self.skip_time_selection_service_i_ds)
        result["skipWorkerServicesSelection"] = to_class(ChiangMaiGoose, self.skip_worker_services_selection)
        result["skipWorkerSelectedServiceIDs"] = to_class(DefaultFilteredWorkers, self.skip_worker_selected_service_i_ds)
        result["requireAgreement"] = to_class(ChiangMaiGoose, self.require_agreement)
        result["requireAgreementLink"] = to_class(DefaultWorkerImgURL, self.require_agreement_link)
        result["hideGraySlots"] = to_class(ChiangMaiGoose, self.hide_gray_slots)
        result["extraVisitors"] = to_class(ChiangMaiGoose, self.extra_visitors)
        result["overrideFooter"] = to_class(DefaultWorkerImgURL, self.override_footer)
        result["enableOverrideFooter"] = to_class(ChiangMaiGoose, self.enable_override_footer)
        result["hideGBookingLogo"] = to_class(ChiangMaiGoose, self.hide_g_booking_logo)
        result["hideCallButton"] = to_class(ChiangMaiGoose, self.hide_call_button)
        result["hideNewAppointmentButton"] = to_class(ChiangMaiGoose, self.hide_new_appointment_button)
        result["hideSocialNetworksAuthentication"] = to_class(ChiangMaiGoose, self.hide_social_networks_authentication)
        result["skipServiceDurationAlignment"] = to_class(ChiangMaiGoose, self.skip_service_duration_alignment)
        result["warningContactDataText"] = to_class(DefaultWorkerImgURL, self.warning_contact_data_text)
        result["enableWarningContactData"] = to_class(ChiangMaiGoose, self.enable_warning_contact_data)
        result["splitName"] = to_class(ChiangMaiGoose, self.split_name)
        result["useDefaultWorkerImg"] = to_class(ChiangMaiGoose, self.use_default_worker_img)
        result["defaultWorkerImgUrl"] = to_class(DefaultWorkerImgURL, self.default_worker_img_url)
        result["useClustersMap"] = to_class(ChiangMaiGoose, self.use_clusters_map)
        result["useAppointmentReminder"] = to_class(ChiangMaiGoose, self.use_appointment_reminder)
        result["disableWidget"] = to_class(ChiangMaiGoose, self.disable_widget)
        result["disableWidgetMessage"] = to_class(BeijingPigeon, self.disable_widget_message)
        result["denySameTimeRecords"] = to_class(ChiangMaiGoose, self.deny_same_time_records)
        result["sortWorkersByWorkload"] = to_class(ChiangMaiGoose, self.sort_workers_by_workload)
        result["mostFreeEnable"] = to_class(ChiangMaiGoose, self.most_free_enable)
        result["askClientBirthday"] = to_class(ChiangMaiGoose, self.ask_client_birthday)
        result["askClientGender"] = to_class(ChiangMaiGoose, self.ask_client_gender)
        result["splitInsuranceClient"] = to_class(ChiangMaiGoose, self.split_insurance_client)
        result["insuranceClientSupportPhone"] = to_class(Cabinets, self.insurance_client_support_phone)
        result["showDisabledTaxonomies"] = to_class(ChiangMaiGoose, self.show_disabled_taxonomies)
        result["disabledTaxonomiesText"] = to_class(BeijingPigeon, self.disabled_taxonomies_text)
        result["workerNameReverse"] = to_class(ChiangMaiGoose, self.worker_name_reverse)
        result["useDefaultServiceImg"] = to_class(ChiangMaiGoose, self.use_default_service_img)
        result["clientBlockingSettings"] = to_class(ClientBlockingSettings, self.client_blocking_settings)
        result["defaultServiceImgUrl"] = to_class(BeijingPigeon, self.default_service_img_url)
        result["allowBookVisitor"] = to_class(ChiangMaiGoose, self.allow_book_visitor)
        result["useNewReserveAPI"] = to_class(ChiangMaiGoose, self.use_new_reserve_api)
        result["allowAutoSelect"] = to_class(ChiangMaiGoose, self.allow_auto_select)
        result["useDirectScheduleRead"] = to_class(Repeats, self.use_direct_schedule_read)
        result["allowSkipTimeCheck"] = to_class(ChiangMaiGoose, self.allow_skip_time_check)
        result["useInsuranceSelect"] = to_class(ChiangMaiGoose, self.use_insurance_select)
        result["filterNonInsuranceSchedule"] = to_class(ChiangMaiGoose, self.filter_non_insurance_schedule)
        result["useInsuranceGuaranteeLetter"] = to_class(ChiangMaiGoose, self.use_insurance_guarantee_letter)
        result["useResourcePageLoading"] = to_class(ChiangMaiGoose, self.use_resource_page_loading)
        result["newWidgetTheme"] = to_class(NewWidgetTheme, self.new_widget_theme)
        result["worker_unavailability_text"] = to_class(BeijingPigeon, self.worker_unavailability_text)
        return result


class WidgetConfiguration:
    title: str
    type: TypeElement
    properties: WidgetConfigurationProperties
    additional_properties: bool

    def __init__(self, title: str, type: TypeElement, properties: WidgetConfigurationProperties, additional_properties: bool) -> None:
        self.title = title
        self.type = type
        self.properties = properties
        self.additional_properties = additional_properties

    @staticmethod
    def from_dict(obj: Any) -> 'WidgetConfiguration':
        assert isinstance(obj, dict)
        title = from_str(obj.get("title"))
        type = TypeElement(obj.get("type"))
        properties = WidgetConfigurationProperties.from_dict(obj.get("properties"))
        additional_properties = from_bool(obj.get("additionalProperties"))
        return WidgetConfiguration(title, type, properties, additional_properties)

    def to_dict(self) -> dict:
        result: dict = {}
        result["title"] = from_str(self.title)
        result["type"] = to_enum(TypeElement, self.type)
        result["properties"] = to_class(WidgetConfigurationProperties, self.properties)
        result["additionalProperties"] = from_bool(self.additional_properties)
        return result


class Definitions:
    metro_station: Optional[MetroStation]
    department: Optional[Department]
    cabinet: Optional[Cabinet]
    taxonomy_showcase: Optional[TaxonomyShowcase]
    business_taxonomy_price: Optional[BusinessTaxonomyPrice]
    additional_business_taxonomy_price: Optional[AdditionalBusinessTaxonomyPrice]
    additional_business_taxonomy_product: Optional[AdditionalBusinessTaxonomyProduct]
    additional_duration: Optional[AdditionalDuration]
    consumable: Optional[Consumable]
    business_taxonomy: Optional[BusinessTaxonomy]
    backoffice_configuration: Optional[BackofficeConfiguration]
    widget_configuration: Optional[WidgetConfiguration]
    resource_profile: Optional[ResourceProfile]
    resource_taxonomy_level: Optional[ResourceTaxonomyLevel]
    resource_taxonomy_children: Optional[ResourceTaxonomyChildren]
    even_odd_timetable: Optional[EvenOddTimetable]
    resource_location: Optional[ResourceLocation]

    def __init__(self, metro_station: Optional[MetroStation], department: Optional[Department], cabinet: Optional[Cabinet], taxonomy_showcase: Optional[TaxonomyShowcase], business_taxonomy_price: Optional[BusinessTaxonomyPrice], additional_business_taxonomy_price: Optional[AdditionalBusinessTaxonomyPrice], additional_business_taxonomy_product: Optional[AdditionalBusinessTaxonomyProduct], additional_duration: Optional[AdditionalDuration], consumable: Optional[Consumable], business_taxonomy: Optional[BusinessTaxonomy], backoffice_configuration: Optional[BackofficeConfiguration], widget_configuration: Optional[WidgetConfiguration], resource_profile: Optional[ResourceProfile], resource_taxonomy_level: Optional[ResourceTaxonomyLevel], resource_taxonomy_children: Optional[ResourceTaxonomyChildren], even_odd_timetable: Optional[EvenOddTimetable], resource_location: Optional[ResourceLocation]) -> None:
        self.metro_station = metro_station
        self.department = department
        self.cabinet = cabinet
        self.taxonomy_showcase = taxonomy_showcase
        self.business_taxonomy_price = business_taxonomy_price
        self.additional_business_taxonomy_price = additional_business_taxonomy_price
        self.additional_business_taxonomy_product = additional_business_taxonomy_product
        self.additional_duration = additional_duration
        self.consumable = consumable
        self.business_taxonomy = business_taxonomy
        self.backoffice_configuration = backoffice_configuration
        self.widget_configuration = widget_configuration
        self.resource_profile = resource_profile
        self.resource_taxonomy_level = resource_taxonomy_level
        self.resource_taxonomy_children = resource_taxonomy_children
        self.even_odd_timetable = even_odd_timetable
        self.resource_location = resource_location

    @staticmethod
    def from_dict(obj: Any) -> 'Definitions':
        assert isinstance(obj, dict)
        metro_station = from_union([MetroStation.from_dict, from_none], obj.get("MetroStation"))
        department = from_union([Department.from_dict, from_none], obj.get("Department"))
        cabinet = from_union([Cabinet.from_dict, from_none], obj.get("Cabinet"))
        taxonomy_showcase = from_union([TaxonomyShowcase.from_dict, from_none], obj.get("TaxonomyShowcase"))
        business_taxonomy_price = from_union([BusinessTaxonomyPrice.from_dict, from_none], obj.get("BusinessTaxonomyPrice"))
        additional_business_taxonomy_price = from_union([AdditionalBusinessTaxonomyPrice.from_dict, from_none], obj.get("AdditionalBusinessTaxonomyPrice"))
        additional_business_taxonomy_product = from_union([AdditionalBusinessTaxonomyProduct.from_dict, from_none], obj.get("AdditionalBusinessTaxonomyProduct"))
        additional_duration = from_union([AdditionalDuration.from_dict, from_none], obj.get("AdditionalDuration"))
        consumable = from_union([Consumable.from_dict, from_none], obj.get("Consumable"))
        business_taxonomy = from_union([BusinessTaxonomy.from_dict, from_none], obj.get("BusinessTaxonomy"))
        backoffice_configuration = from_union([BackofficeConfiguration.from_dict, from_none], obj.get("BackofficeConfiguration"))
        widget_configuration = from_union([WidgetConfiguration.from_dict, from_none], obj.get("WidgetConfiguration"))
        resource_profile = from_union([ResourceProfile.from_dict, from_none], obj.get("ResourceProfile"))
        resource_taxonomy_level = from_union([ResourceTaxonomyLevel.from_dict, from_none], obj.get("ResourceTaxonomyLevel"))
        resource_taxonomy_children = from_union([ResourceTaxonomyChildren.from_dict, from_none], obj.get("ResourceTaxonomyChildren"))
        even_odd_timetable = from_union([EvenOddTimetable.from_dict, from_none], obj.get("EvenOddTimetable"))
        resource_location = from_union([ResourceLocation.from_dict, from_none], obj.get("ResourceLocation"))
        return Definitions(metro_station, department, cabinet, taxonomy_showcase, business_taxonomy_price, additional_business_taxonomy_price, additional_business_taxonomy_product, additional_duration, consumable, business_taxonomy, backoffice_configuration, widget_configuration, resource_profile, resource_taxonomy_level, resource_taxonomy_children, even_odd_timetable, resource_location)

    def to_dict(self) -> dict:
        result: dict = {}
        result["MetroStation"] = from_union([lambda x: to_class(MetroStation, x), from_none], self.metro_station)
        result["Department"] = from_union([lambda x: to_class(Department, x), from_none], self.department)
        result["Cabinet"] = from_union([lambda x: to_class(Cabinet, x), from_none], self.cabinet)
        result["TaxonomyShowcase"] = from_union([lambda x: to_class(TaxonomyShowcase, x), from_none], self.taxonomy_showcase)
        result["BusinessTaxonomyPrice"] = from_union([lambda x: to_class(BusinessTaxonomyPrice, x), from_none], self.business_taxonomy_price)
        result["AdditionalBusinessTaxonomyPrice"] = from_union([lambda x: to_class(AdditionalBusinessTaxonomyPrice, x), from_none], self.additional_business_taxonomy_price)
        result["AdditionalBusinessTaxonomyProduct"] = from_union([lambda x: to_class(AdditionalBusinessTaxonomyProduct, x), from_none], self.additional_business_taxonomy_product)
        result["AdditionalDuration"] = from_union([lambda x: to_class(AdditionalDuration, x), from_none], self.additional_duration)
        result["Consumable"] = from_union([lambda x: to_class(Consumable, x), from_none], self.consumable)
        result["BusinessTaxonomy"] = from_union([lambda x: to_class(BusinessTaxonomy, x), from_none], self.business_taxonomy)
        result["BackofficeConfiguration"] = from_union([lambda x: to_class(BackofficeConfiguration, x), from_none], self.backoffice_configuration)
        result["WidgetConfiguration"] = from_union([lambda x: to_class(WidgetConfiguration, x), from_none], self.widget_configuration)
        result["ResourceProfile"] = from_union([lambda x: to_class(ResourceProfile, x), from_none], self.resource_profile)
        result["ResourceTaxonomyLevel"] = from_union([lambda x: to_class(ResourceTaxonomyLevel, x), from_none], self.resource_taxonomy_level)
        result["ResourceTaxonomyChildren"] = from_union([lambda x: to_class(ResourceTaxonomyChildren, x), from_none], self.resource_taxonomy_children)
        result["EvenOddTimetable"] = from_union([lambda x: to_class(EvenOddTimetable, x), from_none], self.even_odd_timetable)
        result["ResourceLocation"] = from_union([lambda x: to_class(ResourceLocation, x), from_none], self.resource_location)
        return result


class AdditionalExtraID:
    description: Optional[str]
    type: TypeElement
    items: Optional[BeijingPigeon]

    def __init__(self, description: Optional[str], type: TypeElement, items: Optional[BeijingPigeon]) -> None:
        self.description = description
        self.type = type
        self.items = items

    @staticmethod
    def from_dict(obj: Any) -> 'AdditionalExtraID':
        assert isinstance(obj, dict)
        description = from_union([from_str, from_none], obj.get("description"))
        type = TypeElement(obj.get("type"))
        items = from_union([BeijingPigeon.from_dict, from_none], obj.get("items"))
        return AdditionalExtraID(description, type, items)

    def to_dict(self) -> dict:
        result: dict = {}
        result["description"] = from_union([from_str, from_none], self.description)
        result["type"] = to_enum(TypeElement, self.type)
        result["items"] = from_union([lambda x: to_class(BeijingPigeon, x), from_none], self.items)
        return result


class AdditionalSettingsProperties:
    appointment_extension_amount: TrapaniSnowLeopard
    appointment_extension_type: Repeats

    def __init__(self, appointment_extension_amount: TrapaniSnowLeopard, appointment_extension_type: Repeats) -> None:
        self.appointment_extension_amount = appointment_extension_amount
        self.appointment_extension_type = appointment_extension_type

    @staticmethod
    def from_dict(obj: Any) -> 'AdditionalSettingsProperties':
        assert isinstance(obj, dict)
        appointment_extension_amount = TrapaniSnowLeopard.from_dict(obj.get("appointmentExtensionAmount"))
        appointment_extension_type = Repeats.from_dict(obj.get("appointmentExtensionType"))
        return AdditionalSettingsProperties(appointment_extension_amount, appointment_extension_type)

    def to_dict(self) -> dict:
        result: dict = {}
        result["appointmentExtensionAmount"] = to_class(TrapaniSnowLeopard, self.appointment_extension_amount)
        result["appointmentExtensionType"] = to_class(Repeats, self.appointment_extension_type)
        return result


class AdditionalSettings:
    type: TypeElement
    properties: AdditionalSettingsProperties

    def __init__(self, type: TypeElement, properties: AdditionalSettingsProperties) -> None:
        self.type = type
        self.properties = properties

    @staticmethod
    def from_dict(obj: Any) -> 'AdditionalSettings':
        assert isinstance(obj, dict)
        type = TypeElement(obj.get("type"))
        properties = AdditionalSettingsProperties.from_dict(obj.get("properties"))
        return AdditionalSettings(type, properties)

    def to_dict(self) -> dict:
        result: dict = {}
        result["type"] = to_enum(TypeElement, self.type)
        result["properties"] = to_class(AdditionalSettingsProperties, self.properties)
        return result


class CallbackWidgetConfigurationProperties:
    title1: BeijingPigeon
    title2: BeijingPigeon

    def __init__(self, title1: BeijingPigeon, title2: BeijingPigeon) -> None:
        self.title1 = title1
        self.title2 = title2

    @staticmethod
    def from_dict(obj: Any) -> 'CallbackWidgetConfigurationProperties':
        assert isinstance(obj, dict)
        title1 = BeijingPigeon.from_dict(obj.get("title1"))
        title2 = BeijingPigeon.from_dict(obj.get("title2"))
        return CallbackWidgetConfigurationProperties(title1, title2)

    def to_dict(self) -> dict:
        result: dict = {}
        result["title1"] = to_class(BeijingPigeon, self.title1)
        result["title2"] = to_class(BeijingPigeon, self.title2)
        return result


class CallbackWidgetConfiguration:
    type: TypeElement
    properties: CallbackWidgetConfigurationProperties

    def __init__(self, type: TypeElement, properties: CallbackWidgetConfigurationProperties) -> None:
        self.type = type
        self.properties = properties

    @staticmethod
    def from_dict(obj: Any) -> 'CallbackWidgetConfiguration':
        assert isinstance(obj, dict)
        type = TypeElement(obj.get("type"))
        properties = CallbackWidgetConfigurationProperties.from_dict(obj.get("properties"))
        return CallbackWidgetConfiguration(type, properties)

    def to_dict(self) -> dict:
        result: dict = {}
        result["type"] = to_enum(TypeElement, self.type)
        result["properties"] = to_class(CallbackWidgetConfigurationProperties, self.properties)
        return result


class EvenOddTimetableClass:
    definition: str
    ref: str

    def __init__(self, definition: str, ref: str) -> None:
        self.definition = definition
        self.ref = ref

    @staticmethod
    def from_dict(obj: Any) -> 'EvenOddTimetableClass':
        assert isinstance(obj, dict)
        definition = from_str(obj.get("definition"))
        ref = from_str(obj.get("$ref"))
        return EvenOddTimetableClass(definition, ref)

    def to_dict(self) -> dict:
        result: dict = {}
        result["definition"] = from_str(self.definition)
        result["$ref"] = from_str(self.ref)
        return result


class Exceptions:
    definition: str
    type: TypeElement

    def __init__(self, definition: str, type: TypeElement) -> None:
        self.definition = definition
        self.type = type

    @staticmethod
    def from_dict(obj: Any) -> 'Exceptions':
        assert isinstance(obj, dict)
        definition = from_str(obj.get("definition"))
        type = TypeElement(obj.get("type"))
        return Exceptions(definition, type)

    def to_dict(self) -> dict:
        result: dict = {}
        result["definition"] = from_str(self.definition)
        result["type"] = to_enum(TypeElement, self.type)
        return result


class FromSMS:
    type: List[TypeElement]
    default: bool

    def __init__(self, type: List[TypeElement], default: bool) -> None:
        self.type = type
        self.default = default

    @staticmethod
    def from_dict(obj: Any) -> 'FromSMS':
        assert isinstance(obj, dict)
        type = from_list(TypeElement, obj.get("type"))
        default = from_bool(obj.get("default"))
        return FromSMS(type, default)

    def to_dict(self) -> dict:
        result: dict = {}
        result["type"] = from_list(lambda x: to_enum(TypeElement, x), self.type)
        result["default"] = from_bool(self.default)
        return result


class IconURL:
    description: str
    type: List[TypeElement]

    def __init__(self, description: str, type: List[TypeElement]) -> None:
        self.description = description
        self.type = type

    @staticmethod
    def from_dict(obj: Any) -> 'IconURL':
        assert isinstance(obj, dict)
        description = from_str(obj.get("description"))
        type = from_list(TypeElement, obj.get("type"))
        return IconURL(description, type)

    def to_dict(self) -> dict:
        result: dict = {}
        result["description"] = from_str(self.description)
        result["type"] = from_list(lambda x: to_enum(TypeElement, x), self.type)
        return result


class MiniWidgetConfigurationProperties:
    title1: BeijingPigeon
    title2: BeijingPigeon
    fields: Fields

    def __init__(self, title1: BeijingPigeon, title2: BeijingPigeon, fields: Fields) -> None:
        self.title1 = title1
        self.title2 = title2
        self.fields = fields

    @staticmethod
    def from_dict(obj: Any) -> 'MiniWidgetConfigurationProperties':
        assert isinstance(obj, dict)
        title1 = BeijingPigeon.from_dict(obj.get("title1"))
        title2 = BeijingPigeon.from_dict(obj.get("title2"))
        fields = Fields.from_dict(obj.get("fields"))
        return MiniWidgetConfigurationProperties(title1, title2, fields)

    def to_dict(self) -> dict:
        result: dict = {}
        result["title1"] = to_class(BeijingPigeon, self.title1)
        result["title2"] = to_class(BeijingPigeon, self.title2)
        result["fields"] = to_class(Fields, self.fields)
        return result


class MiniWidgetConfiguration:
    type: TypeElement
    properties: MiniWidgetConfigurationProperties

    def __init__(self, type: TypeElement, properties: MiniWidgetConfigurationProperties) -> None:
        self.type = type
        self.properties = properties

    @staticmethod
    def from_dict(obj: Any) -> 'MiniWidgetConfiguration':
        assert isinstance(obj, dict)
        type = TypeElement(obj.get("type"))
        properties = MiniWidgetConfigurationProperties.from_dict(obj.get("properties"))
        return MiniWidgetConfiguration(type, properties)

    def to_dict(self) -> dict:
        result: dict = {}
        result["type"] = to_enum(TypeElement, self.type)
        result["properties"] = to_class(MiniWidgetConfigurationProperties, self.properties)
        return result


class OriginGeneralInfo:
    description: str
    type: TypeElement
    ref: str

    def __init__(self, description: str, type: TypeElement, ref: str) -> None:
        self.description = description
        self.type = type
        self.ref = ref

    @staticmethod
    def from_dict(obj: Any) -> 'OriginGeneralInfo':
        assert isinstance(obj, dict)
        description = from_str(obj.get("description"))
        type = TypeElement(obj.get("type"))
        ref = from_str(obj.get("$ref"))
        return OriginGeneralInfo(description, type, ref)

    def to_dict(self) -> dict:
        result: dict = {}
        result["description"] = from_str(self.description)
        result["type"] = to_enum(TypeElement, self.type)
        result["$ref"] = from_str(self.ref)
        return result


class BackofficeConfigurationPropertiesClass:
    resource_timetable_type: Repeats
    enable_master_importance: ChiangMaiGoose

    def __init__(self, resource_timetable_type: Repeats, enable_master_importance: ChiangMaiGoose) -> None:
        self.resource_timetable_type = resource_timetable_type
        self.enable_master_importance = enable_master_importance

    @staticmethod
    def from_dict(obj: Any) -> 'BackofficeConfigurationPropertiesClass':
        assert isinstance(obj, dict)
        resource_timetable_type = Repeats.from_dict(obj.get("resourceTimetableType"))
        enable_master_importance = ChiangMaiGoose.from_dict(obj.get("enableMasterImportance"))
        return BackofficeConfigurationPropertiesClass(resource_timetable_type, enable_master_importance)

    def to_dict(self) -> dict:
        result: dict = {}
        result["resourceTimetableType"] = to_class(Repeats, self.resource_timetable_type)
        result["enableMasterImportance"] = to_class(ChiangMaiGoose, self.enable_master_importance)
        return result


class PropertiesBackofficeConfiguration:
    type: TypeElement
    properties: BackofficeConfigurationPropertiesClass

    def __init__(self, type: TypeElement, properties: BackofficeConfigurationPropertiesClass) -> None:
        self.type = type
        self.properties = properties

    @staticmethod
    def from_dict(obj: Any) -> 'PropertiesBackofficeConfiguration':
        assert isinstance(obj, dict)
        type = TypeElement(obj.get("type"))
        properties = BackofficeConfigurationPropertiesClass.from_dict(obj.get("properties"))
        return PropertiesBackofficeConfiguration(type, properties)

    def to_dict(self) -> dict:
        result: dict = {}
        result["type"] = to_enum(TypeElement, self.type)
        result["properties"] = to_class(BackofficeConfigurationPropertiesClass, self.properties)
        return result


class SlotsProperties:
    time: GeneralInfo

    def __init__(self, time: GeneralInfo) -> None:
        self.time = time

    @staticmethod
    def from_dict(obj: Any) -> 'SlotsProperties':
        assert isinstance(obj, dict)
        time = GeneralInfo.from_dict(obj.get("time"))
        return SlotsProperties(time)

    def to_dict(self) -> dict:
        result: dict = {}
        result["time"] = to_class(GeneralInfo, self.time)
        return result


class Slots:
    type: TypeElement
    properties: SlotsProperties

    def __init__(self, type: TypeElement, properties: SlotsProperties) -> None:
        self.type = type
        self.properties = properties

    @staticmethod
    def from_dict(obj: Any) -> 'Slots':
        assert isinstance(obj, dict)
        type = TypeElement(obj.get("type"))
        properties = SlotsProperties.from_dict(obj.get("properties"))
        return Slots(type, properties)

    def to_dict(self) -> dict:
        result: dict = {}
        result["type"] = to_enum(TypeElement, self.type)
        result["properties"] = to_class(SlotsProperties, self.properties)
        return result


class Status:
    definition: str
    type: TypeElement
    enum: List[str]

    def __init__(self, definition: str, type: TypeElement, enum: List[str]) -> None:
        self.definition = definition
        self.type = type
        self.enum = enum

    @staticmethod
    def from_dict(obj: Any) -> 'Status':
        assert isinstance(obj, dict)
        definition = from_str(obj.get("definition"))
        type = TypeElement(obj.get("type"))
        enum = from_list(from_str, obj.get("enum"))
        return Status(definition, type, enum)

    def to_dict(self) -> dict:
        result: dict = {}
        result["definition"] = from_str(self.definition)
        result["type"] = to_enum(TypeElement, self.type)
        result["enum"] = from_list(from_str, self.enum)
        return result


class Taxonomies:
    type: TypeElement
    items: BackofficeConfigurationClass
    description: Optional[str]

    def __init__(self, type: TypeElement, items: BackofficeConfigurationClass, description: Optional[str]) -> None:
        self.type = type
        self.items = items
        self.description = description

    @staticmethod
    def from_dict(obj: Any) -> 'Taxonomies':
        assert isinstance(obj, dict)
        type = TypeElement(obj.get("type"))
        items = BackofficeConfigurationClass.from_dict(obj.get("items"))
        description = from_union([from_str, from_none], obj.get("description"))
        return Taxonomies(type, items, description)

    def to_dict(self) -> dict:
        result: dict = {}
        result["type"] = to_enum(TypeElement, self.type)
        result["items"] = to_class(BackofficeConfigurationClass, self.items)
        result["description"] = from_union([from_str, from_none], self.description)
        return result


class IndigoProperties:
    name: BeijingPigeon
    taxonomies: DefaultFilteredWorkers

    def __init__(self, name: BeijingPigeon, taxonomies: DefaultFilteredWorkers) -> None:
        self.name = name
        self.taxonomies = taxonomies

    @staticmethod
    def from_dict(obj: Any) -> 'IndigoProperties':
        assert isinstance(obj, dict)
        name = BeijingPigeon.from_dict(obj.get("name"))
        taxonomies = DefaultFilteredWorkers.from_dict(obj.get("taxonomies"))
        return IndigoProperties(name, taxonomies)

    def to_dict(self) -> dict:
        result: dict = {}
        result["name"] = to_class(BeijingPigeon, self.name)
        result["taxonomies"] = to_class(DefaultFilteredWorkers, self.taxonomies)
        return result


class TaxonomiesComplexItems:
    type: TypeElement
    properties: IndigoProperties

    def __init__(self, type: TypeElement, properties: IndigoProperties) -> None:
        self.type = type
        self.properties = properties

    @staticmethod
    def from_dict(obj: Any) -> 'TaxonomiesComplexItems':
        assert isinstance(obj, dict)
        type = TypeElement(obj.get("type"))
        properties = IndigoProperties.from_dict(obj.get("properties"))
        return TaxonomiesComplexItems(type, properties)

    def to_dict(self) -> dict:
        result: dict = {}
        result["type"] = to_enum(TypeElement, self.type)
        result["properties"] = to_class(IndigoProperties, self.properties)
        return result


class TaxonomiesComplex:
    type: TypeElement
    items: TaxonomiesComplexItems

    def __init__(self, type: TypeElement, items: TaxonomiesComplexItems) -> None:
        self.type = type
        self.items = items

    @staticmethod
    def from_dict(obj: Any) -> 'TaxonomiesComplex':
        assert isinstance(obj, dict)
        type = TypeElement(obj.get("type"))
        items = TaxonomiesComplexItems.from_dict(obj.get("items"))
        return TaxonomiesComplex(type, items)

    def to_dict(self) -> dict:
        result: dict = {}
        result["type"] = to_enum(TypeElement, self.type)
        result["items"] = to_class(TaxonomiesComplexItems, self.items)
        return result


class TopServicesProperties:
    status: BeijingPigeon
    services: BeijingPigeon

    def __init__(self, status: BeijingPigeon, services: BeijingPigeon) -> None:
        self.status = status
        self.services = services

    @staticmethod
    def from_dict(obj: Any) -> 'TopServicesProperties':
        assert isinstance(obj, dict)
        status = BeijingPigeon.from_dict(obj.get("status"))
        services = BeijingPigeon.from_dict(obj.get("services"))
        return TopServicesProperties(status, services)

    def to_dict(self) -> dict:
        result: dict = {}
        result["status"] = to_class(BeijingPigeon, self.status)
        result["services"] = to_class(BeijingPigeon, self.services)
        return result


class TopServices:
    type: TypeElement
    properties: TopServicesProperties

    def __init__(self, type: TypeElement, properties: TopServicesProperties) -> None:
        self.type = type
        self.properties = properties

    @staticmethod
    def from_dict(obj: Any) -> 'TopServices':
        assert isinstance(obj, dict)
        type = TypeElement(obj.get("type"))
        properties = TopServicesProperties.from_dict(obj.get("properties"))
        return TopServices(type, properties)

    def to_dict(self) -> dict:
        result: dict = {}
        result["type"] = to_enum(TypeElement, self.type)
        result["properties"] = to_class(TopServicesProperties, self.properties)
        return result


class WeekProperties:
    sun: Cabinets
    mon: Cabinets
    tue: Cabinets
    wed: Cabinets
    thu: Cabinets
    fri: Cabinets
    sat: Cabinets

    def __init__(self, sun: Cabinets, mon: Cabinets, tue: Cabinets, wed: Cabinets, thu: Cabinets, fri: Cabinets, sat: Cabinets) -> None:
        self.sun = sun
        self.mon = mon
        self.tue = tue
        self.wed = wed
        self.thu = thu
        self.fri = fri
        self.sat = sat

    @staticmethod
    def from_dict(obj: Any) -> 'WeekProperties':
        assert isinstance(obj, dict)
        sun = Cabinets.from_dict(obj.get("sun"))
        mon = Cabinets.from_dict(obj.get("mon"))
        tue = Cabinets.from_dict(obj.get("tue"))
        wed = Cabinets.from_dict(obj.get("wed"))
        thu = Cabinets.from_dict(obj.get("thu"))
        fri = Cabinets.from_dict(obj.get("fri"))
        sat = Cabinets.from_dict(obj.get("sat"))
        return WeekProperties(sun, mon, tue, wed, thu, fri, sat)

    def to_dict(self) -> dict:
        result: dict = {}
        result["sun"] = to_class(Cabinets, self.sun)
        result["mon"] = to_class(Cabinets, self.mon)
        result["tue"] = to_class(Cabinets, self.tue)
        result["wed"] = to_class(Cabinets, self.wed)
        result["thu"] = to_class(Cabinets, self.thu)
        result["fri"] = to_class(Cabinets, self.fri)
        result["sat"] = to_class(Cabinets, self.sat)
        return result


class Week:
    type: TypeElement
    properties: WeekProperties
    required: List[str]
    additional_properties: bool

    def __init__(self, type: TypeElement, properties: WeekProperties, required: List[str], additional_properties: bool) -> None:
        self.type = type
        self.properties = properties
        self.required = required
        self.additional_properties = additional_properties

    @staticmethod
    def from_dict(obj: Any) -> 'Week':
        assert isinstance(obj, dict)
        type = TypeElement(obj.get("type"))
        properties = WeekProperties.from_dict(obj.get("properties"))
        required = from_list(from_str, obj.get("required"))
        additional_properties = from_bool(obj.get("additionalProperties"))
        return Week(type, properties, required, additional_properties)

    def to_dict(self) -> dict:
        result: dict = {}
        result["type"] = to_enum(TypeElement, self.type)
        result["properties"] = to_class(WeekProperties, self.properties)
        result["required"] = from_list(from_str, self.required)
        result["additionalProperties"] = from_bool(self.additional_properties)
        return result


class ModelsProperties:
    name: Optional[HammerfestPonies]
    short_name: Optional[BeijingPigeon]
    value: Optional[BeijingPigeon]
    type: Optional[Repeats]
    required_field: Optional[BeijingPigeon]
    country: Optional[BackofficeType]
    properties_zip_code: Optional[BeijingPigeon]
    locality: Optional[BeijingPigeon]
    properties_locality_type: Optional[BeijingPigeon]
    street: Optional[BeijingPigeon]
    properties_street_type: Optional[BeijingPigeon]
    number: Optional[BeijingPigeon]
    properties_admin_area: Optional[BeijingPigeon]
    properties_admin_area_type: Optional[BeijingPigeon]
    properties_sub_admin_area: Optional[BeijingPigeon]
    properties_sub_admin_area_type: Optional[BeijingPigeon]
    properties_sub_locality: Optional[BeijingPigeon]
    properties_sub_locality_type: Optional[BeijingPigeon]
    corps: Optional[BeijingPigeon]
    building: Optional[BeijingPigeon]
    possesion: Optional[BeijingPigeon]
    kilometer: Optional[BeijingPigeon]
    address: Optional[BeijingPigeon]
    properties_house_add: Optional[BeijingPigeon]
    longitude: Optional[BeijingPigeon]
    latitude: Optional[BeijingPigeon]
    properties_address_add: Optional[BeijingPigeon]
    office: Optional[BeijingPigeon]
    metro_stations: Optional[Cabinets]
    way: Optional[BeijingPigeon]
    group: Optional[BackofficeType]
    zip_code: Optional[BeijingPigeon]
    locality_type: Optional[BeijingPigeon]
    street_type: Optional[BeijingPigeon]
    admin_area: Optional[BeijingPigeon]
    admin_area_type: Optional[BeijingPigeon]
    sub_admin_area: Optional[BeijingPigeon]
    sub_admin_area_type: Optional[BeijingPigeon]
    sub_locality: Optional[BeijingPigeon]
    sub_locality_type: Optional[BeijingPigeon]
    house_add: Optional[BeijingPigeon]
    address_add: Optional[BeijingPigeon]
    id: Optional[HammerfestPonies]
    extra_id: Optional[BeijingPigeon]
    created_on: Optional[CreatedOn]
    general_info: Optional[GeneralInfo]
    taxonomies: Optional[Taxonomies]
    resources: Optional[Cabinets]
    designs: Optional[DefaultFilteredWorkers]
    state_level_holidays_not_working: Optional[ChiangMaiGoose]
    notifications: Optional[BeijingPigeon]
    vertical: Optional[BeijingPigeon]
    flat_taxonomy_display: Optional[BeijingPigeon]
    allow_category_booking: Optional[BeijingPigeon]
    cabinets_enabled: Optional[BeijingPigeon]
    taxonomy_tree_capacity: Optional[DefaultFilteredWorkers]
    consumables: Optional[Cabinets]
    departments: Optional[Cabinets]
    cabinets: Optional[Cabinets]
    default_filtered_workers: Optional[DefaultFilteredWorkers]
    integration_data: Optional[BeijingPigeon]
    yandex_feed_type: Optional[BeijingPigeon]
    top_services: Optional[TopServices]
    mobile_data: Optional[BeijingPigeon]
    active: Optional[HammerfestPonies]
    backoffice_type: Optional[BackofficeType]
    backoffice_configuration: Optional[BackofficeConfigurationClass]
    additional_settings: Optional[AdditionalSettings]
    widget_configuration: Optional[BackofficeConfigurationClass]
    mini_widget_configuration: Optional[MiniWidgetConfiguration]
    callback_widget_configuration: Optional[CallbackWidgetConfiguration]
    taxonomies_complex: Optional[TaxonomiesComplex]
    properties_backoffice_configuration: Optional[PropertiesBackofficeConfiguration]
    surname: Optional[HammerfestPonies]
    properties_middle_name: Optional[BeijingPigeon]
    birthday: Optional[Birthday]
    phone: Optional[GeneralInfo]
    email: Optional[AdditionalExtraID]
    from_sms: Optional[FromSMS]
    sex: Optional[BackofficeType]
    creator_profile_id: Optional[Birthday]
    creator_profile_name: Optional[Birthday]
    driver_license: Optional[Birthday]
    taxi_park: Optional[Birthday]
    taxi_park_member_count: Optional[Birthday]
    start: Optional[CreatedOn]
    repeats: Optional[Repeats]
    weekly_repeat: Optional[TrapaniSnowLeopard]
    unlim_weekly_repeat: Optional[ChiangMaiGoose]
    days_of_week: Optional[BackofficeType]
    slots: Optional[Slots]
    country_code: Optional[BeijingPigeon]
    area_code: Optional[BeijingPigeon]
    revision_version: Optional[HammerfestPonies]
    rating: Optional[HammerfestPonies]
    capacity: Optional[HammerfestPonies]
    icon_url: Optional[IconURL]
    origin_business_id: Optional[HammerfestPonies]
    origin_taxonomies: Optional[AdditionalExtraID]
    origin_general_info: Optional[OriginGeneralInfo]
    nickname: Optional[HammerfestPonies]
    middle_name: Optional[HammerfestPonies]
    loaned: Optional[HammerfestPonies]
    loaned_to: Optional[HammerfestPonies]
    loaned_from: Optional[HammerfestPonies]
    description: Optional[HammerfestPonies]
    profession: Optional[HammerfestPonies]
    extra_description: Optional[HammerfestPonies]
    extra_link: Optional[HammerfestPonies]
    properties_extra_id: Optional[HammerfestPonies]
    site_id: Optional[HammerfestPonies]
    additional_extra_id: Optional[AdditionalExtraID]
    extra_media_id: Optional[HammerfestPonies]
    department_id: Optional[HammerfestPonies]
    work_place: Optional[HammerfestPonies]
    order: Optional[HammerfestPonies]
    color: Optional[HammerfestPonies]
    profile: Optional[GeneralInfo]
    taxonomy_levels: Optional[TaxonomyChildren]
    taxonomy_children: Optional[TaxonomyChildren]
    level: Optional[HammerfestPonies]
    perk: Optional[HammerfestPonies]
    sms_enabled: Optional[HammerfestPonies]
    email_enabled: Optional[HammerfestPonies]
    display_in_widget: Optional[HammerfestPonies]
    manual_changes: Optional[Exceptions]
    timetable: Optional[EvenOddTimetableClass]
    even_odd_timetable: Optional[EvenOddTimetableClass]
    status: Optional[Status]
    image: Optional[Exceptions]
    location: Optional[EvenOddTimetableClass]
    exceptions: Optional[Exceptions]
    user_data: Optional[BeijingPigeon]
    schedule_is_empty: Optional[Exceptions]
    order_weight: Optional[IconURL]
    readonly_taxonomies: Optional[DefaultFilteredWorkers]
    display_in_schedule: Optional[ChiangMaiGoose]
    last_su: Optional[CreatedOn]
    experience: Optional[CreatedOn]
    degree: Optional[BeijingPigeon]
    social_network: Optional[BackofficeType]
    handle: Optional[BeijingPigeon]
    url: Optional[BeijingPigeon]
    week: Optional[Week]

    def __init__(self, name: Optional[HammerfestPonies], short_name: Optional[BeijingPigeon], value: Optional[BeijingPigeon], type: Optional[Repeats], required_field: Optional[BeijingPigeon], country: Optional[BackofficeType], properties_zip_code: Optional[BeijingPigeon], locality: Optional[BeijingPigeon], properties_locality_type: Optional[BeijingPigeon], street: Optional[BeijingPigeon], properties_street_type: Optional[BeijingPigeon], number: Optional[BeijingPigeon], properties_admin_area: Optional[BeijingPigeon], properties_admin_area_type: Optional[BeijingPigeon], properties_sub_admin_area: Optional[BeijingPigeon], properties_sub_admin_area_type: Optional[BeijingPigeon], properties_sub_locality: Optional[BeijingPigeon], properties_sub_locality_type: Optional[BeijingPigeon], corps: Optional[BeijingPigeon], building: Optional[BeijingPigeon], possesion: Optional[BeijingPigeon], kilometer: Optional[BeijingPigeon], address: Optional[BeijingPigeon], properties_house_add: Optional[BeijingPigeon], longitude: Optional[BeijingPigeon], latitude: Optional[BeijingPigeon], properties_address_add: Optional[BeijingPigeon], office: Optional[BeijingPigeon], metro_stations: Optional[Cabinets], way: Optional[BeijingPigeon], group: Optional[BackofficeType], zip_code: Optional[BeijingPigeon], locality_type: Optional[BeijingPigeon], street_type: Optional[BeijingPigeon], admin_area: Optional[BeijingPigeon], admin_area_type: Optional[BeijingPigeon], sub_admin_area: Optional[BeijingPigeon], sub_admin_area_type: Optional[BeijingPigeon], sub_locality: Optional[BeijingPigeon], sub_locality_type: Optional[BeijingPigeon], house_add: Optional[BeijingPigeon], address_add: Optional[BeijingPigeon], id: Optional[HammerfestPonies], extra_id: Optional[BeijingPigeon], created_on: Optional[CreatedOn], general_info: Optional[GeneralInfo], taxonomies: Optional[Taxonomies], resources: Optional[Cabinets], designs: Optional[DefaultFilteredWorkers], state_level_holidays_not_working: Optional[ChiangMaiGoose], notifications: Optional[BeijingPigeon], vertical: Optional[BeijingPigeon], flat_taxonomy_display: Optional[BeijingPigeon], allow_category_booking: Optional[BeijingPigeon], cabinets_enabled: Optional[BeijingPigeon], taxonomy_tree_capacity: Optional[DefaultFilteredWorkers], consumables: Optional[Cabinets], departments: Optional[Cabinets], cabinets: Optional[Cabinets], default_filtered_workers: Optional[DefaultFilteredWorkers], integration_data: Optional[BeijingPigeon], yandex_feed_type: Optional[BeijingPigeon], top_services: Optional[TopServices], mobile_data: Optional[BeijingPigeon], active: Optional[HammerfestPonies], backoffice_type: Optional[BackofficeType], backoffice_configuration: Optional[BackofficeConfigurationClass], additional_settings: Optional[AdditionalSettings], widget_configuration: Optional[BackofficeConfigurationClass], mini_widget_configuration: Optional[MiniWidgetConfiguration], callback_widget_configuration: Optional[CallbackWidgetConfiguration], taxonomies_complex: Optional[TaxonomiesComplex], properties_backoffice_configuration: Optional[PropertiesBackofficeConfiguration], surname: Optional[HammerfestPonies], properties_middle_name: Optional[BeijingPigeon], birthday: Optional[Birthday], phone: Optional[GeneralInfo], email: Optional[AdditionalExtraID], from_sms: Optional[FromSMS], sex: Optional[BackofficeType], creator_profile_id: Optional[Birthday], creator_profile_name: Optional[Birthday], driver_license: Optional[Birthday], taxi_park: Optional[Birthday], taxi_park_member_count: Optional[Birthday], start: Optional[CreatedOn], repeats: Optional[Repeats], weekly_repeat: Optional[TrapaniSnowLeopard], unlim_weekly_repeat: Optional[ChiangMaiGoose], days_of_week: Optional[BackofficeType], slots: Optional[Slots], country_code: Optional[BeijingPigeon], area_code: Optional[BeijingPigeon], revision_version: Optional[HammerfestPonies], rating: Optional[HammerfestPonies], capacity: Optional[HammerfestPonies], icon_url: Optional[IconURL], origin_business_id: Optional[HammerfestPonies], origin_taxonomies: Optional[AdditionalExtraID], origin_general_info: Optional[OriginGeneralInfo], nickname: Optional[HammerfestPonies], middle_name: Optional[HammerfestPonies], loaned: Optional[HammerfestPonies], loaned_to: Optional[HammerfestPonies], loaned_from: Optional[HammerfestPonies], description: Optional[HammerfestPonies], profession: Optional[HammerfestPonies], extra_description: Optional[HammerfestPonies], extra_link: Optional[HammerfestPonies], properties_extra_id: Optional[HammerfestPonies], site_id: Optional[HammerfestPonies], additional_extra_id: Optional[AdditionalExtraID], extra_media_id: Optional[HammerfestPonies], department_id: Optional[HammerfestPonies], work_place: Optional[HammerfestPonies], order: Optional[HammerfestPonies], color: Optional[HammerfestPonies], profile: Optional[GeneralInfo], taxonomy_levels: Optional[TaxonomyChildren], taxonomy_children: Optional[TaxonomyChildren], level: Optional[HammerfestPonies], perk: Optional[HammerfestPonies], sms_enabled: Optional[HammerfestPonies], email_enabled: Optional[HammerfestPonies], display_in_widget: Optional[HammerfestPonies], manual_changes: Optional[Exceptions], timetable: Optional[EvenOddTimetableClass], even_odd_timetable: Optional[EvenOddTimetableClass], status: Optional[Status], image: Optional[Exceptions], location: Optional[EvenOddTimetableClass], exceptions: Optional[Exceptions], user_data: Optional[BeijingPigeon], schedule_is_empty: Optional[Exceptions], order_weight: Optional[IconURL], readonly_taxonomies: Optional[DefaultFilteredWorkers], display_in_schedule: Optional[ChiangMaiGoose], last_su: Optional[CreatedOn], experience: Optional[CreatedOn], degree: Optional[BeijingPigeon], social_network: Optional[BackofficeType], handle: Optional[BeijingPigeon], url: Optional[BeijingPigeon], week: Optional[Week]) -> None:
        self.name = name
        self.short_name = short_name
        self.value = value
        self.type = type
        self.required_field = required_field
        self.country = country
        self.properties_zip_code = properties_zip_code
        self.locality = locality
        self.properties_locality_type = properties_locality_type
        self.street = street
        self.properties_street_type = properties_street_type
        self.number = number
        self.properties_admin_area = properties_admin_area
        self.properties_admin_area_type = properties_admin_area_type
        self.properties_sub_admin_area = properties_sub_admin_area
        self.properties_sub_admin_area_type = properties_sub_admin_area_type
        self.properties_sub_locality = properties_sub_locality
        self.properties_sub_locality_type = properties_sub_locality_type
        self.corps = corps
        self.building = building
        self.possesion = possesion
        self.kilometer = kilometer
        self.address = address
        self.properties_house_add = properties_house_add
        self.longitude = longitude
        self.latitude = latitude
        self.properties_address_add = properties_address_add
        self.office = office
        self.metro_stations = metro_stations
        self.way = way
        self.group = group
        self.zip_code = zip_code
        self.locality_type = locality_type
        self.street_type = street_type
        self.admin_area = admin_area
        self.admin_area_type = admin_area_type
        self.sub_admin_area = sub_admin_area
        self.sub_admin_area_type = sub_admin_area_type
        self.sub_locality = sub_locality
        self.sub_locality_type = sub_locality_type
        self.house_add = house_add
        self.address_add = address_add
        self.id = id
        self.extra_id = extra_id
        self.created_on = created_on
        self.general_info = general_info
        self.taxonomies = taxonomies
        self.resources = resources
        self.designs = designs
        self.state_level_holidays_not_working = state_level_holidays_not_working
        self.notifications = notifications
        self.vertical = vertical
        self.flat_taxonomy_display = flat_taxonomy_display
        self.allow_category_booking = allow_category_booking
        self.cabinets_enabled = cabinets_enabled
        self.taxonomy_tree_capacity = taxonomy_tree_capacity
        self.consumables = consumables
        self.departments = departments
        self.cabinets = cabinets
        self.default_filtered_workers = default_filtered_workers
        self.integration_data = integration_data
        self.yandex_feed_type = yandex_feed_type
        self.top_services = top_services
        self.mobile_data = mobile_data
        self.active = active
        self.backoffice_type = backoffice_type
        self.backoffice_configuration = backoffice_configuration
        self.additional_settings = additional_settings
        self.widget_configuration = widget_configuration
        self.mini_widget_configuration = mini_widget_configuration
        self.callback_widget_configuration = callback_widget_configuration
        self.taxonomies_complex = taxonomies_complex
        self.properties_backoffice_configuration = properties_backoffice_configuration
        self.surname = surname
        self.properties_middle_name = properties_middle_name
        self.birthday = birthday
        self.phone = phone
        self.email = email
        self.from_sms = from_sms
        self.sex = sex
        self.creator_profile_id = creator_profile_id
        self.creator_profile_name = creator_profile_name
        self.driver_license = driver_license
        self.taxi_park = taxi_park
        self.taxi_park_member_count = taxi_park_member_count
        self.start = start
        self.repeats = repeats
        self.weekly_repeat = weekly_repeat
        self.unlim_weekly_repeat = unlim_weekly_repeat
        self.days_of_week = days_of_week
        self.slots = slots
        self.country_code = country_code
        self.area_code = area_code
        self.revision_version = revision_version
        self.rating = rating
        self.capacity = capacity
        self.icon_url = icon_url
        self.origin_business_id = origin_business_id
        self.origin_taxonomies = origin_taxonomies
        self.origin_general_info = origin_general_info
        self.nickname = nickname
        self.middle_name = middle_name
        self.loaned = loaned
        self.loaned_to = loaned_to
        self.loaned_from = loaned_from
        self.description = description
        self.profession = profession
        self.extra_description = extra_description
        self.extra_link = extra_link
        self.properties_extra_id = properties_extra_id
        self.site_id = site_id
        self.additional_extra_id = additional_extra_id
        self.extra_media_id = extra_media_id
        self.department_id = department_id
        self.work_place = work_place
        self.order = order
        self.color = color
        self.profile = profile
        self.taxonomy_levels = taxonomy_levels
        self.taxonomy_children = taxonomy_children
        self.level = level
        self.perk = perk
        self.sms_enabled = sms_enabled
        self.email_enabled = email_enabled
        self.display_in_widget = display_in_widget
        self.manual_changes = manual_changes
        self.timetable = timetable
        self.even_odd_timetable = even_odd_timetable
        self.status = status
        self.image = image
        self.location = location
        self.exceptions = exceptions
        self.user_data = user_data
        self.schedule_is_empty = schedule_is_empty
        self.order_weight = order_weight
        self.readonly_taxonomies = readonly_taxonomies
        self.display_in_schedule = display_in_schedule
        self.last_su = last_su
        self.experience = experience
        self.degree = degree
        self.social_network = social_network
        self.handle = handle
        self.url = url
        self.week = week

    @staticmethod
    def from_dict(obj: Any) -> 'ModelsProperties':
        assert isinstance(obj, dict)
        name = from_union([HammerfestPonies.from_dict, from_none], obj.get("name"))
        short_name = from_union([BeijingPigeon.from_dict, from_none], obj.get("shortName"))
        value = from_union([BeijingPigeon.from_dict, from_none], obj.get("value"))
        type = from_union([Repeats.from_dict, from_none], obj.get("type"))
        required_field = from_union([BeijingPigeon.from_dict, from_none], obj.get("requiredField"))
        country = from_union([BackofficeType.from_dict, from_none], obj.get("country"))
        properties_zip_code = from_union([BeijingPigeon.from_dict, from_none], obj.get("zip_code"))
        locality = from_union([BeijingPigeon.from_dict, from_none], obj.get("locality"))
        properties_locality_type = from_union([BeijingPigeon.from_dict, from_none], obj.get("locality_type"))
        street = from_union([BeijingPigeon.from_dict, from_none], obj.get("street"))
        properties_street_type = from_union([BeijingPigeon.from_dict, from_none], obj.get("street_type"))
        number = from_union([BeijingPigeon.from_dict, from_none], obj.get("number"))
        properties_admin_area = from_union([BeijingPigeon.from_dict, from_none], obj.get("admin_area"))
        properties_admin_area_type = from_union([BeijingPigeon.from_dict, from_none], obj.get("admin_area_type"))
        properties_sub_admin_area = from_union([BeijingPigeon.from_dict, from_none], obj.get("sub_admin_area"))
        properties_sub_admin_area_type = from_union([BeijingPigeon.from_dict, from_none], obj.get("sub_admin_area_type"))
        properties_sub_locality = from_union([BeijingPigeon.from_dict, from_none], obj.get("sub_locality"))
        properties_sub_locality_type = from_union([BeijingPigeon.from_dict, from_none], obj.get("sub_locality_type"))
        corps = from_union([BeijingPigeon.from_dict, from_none], obj.get("corps"))
        building = from_union([BeijingPigeon.from_dict, from_none], obj.get("building"))
        possesion = from_union([BeijingPigeon.from_dict, from_none], obj.get("possesion"))
        kilometer = from_union([BeijingPigeon.from_dict, from_none], obj.get("kilometer"))
        address = from_union([BeijingPigeon.from_dict, from_none], obj.get("address"))
        properties_house_add = from_union([BeijingPigeon.from_dict, from_none], obj.get("house_add"))
        longitude = from_union([BeijingPigeon.from_dict, from_none], obj.get("longitude"))
        latitude = from_union([BeijingPigeon.from_dict, from_none], obj.get("latitude"))
        properties_address_add = from_union([BeijingPigeon.from_dict, from_none], obj.get("address_add"))
        office = from_union([BeijingPigeon.from_dict, from_none], obj.get("office"))
        metro_stations = from_union([Cabinets.from_dict, from_none], obj.get("metroStations"))
        way = from_union([BeijingPigeon.from_dict, from_none], obj.get("way"))
        group = from_union([BackofficeType.from_dict, from_none], obj.get("group"))
        zip_code = from_union([BeijingPigeon.from_dict, from_none], obj.get("zipCode"))
        locality_type = from_union([BeijingPigeon.from_dict, from_none], obj.get("localityType"))
        street_type = from_union([BeijingPigeon.from_dict, from_none], obj.get("streetType"))
        admin_area = from_union([BeijingPigeon.from_dict, from_none], obj.get("adminArea"))
        admin_area_type = from_union([BeijingPigeon.from_dict, from_none], obj.get("adminAreaType"))
        sub_admin_area = from_union([BeijingPigeon.from_dict, from_none], obj.get("subAdminArea"))
        sub_admin_area_type = from_union([BeijingPigeon.from_dict, from_none], obj.get("subAdminAreaType"))
        sub_locality = from_union([BeijingPigeon.from_dict, from_none], obj.get("subLocality"))
        sub_locality_type = from_union([BeijingPigeon.from_dict, from_none], obj.get("subLocalityType"))
        house_add = from_union([BeijingPigeon.from_dict, from_none], obj.get("houseAdd"))
        address_add = from_union([BeijingPigeon.from_dict, from_none], obj.get("addressAdd"))
        id = from_union([HammerfestPonies.from_dict, from_none], obj.get("id"))
        extra_id = from_union([BeijingPigeon.from_dict, from_none], obj.get("extraID"))
        created_on = from_union([CreatedOn.from_dict, from_none], obj.get("created_on"))
        general_info = from_union([GeneralInfo.from_dict, from_none], obj.get("general_info"))
        taxonomies = from_union([Taxonomies.from_dict, from_none], obj.get("taxonomies"))
        resources = from_union([Cabinets.from_dict, from_none], obj.get("resources"))
        designs = from_union([DefaultFilteredWorkers.from_dict, from_none], obj.get("designs"))
        state_level_holidays_not_working = from_union([ChiangMaiGoose.from_dict, from_none], obj.get("stateLevelHolidaysNotWorking"))
        notifications = from_union([BeijingPigeon.from_dict, from_none], obj.get("notifications"))
        vertical = from_union([BeijingPigeon.from_dict, from_none], obj.get("vertical"))
        flat_taxonomy_display = from_union([BeijingPigeon.from_dict, from_none], obj.get("flatTaxonomyDisplay"))
        allow_category_booking = from_union([BeijingPigeon.from_dict, from_none], obj.get("allowCategoryBooking"))
        cabinets_enabled = from_union([BeijingPigeon.from_dict, from_none], obj.get("cabinetsEnabled"))
        taxonomy_tree_capacity = from_union([DefaultFilteredWorkers.from_dict, from_none], obj.get("taxonomy_tree_capacity"))
        consumables = from_union([Cabinets.from_dict, from_none], obj.get("consumables"))
        departments = from_union([Cabinets.from_dict, from_none], obj.get("departments"))
        cabinets = from_union([Cabinets.from_dict, from_none], obj.get("cabinets"))
        default_filtered_workers = from_union([DefaultFilteredWorkers.from_dict, from_none], obj.get("defaultFilteredWorkers"))
        integration_data = from_union([BeijingPigeon.from_dict, from_none], obj.get("integration_data"))
        yandex_feed_type = from_union([BeijingPigeon.from_dict, from_none], obj.get("yandexFeedType"))
        top_services = from_union([TopServices.from_dict, from_none], obj.get("top_services"))
        mobile_data = from_union([BeijingPigeon.from_dict, from_none], obj.get("mobileData"))
        active = from_union([HammerfestPonies.from_dict, from_none], obj.get("active"))
        backoffice_type = from_union([BackofficeType.from_dict, from_none], obj.get("backofficeType"))
        backoffice_configuration = from_union([BackofficeConfigurationClass.from_dict, from_none], obj.get("backofficeConfiguration"))
        additional_settings = from_union([AdditionalSettings.from_dict, from_none], obj.get("additionalSettings"))
        widget_configuration = from_union([BackofficeConfigurationClass.from_dict, from_none], obj.get("widget_configuration"))
        mini_widget_configuration = from_union([MiniWidgetConfiguration.from_dict, from_none], obj.get("mini_widget_configuration"))
        callback_widget_configuration = from_union([CallbackWidgetConfiguration.from_dict, from_none], obj.get("callback_widget_configuration"))
        taxonomies_complex = from_union([TaxonomiesComplex.from_dict, from_none], obj.get("taxonomiesComplex"))
        properties_backoffice_configuration = from_union([PropertiesBackofficeConfiguration.from_dict, from_none], obj.get("backoffice_configuration"))
        surname = from_union([HammerfestPonies.from_dict, from_none], obj.get("surname"))
        properties_middle_name = from_union([BeijingPigeon.from_dict, from_none], obj.get("middle_name"))
        birthday = from_union([Birthday.from_dict, from_none], obj.get("birthday"))
        phone = from_union([GeneralInfo.from_dict, from_none], obj.get("phone"))
        email = from_union([AdditionalExtraID.from_dict, from_none], obj.get("email"))
        from_sms = from_union([FromSMS.from_dict, from_none], obj.get("fromSms"))
        sex = from_union([BackofficeType.from_dict, from_none], obj.get("sex"))
        creator_profile_id = from_union([Birthday.from_dict, from_none], obj.get("creatorProfileID"))
        creator_profile_name = from_union([Birthday.from_dict, from_none], obj.get("creatorProfileName"))
        driver_license = from_union([Birthday.from_dict, from_none], obj.get("driverLicense"))
        taxi_park = from_union([Birthday.from_dict, from_none], obj.get("taxiPark"))
        taxi_park_member_count = from_union([Birthday.from_dict, from_none], obj.get("taxiParkMemberCount"))
        start = from_union([CreatedOn.from_dict, from_none], obj.get("start"))
        repeats = from_union([Repeats.from_dict, from_none], obj.get("repeats"))
        weekly_repeat = from_union([TrapaniSnowLeopard.from_dict, from_none], obj.get("weeklyRepeat"))
        unlim_weekly_repeat = from_union([ChiangMaiGoose.from_dict, from_none], obj.get("unlimWeeklyRepeat"))
        days_of_week = from_union([BackofficeType.from_dict, from_none], obj.get("daysOfWeek"))
        slots = from_union([Slots.from_dict, from_none], obj.get("slots"))
        country_code = from_union([BeijingPigeon.from_dict, from_none], obj.get("country_code"))
        area_code = from_union([BeijingPigeon.from_dict, from_none], obj.get("area_code"))
        revision_version = from_union([HammerfestPonies.from_dict, from_none], obj.get("revisionVersion"))
        rating = from_union([HammerfestPonies.from_dict, from_none], obj.get("rating"))
        capacity = from_union([HammerfestPonies.from_dict, from_none], obj.get("capacity"))
        icon_url = from_union([IconURL.from_dict, from_none], obj.get("icon_url"))
        origin_business_id = from_union([HammerfestPonies.from_dict, from_none], obj.get("originBusinessID"))
        origin_taxonomies = from_union([AdditionalExtraID.from_dict, from_none], obj.get("originTaxonomies"))
        origin_general_info = from_union([OriginGeneralInfo.from_dict, from_none], obj.get("origin_general_info"))
        nickname = from_union([HammerfestPonies.from_dict, from_none], obj.get("nickname"))
        middle_name = from_union([HammerfestPonies.from_dict, from_none], obj.get("middleName"))
        loaned = from_union([HammerfestPonies.from_dict, from_none], obj.get("loaned"))
        loaned_to = from_union([HammerfestPonies.from_dict, from_none], obj.get("loanedTo"))
        loaned_from = from_union([HammerfestPonies.from_dict, from_none], obj.get("loanedFrom"))
        description = from_union([HammerfestPonies.from_dict, from_none], obj.get("description"))
        profession = from_union([HammerfestPonies.from_dict, from_none], obj.get("profession"))
        extra_description = from_union([HammerfestPonies.from_dict, from_none], obj.get("extraDescription"))
        extra_link = from_union([HammerfestPonies.from_dict, from_none], obj.get("extraLink"))
        properties_extra_id = from_union([HammerfestPonies.from_dict, from_none], obj.get("extraId"))
        site_id = from_union([HammerfestPonies.from_dict, from_none], obj.get("siteId"))
        additional_extra_id = from_union([AdditionalExtraID.from_dict, from_none], obj.get("additionalExtraId"))
        extra_media_id = from_union([HammerfestPonies.from_dict, from_none], obj.get("extraMediaId"))
        department_id = from_union([HammerfestPonies.from_dict, from_none], obj.get("departmentId"))
        work_place = from_union([HammerfestPonies.from_dict, from_none], obj.get("workPlace"))
        order = from_union([HammerfestPonies.from_dict, from_none], obj.get("order"))
        color = from_union([HammerfestPonies.from_dict, from_none], obj.get("color"))
        profile = from_union([GeneralInfo.from_dict, from_none], obj.get("profile"))
        taxonomy_levels = from_union([TaxonomyChildren.from_dict, from_none], obj.get("taxonomyLevels"))
        taxonomy_children = from_union([TaxonomyChildren.from_dict, from_none], obj.get("taxonomyChildren"))
        level = from_union([HammerfestPonies.from_dict, from_none], obj.get("level"))
        perk = from_union([HammerfestPonies.from_dict, from_none], obj.get("perk"))
        sms_enabled = from_union([HammerfestPonies.from_dict, from_none], obj.get("smsEnabled"))
        email_enabled = from_union([HammerfestPonies.from_dict, from_none], obj.get("emailEnabled"))
        display_in_widget = from_union([HammerfestPonies.from_dict, from_none], obj.get("displayInWidget"))
        manual_changes = from_union([Exceptions.from_dict, from_none], obj.get("manualChanges"))
        timetable = from_union([EvenOddTimetableClass.from_dict, from_none], obj.get("timetable"))
        even_odd_timetable = from_union([EvenOddTimetableClass.from_dict, from_none], obj.get("evenOddTimetable"))
        status = from_union([Status.from_dict, from_none], obj.get("status"))
        image = from_union([Exceptions.from_dict, from_none], obj.get("image"))
        location = from_union([EvenOddTimetableClass.from_dict, from_none], obj.get("location"))
        exceptions = from_union([Exceptions.from_dict, from_none], obj.get("exceptions"))
        user_data = from_union([BeijingPigeon.from_dict, from_none], obj.get("userData"))
        schedule_is_empty = from_union([Exceptions.from_dict, from_none], obj.get("scheduleIsEmpty"))
        order_weight = from_union([IconURL.from_dict, from_none], obj.get("orderWeight"))
        readonly_taxonomies = from_union([DefaultFilteredWorkers.from_dict, from_none], obj.get("readonlyTaxonomies"))
        display_in_schedule = from_union([ChiangMaiGoose.from_dict, from_none], obj.get("displayInSchedule"))
        last_su = from_union([CreatedOn.from_dict, from_none], obj.get("lastSU"))
        experience = from_union([CreatedOn.from_dict, from_none], obj.get("experience"))
        degree = from_union([BeijingPigeon.from_dict, from_none], obj.get("degree"))
        social_network = from_union([BackofficeType.from_dict, from_none], obj.get("social_network"))
        handle = from_union([BeijingPigeon.from_dict, from_none], obj.get("handle"))
        url = from_union([BeijingPigeon.from_dict, from_none], obj.get("url"))
        week = from_union([Week.from_dict, from_none], obj.get("week"))
        return ModelsProperties(name, short_name, value, type, required_field, country, properties_zip_code, locality, properties_locality_type, street, properties_street_type, number, properties_admin_area, properties_admin_area_type, properties_sub_admin_area, properties_sub_admin_area_type, properties_sub_locality, properties_sub_locality_type, corps, building, possesion, kilometer, address, properties_house_add, longitude, latitude, properties_address_add, office, metro_stations, way, group, zip_code, locality_type, street_type, admin_area, admin_area_type, sub_admin_area, sub_admin_area_type, sub_locality, sub_locality_type, house_add, address_add, id, extra_id, created_on, general_info, taxonomies, resources, designs, state_level_holidays_not_working, notifications, vertical, flat_taxonomy_display, allow_category_booking, cabinets_enabled, taxonomy_tree_capacity, consumables, departments, cabinets, default_filtered_workers, integration_data, yandex_feed_type, top_services, mobile_data, active, backoffice_type, backoffice_configuration, additional_settings, widget_configuration, mini_widget_configuration, callback_widget_configuration, taxonomies_complex, properties_backoffice_configuration, surname, properties_middle_name, birthday, phone, email, from_sms, sex, creator_profile_id, creator_profile_name, driver_license, taxi_park, taxi_park_member_count, start, repeats, weekly_repeat, unlim_weekly_repeat, days_of_week, slots, country_code, area_code, revision_version, rating, capacity, icon_url, origin_business_id, origin_taxonomies, origin_general_info, nickname, middle_name, loaned, loaned_to, loaned_from, description, profession, extra_description, extra_link, properties_extra_id, site_id, additional_extra_id, extra_media_id, department_id, work_place, order, color, profile, taxonomy_levels, taxonomy_children, level, perk, sms_enabled, email_enabled, display_in_widget, manual_changes, timetable, even_odd_timetable, status, image, location, exceptions, user_data, schedule_is_empty, order_weight, readonly_taxonomies, display_in_schedule, last_su, experience, degree, social_network, handle, url, week)

    def to_dict(self) -> dict:
        result: dict = {}
        result["name"] = from_union([lambda x: to_class(HammerfestPonies, x), from_none], self.name)
        result["shortName"] = from_union([lambda x: to_class(BeijingPigeon, x), from_none], self.short_name)
        result["value"] = from_union([lambda x: to_class(BeijingPigeon, x), from_none], self.value)
        result["type"] = from_union([lambda x: to_class(Repeats, x), from_none], self.type)
        result["requiredField"] = from_union([lambda x: to_class(BeijingPigeon, x), from_none], self.required_field)
        result["country"] = from_union([lambda x: to_class(BackofficeType, x), from_none], self.country)
        result["zip_code"] = from_union([lambda x: to_class(BeijingPigeon, x), from_none], self.properties_zip_code)
        result["locality"] = from_union([lambda x: to_class(BeijingPigeon, x), from_none], self.locality)
        result["locality_type"] = from_union([lambda x: to_class(BeijingPigeon, x), from_none], self.properties_locality_type)
        result["street"] = from_union([lambda x: to_class(BeijingPigeon, x), from_none], self.street)
        result["street_type"] = from_union([lambda x: to_class(BeijingPigeon, x), from_none], self.properties_street_type)
        result["number"] = from_union([lambda x: to_class(BeijingPigeon, x), from_none], self.number)
        result["admin_area"] = from_union([lambda x: to_class(BeijingPigeon, x), from_none], self.properties_admin_area)
        result["admin_area_type"] = from_union([lambda x: to_class(BeijingPigeon, x), from_none], self.properties_admin_area_type)
        result["sub_admin_area"] = from_union([lambda x: to_class(BeijingPigeon, x), from_none], self.properties_sub_admin_area)
        result["sub_admin_area_type"] = from_union([lambda x: to_class(BeijingPigeon, x), from_none], self.properties_sub_admin_area_type)
        result["sub_locality"] = from_union([lambda x: to_class(BeijingPigeon, x), from_none], self.properties_sub_locality)
        result["sub_locality_type"] = from_union([lambda x: to_class(BeijingPigeon, x), from_none], self.properties_sub_locality_type)
        result["corps"] = from_union([lambda x: to_class(BeijingPigeon, x), from_none], self.corps)
        result["building"] = from_union([lambda x: to_class(BeijingPigeon, x), from_none], self.building)
        result["possesion"] = from_union([lambda x: to_class(BeijingPigeon, x), from_none], self.possesion)
        result["kilometer"] = from_union([lambda x: to_class(BeijingPigeon, x), from_none], self.kilometer)
        result["address"] = from_union([lambda x: to_class(BeijingPigeon, x), from_none], self.address)
        result["house_add"] = from_union([lambda x: to_class(BeijingPigeon, x), from_none], self.properties_house_add)
        result["longitude"] = from_union([lambda x: to_class(BeijingPigeon, x), from_none], self.longitude)
        result["latitude"] = from_union([lambda x: to_class(BeijingPigeon, x), from_none], self.latitude)
        result["address_add"] = from_union([lambda x: to_class(BeijingPigeon, x), from_none], self.properties_address_add)
        result["office"] = from_union([lambda x: to_class(BeijingPigeon, x), from_none], self.office)
        result["metroStations"] = from_union([lambda x: to_class(Cabinets, x), from_none], self.metro_stations)
        result["way"] = from_union([lambda x: to_class(BeijingPigeon, x), from_none], self.way)
        result["group"] = from_union([lambda x: to_class(BackofficeType, x), from_none], self.group)
        result["zipCode"] = from_union([lambda x: to_class(BeijingPigeon, x), from_none], self.zip_code)
        result["localityType"] = from_union([lambda x: to_class(BeijingPigeon, x), from_none], self.locality_type)
        result["streetType"] = from_union([lambda x: to_class(BeijingPigeon, x), from_none], self.street_type)
        result["adminArea"] = from_union([lambda x: to_class(BeijingPigeon, x), from_none], self.admin_area)
        result["adminAreaType"] = from_union([lambda x: to_class(BeijingPigeon, x), from_none], self.admin_area_type)
        result["subAdminArea"] = from_union([lambda x: to_class(BeijingPigeon, x), from_none], self.sub_admin_area)
        result["subAdminAreaType"] = from_union([lambda x: to_class(BeijingPigeon, x), from_none], self.sub_admin_area_type)
        result["subLocality"] = from_union([lambda x: to_class(BeijingPigeon, x), from_none], self.sub_locality)
        result["subLocalityType"] = from_union([lambda x: to_class(BeijingPigeon, x), from_none], self.sub_locality_type)
        result["houseAdd"] = from_union([lambda x: to_class(BeijingPigeon, x), from_none], self.house_add)
        result["addressAdd"] = from_union([lambda x: to_class(BeijingPigeon, x), from_none], self.address_add)
        result["id"] = from_union([lambda x: to_class(HammerfestPonies, x), from_none], self.id)
        result["extraID"] = from_union([lambda x: to_class(BeijingPigeon, x), from_none], self.extra_id)
        result["created_on"] = from_union([lambda x: to_class(CreatedOn, x), from_none], self.created_on)
        result["general_info"] = from_union([lambda x: to_class(GeneralInfo, x), from_none], self.general_info)
        result["taxonomies"] = from_union([lambda x: to_class(Taxonomies, x), from_none], self.taxonomies)
        result["resources"] = from_union([lambda x: to_class(Cabinets, x), from_none], self.resources)
        result["designs"] = from_union([lambda x: to_class(DefaultFilteredWorkers, x), from_none], self.designs)
        result["stateLevelHolidaysNotWorking"] = from_union([lambda x: to_class(ChiangMaiGoose, x), from_none], self.state_level_holidays_not_working)
        result["notifications"] = from_union([lambda x: to_class(BeijingPigeon, x), from_none], self.notifications)
        result["vertical"] = from_union([lambda x: to_class(BeijingPigeon, x), from_none], self.vertical)
        result["flatTaxonomyDisplay"] = from_union([lambda x: to_class(BeijingPigeon, x), from_none], self.flat_taxonomy_display)
        result["allowCategoryBooking"] = from_union([lambda x: to_class(BeijingPigeon, x), from_none], self.allow_category_booking)
        result["cabinetsEnabled"] = from_union([lambda x: to_class(BeijingPigeon, x), from_none], self.cabinets_enabled)
        result["taxonomy_tree_capacity"] = from_union([lambda x: to_class(DefaultFilteredWorkers, x), from_none], self.taxonomy_tree_capacity)
        result["consumables"] = from_union([lambda x: to_class(Cabinets, x), from_none], self.consumables)
        result["departments"] = from_union([lambda x: to_class(Cabinets, x), from_none], self.departments)
        result["cabinets"] = from_union([lambda x: to_class(Cabinets, x), from_none], self.cabinets)
        result["defaultFilteredWorkers"] = from_union([lambda x: to_class(DefaultFilteredWorkers, x), from_none], self.default_filtered_workers)
        result["integration_data"] = from_union([lambda x: to_class(BeijingPigeon, x), from_none], self.integration_data)
        result["yandexFeedType"] = from_union([lambda x: to_class(BeijingPigeon, x), from_none], self.yandex_feed_type)
        result["top_services"] = from_union([lambda x: to_class(TopServices, x), from_none], self.top_services)
        result["mobileData"] = from_union([lambda x: to_class(BeijingPigeon, x), from_none], self.mobile_data)
        result["active"] = from_union([lambda x: to_class(HammerfestPonies, x), from_none], self.active)
        result["backofficeType"] = from_union([lambda x: to_class(BackofficeType, x), from_none], self.backoffice_type)
        result["backofficeConfiguration"] = from_union([lambda x: to_class(BackofficeConfigurationClass, x), from_none], self.backoffice_configuration)
        result["additionalSettings"] = from_union([lambda x: to_class(AdditionalSettings, x), from_none], self.additional_settings)
        result["widget_configuration"] = from_union([lambda x: to_class(BackofficeConfigurationClass, x), from_none], self.widget_configuration)
        result["mini_widget_configuration"] = from_union([lambda x: to_class(MiniWidgetConfiguration, x), from_none], self.mini_widget_configuration)
        result["callback_widget_configuration"] = from_union([lambda x: to_class(CallbackWidgetConfiguration, x), from_none], self.callback_widget_configuration)
        result["taxonomiesComplex"] = from_union([lambda x: to_class(TaxonomiesComplex, x), from_none], self.taxonomies_complex)
        result["backoffice_configuration"] = from_union([lambda x: to_class(PropertiesBackofficeConfiguration, x), from_none], self.properties_backoffice_configuration)
        result["surname"] = from_union([lambda x: to_class(HammerfestPonies, x), from_none], self.surname)
        result["middle_name"] = from_union([lambda x: to_class(BeijingPigeon, x), from_none], self.properties_middle_name)
        result["birthday"] = from_union([lambda x: to_class(Birthday, x), from_none], self.birthday)
        result["phone"] = from_union([lambda x: to_class(GeneralInfo, x), from_none], self.phone)
        result["email"] = from_union([lambda x: to_class(AdditionalExtraID, x), from_none], self.email)
        result["fromSms"] = from_union([lambda x: to_class(FromSMS, x), from_none], self.from_sms)
        result["sex"] = from_union([lambda x: to_class(BackofficeType, x), from_none], self.sex)
        result["creatorProfileID"] = from_union([lambda x: to_class(Birthday, x), from_none], self.creator_profile_id)
        result["creatorProfileName"] = from_union([lambda x: to_class(Birthday, x), from_none], self.creator_profile_name)
        result["driverLicense"] = from_union([lambda x: to_class(Birthday, x), from_none], self.driver_license)
        result["taxiPark"] = from_union([lambda x: to_class(Birthday, x), from_none], self.taxi_park)
        result["taxiParkMemberCount"] = from_union([lambda x: to_class(Birthday, x), from_none], self.taxi_park_member_count)
        result["start"] = from_union([lambda x: to_class(CreatedOn, x), from_none], self.start)
        result["repeats"] = from_union([lambda x: to_class(Repeats, x), from_none], self.repeats)
        result["weeklyRepeat"] = from_union([lambda x: to_class(TrapaniSnowLeopard, x), from_none], self.weekly_repeat)
        result["unlimWeeklyRepeat"] = from_union([lambda x: to_class(ChiangMaiGoose, x), from_none], self.unlim_weekly_repeat)
        result["daysOfWeek"] = from_union([lambda x: to_class(BackofficeType, x), from_none], self.days_of_week)
        result["slots"] = from_union([lambda x: to_class(Slots, x), from_none], self.slots)
        result["country_code"] = from_union([lambda x: to_class(BeijingPigeon, x), from_none], self.country_code)
        result["area_code"] = from_union([lambda x: to_class(BeijingPigeon, x), from_none], self.area_code)
        result["revisionVersion"] = from_union([lambda x: to_class(HammerfestPonies, x), from_none], self.revision_version)
        result["rating"] = from_union([lambda x: to_class(HammerfestPonies, x), from_none], self.rating)
        result["capacity"] = from_union([lambda x: to_class(HammerfestPonies, x), from_none], self.capacity)
        result["icon_url"] = from_union([lambda x: to_class(IconURL, x), from_none], self.icon_url)
        result["originBusinessID"] = from_union([lambda x: to_class(HammerfestPonies, x), from_none], self.origin_business_id)
        result["originTaxonomies"] = from_union([lambda x: to_class(AdditionalExtraID, x), from_none], self.origin_taxonomies)
        result["origin_general_info"] = from_union([lambda x: to_class(OriginGeneralInfo, x), from_none], self.origin_general_info)
        result["nickname"] = from_union([lambda x: to_class(HammerfestPonies, x), from_none], self.nickname)
        result["middleName"] = from_union([lambda x: to_class(HammerfestPonies, x), from_none], self.middle_name)
        result["loaned"] = from_union([lambda x: to_class(HammerfestPonies, x), from_none], self.loaned)
        result["loanedTo"] = from_union([lambda x: to_class(HammerfestPonies, x), from_none], self.loaned_to)
        result["loanedFrom"] = from_union([lambda x: to_class(HammerfestPonies, x), from_none], self.loaned_from)
        result["description"] = from_union([lambda x: to_class(HammerfestPonies, x), from_none], self.description)
        result["profession"] = from_union([lambda x: to_class(HammerfestPonies, x), from_none], self.profession)
        result["extraDescription"] = from_union([lambda x: to_class(HammerfestPonies, x), from_none], self.extra_description)
        result["extraLink"] = from_union([lambda x: to_class(HammerfestPonies, x), from_none], self.extra_link)
        result["extraId"] = from_union([lambda x: to_class(HammerfestPonies, x), from_none], self.properties_extra_id)
        result["siteId"] = from_union([lambda x: to_class(HammerfestPonies, x), from_none], self.site_id)
        result["additionalExtraId"] = from_union([lambda x: to_class(AdditionalExtraID, x), from_none], self.additional_extra_id)
        result["extraMediaId"] = from_union([lambda x: to_class(HammerfestPonies, x), from_none], self.extra_media_id)
        result["departmentId"] = from_union([lambda x: to_class(HammerfestPonies, x), from_none], self.department_id)
        result["workPlace"] = from_union([lambda x: to_class(HammerfestPonies, x), from_none], self.work_place)
        result["order"] = from_union([lambda x: to_class(HammerfestPonies, x), from_none], self.order)
        result["color"] = from_union([lambda x: to_class(HammerfestPonies, x), from_none], self.color)
        result["profile"] = from_union([lambda x: to_class(GeneralInfo, x), from_none], self.profile)
        result["taxonomyLevels"] = from_union([lambda x: to_class(TaxonomyChildren, x), from_none], self.taxonomy_levels)
        result["taxonomyChildren"] = from_union([lambda x: to_class(TaxonomyChildren, x), from_none], self.taxonomy_children)
        result["level"] = from_union([lambda x: to_class(HammerfestPonies, x), from_none], self.level)
        result["perk"] = from_union([lambda x: to_class(HammerfestPonies, x), from_none], self.perk)
        result["smsEnabled"] = from_union([lambda x: to_class(HammerfestPonies, x), from_none], self.sms_enabled)
        result["emailEnabled"] = from_union([lambda x: to_class(HammerfestPonies, x), from_none], self.email_enabled)
        result["displayInWidget"] = from_union([lambda x: to_class(HammerfestPonies, x), from_none], self.display_in_widget)
        result["manualChanges"] = from_union([lambda x: to_class(Exceptions, x), from_none], self.manual_changes)
        result["timetable"] = from_union([lambda x: to_class(EvenOddTimetableClass, x), from_none], self.timetable)
        result["evenOddTimetable"] = from_union([lambda x: to_class(EvenOddTimetableClass, x), from_none], self.even_odd_timetable)
        result["status"] = from_union([lambda x: to_class(Status, x), from_none], self.status)
        result["image"] = from_union([lambda x: to_class(Exceptions, x), from_none], self.image)
        result["location"] = from_union([lambda x: to_class(EvenOddTimetableClass, x), from_none], self.location)
        result["exceptions"] = from_union([lambda x: to_class(Exceptions, x), from_none], self.exceptions)
        result["userData"] = from_union([lambda x: to_class(BeijingPigeon, x), from_none], self.user_data)
        result["scheduleIsEmpty"] = from_union([lambda x: to_class(Exceptions, x), from_none], self.schedule_is_empty)
        result["orderWeight"] = from_union([lambda x: to_class(IconURL, x), from_none], self.order_weight)
        result["readonlyTaxonomies"] = from_union([lambda x: to_class(DefaultFilteredWorkers, x), from_none], self.readonly_taxonomies)
        result["displayInSchedule"] = from_union([lambda x: to_class(ChiangMaiGoose, x), from_none], self.display_in_schedule)
        result["lastSU"] = from_union([lambda x: to_class(CreatedOn, x), from_none], self.last_su)
        result["experience"] = from_union([lambda x: to_class(CreatedOn, x), from_none], self.experience)
        result["degree"] = from_union([lambda x: to_class(BeijingPigeon, x), from_none], self.degree)
        result["social_network"] = from_union([lambda x: to_class(BackofficeType, x), from_none], self.social_network)
        result["handle"] = from_union([lambda x: to_class(BeijingPigeon, x), from_none], self.handle)
        result["url"] = from_union([lambda x: to_class(BeijingPigeon, x), from_none], self.url)
        result["week"] = from_union([lambda x: to_class(Week, x), from_none], self.week)
        return result


class Models:
    id: str
    title: Optional[str]
    properties: ModelsProperties
    required: Optional[List[str]]
    definitions: Optional[Definitions]
    additional_properties: Optional[bool]
    meta_extensible: Optional[bool]
    meta_extends: Optional[List[str]]
    type: Optional[TypeElement]
    description: Optional[str]

    def __init__(self, id: str, title: Optional[str], properties: ModelsProperties, required: Optional[List[str]], definitions: Optional[Definitions], additional_properties: Optional[bool], meta_extensible: Optional[bool], meta_extends: Optional[List[str]], type: Optional[TypeElement], description: Optional[str]) -> None:
        self.id = id
        self.title = title
        self.properties = properties
        self.required = required
        self.definitions = definitions
        self.additional_properties = additional_properties
        self.meta_extensible = meta_extensible
        self.meta_extends = meta_extends
        self.type = type
        self.description = description

    @staticmethod
    def from_dict(obj: Any) -> 'Models':
        assert isinstance(obj, dict)
        id = from_str(obj.get("$id"))
        title = from_union([from_str, from_none], obj.get("title"))
        properties = ModelsProperties.from_dict(obj.get("properties"))
        required = from_union([lambda x: from_list(from_str, x), from_none], obj.get("required"))
        definitions = from_union([Definitions.from_dict, from_none], obj.get("definitions"))
        additional_properties = from_union([from_bool, from_none], obj.get("additionalProperties"))
        meta_extensible = from_union([from_bool, from_none], obj.get("meta:extensible"))
        meta_extends = from_union([lambda x: from_list(from_str, x), from_none], obj.get("meta:extends"))
        type = from_union([TypeElement, from_none], obj.get("type"))
        description = from_union([from_str, from_none], obj.get("description"))
        return Models(id, title, properties, required, definitions, additional_properties, meta_extensible, meta_extends, type, description)

    def to_dict(self) -> dict:
        result: dict = {}
        result["$id"] = from_str(self.id)
        result["title"] = from_union([from_str, from_none], self.title)
        result["properties"] = to_class(ModelsProperties, self.properties)
        result["required"] = from_union([lambda x: from_list(from_str, x), from_none], self.required)
        result["definitions"] = from_union([lambda x: to_class(Definitions, x), from_none], self.definitions)
        result["additionalProperties"] = from_union([from_bool, from_none], self.additional_properties)
        result["meta:extensible"] = from_union([from_bool, from_none], self.meta_extensible)
        result["meta:extends"] = from_union([lambda x: from_list(from_str, x), from_none], self.meta_extends)
        result["type"] = from_union([lambda x: to_enum(TypeElement, x), from_none], self.type)
        result["description"] = from_union([from_str, from_none], self.description)
        return result


def common_from_dict(s: Any) -> Common:
    return Common.from_dict(s)


def common_to_dict(x: Common) -> Any:
    return to_class(Common, x)


def models_from_dict(s: Any) -> Models:
    return Models.from_dict(s)


def models_to_dict(x: Models) -> Any:
    return to_class(Models, x)
