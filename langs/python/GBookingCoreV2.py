# This code parses date/times, so please
#
#     pip install python-dateutil
#
# To use this code, make sure you
#
#     import json
#
# and then, to convert JSON from a string, do
#
#     result = g_booking_core_v2_from_dict(json.loads(json_string))

from typing import Any, Optional, Union, List, Dict, TypeVar, Type, cast, Callable
from enum import Enum
from datetime import datetime
import dateutil.parser


T = TypeVar("T")
EnumT = TypeVar("EnumT", bound=Enum)


def from_float(x: Any) -> float:
    assert isinstance(x, (float, int)) and not isinstance(x, bool)
    return float(x)


def to_float(x: Any) -> float:
    assert isinstance(x, float)
    return x


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


def to_class(c: Type[T], x: Any) -> dict:
    assert isinstance(x, c)
    return cast(Any, x).to_dict()


def from_list(f: Callable[[Any], T], x: Any) -> List[T]:
    assert isinstance(x, list)
    return [f(y) for y in x]


def from_dict(f: Callable[[Any], T], x: Any) -> Dict[str, T]:
    assert isinstance(x, dict)
    return { k: f(v) for (k, v) in x.items() }


def from_int(x: Any) -> int:
    assert isinstance(x, int) and not isinstance(x, bool)
    return x


def from_bool(x: Any) -> bool:
    assert isinstance(x, bool)
    return x


def to_enum(c: Type[EnumT], x: Any) -> EnumT:
    assert isinstance(x, c)
    return x.value


def from_datetime(x: Any) -> datetime:
    return dateutil.parser.parse(x)


class AuthErrorCodesClass:
    """Код ошибки авторизации"""
    code: float

    def __init__(self, code: float) -> None:
        self.code = code

    @staticmethod
    def from_dict(obj: Any) -> 'AuthErrorCodesClass':
        assert isinstance(obj, dict)
        code = from_float(obj.get("code"))
        return AuthErrorCodesClass(code)

    def to_dict(self) -> dict:
        result: dict = {}
        result["code"] = to_float(self.code)
        return result


class Error:
    """объект, содержащий информацию об ошибке"""
    """код ошибки"""
    code: float
    """дополнительные данные об ошибке"""
    data: Optional[str]
    """текстовая информация об ошибке"""
    message: str

    def __init__(self, code: float, data: Optional[str], message: str) -> None:
        self.code = code
        self.data = data
        self.message = message

    @staticmethod
    def from_dict(obj: Any) -> 'Error':
        assert isinstance(obj, dict)
        code = from_float(obj.get("code"))
        data = from_union([from_str, from_none], obj.get("data"))
        message = from_str(obj.get("message"))
        return Error(code, data, message)

    def to_dict(self) -> dict:
        result: dict = {}
        result["code"] = to_float(self.code)
        result["data"] = from_union([from_str, from_none], self.data)
        result["message"] = from_str(self.message)
        return result


class ErrorResponseClass:
    """объект, содержащий информацию об ошибке"""
    error: Error
    """значение числового типа для идентификации запроса на сервере"""
    id: float
    """версия протокола (2.0)"""
    jsonrpc: str

    def __init__(self, error: Error, id: float, jsonrpc: str) -> None:
        self.error = error
        self.id = id
        self.jsonrpc = jsonrpc

    @staticmethod
    def from_dict(obj: Any) -> 'ErrorResponseClass':
        assert isinstance(obj, dict)
        error = Error.from_dict(obj.get("error"))
        id = from_float(obj.get("id"))
        jsonrpc = from_str(obj.get("jsonrpc"))
        return ErrorResponseClass(error, id, jsonrpc)

    def to_dict(self) -> dict:
        result: dict = {}
        result["error"] = to_class(Error, self.error)
        result["id"] = to_float(self.id)
        result["jsonrpc"] = from_str(self.jsonrpc)
        return result


class Cred:
    """авторизационные параметры"""
    """временный token для доступа"""
    token: Optional[str]
    """идентификатор профиля пользователя"""
    user: Optional[str]

    def __init__(self, token: Optional[str], user: Optional[str]) -> None:
        self.token = token
        self.user = user

    @staticmethod
    def from_dict(obj: Any) -> 'Cred':
        assert isinstance(obj, dict)
        token = from_union([from_str, from_none], obj.get("token"))
        user = from_union([from_str, from_none], obj.get("user"))
        return Cred(token, user)

    def to_dict(self) -> dict:
        result: dict = {}
        result["token"] = from_union([from_str, from_none], self.token)
        result["user"] = from_union([from_str, from_none], self.user)
        return result


class RequestClass:
    """авторизационные параметры"""
    cred: Optional[Cred]
    """значение числового типа для идентификации запроса на сервере"""
    id: Union[float, str]
    """версия протокола - 2.0"""
    jsonrpc: str
    """название jsonrpc метода"""
    method: str
    """параметры запроса"""
    params: Union[List[Any], Dict[str, Any]]

    def __init__(self, cred: Optional[Cred], id: Union[float, str], jsonrpc: str, method: str, params: Union[List[Any], Dict[str, Any]]) -> None:
        self.cred = cred
        self.id = id
        self.jsonrpc = jsonrpc
        self.method = method
        self.params = params

    @staticmethod
    def from_dict(obj: Any) -> 'RequestClass':
        assert isinstance(obj, dict)
        cred = from_union([Cred.from_dict, from_none], obj.get("cred"))
        id = from_union([from_float, from_str], obj.get("id"))
        jsonrpc = from_str(obj.get("jsonrpc"))
        method = from_str(obj.get("method"))
        params = from_union([lambda x: from_list(lambda x: x, x), lambda x: from_dict(lambda x: x, x)], obj.get("params"))
        return RequestClass(cred, id, jsonrpc, method, params)

    def to_dict(self) -> dict:
        result: dict = {}
        result["cred"] = from_union([lambda x: to_class(Cred, x), from_none], self.cred)
        result["id"] = from_union([to_float, from_str], self.id)
        result["jsonrpc"] = from_str(self.jsonrpc)
        result["method"] = from_str(self.method)
        result["params"] = from_union([lambda x: from_list(lambda x: x, x), lambda x: from_dict(lambda x: x, x)], self.params)
        return result


class SuccessResponseClass:
    """значение числового типа для идентификации запроса на сервере"""
    id: float
    """версия протокола (2.0)"""
    jsonrpc: str
    """данные, передаваемые в ответ"""
    result: Dict[str, Any]

    def __init__(self, id: float, jsonrpc: str, result: Dict[str, Any]) -> None:
        self.id = id
        self.jsonrpc = jsonrpc
        self.result = result

    @staticmethod
    def from_dict(obj: Any) -> 'SuccessResponseClass':
        assert isinstance(obj, dict)
        id = from_float(obj.get("id"))
        jsonrpc = from_str(obj.get("jsonrpc"))
        result = from_dict(lambda x: x, obj.get("result"))
        return SuccessResponseClass(id, jsonrpc, result)

    def to_dict(self) -> dict:
        result: dict = {}
        result["id"] = to_float(self.id)
        result["jsonrpc"] = from_str(self.jsonrpc)
        result["result"] = from_dict(lambda x: x, self.result)
        return result


class Common:
    auth_error_codes: Optional[AuthErrorCodesClass]
    error_response: Union[List[Any], bool, ErrorResponseClass, float, int, None, str]
    request: Union[List[Any], bool, RequestClass, float, int, None, str]
    success_response: Union[List[Any], bool, SuccessResponseClass, float, int, None, str]

    def __init__(self, auth_error_codes: Optional[AuthErrorCodesClass], error_response: Union[List[Any], bool, ErrorResponseClass, float, int, None, str], request: Union[List[Any], bool, RequestClass, float, int, None, str], success_response: Union[List[Any], bool, SuccessResponseClass, float, int, None, str]) -> None:
        self.auth_error_codes = auth_error_codes
        self.error_response = error_response
        self.request = request
        self.success_response = success_response

    @staticmethod
    def from_dict(obj: Any) -> 'Common':
        assert isinstance(obj, dict)
        auth_error_codes = from_union([AuthErrorCodesClass.from_dict, from_none], obj.get("AuthErrorCodes"))
        error_response = from_union([from_none, from_float, from_int, from_bool, from_str, lambda x: from_list(lambda x: x, x), ErrorResponseClass.from_dict], obj.get("ErrorResponse"))
        request = from_union([from_none, from_float, from_int, from_bool, from_str, lambda x: from_list(lambda x: x, x), RequestClass.from_dict], obj.get("Request"))
        success_response = from_union([from_none, from_float, from_int, from_bool, from_str, lambda x: from_list(lambda x: x, x), SuccessResponseClass.from_dict], obj.get("SuccessResponse"))
        return Common(auth_error_codes, error_response, request, success_response)

    def to_dict(self) -> dict:
        result: dict = {}
        result["AuthErrorCodes"] = from_union([lambda x: to_class(AuthErrorCodesClass, x), from_none], self.auth_error_codes)
        result["ErrorResponse"] = from_union([from_none, to_float, from_int, from_bool, from_str, lambda x: from_list(lambda x: x, x), lambda x: to_class(ErrorResponseClass, x)], self.error_response)
        result["Request"] = from_union([from_none, to_float, from_int, from_bool, from_str, lambda x: from_list(lambda x: x, x), lambda x: to_class(RequestClass, x)], self.request)
        result["SuccessResponse"] = from_union([from_none, to_float, from_int, from_bool, from_str, lambda x: from_list(lambda x: x, x), lambda x: to_class(SuccessResponseClass, x)], self.success_response)
        return result


class PurpleAppointment:
    id: str

    def __init__(self, id: str) -> None:
        self.id = id

    @staticmethod
    def from_dict(obj: Any) -> 'PurpleAppointment':
        assert isinstance(obj, dict)
        id = from_str(obj.get("id"))
        return PurpleAppointment(id)

    def to_dict(self) -> dict:
        result: dict = {}
        result["id"] = from_str(self.id)
        return result


class PurpleClient:
    comment: Optional[str]
    id: str

    def __init__(self, comment: Optional[str], id: str) -> None:
        self.comment = comment
        self.id = id

    @staticmethod
    def from_dict(obj: Any) -> 'PurpleClient':
        assert isinstance(obj, dict)
        comment = from_union([from_str, from_none], obj.get("comment"))
        id = from_str(obj.get("id"))
        return PurpleClient(comment, id)

    def to_dict(self) -> dict:
        result: dict = {}
        result["comment"] = from_union([from_str, from_none], self.comment)
        result["id"] = from_str(self.id)
        return result


class AppointmentCancelAppointmentByBusinessRequestParams:
    appointment: PurpleAppointment
    client: Optional[PurpleClient]
    business: Any

    def __init__(self, appointment: PurpleAppointment, client: Optional[PurpleClient], business: Any) -> None:
        self.appointment = appointment
        self.client = client
        self.business = business

    @staticmethod
    def from_dict(obj: Any) -> 'AppointmentCancelAppointmentByBusinessRequestParams':
        assert isinstance(obj, dict)
        appointment = PurpleAppointment.from_dict(obj.get("appointment"))
        client = from_union([PurpleClient.from_dict, from_none], obj.get("client"))
        business = obj.get("business")
        return AppointmentCancelAppointmentByBusinessRequestParams(appointment, client, business)

    def to_dict(self) -> dict:
        result: dict = {}
        result["appointment"] = to_class(PurpleAppointment, self.appointment)
        result["client"] = from_union([lambda x: to_class(PurpleClient, x), from_none], self.client)
        result["business"] = self.business
        return result


class AppointmentCancelAppointmentByBusinessRequest:
    """авторизационные параметры"""
    cred: Optional[Cred]
    """значение числового типа для идентификации запроса на сервере"""
    id: Union[float, str]
    """версия протокола - 2.0"""
    jsonrpc: str
    """название jsonrpc метода"""
    method: str
    """параметры запроса"""
    params: AppointmentCancelAppointmentByBusinessRequestParams

    def __init__(self, cred: Optional[Cred], id: Union[float, str], jsonrpc: str, method: str, params: AppointmentCancelAppointmentByBusinessRequestParams) -> None:
        self.cred = cred
        self.id = id
        self.jsonrpc = jsonrpc
        self.method = method
        self.params = params

    @staticmethod
    def from_dict(obj: Any) -> 'AppointmentCancelAppointmentByBusinessRequest':
        assert isinstance(obj, dict)
        cred = from_union([Cred.from_dict, from_none], obj.get("cred"))
        id = from_union([from_float, from_str], obj.get("id"))
        jsonrpc = from_str(obj.get("jsonrpc"))
        method = from_str(obj.get("method"))
        params = AppointmentCancelAppointmentByBusinessRequestParams.from_dict(obj.get("params"))
        return AppointmentCancelAppointmentByBusinessRequest(cred, id, jsonrpc, method, params)

    def to_dict(self) -> dict:
        result: dict = {}
        result["cred"] = from_union([lambda x: to_class(Cred, x), from_none], self.cred)
        result["id"] = from_union([to_float, from_str], self.id)
        result["jsonrpc"] = from_str(self.jsonrpc)
        result["method"] = from_str(self.method)
        result["params"] = to_class(AppointmentCancelAppointmentByBusinessRequestParams, self.params)
        return result


class AppointmentCancelAppointmentByBusinessResponseError:
    """объект, содержащий информацию об ошибке
    
    Код ошибки авторизации
    """
    """код ошибки"""
    code: float
    """дополнительные данные об ошибке"""
    data: Optional[str]
    """текстовая информация об ошибке"""
    message: str

    def __init__(self, code: float, data: Optional[str], message: str) -> None:
        self.code = code
        self.data = data
        self.message = message

    @staticmethod
    def from_dict(obj: Any) -> 'AppointmentCancelAppointmentByBusinessResponseError':
        assert isinstance(obj, dict)
        code = from_float(obj.get("code"))
        data = from_union([from_str, from_none], obj.get("data"))
        message = from_str(obj.get("message"))
        return AppointmentCancelAppointmentByBusinessResponseError(code, data, message)

    def to_dict(self) -> dict:
        result: dict = {}
        result["code"] = to_float(self.code)
        result["data"] = from_union([from_str, from_none], self.data)
        result["message"] = from_str(self.message)
        return result


class AppointmentCancelAppointmentByBusinessResponse:
    """значение числового типа для идентификации запроса на сервере"""
    id: float
    """версия протокола (2.0)"""
    jsonrpc: str
    """данные, передаваемые в ответ"""
    result: Optional[bool]
    """объект, содержащий информацию об ошибке"""
    error: Optional[AppointmentCancelAppointmentByBusinessResponseError]

    def __init__(self, id: float, jsonrpc: str, result: Optional[bool], error: Optional[AppointmentCancelAppointmentByBusinessResponseError]) -> None:
        self.id = id
        self.jsonrpc = jsonrpc
        self.result = result
        self.error = error

    @staticmethod
    def from_dict(obj: Any) -> 'AppointmentCancelAppointmentByBusinessResponse':
        assert isinstance(obj, dict)
        id = from_float(obj.get("id"))
        jsonrpc = from_str(obj.get("jsonrpc"))
        result = from_union([from_bool, from_none], obj.get("result"))
        error = from_union([AppointmentCancelAppointmentByBusinessResponseError.from_dict, from_none], obj.get("error"))
        return AppointmentCancelAppointmentByBusinessResponse(id, jsonrpc, result, error)

    def to_dict(self) -> dict:
        result: dict = {}
        result["id"] = to_float(self.id)
        result["jsonrpc"] = from_str(self.jsonrpc)
        result["result"] = from_union([from_bool, from_none], self.result)
        result["error"] = from_union([lambda x: to_class(AppointmentCancelAppointmentByBusinessResponseError, x), from_none], self.error)
        return result


class CancelAppointmentByBusiness:
    request: AppointmentCancelAppointmentByBusinessRequest
    response: AppointmentCancelAppointmentByBusinessResponse

    def __init__(self, request: AppointmentCancelAppointmentByBusinessRequest, response: AppointmentCancelAppointmentByBusinessResponse) -> None:
        self.request = request
        self.response = response

    @staticmethod
    def from_dict(obj: Any) -> 'CancelAppointmentByBusiness':
        assert isinstance(obj, dict)
        request = AppointmentCancelAppointmentByBusinessRequest.from_dict(obj.get("request"))
        response = AppointmentCancelAppointmentByBusinessResponse.from_dict(obj.get("response"))
        return CancelAppointmentByBusiness(request, response)

    def to_dict(self) -> dict:
        result: dict = {}
        result["request"] = to_class(AppointmentCancelAppointmentByBusinessRequest, self.request)
        result["response"] = to_class(AppointmentCancelAppointmentByBusinessResponse, self.response)
        return result


class FluffyAppointment:
    id: str

    def __init__(self, id: str) -> None:
        self.id = id

    @staticmethod
    def from_dict(obj: Any) -> 'FluffyAppointment':
        assert isinstance(obj, dict)
        id = from_str(obj.get("id"))
        return FluffyAppointment(id)

    def to_dict(self) -> dict:
        result: dict = {}
        result["id"] = from_str(self.id)
        return result


class FluffyClient:
    comment: Optional[str]
    id: str

    def __init__(self, comment: Optional[str], id: str) -> None:
        self.comment = comment
        self.id = id

    @staticmethod
    def from_dict(obj: Any) -> 'FluffyClient':
        assert isinstance(obj, dict)
        comment = from_union([from_str, from_none], obj.get("comment"))
        id = from_str(obj.get("id"))
        return FluffyClient(comment, id)

    def to_dict(self) -> dict:
        result: dict = {}
        result["comment"] = from_union([from_str, from_none], self.comment)
        result["id"] = from_str(self.id)
        return result


class AppointmentCancelAppointmentByClientRequestParams:
    appointment: FluffyAppointment
    client: Optional[FluffyClient]
    business: Any

    def __init__(self, appointment: FluffyAppointment, client: Optional[FluffyClient], business: Any) -> None:
        self.appointment = appointment
        self.client = client
        self.business = business

    @staticmethod
    def from_dict(obj: Any) -> 'AppointmentCancelAppointmentByClientRequestParams':
        assert isinstance(obj, dict)
        appointment = FluffyAppointment.from_dict(obj.get("appointment"))
        client = from_union([FluffyClient.from_dict, from_none], obj.get("client"))
        business = obj.get("business")
        return AppointmentCancelAppointmentByClientRequestParams(appointment, client, business)

    def to_dict(self) -> dict:
        result: dict = {}
        result["appointment"] = to_class(FluffyAppointment, self.appointment)
        result["client"] = from_union([lambda x: to_class(FluffyClient, x), from_none], self.client)
        result["business"] = self.business
        return result


class AppointmentCancelAppointmentByClientRequest:
    """авторизационные параметры"""
    cred: Optional[Cred]
    """значение числового типа для идентификации запроса на сервере"""
    id: Union[float, str]
    """версия протокола - 2.0"""
    jsonrpc: str
    """название jsonrpc метода"""
    method: str
    """параметры запроса"""
    params: AppointmentCancelAppointmentByClientRequestParams

    def __init__(self, cred: Optional[Cred], id: Union[float, str], jsonrpc: str, method: str, params: AppointmentCancelAppointmentByClientRequestParams) -> None:
        self.cred = cred
        self.id = id
        self.jsonrpc = jsonrpc
        self.method = method
        self.params = params

    @staticmethod
    def from_dict(obj: Any) -> 'AppointmentCancelAppointmentByClientRequest':
        assert isinstance(obj, dict)
        cred = from_union([Cred.from_dict, from_none], obj.get("cred"))
        id = from_union([from_float, from_str], obj.get("id"))
        jsonrpc = from_str(obj.get("jsonrpc"))
        method = from_str(obj.get("method"))
        params = AppointmentCancelAppointmentByClientRequestParams.from_dict(obj.get("params"))
        return AppointmentCancelAppointmentByClientRequest(cred, id, jsonrpc, method, params)

    def to_dict(self) -> dict:
        result: dict = {}
        result["cred"] = from_union([lambda x: to_class(Cred, x), from_none], self.cred)
        result["id"] = from_union([to_float, from_str], self.id)
        result["jsonrpc"] = from_str(self.jsonrpc)
        result["method"] = from_str(self.method)
        result["params"] = to_class(AppointmentCancelAppointmentByClientRequestParams, self.params)
        return result


class AppointmentCancelAppointmentByClientResponseError:
    """объект, содержащий информацию об ошибке
    
    Код ошибки авторизации
    """
    """код ошибки"""
    code: float
    """дополнительные данные об ошибке"""
    data: Optional[str]
    """текстовая информация об ошибке"""
    message: str

    def __init__(self, code: float, data: Optional[str], message: str) -> None:
        self.code = code
        self.data = data
        self.message = message

    @staticmethod
    def from_dict(obj: Any) -> 'AppointmentCancelAppointmentByClientResponseError':
        assert isinstance(obj, dict)
        code = from_float(obj.get("code"))
        data = from_union([from_str, from_none], obj.get("data"))
        message = from_str(obj.get("message"))
        return AppointmentCancelAppointmentByClientResponseError(code, data, message)

    def to_dict(self) -> dict:
        result: dict = {}
        result["code"] = to_float(self.code)
        result["data"] = from_union([from_str, from_none], self.data)
        result["message"] = from_str(self.message)
        return result


class AppointmentCancelAppointmentByClientResponse:
    """значение числового типа для идентификации запроса на сервере"""
    id: float
    """версия протокола (2.0)"""
    jsonrpc: str
    """данные, передаваемые в ответ"""
    result: Optional[bool]
    """объект, содержащий информацию об ошибке"""
    error: Optional[AppointmentCancelAppointmentByClientResponseError]

    def __init__(self, id: float, jsonrpc: str, result: Optional[bool], error: Optional[AppointmentCancelAppointmentByClientResponseError]) -> None:
        self.id = id
        self.jsonrpc = jsonrpc
        self.result = result
        self.error = error

    @staticmethod
    def from_dict(obj: Any) -> 'AppointmentCancelAppointmentByClientResponse':
        assert isinstance(obj, dict)
        id = from_float(obj.get("id"))
        jsonrpc = from_str(obj.get("jsonrpc"))
        result = from_union([from_bool, from_none], obj.get("result"))
        error = from_union([AppointmentCancelAppointmentByClientResponseError.from_dict, from_none], obj.get("error"))
        return AppointmentCancelAppointmentByClientResponse(id, jsonrpc, result, error)

    def to_dict(self) -> dict:
        result: dict = {}
        result["id"] = to_float(self.id)
        result["jsonrpc"] = from_str(self.jsonrpc)
        result["result"] = from_union([from_bool, from_none], self.result)
        result["error"] = from_union([lambda x: to_class(AppointmentCancelAppointmentByClientResponseError, x), from_none], self.error)
        return result


class CancelAppointmentByClient:
    request: AppointmentCancelAppointmentByClientRequest
    response: AppointmentCancelAppointmentByClientResponse

    def __init__(self, request: AppointmentCancelAppointmentByClientRequest, response: AppointmentCancelAppointmentByClientResponse) -> None:
        self.request = request
        self.response = response

    @staticmethod
    def from_dict(obj: Any) -> 'CancelAppointmentByClient':
        assert isinstance(obj, dict)
        request = AppointmentCancelAppointmentByClientRequest.from_dict(obj.get("request"))
        response = AppointmentCancelAppointmentByClientResponse.from_dict(obj.get("response"))
        return CancelAppointmentByClient(request, response)

    def to_dict(self) -> dict:
        result: dict = {}
        result["request"] = to_class(AppointmentCancelAppointmentByClientRequest, self.request)
        result["response"] = to_class(AppointmentCancelAppointmentByClientResponse, self.response)
        return result


class TentacledAppointment:
    id: str

    def __init__(self, id: str) -> None:
        self.id = id

    @staticmethod
    def from_dict(obj: Any) -> 'TentacledAppointment':
        assert isinstance(obj, dict)
        id = from_str(obj.get("id"))
        return TentacledAppointment(id)

    def to_dict(self) -> dict:
        result: dict = {}
        result["id"] = from_str(self.id)
        return result


class TentacledClient:
    comment: Optional[str]
    id: str

    def __init__(self, comment: Optional[str], id: str) -> None:
        self.comment = comment
        self.id = id

    @staticmethod
    def from_dict(obj: Any) -> 'TentacledClient':
        assert isinstance(obj, dict)
        comment = from_union([from_str, from_none], obj.get("comment"))
        id = from_str(obj.get("id"))
        return TentacledClient(comment, id)

    def to_dict(self) -> dict:
        result: dict = {}
        result["comment"] = from_union([from_str, from_none], self.comment)
        result["id"] = from_str(self.id)
        return result


class ConfirmAppointment:
    appointment: TentacledAppointment
    client: Optional[TentacledClient]
    business: Any

    def __init__(self, appointment: TentacledAppointment, client: Optional[TentacledClient], business: Any) -> None:
        self.appointment = appointment
        self.client = client
        self.business = business

    @staticmethod
    def from_dict(obj: Any) -> 'ConfirmAppointment':
        assert isinstance(obj, dict)
        appointment = TentacledAppointment.from_dict(obj.get("appointment"))
        client = from_union([TentacledClient.from_dict, from_none], obj.get("client"))
        business = obj.get("business")
        return ConfirmAppointment(appointment, client, business)

    def to_dict(self) -> dict:
        result: dict = {}
        result["appointment"] = to_class(TentacledAppointment, self.appointment)
        result["client"] = from_union([lambda x: to_class(TentacledClient, x), from_none], self.client)
        result["business"] = self.business
        return result


class AppointmentClientConfirmAppointmentRequest:
    """авторизационные параметры"""
    cred: Optional[Cred]
    """значение числового типа для идентификации запроса на сервере"""
    id: Union[float, str]
    """версия протокола - 2.0"""
    jsonrpc: str
    """название jsonrpc метода"""
    method: str
    """параметры запроса"""
    params: ConfirmAppointment

    def __init__(self, cred: Optional[Cred], id: Union[float, str], jsonrpc: str, method: str, params: ConfirmAppointment) -> None:
        self.cred = cred
        self.id = id
        self.jsonrpc = jsonrpc
        self.method = method
        self.params = params

    @staticmethod
    def from_dict(obj: Any) -> 'AppointmentClientConfirmAppointmentRequest':
        assert isinstance(obj, dict)
        cred = from_union([Cred.from_dict, from_none], obj.get("cred"))
        id = from_union([from_float, from_str], obj.get("id"))
        jsonrpc = from_str(obj.get("jsonrpc"))
        method = from_str(obj.get("method"))
        params = ConfirmAppointment.from_dict(obj.get("params"))
        return AppointmentClientConfirmAppointmentRequest(cred, id, jsonrpc, method, params)

    def to_dict(self) -> dict:
        result: dict = {}
        result["cred"] = from_union([lambda x: to_class(Cred, x), from_none], self.cred)
        result["id"] = from_union([to_float, from_str], self.id)
        result["jsonrpc"] = from_str(self.jsonrpc)
        result["method"] = from_str(self.method)
        result["params"] = to_class(ConfirmAppointment, self.params)
        return result


class AppointmentClientConfirmAppointmentResponseError:
    """объект, содержащий информацию об ошибке
    
    Код ошибки авторизации
    """
    """код ошибки"""
    code: float
    """дополнительные данные об ошибке"""
    data: Optional[str]
    """текстовая информация об ошибке"""
    message: str

    def __init__(self, code: float, data: Optional[str], message: str) -> None:
        self.code = code
        self.data = data
        self.message = message

    @staticmethod
    def from_dict(obj: Any) -> 'AppointmentClientConfirmAppointmentResponseError':
        assert isinstance(obj, dict)
        code = from_float(obj.get("code"))
        data = from_union([from_str, from_none], obj.get("data"))
        message = from_str(obj.get("message"))
        return AppointmentClientConfirmAppointmentResponseError(code, data, message)

    def to_dict(self) -> dict:
        result: dict = {}
        result["code"] = to_float(self.code)
        result["data"] = from_union([from_str, from_none], self.data)
        result["message"] = from_str(self.message)
        return result


class AppointmentClientAppear(Enum):
    NONE = "NONE"
    NO_APPEAR = "NO_APPEAR"
    YES_APPEAR = "YES_APPEAR"


class AdditionalClientAppear:
    appear: AppointmentClientAppear
    client_id: str

    def __init__(self, appear: AppointmentClientAppear, client_id: str) -> None:
        self.appear = appear
        self.client_id = client_id

    @staticmethod
    def from_dict(obj: Any) -> 'AdditionalClientAppear':
        assert isinstance(obj, dict)
        appear = AppointmentClientAppear(obj.get("appear"))
        client_id = from_str(obj.get("clientID"))
        return AdditionalClientAppear(appear, client_id)

    def to_dict(self) -> dict:
        result: dict = {}
        result["appear"] = to_enum(AppointmentClientAppear, self.appear)
        result["clientID"] = from_str(self.client_id)
        return result


class AppointmentClientPayment(Enum):
    NONE = "NONE"
    NO_PAYMENT = "NO_PAYMENT"
    YES_PAYED_FULL = "YES_PAYED_FULL"
    YES_PAYED_ONLINE = "YES_PAYED_ONLINE"
    YES_PAYED_PART = "YES_PAYED_PART"


class AdditionalClientPayment:
    client_id: str
    payment: AppointmentClientPayment

    def __init__(self, client_id: str, payment: AppointmentClientPayment) -> None:
        self.client_id = client_id
        self.payment = payment

    @staticmethod
    def from_dict(obj: Any) -> 'AdditionalClientPayment':
        assert isinstance(obj, dict)
        client_id = from_str(obj.get("clientID"))
        payment = AppointmentClientPayment(obj.get("payment"))
        return AdditionalClientPayment(client_id, payment)

    def to_dict(self) -> dict:
        result: dict = {}
        result["clientID"] = from_str(self.client_id)
        result["payment"] = to_enum(AppointmentClientPayment, self.payment)
        return result


class AdditionalClientSource:
    id: Optional[str]
    client_id: str
    source: str

    def __init__(self, id: Optional[str], client_id: str, source: str) -> None:
        self.id = id
        self.client_id = client_id
        self.source = source

    @staticmethod
    def from_dict(obj: Any) -> 'AdditionalClientSource':
        assert isinstance(obj, dict)
        id = from_union([from_str, from_none], obj.get("_id"))
        client_id = from_str(obj.get("clientID"))
        source = from_str(obj.get("source"))
        return AdditionalClientSource(id, client_id, source)

    def to_dict(self) -> dict:
        result: dict = {}
        result["_id"] = from_union([from_str, from_none], self.id)
        result["clientID"] = from_str(self.client_id)
        result["source"] = from_str(self.source)
        return result


class AppointmentStatus(Enum):
    ACTIVE = "ACTIVE"
    CANCELLED_BY_ADMIN = "CANCELLED_BY_ADMIN"
    CANCELLED_BY_BUSINESS = "CANCELLED_BY_BUSINESS"
    CANCELLED_BY_CLIENT = "CANCELLED_BY_CLIENT"
    CONFIRMED_BY_ADMIN = "CONFIRMED_BY_ADMIN"
    CONFIRMED_BY_BUSINESS = "CONFIRMED_BY_BUSINESS"
    CONFIRMED_BY_CLIENT = "CONFIRMED_BY_CLIENT"
    CONFIRMED_MOVED = "CONFIRMED_MOVED"
    DENIED = "DENIED"
    DONE = "DONE"
    TENTATIVE = "TENTATIVE"
    TIMED_OUT = "TIMED_OUT"


class AdditionalClientStatus:
    id: Optional[str]
    client_id: str
    history: Optional[List[Dict[str, Any]]]
    status: AppointmentStatus

    def __init__(self, id: Optional[str], client_id: str, history: Optional[List[Dict[str, Any]]], status: AppointmentStatus) -> None:
        self.id = id
        self.client_id = client_id
        self.history = history
        self.status = status

    @staticmethod
    def from_dict(obj: Any) -> 'AdditionalClientStatus':
        assert isinstance(obj, dict)
        id = from_union([from_str, from_none], obj.get("_id"))
        client_id = from_str(obj.get("clientID"))
        history = from_union([lambda x: from_list(lambda x: from_dict(lambda x: x, x), x), from_none], obj.get("history"))
        status = AppointmentStatus(obj.get("status"))
        return AdditionalClientStatus(id, client_id, history, status)

    def to_dict(self) -> dict:
        result: dict = {}
        result["_id"] = from_union([from_str, from_none], self.id)
        result["clientID"] = from_str(self.client_id)
        result["history"] = from_union([lambda x: from_list(lambda x: from_dict(lambda x: x, x), x), from_none], self.history)
        result["status"] = to_enum(AppointmentStatus, self.status)
        return result


class AdditionalClientUtm:
    id: Optional[str]
    client_id: str
    utm: Optional[Dict[str, Any]]

    def __init__(self, id: Optional[str], client_id: str, utm: Optional[Dict[str, Any]]) -> None:
        self.id = id
        self.client_id = client_id
        self.utm = utm

    @staticmethod
    def from_dict(obj: Any) -> 'AdditionalClientUtm':
        assert isinstance(obj, dict)
        id = from_union([from_str, from_none], obj.get("_id"))
        client_id = from_str(obj.get("clientID"))
        utm = from_union([lambda x: from_dict(lambda x: x, x), from_none], obj.get("utm"))
        return AdditionalClientUtm(id, client_id, utm)

    def to_dict(self) -> dict:
        result: dict = {}
        result["_id"] = from_union([from_str, from_none], self.id)
        result["clientID"] = from_str(self.client_id)
        result["utm"] = from_union([lambda x: from_dict(lambda x: x, x), from_none], self.utm)
        return result


class ComplaintStatus(Enum):
    CHECKING = "CHECKING"
    CLOSED = "CLOSED"
    ENTERED = "ENTERED"
    INVALID = "INVALID"
    INVESTIGATION = "INVESTIGATION"
    NOT_ENTERED = "NOT_ENTERED"


class ExtraField:
    field_id: str
    field_name: str
    value: Union[float, Dict[str, Any], None, str]

    def __init__(self, field_id: str, field_name: str, value: Union[float, Dict[str, Any], None, str]) -> None:
        self.field_id = field_id
        self.field_name = field_name
        self.value = value

    @staticmethod
    def from_dict(obj: Any) -> 'ExtraField':
        assert isinstance(obj, dict)
        field_id = from_str(obj.get("fieldID"))
        field_name = from_str(obj.get("fieldName"))
        value = from_union([from_none, from_float, from_str, lambda x: from_dict(lambda x: x, x)], obj.get("value"))
        return ExtraField(field_id, field_name, value)

    def to_dict(self) -> dict:
        result: dict = {}
        result["fieldID"] = from_str(self.field_id)
        result["fieldName"] = from_str(self.field_name)
        result["value"] = from_union([from_none, to_float, from_str, lambda x: from_dict(lambda x: x, x)], self.value)
        return result


class AppointmentClientFeedback:
    complaint_action_text: Optional[str]
    complaint_status: Optional[ComplaintStatus]
    complaint_text: Optional[str]
    extra_fields: Optional[List[ExtraField]]
    inprogress: Optional[bool]
    original_message: Optional[str]
    rating: Optional[str]

    def __init__(self, complaint_action_text: Optional[str], complaint_status: Optional[ComplaintStatus], complaint_text: Optional[str], extra_fields: Optional[List[ExtraField]], inprogress: Optional[bool], original_message: Optional[str], rating: Optional[str]) -> None:
        self.complaint_action_text = complaint_action_text
        self.complaint_status = complaint_status
        self.complaint_text = complaint_text
        self.extra_fields = extra_fields
        self.inprogress = inprogress
        self.original_message = original_message
        self.rating = rating

    @staticmethod
    def from_dict(obj: Any) -> 'AppointmentClientFeedback':
        assert isinstance(obj, dict)
        complaint_action_text = from_union([from_str, from_none], obj.get("complaintActionText"))
        complaint_status = from_union([ComplaintStatus, from_none], obj.get("complaintStatus"))
        complaint_text = from_union([from_str, from_none], obj.get("complaintText"))
        extra_fields = from_union([lambda x: from_list(ExtraField.from_dict, x), from_none], obj.get("extraFields"))
        inprogress = from_union([from_bool, from_none], obj.get("inprogress"))
        original_message = from_union([from_str, from_none], obj.get("originalMessage"))
        rating = from_union([from_str, from_none], obj.get("rating"))
        return AppointmentClientFeedback(complaint_action_text, complaint_status, complaint_text, extra_fields, inprogress, original_message, rating)

    def to_dict(self) -> dict:
        result: dict = {}
        result["complaintActionText"] = from_union([from_str, from_none], self.complaint_action_text)
        result["complaintStatus"] = from_union([lambda x: to_enum(ComplaintStatus, x), from_none], self.complaint_status)
        result["complaintText"] = from_union([from_str, from_none], self.complaint_text)
        result["extraFields"] = from_union([lambda x: from_list(lambda x: to_class(ExtraField, x), x), from_none], self.extra_fields)
        result["inprogress"] = from_union([from_bool, from_none], self.inprogress)
        result["originalMessage"] = from_union([from_str, from_none], self.original_message)
        result["rating"] = from_union([from_str, from_none], self.rating)
        return result


class IncomingPhoneElement:
    area_code: str
    country_code: str
    number: str

    def __init__(self, area_code: str, country_code: str, number: str) -> None:
        self.area_code = area_code
        self.country_code = country_code
        self.number = number

    @staticmethod
    def from_dict(obj: Any) -> 'IncomingPhoneElement':
        assert isinstance(obj, dict)
        area_code = from_str(obj.get("area_code"))
        country_code = from_str(obj.get("country_code"))
        number = from_str(obj.get("number"))
        return IncomingPhoneElement(area_code, country_code, number)

    def to_dict(self) -> dict:
        result: dict = {}
        result["area_code"] = from_str(self.area_code)
        result["country_code"] = from_str(self.country_code)
        result["number"] = from_str(self.number)
        return result


class IsraelCity:
    city_id: str
    name: str

    def __init__(self, city_id: str, name: str) -> None:
        self.city_id = city_id
        self.name = name

    @staticmethod
    def from_dict(obj: Any) -> 'IsraelCity':
        assert isinstance(obj, dict)
        city_id = from_str(obj.get("cityId"))
        name = from_str(obj.get("name"))
        return IsraelCity(city_id, name)

    def to_dict(self) -> dict:
        result: dict = {}
        result["cityId"] = from_str(self.city_id)
        result["name"] = from_str(self.name)
        return result


class KupatHolim:
    kupat_holim_id: str
    name: str

    def __init__(self, kupat_holim_id: str, name: str) -> None:
        self.kupat_holim_id = kupat_holim_id
        self.name = name

    @staticmethod
    def from_dict(obj: Any) -> 'KupatHolim':
        assert isinstance(obj, dict)
        kupat_holim_id = from_str(obj.get("kupatHolimId"))
        name = from_str(obj.get("name"))
        return KupatHolim(kupat_holim_id, name)

    def to_dict(self) -> dict:
        result: dict = {}
        result["kupatHolimId"] = from_str(self.kupat_holim_id)
        result["name"] = from_str(self.name)
        return result


class Sex(Enum):
    FEMALE = "FEMALE"
    MALE = "MALE"
    NOT_SPECIFIED = "NOT_SPECIFIED"


class AdditionalClientElement:
    address: Optional[str]
    admin_comment: Optional[str]
    birthday: Optional[str]
    client_card_number: Optional[str]
    client_comment: Optional[str]
    creator_profile_id: Optional[str]
    creator_profile_name: Optional[str]
    driver_license: Optional[str]
    email: Optional[List[str]]
    extra_data: Optional[Dict[str, Any]]
    extra_id: Optional[str]
    extra_visitors: Optional[float]
    fax: Optional[str]
    feedback: Optional[AppointmentClientFeedback]
    ga_client_id: Optional[str]
    house_number: Optional[str]
    id: str
    incoming_phone: Optional[List[IncomingPhoneElement]]
    israel_city: Optional[IsraelCity]
    is_vip: Optional[bool]
    kupat_holim: Optional[KupatHolim]
    language: Optional[str]
    middle_name: Optional[str]
    name: str
    passport_id: Optional[str]
    phone: Optional[List[IncomingPhoneElement]]
    season_ticket_id: Optional[str]
    season_ticket_number: Optional[str]
    sex: Optional[Sex]
    short_id: Optional[str]
    surname: str
    taxi_park: Optional[str]
    taxi_park_member_count: Optional[float]

    def __init__(self, address: Optional[str], admin_comment: Optional[str], birthday: Optional[str], client_card_number: Optional[str], client_comment: Optional[str], creator_profile_id: Optional[str], creator_profile_name: Optional[str], driver_license: Optional[str], email: Optional[List[str]], extra_data: Optional[Dict[str, Any]], extra_id: Optional[str], extra_visitors: Optional[float], fax: Optional[str], feedback: Optional[AppointmentClientFeedback], ga_client_id: Optional[str], house_number: Optional[str], id: str, incoming_phone: Optional[List[IncomingPhoneElement]], israel_city: Optional[IsraelCity], is_vip: Optional[bool], kupat_holim: Optional[KupatHolim], language: Optional[str], middle_name: Optional[str], name: str, passport_id: Optional[str], phone: Optional[List[IncomingPhoneElement]], season_ticket_id: Optional[str], season_ticket_number: Optional[str], sex: Optional[Sex], short_id: Optional[str], surname: str, taxi_park: Optional[str], taxi_park_member_count: Optional[float]) -> None:
        self.address = address
        self.admin_comment = admin_comment
        self.birthday = birthday
        self.client_card_number = client_card_number
        self.client_comment = client_comment
        self.creator_profile_id = creator_profile_id
        self.creator_profile_name = creator_profile_name
        self.driver_license = driver_license
        self.email = email
        self.extra_data = extra_data
        self.extra_id = extra_id
        self.extra_visitors = extra_visitors
        self.fax = fax
        self.feedback = feedback
        self.ga_client_id = ga_client_id
        self.house_number = house_number
        self.id = id
        self.incoming_phone = incoming_phone
        self.israel_city = israel_city
        self.is_vip = is_vip
        self.kupat_holim = kupat_holim
        self.language = language
        self.middle_name = middle_name
        self.name = name
        self.passport_id = passport_id
        self.phone = phone
        self.season_ticket_id = season_ticket_id
        self.season_ticket_number = season_ticket_number
        self.sex = sex
        self.short_id = short_id
        self.surname = surname
        self.taxi_park = taxi_park
        self.taxi_park_member_count = taxi_park_member_count

    @staticmethod
    def from_dict(obj: Any) -> 'AdditionalClientElement':
        assert isinstance(obj, dict)
        address = from_union([from_str, from_none], obj.get("address"))
        admin_comment = from_union([from_str, from_none], obj.get("adminComment"))
        birthday = from_union([from_str, from_none], obj.get("birthday"))
        client_card_number = from_union([from_str, from_none], obj.get("clientCardNumber"))
        client_comment = from_union([from_str, from_none], obj.get("clientComment"))
        creator_profile_id = from_union([from_str, from_none], obj.get("creatorProfileID"))
        creator_profile_name = from_union([from_str, from_none], obj.get("creatorProfileName"))
        driver_license = from_union([from_str, from_none], obj.get("driverLicense"))
        email = from_union([lambda x: from_list(from_str, x), from_none], obj.get("email"))
        extra_data = from_union([lambda x: from_dict(lambda x: x, x), from_none], obj.get("extraData"))
        extra_id = from_union([from_str, from_none], obj.get("extraID"))
        extra_visitors = from_union([from_float, from_none], obj.get("extraVisitors"))
        fax = from_union([from_str, from_none], obj.get("fax"))
        feedback = from_union([AppointmentClientFeedback.from_dict, from_none], obj.get("feedback"))
        ga_client_id = from_union([from_str, from_none], obj.get("GAClientID"))
        house_number = from_union([from_str, from_none], obj.get("houseNumber"))
        id = from_str(obj.get("id"))
        incoming_phone = from_union([lambda x: from_list(IncomingPhoneElement.from_dict, x), from_none], obj.get("incomingPhone"))
        israel_city = from_union([IsraelCity.from_dict, from_none], obj.get("israelCity"))
        is_vip = from_union([from_bool, from_none], obj.get("isVIP"))
        kupat_holim = from_union([KupatHolim.from_dict, from_none], obj.get("kupatHolim"))
        language = from_union([from_str, from_none], obj.get("language"))
        middle_name = from_union([from_str, from_none], obj.get("middleName"))
        name = from_str(obj.get("name"))
        passport_id = from_union([from_str, from_none], obj.get("passportId"))
        phone = from_union([lambda x: from_list(IncomingPhoneElement.from_dict, x), from_none], obj.get("phone"))
        season_ticket_id = from_union([from_str, from_none], obj.get("seasonTicketId"))
        season_ticket_number = from_union([from_str, from_none], obj.get("seasonTicketNumber"))
        sex = from_union([Sex, from_none], obj.get("sex"))
        short_id = from_union([from_str, from_none], obj.get("shortId"))
        surname = from_str(obj.get("surname"))
        taxi_park = from_union([from_str, from_none], obj.get("taxiPark"))
        taxi_park_member_count = from_union([from_float, from_none], obj.get("taxiParkMemberCount"))
        return AdditionalClientElement(address, admin_comment, birthday, client_card_number, client_comment, creator_profile_id, creator_profile_name, driver_license, email, extra_data, extra_id, extra_visitors, fax, feedback, ga_client_id, house_number, id, incoming_phone, israel_city, is_vip, kupat_holim, language, middle_name, name, passport_id, phone, season_ticket_id, season_ticket_number, sex, short_id, surname, taxi_park, taxi_park_member_count)

    def to_dict(self) -> dict:
        result: dict = {}
        result["address"] = from_union([from_str, from_none], self.address)
        result["adminComment"] = from_union([from_str, from_none], self.admin_comment)
        result["birthday"] = from_union([from_str, from_none], self.birthday)
        result["clientCardNumber"] = from_union([from_str, from_none], self.client_card_number)
        result["clientComment"] = from_union([from_str, from_none], self.client_comment)
        result["creatorProfileID"] = from_union([from_str, from_none], self.creator_profile_id)
        result["creatorProfileName"] = from_union([from_str, from_none], self.creator_profile_name)
        result["driverLicense"] = from_union([from_str, from_none], self.driver_license)
        result["email"] = from_union([lambda x: from_list(from_str, x), from_none], self.email)
        result["extraData"] = from_union([lambda x: from_dict(lambda x: x, x), from_none], self.extra_data)
        result["extraID"] = from_union([from_str, from_none], self.extra_id)
        result["extraVisitors"] = from_union([to_float, from_none], self.extra_visitors)
        result["fax"] = from_union([from_str, from_none], self.fax)
        result["feedback"] = from_union([lambda x: to_class(AppointmentClientFeedback, x), from_none], self.feedback)
        result["GAClientID"] = from_union([from_str, from_none], self.ga_client_id)
        result["houseNumber"] = from_union([from_str, from_none], self.house_number)
        result["id"] = from_str(self.id)
        result["incomingPhone"] = from_union([lambda x: from_list(lambda x: to_class(IncomingPhoneElement, x), x), from_none], self.incoming_phone)
        result["israelCity"] = from_union([lambda x: to_class(IsraelCity, x), from_none], self.israel_city)
        result["isVIP"] = from_union([from_bool, from_none], self.is_vip)
        result["kupatHolim"] = from_union([lambda x: to_class(KupatHolim, x), from_none], self.kupat_holim)
        result["language"] = from_union([from_str, from_none], self.language)
        result["middleName"] = from_union([from_str, from_none], self.middle_name)
        result["name"] = from_str(self.name)
        result["passportId"] = from_union([from_str, from_none], self.passport_id)
        result["phone"] = from_union([lambda x: from_list(lambda x: to_class(IncomingPhoneElement, x), x), from_none], self.phone)
        result["seasonTicketId"] = from_union([from_str, from_none], self.season_ticket_id)
        result["seasonTicketNumber"] = from_union([from_str, from_none], self.season_ticket_number)
        result["sex"] = from_union([lambda x: to_enum(Sex, x), from_none], self.sex)
        result["shortId"] = from_union([from_str, from_none], self.short_id)
        result["surname"] = from_str(self.surname)
        result["taxiPark"] = from_union([from_str, from_none], self.taxi_park)
        result["taxiParkMemberCount"] = from_union([to_float, from_none], self.taxi_park_member_count)
        return result


class AdditionalFieldType(Enum):
    BOOL = "BOOL"
    COUPON = "COUPON"
    FILE = "FILE"
    RADIO = "RADIO"
    STRING = "STRING"


class AdditionalField:
    name: str
    required_field: bool
    short_name: str
    type: AdditionalFieldType
    value: str

    def __init__(self, name: str, required_field: bool, short_name: str, type: AdditionalFieldType, value: str) -> None:
        self.name = name
        self.required_field = required_field
        self.short_name = short_name
        self.type = type
        self.value = value

    @staticmethod
    def from_dict(obj: Any) -> 'AdditionalField':
        assert isinstance(obj, dict)
        name = from_str(obj.get("name"))
        required_field = from_bool(obj.get("requiredField"))
        short_name = from_str(obj.get("shortName"))
        type = AdditionalFieldType(obj.get("type"))
        value = from_str(obj.get("value"))
        return AdditionalField(name, required_field, short_name, type, value)

    def to_dict(self) -> dict:
        result: dict = {}
        result["name"] = from_str(self.name)
        result["requiredField"] = from_bool(self.required_field)
        result["shortName"] = from_str(self.short_name)
        result["type"] = to_enum(AdditionalFieldType, self.type)
        result["value"] = from_str(self.value)
        return result


class AdditionalProduct:
    id: str
    price: float

    def __init__(self, id: str, price: float) -> None:
        self.id = id
        self.price = price

    @staticmethod
    def from_dict(obj: Any) -> 'AdditionalProduct':
        assert isinstance(obj, dict)
        id = from_str(obj.get("id"))
        price = from_float(obj.get("price"))
        return AdditionalProduct(id, price)

    def to_dict(self) -> dict:
        result: dict = {}
        result["id"] = from_str(self.id)
        result["price"] = to_float(self.price)
        return result


class AppointmentTaxonomy:
    alias: str
    extra_id: Optional[str]
    id: str

    def __init__(self, alias: str, extra_id: Optional[str], id: str) -> None:
        self.alias = alias
        self.extra_id = extra_id
        self.id = id

    @staticmethod
    def from_dict(obj: Any) -> 'AppointmentTaxonomy':
        assert isinstance(obj, dict)
        alias = from_str(obj.get("alias"))
        extra_id = from_union([from_str, from_none], obj.get("extraId"))
        id = from_str(obj.get("id"))
        return AppointmentTaxonomy(alias, extra_id, id)

    def to_dict(self) -> dict:
        result: dict = {}
        result["alias"] = from_str(self.alias)
        result["extraId"] = from_union([from_str, from_none], self.extra_id)
        result["id"] = from_str(self.id)
        return result


class DrinkAnswer(Enum):
    COFFEE = "COFFEE"
    NOT_IMPORTANT = "NOT_IMPORTANT"
    TEA = "TEA"


class IntegrationData:
    extra_id: str

    def __init__(self, extra_id: str) -> None:
        self.extra_id = extra_id

    @staticmethod
    def from_dict(obj: Any) -> 'IntegrationData':
        assert isinstance(obj, dict)
        extra_id = from_str(obj.get("extraId"))
        return IntegrationData(extra_id)

    def to_dict(self) -> dict:
        result: dict = {}
        result["extraId"] = from_str(self.extra_id)
        return result


class DiscountProvider(Enum):
    GROUPON = "GROUPON"
    LOCAL = "LOCAL"
    YANDEX = "YANDEX"


class AdditionalTaxonomyDiscount:
    discount: Optional[float]
    discount_provider: Optional[DiscountProvider]
    discount_type: Optional[str]
    taxonomy_id: Optional[str]

    def __init__(self, discount: Optional[float], discount_provider: Optional[DiscountProvider], discount_type: Optional[str], taxonomy_id: Optional[str]) -> None:
        self.discount = discount
        self.discount_provider = discount_provider
        self.discount_type = discount_type
        self.taxonomy_id = taxonomy_id

    @staticmethod
    def from_dict(obj: Any) -> 'AdditionalTaxonomyDiscount':
        assert isinstance(obj, dict)
        discount = from_union([from_float, from_none], obj.get("discount"))
        discount_provider = from_union([DiscountProvider, from_none], obj.get("discountProvider"))
        discount_type = from_union([from_str, from_none], obj.get("discountType"))
        taxonomy_id = from_union([from_str, from_none], obj.get("taxonomyID"))
        return AdditionalTaxonomyDiscount(discount, discount_provider, discount_type, taxonomy_id)

    def to_dict(self) -> dict:
        result: dict = {}
        result["discount"] = from_union([to_float, from_none], self.discount)
        result["discountProvider"] = from_union([lambda x: to_enum(DiscountProvider, x), from_none], self.discount_provider)
        result["discountType"] = from_union([from_str, from_none], self.discount_type)
        result["taxonomyID"] = from_union([from_str, from_none], self.taxonomy_id)
        return result


class CurrencyList(Enum):
    """Аббревиатура валюты
    
    Аббревиатура валюты (например, RUB - рубль)
    """
    CNY = "CNY"
    EUR = "EUR"
    GBP = "GBP"
    HUF = "HUF"
    ILS = "ILS"
    KZT = "KZT"
    RUB = "RUB"
    UAH = "UAH"
    USD = "USD"
    UZS = "UZS"


class Price:
    additional_taxonomy_discount: List[AdditionalTaxonomyDiscount]
    amount: float
    currency: CurrencyList
    discount: Optional[float]
    discount_provider: Optional[DiscountProvider]
    discount_type: Optional[str]
    original_amount: Optional[float]

    def __init__(self, additional_taxonomy_discount: List[AdditionalTaxonomyDiscount], amount: float, currency: CurrencyList, discount: Optional[float], discount_provider: Optional[DiscountProvider], discount_type: Optional[str], original_amount: Optional[float]) -> None:
        self.additional_taxonomy_discount = additional_taxonomy_discount
        self.amount = amount
        self.currency = currency
        self.discount = discount
        self.discount_provider = discount_provider
        self.discount_type = discount_type
        self.original_amount = original_amount

    @staticmethod
    def from_dict(obj: Any) -> 'Price':
        assert isinstance(obj, dict)
        additional_taxonomy_discount = from_list(AdditionalTaxonomyDiscount.from_dict, obj.get("additionalTaxonomyDiscount"))
        amount = from_float(obj.get("amount"))
        currency = CurrencyList(obj.get("currency"))
        discount = from_union([from_float, from_none], obj.get("discount"))
        discount_provider = from_union([DiscountProvider, from_none], obj.get("discountProvider"))
        discount_type = from_union([from_str, from_none], obj.get("discountType"))
        original_amount = from_union([from_float, from_none], obj.get("originalAmount"))
        return Price(additional_taxonomy_discount, amount, currency, discount, discount_provider, discount_type, original_amount)

    def to_dict(self) -> dict:
        result: dict = {}
        result["additionalTaxonomyDiscount"] = from_list(lambda x: to_class(AdditionalTaxonomyDiscount, x), self.additional_taxonomy_discount)
        result["amount"] = to_float(self.amount)
        result["currency"] = to_enum(CurrencyList, self.currency)
        result["discount"] = from_union([to_float, from_none], self.discount)
        result["discountProvider"] = from_union([lambda x: to_enum(DiscountProvider, x), from_none], self.discount_provider)
        result["discountType"] = from_union([from_str, from_none], self.discount_type)
        result["originalAmount"] = from_union([to_float, from_none], self.original_amount)
        return result


class TalkAnswer(Enum):
    NOT_IMPORTANT = "NOT_IMPORTANT"
    NOT_TALK = "NOT_TALK"
    TALK = "TALK"


class AppointmentInfo:
    backoffice_id: Union[float, str]
    block_sms: bool
    created: datetime
    drink_answer: Optional[DrinkAnswer]
    duration: float
    hide_appointment_time: bool
    id: str
    integration_data: Optional[IntegrationData]
    price: Price
    short_id: str
    start: datetime
    status: AppointmentStatus
    talk_answer: Optional[TalkAnswer]
    test_record: bool
    updated: datetime

    def __init__(self, backoffice_id: Union[float, str], block_sms: bool, created: datetime, drink_answer: Optional[DrinkAnswer], duration: float, hide_appointment_time: bool, id: str, integration_data: Optional[IntegrationData], price: Price, short_id: str, start: datetime, status: AppointmentStatus, talk_answer: Optional[TalkAnswer], test_record: bool, updated: datetime) -> None:
        self.backoffice_id = backoffice_id
        self.block_sms = block_sms
        self.created = created
        self.drink_answer = drink_answer
        self.duration = duration
        self.hide_appointment_time = hide_appointment_time
        self.id = id
        self.integration_data = integration_data
        self.price = price
        self.short_id = short_id
        self.start = start
        self.status = status
        self.talk_answer = talk_answer
        self.test_record = test_record
        self.updated = updated

    @staticmethod
    def from_dict(obj: Any) -> 'AppointmentInfo':
        assert isinstance(obj, dict)
        backoffice_id = from_union([from_float, from_str], obj.get("backofficeID"))
        block_sms = from_bool(obj.get("blockSMS"))
        created = from_datetime(obj.get("created"))
        drink_answer = from_union([DrinkAnswer, from_none], obj.get("drinkAnswer"))
        duration = from_float(obj.get("duration"))
        hide_appointment_time = from_bool(obj.get("hideAppointmentTime"))
        id = from_str(obj.get("id"))
        integration_data = from_union([IntegrationData.from_dict, from_none], obj.get("integration_data"))
        price = Price.from_dict(obj.get("price"))
        short_id = from_str(obj.get("shortId"))
        start = from_datetime(obj.get("start"))
        status = AppointmentStatus(obj.get("status"))
        talk_answer = from_union([TalkAnswer, from_none], obj.get("talkAnswer"))
        test_record = from_bool(obj.get("testRecord"))
        updated = from_datetime(obj.get("updated"))
        return AppointmentInfo(backoffice_id, block_sms, created, drink_answer, duration, hide_appointment_time, id, integration_data, price, short_id, start, status, talk_answer, test_record, updated)

    def to_dict(self) -> dict:
        result: dict = {}
        result["backofficeID"] = from_union([to_float, from_str], self.backoffice_id)
        result["blockSMS"] = from_bool(self.block_sms)
        result["created"] = self.created.isoformat()
        result["drinkAnswer"] = from_union([lambda x: to_enum(DrinkAnswer, x), from_none], self.drink_answer)
        result["duration"] = to_float(self.duration)
        result["hideAppointmentTime"] = from_bool(self.hide_appointment_time)
        result["id"] = from_str(self.id)
        result["integration_data"] = from_union([lambda x: to_class(IntegrationData, x), from_none], self.integration_data)
        result["price"] = to_class(Price, self.price)
        result["shortId"] = from_str(self.short_id)
        result["start"] = self.start.isoformat()
        result["status"] = to_enum(AppointmentStatus, self.status)
        result["talkAnswer"] = from_union([lambda x: to_enum(TalkAnswer, x), from_none], self.talk_answer)
        result["testRecord"] = from_bool(self.test_record)
        result["updated"] = self.updated.isoformat()
        return result


class AppointmentBusiness:
    id: str

    def __init__(self, id: str) -> None:
        self.id = id

    @staticmethod
    def from_dict(obj: Any) -> 'AppointmentBusiness':
        assert isinstance(obj, dict)
        id = from_str(obj.get("id"))
        return AppointmentBusiness(id)

    def to_dict(self) -> dict:
        result: dict = {}
        result["id"] = from_str(self.id)
        return result


class Cabinet:
    id: Optional[str]

    def __init__(self, id: Optional[str]) -> None:
        self.id = id

    @staticmethod
    def from_dict(obj: Any) -> 'Cabinet':
        assert isinstance(obj, dict)
        id = from_union([from_str, from_none], obj.get("id"))
        return Cabinet(id)

    def to_dict(self) -> dict:
        result: dict = {}
        result["id"] = from_union([from_str, from_none], self.id)
        return result


class AppointmentClient:
    """пустой объект в момент резервирования"""
    address: Optional[str]
    admin_comment: Optional[str]
    birthday: Optional[str]
    client_card_number: Optional[str]
    client_comment: Optional[str]
    creator_profile_id: Optional[str]
    creator_profile_name: Optional[str]
    driver_license: Optional[str]
    email: Optional[List[str]]
    extra_data: Optional[Dict[str, Any]]
    extra_id: Optional[str]
    extra_visitors: Optional[float]
    fax: Optional[str]
    feedback: Optional[AppointmentClientFeedback]
    ga_client_id: Optional[str]
    house_number: Optional[str]
    id: Optional[str]
    incoming_phone: Optional[List[IncomingPhoneElement]]
    israel_city: Optional[IsraelCity]
    is_vip: Optional[bool]
    kupat_holim: Optional[KupatHolim]
    language: Optional[str]
    middle_name: Optional[str]
    name: Optional[str]
    passport_id: Optional[str]
    phone: Optional[List[IncomingPhoneElement]]
    season_ticket_id: Optional[str]
    season_ticket_number: Optional[str]
    sex: Optional[Sex]
    short_id: Optional[str]
    surname: Optional[str]
    taxi_park: Optional[str]
    taxi_park_member_count: Optional[float]

    def __init__(self, address: Optional[str], admin_comment: Optional[str], birthday: Optional[str], client_card_number: Optional[str], client_comment: Optional[str], creator_profile_id: Optional[str], creator_profile_name: Optional[str], driver_license: Optional[str], email: Optional[List[str]], extra_data: Optional[Dict[str, Any]], extra_id: Optional[str], extra_visitors: Optional[float], fax: Optional[str], feedback: Optional[AppointmentClientFeedback], ga_client_id: Optional[str], house_number: Optional[str], id: Optional[str], incoming_phone: Optional[List[IncomingPhoneElement]], israel_city: Optional[IsraelCity], is_vip: Optional[bool], kupat_holim: Optional[KupatHolim], language: Optional[str], middle_name: Optional[str], name: Optional[str], passport_id: Optional[str], phone: Optional[List[IncomingPhoneElement]], season_ticket_id: Optional[str], season_ticket_number: Optional[str], sex: Optional[Sex], short_id: Optional[str], surname: Optional[str], taxi_park: Optional[str], taxi_park_member_count: Optional[float]) -> None:
        self.address = address
        self.admin_comment = admin_comment
        self.birthday = birthday
        self.client_card_number = client_card_number
        self.client_comment = client_comment
        self.creator_profile_id = creator_profile_id
        self.creator_profile_name = creator_profile_name
        self.driver_license = driver_license
        self.email = email
        self.extra_data = extra_data
        self.extra_id = extra_id
        self.extra_visitors = extra_visitors
        self.fax = fax
        self.feedback = feedback
        self.ga_client_id = ga_client_id
        self.house_number = house_number
        self.id = id
        self.incoming_phone = incoming_phone
        self.israel_city = israel_city
        self.is_vip = is_vip
        self.kupat_holim = kupat_holim
        self.language = language
        self.middle_name = middle_name
        self.name = name
        self.passport_id = passport_id
        self.phone = phone
        self.season_ticket_id = season_ticket_id
        self.season_ticket_number = season_ticket_number
        self.sex = sex
        self.short_id = short_id
        self.surname = surname
        self.taxi_park = taxi_park
        self.taxi_park_member_count = taxi_park_member_count

    @staticmethod
    def from_dict(obj: Any) -> 'AppointmentClient':
        assert isinstance(obj, dict)
        address = from_union([from_str, from_none], obj.get("address"))
        admin_comment = from_union([from_str, from_none], obj.get("adminComment"))
        birthday = from_union([from_str, from_none], obj.get("birthday"))
        client_card_number = from_union([from_str, from_none], obj.get("clientCardNumber"))
        client_comment = from_union([from_str, from_none], obj.get("clientComment"))
        creator_profile_id = from_union([from_str, from_none], obj.get("creatorProfileID"))
        creator_profile_name = from_union([from_str, from_none], obj.get("creatorProfileName"))
        driver_license = from_union([from_str, from_none], obj.get("driverLicense"))
        email = from_union([lambda x: from_list(from_str, x), from_none], obj.get("email"))
        extra_data = from_union([lambda x: from_dict(lambda x: x, x), from_none], obj.get("extraData"))
        extra_id = from_union([from_str, from_none], obj.get("extraID"))
        extra_visitors = from_union([from_float, from_none], obj.get("extraVisitors"))
        fax = from_union([from_str, from_none], obj.get("fax"))
        feedback = from_union([AppointmentClientFeedback.from_dict, from_none], obj.get("feedback"))
        ga_client_id = from_union([from_str, from_none], obj.get("GAClientID"))
        house_number = from_union([from_str, from_none], obj.get("houseNumber"))
        id = from_union([from_str, from_none], obj.get("id"))
        incoming_phone = from_union([lambda x: from_list(IncomingPhoneElement.from_dict, x), from_none], obj.get("incomingPhone"))
        israel_city = from_union([IsraelCity.from_dict, from_none], obj.get("israelCity"))
        is_vip = from_union([from_bool, from_none], obj.get("isVIP"))
        kupat_holim = from_union([KupatHolim.from_dict, from_none], obj.get("kupatHolim"))
        language = from_union([from_str, from_none], obj.get("language"))
        middle_name = from_union([from_str, from_none], obj.get("middleName"))
        name = from_union([from_str, from_none], obj.get("name"))
        passport_id = from_union([from_str, from_none], obj.get("passportId"))
        phone = from_union([lambda x: from_list(IncomingPhoneElement.from_dict, x), from_none], obj.get("phone"))
        season_ticket_id = from_union([from_str, from_none], obj.get("seasonTicketId"))
        season_ticket_number = from_union([from_str, from_none], obj.get("seasonTicketNumber"))
        sex = from_union([Sex, from_none], obj.get("sex"))
        short_id = from_union([from_str, from_none], obj.get("shortId"))
        surname = from_union([from_str, from_none], obj.get("surname"))
        taxi_park = from_union([from_str, from_none], obj.get("taxiPark"))
        taxi_park_member_count = from_union([from_float, from_none], obj.get("taxiParkMemberCount"))
        return AppointmentClient(address, admin_comment, birthday, client_card_number, client_comment, creator_profile_id, creator_profile_name, driver_license, email, extra_data, extra_id, extra_visitors, fax, feedback, ga_client_id, house_number, id, incoming_phone, israel_city, is_vip, kupat_holim, language, middle_name, name, passport_id, phone, season_ticket_id, season_ticket_number, sex, short_id, surname, taxi_park, taxi_park_member_count)

    def to_dict(self) -> dict:
        result: dict = {}
        result["address"] = from_union([from_str, from_none], self.address)
        result["adminComment"] = from_union([from_str, from_none], self.admin_comment)
        result["birthday"] = from_union([from_str, from_none], self.birthday)
        result["clientCardNumber"] = from_union([from_str, from_none], self.client_card_number)
        result["clientComment"] = from_union([from_str, from_none], self.client_comment)
        result["creatorProfileID"] = from_union([from_str, from_none], self.creator_profile_id)
        result["creatorProfileName"] = from_union([from_str, from_none], self.creator_profile_name)
        result["driverLicense"] = from_union([from_str, from_none], self.driver_license)
        result["email"] = from_union([lambda x: from_list(from_str, x), from_none], self.email)
        result["extraData"] = from_union([lambda x: from_dict(lambda x: x, x), from_none], self.extra_data)
        result["extraID"] = from_union([from_str, from_none], self.extra_id)
        result["extraVisitors"] = from_union([to_float, from_none], self.extra_visitors)
        result["fax"] = from_union([from_str, from_none], self.fax)
        result["feedback"] = from_union([lambda x: to_class(AppointmentClientFeedback, x), from_none], self.feedback)
        result["GAClientID"] = from_union([from_str, from_none], self.ga_client_id)
        result["houseNumber"] = from_union([from_str, from_none], self.house_number)
        result["id"] = from_union([from_str, from_none], self.id)
        result["incomingPhone"] = from_union([lambda x: from_list(lambda x: to_class(IncomingPhoneElement, x), x), from_none], self.incoming_phone)
        result["israelCity"] = from_union([lambda x: to_class(IsraelCity, x), from_none], self.israel_city)
        result["isVIP"] = from_union([from_bool, from_none], self.is_vip)
        result["kupatHolim"] = from_union([lambda x: to_class(KupatHolim, x), from_none], self.kupat_holim)
        result["language"] = from_union([from_str, from_none], self.language)
        result["middleName"] = from_union([from_str, from_none], self.middle_name)
        result["name"] = from_union([from_str, from_none], self.name)
        result["passportId"] = from_union([from_str, from_none], self.passport_id)
        result["phone"] = from_union([lambda x: from_list(lambda x: to_class(IncomingPhoneElement, x), x), from_none], self.phone)
        result["seasonTicketId"] = from_union([from_str, from_none], self.season_ticket_id)
        result["seasonTicketNumber"] = from_union([from_str, from_none], self.season_ticket_number)
        result["sex"] = from_union([lambda x: to_enum(Sex, x), from_none], self.sex)
        result["shortId"] = from_union([from_str, from_none], self.short_id)
        result["surname"] = from_union([from_str, from_none], self.surname)
        result["taxiPark"] = from_union([from_str, from_none], self.taxi_park)
        result["taxiParkMemberCount"] = from_union([to_float, from_none], self.taxi_park_member_count)
        return result


class Location:
    latitude: float
    longitude: float

    def __init__(self, latitude: float, longitude: float) -> None:
        self.latitude = latitude
        self.longitude = longitude

    @staticmethod
    def from_dict(obj: Any) -> 'Location':
        assert isinstance(obj, dict)
        latitude = from_float(obj.get("latitude"))
        longitude = from_float(obj.get("longitude"))
        return Location(latitude, longitude)

    def to_dict(self) -> dict:
        result: dict = {}
        result["latitude"] = to_float(self.latitude)
        result["longitude"] = to_float(self.longitude)
        return result


class Order:
    id: str

    def __init__(self, id: str) -> None:
        self.id = id

    @staticmethod
    def from_dict(obj: Any) -> 'Order':
        assert isinstance(obj, dict)
        id = from_str(obj.get("id"))
        return Order(id)

    def to_dict(self) -> dict:
        result: dict = {}
        result["id"] = from_str(self.id)
        return result


class ReminderStatus(Enum):
    NOT_SET = "NOT_SET"
    OFF = "OFF"
    ON = "ON"


class Reminder:
    status: ReminderStatus
    time_reminder: float

    def __init__(self, status: ReminderStatus, time_reminder: float) -> None:
        self.status = status
        self.time_reminder = time_reminder

    @staticmethod
    def from_dict(obj: Any) -> 'Reminder':
        assert isinstance(obj, dict)
        status = ReminderStatus(obj.get("status"))
        time_reminder = from_float(obj.get("time_reminder"))
        return Reminder(status, time_reminder)

    def to_dict(self) -> dict:
        result: dict = {}
        result["status"] = to_enum(ReminderStatus, self.status)
        result["time_reminder"] = to_float(self.time_reminder)
        return result


class RemovedClientsDatum:
    appear: Optional[AppointmentClientAppear]
    client: AdditionalClientElement
    created: Optional[datetime]
    payment: Optional[AppointmentClientPayment]
    payment_invoice: Optional[str]
    source: Optional[str]
    status: Optional[AppointmentStatus]

    def __init__(self, appear: Optional[AppointmentClientAppear], client: AdditionalClientElement, created: Optional[datetime], payment: Optional[AppointmentClientPayment], payment_invoice: Optional[str], source: Optional[str], status: Optional[AppointmentStatus]) -> None:
        self.appear = appear
        self.client = client
        self.created = created
        self.payment = payment
        self.payment_invoice = payment_invoice
        self.source = source
        self.status = status

    @staticmethod
    def from_dict(obj: Any) -> 'RemovedClientsDatum':
        assert isinstance(obj, dict)
        appear = from_union([AppointmentClientAppear, from_none], obj.get("appear"))
        client = AdditionalClientElement.from_dict(obj.get("client"))
        created = from_union([from_datetime, from_none], obj.get("created"))
        payment = from_union([AppointmentClientPayment, from_none], obj.get("payment"))
        payment_invoice = from_union([from_str, from_none], obj.get("payment_invoice"))
        source = from_union([from_str, from_none], obj.get("source"))
        status = from_union([AppointmentStatus, from_none], obj.get("status"))
        return RemovedClientsDatum(appear, client, created, payment, payment_invoice, source, status)

    def to_dict(self) -> dict:
        result: dict = {}
        result["appear"] = from_union([lambda x: to_enum(AppointmentClientAppear, x), from_none], self.appear)
        result["client"] = to_class(AdditionalClientElement, self.client)
        result["created"] = from_union([lambda x: x.isoformat(), from_none], self.created)
        result["payment"] = from_union([lambda x: to_enum(AppointmentClientPayment, x), from_none], self.payment)
        result["payment_invoice"] = from_union([from_str, from_none], self.payment_invoice)
        result["source"] = from_union([from_str, from_none], self.source)
        result["status"] = from_union([lambda x: to_enum(AppointmentStatus, x), from_none], self.status)
        return result


class AppointmentResource:
    extra_id: Optional[str]
    id: str
    middle_name: Optional[str]
    name: str
    surname: str

    def __init__(self, extra_id: Optional[str], id: str, middle_name: Optional[str], name: str, surname: str) -> None:
        self.extra_id = extra_id
        self.id = id
        self.middle_name = middle_name
        self.name = name
        self.surname = surname

    @staticmethod
    def from_dict(obj: Any) -> 'AppointmentResource':
        assert isinstance(obj, dict)
        extra_id = from_union([from_str, from_none], obj.get("extraID"))
        id = from_str(obj.get("id"))
        middle_name = from_union([from_str, from_none], obj.get("middleName"))
        name = from_str(obj.get("name"))
        surname = from_str(obj.get("surname"))
        return AppointmentResource(extra_id, id, middle_name, name, surname)

    def to_dict(self) -> dict:
        result: dict = {}
        result["extraID"] = from_union([from_str, from_none], self.extra_id)
        result["id"] = from_str(self.id)
        result["middleName"] = from_union([from_str, from_none], self.middle_name)
        result["name"] = from_str(self.name)
        result["surname"] = from_str(self.surname)
        return result


class BusinessClass:
    comment: Optional[str]
    rate: Optional[float]

    def __init__(self, comment: Optional[str], rate: Optional[float]) -> None:
        self.comment = comment
        self.rate = rate

    @staticmethod
    def from_dict(obj: Any) -> 'BusinessClass':
        assert isinstance(obj, dict)
        comment = from_union([from_str, from_none], obj.get("comment"))
        rate = from_union([from_float, from_none], obj.get("rate"))
        return BusinessClass(comment, rate)

    def to_dict(self) -> dict:
        result: dict = {}
        result["comment"] = from_union([from_str, from_none], self.comment)
        result["rate"] = from_union([to_float, from_none], self.rate)
        return result


class Review:
    business: BusinessClass
    taxonomy: BusinessClass
    worker: BusinessClass

    def __init__(self, business: BusinessClass, taxonomy: BusinessClass, worker: BusinessClass) -> None:
        self.business = business
        self.taxonomy = taxonomy
        self.worker = worker

    @staticmethod
    def from_dict(obj: Any) -> 'Review':
        assert isinstance(obj, dict)
        business = BusinessClass.from_dict(obj.get("business"))
        taxonomy = BusinessClass.from_dict(obj.get("taxonomy"))
        worker = BusinessClass.from_dict(obj.get("worker"))
        return Review(business, taxonomy, worker)

    def to_dict(self) -> dict:
        result: dict = {}
        result["business"] = to_class(BusinessClass, self.business)
        result["taxonomy"] = to_class(BusinessClass, self.taxonomy)
        result["worker"] = to_class(BusinessClass, self.worker)
        return result


class Room:
    id: str

    def __init__(self, id: str) -> None:
        self.id = id

    @staticmethod
    def from_dict(obj: Any) -> 'Room':
        assert isinstance(obj, dict)
        id = from_str(obj.get("id"))
        return Room(id)

    def to_dict(self) -> dict:
        result: dict = {}
        result["id"] = from_str(self.id)
        return result


class AppointmentShowcase:
    business_id: Optional[str]

    def __init__(self, business_id: Optional[str]) -> None:
        self.business_id = business_id

    @staticmethod
    def from_dict(obj: Any) -> 'AppointmentShowcase':
        assert isinstance(obj, dict)
        business_id = from_union([from_str, from_none], obj.get("businessID"))
        return AppointmentShowcase(business_id)

    def to_dict(self) -> dict:
        result: dict = {}
        result["businessID"] = from_union([from_str, from_none], self.business_id)
        return result


class AppointmentSchema:
    additional_info: Optional[Dict[str, Any]]
    additional_client_appears: List[AdditionalClientAppear]
    additional_client_payments: List[AdditionalClientPayment]
    additional_clients: List[AdditionalClientElement]
    additional_client_sources: List[AdditionalClientSource]
    additional_client_statuses: List[AdditionalClientStatus]
    additional_client_utms: List[AdditionalClientUtm]
    additional_fields: List[AdditionalField]
    additional_products: List[AdditionalProduct]
    additional_taxonomies: List[AppointmentTaxonomy]
    address: Optional[str]
    adjacent_id: Optional[str]
    appointment: AppointmentInfo
    auto_phone_call_status: Optional[str]
    banned_clients: List[str]
    business: AppointmentBusiness
    cabinet: Cabinet
    capacity: Optional[float]
    change_reason: str
    client: AppointmentClient
    client_appear: AppointmentClientAppear
    client_med_code: Optional[str]
    client_payment: AppointmentClientPayment
    client_payment_invoice: Optional[str]
    client_comment: str
    client_visitors: Optional[List[AdditionalClientElement]]
    color: Optional[str]
    destination_keyword: Optional[str]
    destination_link: Optional[str]
    extra_fields: List[ExtraField]
    gt: Optional[bool]
    gt_time_frame: Optional[str]
    location: Optional[Location]
    master_importance: Optional[bool]
    min_clients: Optional[float]
    move_counter: float
    moved_by_robot: bool
    moved_from_fired: Optional[bool]
    network_id: Optional[str]
    notes: str
    order: Order
    preferred_resource: Optional[bool]
    promo_code: Optional[str]
    referer_link: Optional[str]
    referrer: Optional[str]
    reminder: Reminder
    removed_clients_data: List[RemovedClientsDatum]
    resource: AppointmentResource
    review: Optional[Review]
    room: Optional[Room]
    showcase: AppointmentShowcase
    social_token: Optional[str]
    source: str
    taxonomy: AppointmentTaxonomy
    utm: Optional[Dict[str, Any]]
    with_co_sale: Optional[bool]

    def __init__(self, additional_info: Optional[Dict[str, Any]], additional_client_appears: List[AdditionalClientAppear], additional_client_payments: List[AdditionalClientPayment], additional_clients: List[AdditionalClientElement], additional_client_sources: List[AdditionalClientSource], additional_client_statuses: List[AdditionalClientStatus], additional_client_utms: List[AdditionalClientUtm], additional_fields: List[AdditionalField], additional_products: List[AdditionalProduct], additional_taxonomies: List[AppointmentTaxonomy], address: Optional[str], adjacent_id: Optional[str], appointment: AppointmentInfo, auto_phone_call_status: Optional[str], banned_clients: List[str], business: AppointmentBusiness, cabinet: Cabinet, capacity: Optional[float], change_reason: str, client: AppointmentClient, client_appear: AppointmentClientAppear, client_med_code: Optional[str], client_payment: AppointmentClientPayment, client_payment_invoice: Optional[str], client_comment: str, client_visitors: Optional[List[AdditionalClientElement]], color: Optional[str], destination_keyword: Optional[str], destination_link: Optional[str], extra_fields: List[ExtraField], gt: Optional[bool], gt_time_frame: Optional[str], location: Optional[Location], master_importance: Optional[bool], min_clients: Optional[float], move_counter: float, moved_by_robot: bool, moved_from_fired: Optional[bool], network_id: Optional[str], notes: str, order: Order, preferred_resource: Optional[bool], promo_code: Optional[str], referer_link: Optional[str], referrer: Optional[str], reminder: Reminder, removed_clients_data: List[RemovedClientsDatum], resource: AppointmentResource, review: Optional[Review], room: Optional[Room], showcase: AppointmentShowcase, social_token: Optional[str], source: str, taxonomy: AppointmentTaxonomy, utm: Optional[Dict[str, Any]], with_co_sale: Optional[bool]) -> None:
        self.additional_info = additional_info
        self.additional_client_appears = additional_client_appears
        self.additional_client_payments = additional_client_payments
        self.additional_clients = additional_clients
        self.additional_client_sources = additional_client_sources
        self.additional_client_statuses = additional_client_statuses
        self.additional_client_utms = additional_client_utms
        self.additional_fields = additional_fields
        self.additional_products = additional_products
        self.additional_taxonomies = additional_taxonomies
        self.address = address
        self.adjacent_id = adjacent_id
        self.appointment = appointment
        self.auto_phone_call_status = auto_phone_call_status
        self.banned_clients = banned_clients
        self.business = business
        self.cabinet = cabinet
        self.capacity = capacity
        self.change_reason = change_reason
        self.client = client
        self.client_appear = client_appear
        self.client_med_code = client_med_code
        self.client_payment = client_payment
        self.client_payment_invoice = client_payment_invoice
        self.client_comment = client_comment
        self.client_visitors = client_visitors
        self.color = color
        self.destination_keyword = destination_keyword
        self.destination_link = destination_link
        self.extra_fields = extra_fields
        self.gt = gt
        self.gt_time_frame = gt_time_frame
        self.location = location
        self.master_importance = master_importance
        self.min_clients = min_clients
        self.move_counter = move_counter
        self.moved_by_robot = moved_by_robot
        self.moved_from_fired = moved_from_fired
        self.network_id = network_id
        self.notes = notes
        self.order = order
        self.preferred_resource = preferred_resource
        self.promo_code = promo_code
        self.referer_link = referer_link
        self.referrer = referrer
        self.reminder = reminder
        self.removed_clients_data = removed_clients_data
        self.resource = resource
        self.review = review
        self.room = room
        self.showcase = showcase
        self.social_token = social_token
        self.source = source
        self.taxonomy = taxonomy
        self.utm = utm
        self.with_co_sale = with_co_sale

    @staticmethod
    def from_dict(obj: Any) -> 'AppointmentSchema':
        assert isinstance(obj, dict)
        additional_info = from_union([lambda x: from_dict(lambda x: x, x), from_none], obj.get("additional_info"))
        additional_client_appears = from_list(AdditionalClientAppear.from_dict, obj.get("additionalClientAppears"))
        additional_client_payments = from_list(AdditionalClientPayment.from_dict, obj.get("additionalClientPayments"))
        additional_clients = from_list(AdditionalClientElement.from_dict, obj.get("additionalClients"))
        additional_client_sources = from_list(AdditionalClientSource.from_dict, obj.get("additionalClientSources"))
        additional_client_statuses = from_list(AdditionalClientStatus.from_dict, obj.get("additionalClientStatuses"))
        additional_client_utms = from_list(AdditionalClientUtm.from_dict, obj.get("additionalClientUtms"))
        additional_fields = from_list(AdditionalField.from_dict, obj.get("additionalFields"))
        additional_products = from_list(AdditionalProduct.from_dict, obj.get("additionalProducts"))
        additional_taxonomies = from_list(AppointmentTaxonomy.from_dict, obj.get("additionalTaxonomies"))
        address = from_union([from_str, from_none], obj.get("address"))
        adjacent_id = from_union([from_str, from_none], obj.get("adjacentId"))
        appointment = AppointmentInfo.from_dict(obj.get("appointment"))
        auto_phone_call_status = from_union([from_str, from_none], obj.get("autoPhoneCallStatus"))
        banned_clients = from_list(from_str, obj.get("bannedClients"))
        business = AppointmentBusiness.from_dict(obj.get("business"))
        cabinet = Cabinet.from_dict(obj.get("cabinet"))
        capacity = from_union([from_float, from_none], obj.get("capacity"))
        change_reason = from_str(obj.get("changeReason"))
        client = AppointmentClient.from_dict(obj.get("client"))
        client_appear = AppointmentClientAppear(obj.get("client_appear"))
        client_med_code = from_union([from_str, from_none], obj.get("client_med_code"))
        client_payment = AppointmentClientPayment(obj.get("client_payment"))
        client_payment_invoice = from_union([from_str, from_none], obj.get("client_payment_invoice"))
        client_comment = from_str(obj.get("clientComment"))
        client_visitors = from_union([lambda x: from_list(AdditionalClientElement.from_dict, x), from_none], obj.get("clientVisitors"))
        color = from_union([from_str, from_none], obj.get("color"))
        destination_keyword = from_union([from_str, from_none], obj.get("destinationKeyword"))
        destination_link = from_union([from_str, from_none], obj.get("destinationLink"))
        extra_fields = from_list(ExtraField.from_dict, obj.get("extraFields"))
        gt = from_union([from_bool, from_none], obj.get("gt"))
        gt_time_frame = from_union([from_str, from_none], obj.get("gtTimeFrame"))
        location = from_union([Location.from_dict, from_none], obj.get("location"))
        master_importance = from_union([from_bool, from_none], obj.get("masterImportance"))
        min_clients = from_union([from_float, from_none], obj.get("minClients"))
        move_counter = from_float(obj.get("moveCounter"))
        moved_by_robot = from_bool(obj.get("movedByRobot"))
        moved_from_fired = from_union([from_bool, from_none], obj.get("movedFromFired"))
        network_id = from_union([from_str, from_none], obj.get("networkID"))
        notes = from_str(obj.get("notes"))
        order = Order.from_dict(obj.get("order"))
        preferred_resource = from_union([from_bool, from_none], obj.get("preferredResource"))
        promo_code = from_union([from_str, from_none], obj.get("promoCode"))
        referer_link = from_union([from_str, from_none], obj.get("refererLink"))
        referrer = from_union([from_str, from_none], obj.get("referrer"))
        reminder = Reminder.from_dict(obj.get("reminder"))
        removed_clients_data = from_list(RemovedClientsDatum.from_dict, obj.get("removedClientsData"))
        resource = AppointmentResource.from_dict(obj.get("resource"))
        review = from_union([Review.from_dict, from_none], obj.get("review"))
        room = from_union([Room.from_dict, from_none], obj.get("room"))
        showcase = AppointmentShowcase.from_dict(obj.get("showcase"))
        social_token = from_union([from_str, from_none], obj.get("socialToken"))
        source = from_str(obj.get("source"))
        taxonomy = AppointmentTaxonomy.from_dict(obj.get("taxonomy"))
        utm = from_union([lambda x: from_dict(lambda x: x, x), from_none], obj.get("utm"))
        with_co_sale = from_union([from_bool, from_none], obj.get("withCoSale"))
        return AppointmentSchema(additional_info, additional_client_appears, additional_client_payments, additional_clients, additional_client_sources, additional_client_statuses, additional_client_utms, additional_fields, additional_products, additional_taxonomies, address, adjacent_id, appointment, auto_phone_call_status, banned_clients, business, cabinet, capacity, change_reason, client, client_appear, client_med_code, client_payment, client_payment_invoice, client_comment, client_visitors, color, destination_keyword, destination_link, extra_fields, gt, gt_time_frame, location, master_importance, min_clients, move_counter, moved_by_robot, moved_from_fired, network_id, notes, order, preferred_resource, promo_code, referer_link, referrer, reminder, removed_clients_data, resource, review, room, showcase, social_token, source, taxonomy, utm, with_co_sale)

    def to_dict(self) -> dict:
        result: dict = {}
        result["additional_info"] = from_union([lambda x: from_dict(lambda x: x, x), from_none], self.additional_info)
        result["additionalClientAppears"] = from_list(lambda x: to_class(AdditionalClientAppear, x), self.additional_client_appears)
        result["additionalClientPayments"] = from_list(lambda x: to_class(AdditionalClientPayment, x), self.additional_client_payments)
        result["additionalClients"] = from_list(lambda x: to_class(AdditionalClientElement, x), self.additional_clients)
        result["additionalClientSources"] = from_list(lambda x: to_class(AdditionalClientSource, x), self.additional_client_sources)
        result["additionalClientStatuses"] = from_list(lambda x: to_class(AdditionalClientStatus, x), self.additional_client_statuses)
        result["additionalClientUtms"] = from_list(lambda x: to_class(AdditionalClientUtm, x), self.additional_client_utms)
        result["additionalFields"] = from_list(lambda x: to_class(AdditionalField, x), self.additional_fields)
        result["additionalProducts"] = from_list(lambda x: to_class(AdditionalProduct, x), self.additional_products)
        result["additionalTaxonomies"] = from_list(lambda x: to_class(AppointmentTaxonomy, x), self.additional_taxonomies)
        result["address"] = from_union([from_str, from_none], self.address)
        result["adjacentId"] = from_union([from_str, from_none], self.adjacent_id)
        result["appointment"] = to_class(AppointmentInfo, self.appointment)
        result["autoPhoneCallStatus"] = from_union([from_str, from_none], self.auto_phone_call_status)
        result["bannedClients"] = from_list(from_str, self.banned_clients)
        result["business"] = to_class(AppointmentBusiness, self.business)
        result["cabinet"] = to_class(Cabinet, self.cabinet)
        result["capacity"] = from_union([to_float, from_none], self.capacity)
        result["changeReason"] = from_str(self.change_reason)
        result["client"] = to_class(AppointmentClient, self.client)
        result["client_appear"] = to_enum(AppointmentClientAppear, self.client_appear)
        result["client_med_code"] = from_union([from_str, from_none], self.client_med_code)
        result["client_payment"] = to_enum(AppointmentClientPayment, self.client_payment)
        result["client_payment_invoice"] = from_union([from_str, from_none], self.client_payment_invoice)
        result["clientComment"] = from_str(self.client_comment)
        result["clientVisitors"] = from_union([lambda x: from_list(lambda x: to_class(AdditionalClientElement, x), x), from_none], self.client_visitors)
        result["color"] = from_union([from_str, from_none], self.color)
        result["destinationKeyword"] = from_union([from_str, from_none], self.destination_keyword)
        result["destinationLink"] = from_union([from_str, from_none], self.destination_link)
        result["extraFields"] = from_list(lambda x: to_class(ExtraField, x), self.extra_fields)
        result["gt"] = from_union([from_bool, from_none], self.gt)
        result["gtTimeFrame"] = from_union([from_str, from_none], self.gt_time_frame)
        result["location"] = from_union([lambda x: to_class(Location, x), from_none], self.location)
        result["masterImportance"] = from_union([from_bool, from_none], self.master_importance)
        result["minClients"] = from_union([to_float, from_none], self.min_clients)
        result["moveCounter"] = to_float(self.move_counter)
        result["movedByRobot"] = from_bool(self.moved_by_robot)
        result["movedFromFired"] = from_union([from_bool, from_none], self.moved_from_fired)
        result["networkID"] = from_union([from_str, from_none], self.network_id)
        result["notes"] = from_str(self.notes)
        result["order"] = to_class(Order, self.order)
        result["preferredResource"] = from_union([from_bool, from_none], self.preferred_resource)
        result["promoCode"] = from_union([from_str, from_none], self.promo_code)
        result["refererLink"] = from_union([from_str, from_none], self.referer_link)
        result["referrer"] = from_union([from_str, from_none], self.referrer)
        result["reminder"] = to_class(Reminder, self.reminder)
        result["removedClientsData"] = from_list(lambda x: to_class(RemovedClientsDatum, x), self.removed_clients_data)
        result["resource"] = to_class(AppointmentResource, self.resource)
        result["review"] = from_union([lambda x: to_class(Review, x), from_none], self.review)
        result["room"] = from_union([lambda x: to_class(Room, x), from_none], self.room)
        result["showcase"] = to_class(AppointmentShowcase, self.showcase)
        result["socialToken"] = from_union([from_str, from_none], self.social_token)
        result["source"] = from_str(self.source)
        result["taxonomy"] = to_class(AppointmentTaxonomy, self.taxonomy)
        result["utm"] = from_union([lambda x: from_dict(lambda x: x, x), from_none], self.utm)
        result["withCoSale"] = from_union([from_bool, from_none], self.with_co_sale)
        return result


class AppointmentClientConfirmAppointmentResponse:
    """значение числового типа для идентификации запроса на сервере"""
    id: float
    """версия протокола (2.0)"""
    jsonrpc: str
    """данные, передаваемые в ответ"""
    result: Union[List[Any], bool, AppointmentSchema, float, int, None, str]
    """объект, содержащий информацию об ошибке"""
    error: Optional[AppointmentClientConfirmAppointmentResponseError]

    def __init__(self, id: float, jsonrpc: str, result: Union[List[Any], bool, AppointmentSchema, float, int, None, str], error: Optional[AppointmentClientConfirmAppointmentResponseError]) -> None:
        self.id = id
        self.jsonrpc = jsonrpc
        self.result = result
        self.error = error

    @staticmethod
    def from_dict(obj: Any) -> 'AppointmentClientConfirmAppointmentResponse':
        assert isinstance(obj, dict)
        id = from_float(obj.get("id"))
        jsonrpc = from_str(obj.get("jsonrpc"))
        result = from_union([from_none, from_float, from_int, from_bool, from_str, lambda x: from_list(lambda x: x, x), AppointmentSchema.from_dict], obj.get("result"))
        error = from_union([AppointmentClientConfirmAppointmentResponseError.from_dict, from_none], obj.get("error"))
        return AppointmentClientConfirmAppointmentResponse(id, jsonrpc, result, error)

    def to_dict(self) -> dict:
        result: dict = {}
        result["id"] = to_float(self.id)
        result["jsonrpc"] = from_str(self.jsonrpc)
        result["result"] = from_union([from_none, to_float, from_int, from_bool, from_str, lambda x: from_list(lambda x: x, x), lambda x: to_class(AppointmentSchema, x)], self.result)
        result["error"] = from_union([lambda x: to_class(AppointmentClientConfirmAppointmentResponseError, x), from_none], self.error)
        return result


class ClientConfirmAppointment:
    request: AppointmentClientConfirmAppointmentRequest
    response: AppointmentClientConfirmAppointmentResponse

    def __init__(self, request: AppointmentClientConfirmAppointmentRequest, response: AppointmentClientConfirmAppointmentResponse) -> None:
        self.request = request
        self.response = response

    @staticmethod
    def from_dict(obj: Any) -> 'ClientConfirmAppointment':
        assert isinstance(obj, dict)
        request = AppointmentClientConfirmAppointmentRequest.from_dict(obj.get("request"))
        response = AppointmentClientConfirmAppointmentResponse.from_dict(obj.get("response"))
        return ClientConfirmAppointment(request, response)

    def to_dict(self) -> dict:
        result: dict = {}
        result["request"] = to_class(AppointmentClientConfirmAppointmentRequest, self.request)
        result["response"] = to_class(AppointmentClientConfirmAppointmentResponse, self.response)
        return result


class StickyAppointment:
    id: str

    def __init__(self, id: str) -> None:
        self.id = id

    @staticmethod
    def from_dict(obj: Any) -> 'StickyAppointment':
        assert isinstance(obj, dict)
        id = from_str(obj.get("id"))
        return StickyAppointment(id)

    def to_dict(self) -> dict:
        result: dict = {}
        result["id"] = from_str(self.id)
        return result


class PurpleBusiness:
    id: str

    def __init__(self, id: str) -> None:
        self.id = id

    @staticmethod
    def from_dict(obj: Any) -> 'PurpleBusiness':
        assert isinstance(obj, dict)
        id = from_str(obj.get("id"))
        return PurpleBusiness(id)

    def to_dict(self) -> dict:
        result: dict = {}
        result["id"] = from_str(self.id)
        return result


class RemoveEmptyAppointment:
    appointment: StickyAppointment
    business: PurpleBusiness

    def __init__(self, appointment: StickyAppointment, business: PurpleBusiness) -> None:
        self.appointment = appointment
        self.business = business

    @staticmethod
    def from_dict(obj: Any) -> 'RemoveEmptyAppointment':
        assert isinstance(obj, dict)
        appointment = StickyAppointment.from_dict(obj.get("appointment"))
        business = PurpleBusiness.from_dict(obj.get("business"))
        return RemoveEmptyAppointment(appointment, business)

    def to_dict(self) -> dict:
        result: dict = {}
        result["appointment"] = to_class(StickyAppointment, self.appointment)
        result["business"] = to_class(PurpleBusiness, self.business)
        return result


class AppointmentClientRemoveEmptyAppointmentRequest:
    """авторизационные параметры"""
    cred: Optional[Cred]
    """значение числового типа для идентификации запроса на сервере"""
    id: Union[float, str]
    """версия протокола - 2.0"""
    jsonrpc: str
    """название jsonrpc метода"""
    method: str
    """параметры запроса"""
    params: RemoveEmptyAppointment

    def __init__(self, cred: Optional[Cred], id: Union[float, str], jsonrpc: str, method: str, params: RemoveEmptyAppointment) -> None:
        self.cred = cred
        self.id = id
        self.jsonrpc = jsonrpc
        self.method = method
        self.params = params

    @staticmethod
    def from_dict(obj: Any) -> 'AppointmentClientRemoveEmptyAppointmentRequest':
        assert isinstance(obj, dict)
        cred = from_union([Cred.from_dict, from_none], obj.get("cred"))
        id = from_union([from_float, from_str], obj.get("id"))
        jsonrpc = from_str(obj.get("jsonrpc"))
        method = from_str(obj.get("method"))
        params = RemoveEmptyAppointment.from_dict(obj.get("params"))
        return AppointmentClientRemoveEmptyAppointmentRequest(cred, id, jsonrpc, method, params)

    def to_dict(self) -> dict:
        result: dict = {}
        result["cred"] = from_union([lambda x: to_class(Cred, x), from_none], self.cred)
        result["id"] = from_union([to_float, from_str], self.id)
        result["jsonrpc"] = from_str(self.jsonrpc)
        result["method"] = from_str(self.method)
        result["params"] = to_class(RemoveEmptyAppointment, self.params)
        return result


class AppointmentClientRemoveEmptyAppointmentResponseError:
    """объект, содержащий информацию об ошибке
    
    Код ошибки авторизации
    """
    """код ошибки"""
    code: float
    """дополнительные данные об ошибке"""
    data: Optional[str]
    """текстовая информация об ошибке"""
    message: str

    def __init__(self, code: float, data: Optional[str], message: str) -> None:
        self.code = code
        self.data = data
        self.message = message

    @staticmethod
    def from_dict(obj: Any) -> 'AppointmentClientRemoveEmptyAppointmentResponseError':
        assert isinstance(obj, dict)
        code = from_float(obj.get("code"))
        data = from_union([from_str, from_none], obj.get("data"))
        message = from_str(obj.get("message"))
        return AppointmentClientRemoveEmptyAppointmentResponseError(code, data, message)

    def to_dict(self) -> dict:
        result: dict = {}
        result["code"] = to_float(self.code)
        result["data"] = from_union([from_str, from_none], self.data)
        result["message"] = from_str(self.message)
        return result


class AppointmentClientRemoveEmptyAppointmentResponse:
    """значение числового типа для идентификации запроса на сервере"""
    id: float
    """версия протокола (2.0)"""
    jsonrpc: str
    """данные, передаваемые в ответ"""
    result: Optional[bool]
    """объект, содержащий информацию об ошибке"""
    error: Optional[AppointmentClientRemoveEmptyAppointmentResponseError]

    def __init__(self, id: float, jsonrpc: str, result: Optional[bool], error: Optional[AppointmentClientRemoveEmptyAppointmentResponseError]) -> None:
        self.id = id
        self.jsonrpc = jsonrpc
        self.result = result
        self.error = error

    @staticmethod
    def from_dict(obj: Any) -> 'AppointmentClientRemoveEmptyAppointmentResponse':
        assert isinstance(obj, dict)
        id = from_float(obj.get("id"))
        jsonrpc = from_str(obj.get("jsonrpc"))
        result = from_union([from_bool, from_none], obj.get("result"))
        error = from_union([AppointmentClientRemoveEmptyAppointmentResponseError.from_dict, from_none], obj.get("error"))
        return AppointmentClientRemoveEmptyAppointmentResponse(id, jsonrpc, result, error)

    def to_dict(self) -> dict:
        result: dict = {}
        result["id"] = to_float(self.id)
        result["jsonrpc"] = from_str(self.jsonrpc)
        result["result"] = from_union([from_bool, from_none], self.result)
        result["error"] = from_union([lambda x: to_class(AppointmentClientRemoveEmptyAppointmentResponseError, x), from_none], self.error)
        return result


class ClientRemoveEmptyAppointment:
    request: AppointmentClientRemoveEmptyAppointmentRequest
    response: AppointmentClientRemoveEmptyAppointmentResponse

    def __init__(self, request: AppointmentClientRemoveEmptyAppointmentRequest, response: AppointmentClientRemoveEmptyAppointmentResponse) -> None:
        self.request = request
        self.response = response

    @staticmethod
    def from_dict(obj: Any) -> 'ClientRemoveEmptyAppointment':
        assert isinstance(obj, dict)
        request = AppointmentClientRemoveEmptyAppointmentRequest.from_dict(obj.get("request"))
        response = AppointmentClientRemoveEmptyAppointmentResponse.from_dict(obj.get("response"))
        return ClientRemoveEmptyAppointment(request, response)

    def to_dict(self) -> dict:
        result: dict = {}
        result["request"] = to_class(AppointmentClientRemoveEmptyAppointmentRequest, self.request)
        result["response"] = to_class(AppointmentClientRemoveEmptyAppointmentResponse, self.response)
        return result


class FluffyBusiness:
    id: Union[float, None, str]

    def __init__(self, id: Union[float, None, str]) -> None:
        self.id = id

    @staticmethod
    def from_dict(obj: Any) -> 'FluffyBusiness':
        assert isinstance(obj, dict)
        id = from_union([from_float, from_str, from_none], obj.get("id"))
        return FluffyBusiness(id)

    def to_dict(self) -> dict:
        result: dict = {}
        result["id"] = from_union([to_float, from_str, from_none], self.id)
        return result


class Dir(Enum):
    ASC = "asc"
    DESC = "desc"


class SortField(Enum):
    CREATED = "created"
    START = "start"


class Sort:
    dir: Dir
    field: SortField

    def __init__(self, dir: Dir, field: SortField) -> None:
        self.dir = dir
        self.field = field

    @staticmethod
    def from_dict(obj: Any) -> 'Sort':
        assert isinstance(obj, dict)
        dir = Dir(obj.get("dir"))
        field = SortField(obj.get("field"))
        return Sort(dir, field)

    def to_dict(self) -> dict:
        result: dict = {}
        result["dir"] = to_enum(Dir, self.dir)
        result["field"] = to_enum(SortField, self.field)
        return result


class ExtraFilters:
    sort: Optional[List[Sort]]

    def __init__(self, sort: Optional[List[Sort]]) -> None:
        self.sort = sort

    @staticmethod
    def from_dict(obj: Any) -> 'ExtraFilters':
        assert isinstance(obj, dict)
        sort = from_union([lambda x: from_list(Sort.from_dict, x), from_none], obj.get("sort"))
        return ExtraFilters(sort)

    def to_dict(self) -> dict:
        result: dict = {}
        result["sort"] = from_union([lambda x: from_list(lambda x: to_class(Sort, x), x), from_none], self.sort)
        return result


class FilterCreated:
    end: datetime
    start: datetime

    def __init__(self, end: datetime, start: datetime) -> None:
        self.end = end
        self.start = start

    @staticmethod
    def from_dict(obj: Any) -> 'FilterCreated':
        assert isinstance(obj, dict)
        end = from_datetime(obj.get("end"))
        start = from_datetime(obj.get("start"))
        return FilterCreated(end, start)

    def to_dict(self) -> dict:
        result: dict = {}
        result["end"] = self.end.isoformat()
        result["start"] = self.start.isoformat()
        return result


class Filter:
    created: Optional[FilterCreated]
    end: Optional[datetime]
    services: Optional[List[str]]
    skip_updated: Optional[bool]
    start: Optional[datetime]
    workers: Optional[List[str]]

    def __init__(self, created: Optional[FilterCreated], end: Optional[datetime], services: Optional[List[str]], skip_updated: Optional[bool], start: Optional[datetime], workers: Optional[List[str]]) -> None:
        self.created = created
        self.end = end
        self.services = services
        self.skip_updated = skip_updated
        self.start = start
        self.workers = workers

    @staticmethod
    def from_dict(obj: Any) -> 'Filter':
        assert isinstance(obj, dict)
        created = from_union([FilterCreated.from_dict, from_none], obj.get("created"))
        end = from_union([from_datetime, from_none], obj.get("end"))
        services = from_union([lambda x: from_list(from_str, x), from_none], obj.get("services"))
        skip_updated = from_union([from_bool, from_none], obj.get("skipUpdated"))
        start = from_union([from_datetime, from_none], obj.get("start"))
        workers = from_union([lambda x: from_list(from_str, x), from_none], obj.get("workers"))
        return Filter(created, end, services, skip_updated, start, workers)

    def to_dict(self) -> dict:
        result: dict = {}
        result["created"] = from_union([lambda x: to_class(FilterCreated, x), from_none], self.created)
        result["end"] = from_union([lambda x: x.isoformat(), from_none], self.end)
        result["services"] = from_union([lambda x: from_list(from_str, x), from_none], self.services)
        result["skipUpdated"] = from_union([from_bool, from_none], self.skip_updated)
        result["start"] = from_union([lambda x: x.isoformat(), from_none], self.start)
        result["workers"] = from_union([lambda x: from_list(from_str, x), from_none], self.workers)
        return result


class ParamsNetwork:
    id: Union[float, None, str]

    def __init__(self, id: Union[float, None, str]) -> None:
        self.id = id

    @staticmethod
    def from_dict(obj: Any) -> 'ParamsNetwork':
        assert isinstance(obj, dict)
        id = from_union([from_float, from_str, from_none], obj.get("id"))
        return ParamsNetwork(id)

    def to_dict(self) -> dict:
        result: dict = {}
        result["id"] = from_union([to_float, from_str, from_none], self.id)
        return result


class AppointmentGetAppointmentByFilterRequestParams:
    business: Optional[FluffyBusiness]
    extra_filters: Optional[ExtraFilters]
    filter: Optional[Filter]
    network: Optional[ParamsNetwork]
    page: float
    page_size: float
    skip_business_cancelled: Optional[bool]

    def __init__(self, business: Optional[FluffyBusiness], extra_filters: Optional[ExtraFilters], filter: Optional[Filter], network: Optional[ParamsNetwork], page: float, page_size: float, skip_business_cancelled: Optional[bool]) -> None:
        self.business = business
        self.extra_filters = extra_filters
        self.filter = filter
        self.network = network
        self.page = page
        self.page_size = page_size
        self.skip_business_cancelled = skip_business_cancelled

    @staticmethod
    def from_dict(obj: Any) -> 'AppointmentGetAppointmentByFilterRequestParams':
        assert isinstance(obj, dict)
        business = from_union([FluffyBusiness.from_dict, from_none], obj.get("business"))
        extra_filters = from_union([ExtraFilters.from_dict, from_none], obj.get("extraFilters"))
        filter = from_union([Filter.from_dict, from_none], obj.get("filter"))
        network = from_union([ParamsNetwork.from_dict, from_none], obj.get("network"))
        page = from_float(obj.get("page"))
        page_size = from_float(obj.get("pageSize"))
        skip_business_cancelled = from_union([from_bool, from_none], obj.get("skipBusinessCancelled"))
        return AppointmentGetAppointmentByFilterRequestParams(business, extra_filters, filter, network, page, page_size, skip_business_cancelled)

    def to_dict(self) -> dict:
        result: dict = {}
        result["business"] = from_union([lambda x: to_class(FluffyBusiness, x), from_none], self.business)
        result["extraFilters"] = from_union([lambda x: to_class(ExtraFilters, x), from_none], self.extra_filters)
        result["filter"] = from_union([lambda x: to_class(Filter, x), from_none], self.filter)
        result["network"] = from_union([lambda x: to_class(ParamsNetwork, x), from_none], self.network)
        result["page"] = to_float(self.page)
        result["pageSize"] = to_float(self.page_size)
        result["skipBusinessCancelled"] = from_union([from_bool, from_none], self.skip_business_cancelled)
        return result


class AppointmentGetAppointmentByFilterRequest:
    """авторизационные параметры"""
    cred: Optional[Cred]
    """значение числового типа для идентификации запроса на сервере"""
    id: Union[float, str]
    """версия протокола - 2.0"""
    jsonrpc: str
    """название jsonrpc метода"""
    method: str
    """параметры запроса"""
    params: AppointmentGetAppointmentByFilterRequestParams

    def __init__(self, cred: Optional[Cred], id: Union[float, str], jsonrpc: str, method: str, params: AppointmentGetAppointmentByFilterRequestParams) -> None:
        self.cred = cred
        self.id = id
        self.jsonrpc = jsonrpc
        self.method = method
        self.params = params

    @staticmethod
    def from_dict(obj: Any) -> 'AppointmentGetAppointmentByFilterRequest':
        assert isinstance(obj, dict)
        cred = from_union([Cred.from_dict, from_none], obj.get("cred"))
        id = from_union([from_float, from_str], obj.get("id"))
        jsonrpc = from_str(obj.get("jsonrpc"))
        method = from_str(obj.get("method"))
        params = AppointmentGetAppointmentByFilterRequestParams.from_dict(obj.get("params"))
        return AppointmentGetAppointmentByFilterRequest(cred, id, jsonrpc, method, params)

    def to_dict(self) -> dict:
        result: dict = {}
        result["cred"] = from_union([lambda x: to_class(Cred, x), from_none], self.cred)
        result["id"] = from_union([to_float, from_str], self.id)
        result["jsonrpc"] = from_str(self.jsonrpc)
        result["method"] = from_str(self.method)
        result["params"] = to_class(AppointmentGetAppointmentByFilterRequestParams, self.params)
        return result


class AppointmentGetAppointmentByFilterResponseError:
    """объект, содержащий информацию об ошибке
    
    Код ошибки авторизации
    """
    """код ошибки"""
    code: float
    """дополнительные данные об ошибке"""
    data: Optional[str]
    """текстовая информация об ошибке"""
    message: str

    def __init__(self, code: float, data: Optional[str], message: str) -> None:
        self.code = code
        self.data = data
        self.message = message

    @staticmethod
    def from_dict(obj: Any) -> 'AppointmentGetAppointmentByFilterResponseError':
        assert isinstance(obj, dict)
        code = from_float(obj.get("code"))
        data = from_union([from_str, from_none], obj.get("data"))
        message = from_str(obj.get("message"))
        return AppointmentGetAppointmentByFilterResponseError(code, data, message)

    def to_dict(self) -> dict:
        result: dict = {}
        result["code"] = to_float(self.code)
        result["data"] = from_union([from_str, from_none], self.data)
        result["message"] = from_str(self.message)
        return result


class AppointmentGetAppointmentByFilterResponseResult:
    """данные, передаваемые в ответ"""
    data: List[Union[List[Any], bool, AppointmentSchema, float, int, None, str]]
    page: float
    total: float
    unconfirmed: float

    def __init__(self, data: List[Union[List[Any], bool, AppointmentSchema, float, int, None, str]], page: float, total: float, unconfirmed: float) -> None:
        self.data = data
        self.page = page
        self.total = total
        self.unconfirmed = unconfirmed

    @staticmethod
    def from_dict(obj: Any) -> 'AppointmentGetAppointmentByFilterResponseResult':
        assert isinstance(obj, dict)
        data = from_list(lambda x: from_union([from_none, from_float, from_int, from_bool, from_str, lambda x: from_list(lambda x: x, x), AppointmentSchema.from_dict], x), obj.get("data"))
        page = from_float(obj.get("page"))
        total = from_float(obj.get("total"))
        unconfirmed = from_float(obj.get("unconfirmed"))
        return AppointmentGetAppointmentByFilterResponseResult(data, page, total, unconfirmed)

    def to_dict(self) -> dict:
        result: dict = {}
        result["data"] = from_list(lambda x: from_union([from_none, to_float, from_int, from_bool, from_str, lambda x: from_list(lambda x: x, x), lambda x: to_class(AppointmentSchema, x)], x), self.data)
        result["page"] = to_float(self.page)
        result["total"] = to_float(self.total)
        result["unconfirmed"] = to_float(self.unconfirmed)
        return result


class AppointmentGetAppointmentByFilterResponse:
    """значение числового типа для идентификации запроса на сервере"""
    id: float
    """версия протокола (2.0)"""
    jsonrpc: str
    """данные, передаваемые в ответ"""
    result: Optional[AppointmentGetAppointmentByFilterResponseResult]
    """объект, содержащий информацию об ошибке"""
    error: Optional[AppointmentGetAppointmentByFilterResponseError]

    def __init__(self, id: float, jsonrpc: str, result: Optional[AppointmentGetAppointmentByFilterResponseResult], error: Optional[AppointmentGetAppointmentByFilterResponseError]) -> None:
        self.id = id
        self.jsonrpc = jsonrpc
        self.result = result
        self.error = error

    @staticmethod
    def from_dict(obj: Any) -> 'AppointmentGetAppointmentByFilterResponse':
        assert isinstance(obj, dict)
        id = from_float(obj.get("id"))
        jsonrpc = from_str(obj.get("jsonrpc"))
        result = from_union([AppointmentGetAppointmentByFilterResponseResult.from_dict, from_none], obj.get("result"))
        error = from_union([AppointmentGetAppointmentByFilterResponseError.from_dict, from_none], obj.get("error"))
        return AppointmentGetAppointmentByFilterResponse(id, jsonrpc, result, error)

    def to_dict(self) -> dict:
        result: dict = {}
        result["id"] = to_float(self.id)
        result["jsonrpc"] = from_str(self.jsonrpc)
        result["result"] = from_union([lambda x: to_class(AppointmentGetAppointmentByFilterResponseResult, x), from_none], self.result)
        result["error"] = from_union([lambda x: to_class(AppointmentGetAppointmentByFilterResponseError, x), from_none], self.error)
        return result


class GetAppointmentByFilter:
    request: AppointmentGetAppointmentByFilterRequest
    response: AppointmentGetAppointmentByFilterResponse

    def __init__(self, request: AppointmentGetAppointmentByFilterRequest, response: AppointmentGetAppointmentByFilterResponse) -> None:
        self.request = request
        self.response = response

    @staticmethod
    def from_dict(obj: Any) -> 'GetAppointmentByFilter':
        assert isinstance(obj, dict)
        request = AppointmentGetAppointmentByFilterRequest.from_dict(obj.get("request"))
        response = AppointmentGetAppointmentByFilterResponse.from_dict(obj.get("response"))
        return GetAppointmentByFilter(request, response)

    def to_dict(self) -> dict:
        result: dict = {}
        result["request"] = to_class(AppointmentGetAppointmentByFilterRequest, self.request)
        result["response"] = to_class(AppointmentGetAppointmentByFilterResponse, self.response)
        return result


class TentacledBusiness:
    id: Union[float, str]

    def __init__(self, id: Union[float, str]) -> None:
        self.id = id

    @staticmethod
    def from_dict(obj: Any) -> 'TentacledBusiness':
        assert isinstance(obj, dict)
        id = from_union([from_float, from_str], obj.get("id"))
        return TentacledBusiness(id)

    def to_dict(self) -> dict:
        result: dict = {}
        result["id"] = from_union([to_float, from_str], self.id)
        return result


class ParamsCreated:
    end: datetime
    start: datetime

    def __init__(self, end: datetime, start: datetime) -> None:
        self.end = end
        self.start = start

    @staticmethod
    def from_dict(obj: Any) -> 'ParamsCreated':
        assert isinstance(obj, dict)
        end = from_datetime(obj.get("end"))
        start = from_datetime(obj.get("start"))
        return ParamsCreated(end, start)

    def to_dict(self) -> dict:
        result: dict = {}
        result["end"] = self.end.isoformat()
        result["start"] = self.start.isoformat()
        return result


class AppointmentGetAppointmentByShowcaseRequestParams:
    business: TentacledBusiness
    created: Optional[ParamsCreated]
    page: float
    page_size: float
    source: Optional[str]

    def __init__(self, business: TentacledBusiness, created: Optional[ParamsCreated], page: float, page_size: float, source: Optional[str]) -> None:
        self.business = business
        self.created = created
        self.page = page
        self.page_size = page_size
        self.source = source

    @staticmethod
    def from_dict(obj: Any) -> 'AppointmentGetAppointmentByShowcaseRequestParams':
        assert isinstance(obj, dict)
        business = TentacledBusiness.from_dict(obj.get("business"))
        created = from_union([ParamsCreated.from_dict, from_none], obj.get("created"))
        page = from_float(obj.get("page"))
        page_size = from_float(obj.get("pageSize"))
        source = from_union([from_str, from_none], obj.get("source"))
        return AppointmentGetAppointmentByShowcaseRequestParams(business, created, page, page_size, source)

    def to_dict(self) -> dict:
        result: dict = {}
        result["business"] = to_class(TentacledBusiness, self.business)
        result["created"] = from_union([lambda x: to_class(ParamsCreated, x), from_none], self.created)
        result["page"] = to_float(self.page)
        result["pageSize"] = to_float(self.page_size)
        result["source"] = from_union([from_str, from_none], self.source)
        return result


class AppointmentGetAppointmentByShowcaseRequest:
    """авторизационные параметры"""
    cred: Optional[Cred]
    """значение числового типа для идентификации запроса на сервере"""
    id: Union[float, str]
    """версия протокола - 2.0"""
    jsonrpc: str
    """название jsonrpc метода"""
    method: str
    """параметры запроса"""
    params: AppointmentGetAppointmentByShowcaseRequestParams

    def __init__(self, cred: Optional[Cred], id: Union[float, str], jsonrpc: str, method: str, params: AppointmentGetAppointmentByShowcaseRequestParams) -> None:
        self.cred = cred
        self.id = id
        self.jsonrpc = jsonrpc
        self.method = method
        self.params = params

    @staticmethod
    def from_dict(obj: Any) -> 'AppointmentGetAppointmentByShowcaseRequest':
        assert isinstance(obj, dict)
        cred = from_union([Cred.from_dict, from_none], obj.get("cred"))
        id = from_union([from_float, from_str], obj.get("id"))
        jsonrpc = from_str(obj.get("jsonrpc"))
        method = from_str(obj.get("method"))
        params = AppointmentGetAppointmentByShowcaseRequestParams.from_dict(obj.get("params"))
        return AppointmentGetAppointmentByShowcaseRequest(cred, id, jsonrpc, method, params)

    def to_dict(self) -> dict:
        result: dict = {}
        result["cred"] = from_union([lambda x: to_class(Cred, x), from_none], self.cred)
        result["id"] = from_union([to_float, from_str], self.id)
        result["jsonrpc"] = from_str(self.jsonrpc)
        result["method"] = from_str(self.method)
        result["params"] = to_class(AppointmentGetAppointmentByShowcaseRequestParams, self.params)
        return result


class AppointmentGetAppointmentByShowcaseResponseError:
    """объект, содержащий информацию об ошибке
    
    Код ошибки авторизации
    """
    """код ошибки"""
    code: float
    """дополнительные данные об ошибке"""
    data: Optional[str]
    """текстовая информация об ошибке"""
    message: str

    def __init__(self, code: float, data: Optional[str], message: str) -> None:
        self.code = code
        self.data = data
        self.message = message

    @staticmethod
    def from_dict(obj: Any) -> 'AppointmentGetAppointmentByShowcaseResponseError':
        assert isinstance(obj, dict)
        code = from_float(obj.get("code"))
        data = from_union([from_str, from_none], obj.get("data"))
        message = from_str(obj.get("message"))
        return AppointmentGetAppointmentByShowcaseResponseError(code, data, message)

    def to_dict(self) -> dict:
        result: dict = {}
        result["code"] = to_float(self.code)
        result["data"] = from_union([from_str, from_none], self.data)
        result["message"] = from_str(self.message)
        return result


class AppointmentGetAppointmentByShowcaseResponse:
    """значение числового типа для идентификации запроса на сервере"""
    id: float
    """версия протокола (2.0)"""
    jsonrpc: str
    result: Optional[List[Union[List[Any], bool, AppointmentSchema, float, int, None, str]]]
    """объект, содержащий информацию об ошибке"""
    error: Optional[AppointmentGetAppointmentByShowcaseResponseError]

    def __init__(self, id: float, jsonrpc: str, result: Optional[List[Union[List[Any], bool, AppointmentSchema, float, int, None, str]]], error: Optional[AppointmentGetAppointmentByShowcaseResponseError]) -> None:
        self.id = id
        self.jsonrpc = jsonrpc
        self.result = result
        self.error = error

    @staticmethod
    def from_dict(obj: Any) -> 'AppointmentGetAppointmentByShowcaseResponse':
        assert isinstance(obj, dict)
        id = from_float(obj.get("id"))
        jsonrpc = from_str(obj.get("jsonrpc"))
        result = from_union([lambda x: from_list(lambda x: from_union([from_none, from_float, from_int, from_bool, from_str, lambda x: from_list(lambda x: x, x), AppointmentSchema.from_dict], x), x), from_none], obj.get("result"))
        error = from_union([AppointmentGetAppointmentByShowcaseResponseError.from_dict, from_none], obj.get("error"))
        return AppointmentGetAppointmentByShowcaseResponse(id, jsonrpc, result, error)

    def to_dict(self) -> dict:
        result: dict = {}
        result["id"] = to_float(self.id)
        result["jsonrpc"] = from_str(self.jsonrpc)
        result["result"] = from_union([lambda x: from_list(lambda x: from_union([from_none, to_float, from_int, from_bool, from_str, lambda x: from_list(lambda x: x, x), lambda x: to_class(AppointmentSchema, x)], x), x), from_none], self.result)
        result["error"] = from_union([lambda x: to_class(AppointmentGetAppointmentByShowcaseResponseError, x), from_none], self.error)
        return result


class GetAppointmentByShowcase:
    request: AppointmentGetAppointmentByShowcaseRequest
    response: AppointmentGetAppointmentByShowcaseResponse

    def __init__(self, request: AppointmentGetAppointmentByShowcaseRequest, response: AppointmentGetAppointmentByShowcaseResponse) -> None:
        self.request = request
        self.response = response

    @staticmethod
    def from_dict(obj: Any) -> 'GetAppointmentByShowcase':
        assert isinstance(obj, dict)
        request = AppointmentGetAppointmentByShowcaseRequest.from_dict(obj.get("request"))
        response = AppointmentGetAppointmentByShowcaseResponse.from_dict(obj.get("response"))
        return GetAppointmentByShowcase(request, response)

    def to_dict(self) -> dict:
        result: dict = {}
        result["request"] = to_class(AppointmentGetAppointmentByShowcaseRequest, self.request)
        result["response"] = to_class(AppointmentGetAppointmentByShowcaseResponse, self.response)
        return result


class IndigoAppointment:
    start: str

    def __init__(self, start: str) -> None:
        self.start = start

    @staticmethod
    def from_dict(obj: Any) -> 'IndigoAppointment':
        assert isinstance(obj, dict)
        start = from_str(obj.get("start"))
        return IndigoAppointment(start)

    def to_dict(self) -> dict:
        result: dict = {}
        result["start"] = from_str(self.start)
        return result


class StickyBusiness:
    id: str

    def __init__(self, id: str) -> None:
        self.id = id

    @staticmethod
    def from_dict(obj: Any) -> 'StickyBusiness':
        assert isinstance(obj, dict)
        id = from_str(obj.get("id"))
        return StickyBusiness(id)

    def to_dict(self) -> dict:
        result: dict = {}
        result["id"] = from_str(self.id)
        return result


class ResourceClass:
    id: List[str]

    def __init__(self, id: List[str]) -> None:
        self.id = id

    @staticmethod
    def from_dict(obj: Any) -> 'ResourceClass':
        assert isinstance(obj, dict)
        id = from_list(from_str, obj.get("id"))
        return ResourceClass(id)

    def to_dict(self) -> dict:
        result: dict = {}
        result["id"] = from_list(from_str, self.id)
        return result


class ParamsTaxonomy:
    id: str

    def __init__(self, id: str) -> None:
        self.id = id

    @staticmethod
    def from_dict(obj: Any) -> 'ParamsTaxonomy':
        assert isinstance(obj, dict)
        id = from_str(obj.get("id"))
        return ParamsTaxonomy(id)

    def to_dict(self) -> dict:
        result: dict = {}
        result["id"] = from_str(self.id)
        return result


class AppointmentReserve:
    appointment: IndigoAppointment
    business: StickyBusiness
    origin_business_id: Optional[str]
    resource: ResourceClass
    source: str
    taxonomy: ParamsTaxonomy

    def __init__(self, appointment: IndigoAppointment, business: StickyBusiness, origin_business_id: Optional[str], resource: ResourceClass, source: str, taxonomy: ParamsTaxonomy) -> None:
        self.appointment = appointment
        self.business = business
        self.origin_business_id = origin_business_id
        self.resource = resource
        self.source = source
        self.taxonomy = taxonomy

    @staticmethod
    def from_dict(obj: Any) -> 'AppointmentReserve':
        assert isinstance(obj, dict)
        appointment = IndigoAppointment.from_dict(obj.get("appointment"))
        business = StickyBusiness.from_dict(obj.get("business"))
        origin_business_id = from_union([from_str, from_none], obj.get("originBusinessID"))
        resource = ResourceClass.from_dict(obj.get("resource"))
        source = from_str(obj.get("source"))
        taxonomy = ParamsTaxonomy.from_dict(obj.get("taxonomy"))
        return AppointmentReserve(appointment, business, origin_business_id, resource, source, taxonomy)

    def to_dict(self) -> dict:
        result: dict = {}
        result["appointment"] = to_class(IndigoAppointment, self.appointment)
        result["business"] = to_class(StickyBusiness, self.business)
        result["originBusinessID"] = from_union([from_str, from_none], self.origin_business_id)
        result["resource"] = to_class(ResourceClass, self.resource)
        result["source"] = from_str(self.source)
        result["taxonomy"] = to_class(ParamsTaxonomy, self.taxonomy)
        return result


class AppointmentReserveAppointmentRequest:
    """авторизационные параметры"""
    cred: Optional[Cred]
    """значение числового типа для идентификации запроса на сервере"""
    id: Union[float, str]
    """версия протокола - 2.0"""
    jsonrpc: str
    """название jsonrpc метода"""
    method: str
    """параметры запроса"""
    params: AppointmentReserve

    def __init__(self, cred: Optional[Cred], id: Union[float, str], jsonrpc: str, method: str, params: AppointmentReserve) -> None:
        self.cred = cred
        self.id = id
        self.jsonrpc = jsonrpc
        self.method = method
        self.params = params

    @staticmethod
    def from_dict(obj: Any) -> 'AppointmentReserveAppointmentRequest':
        assert isinstance(obj, dict)
        cred = from_union([Cred.from_dict, from_none], obj.get("cred"))
        id = from_union([from_float, from_str], obj.get("id"))
        jsonrpc = from_str(obj.get("jsonrpc"))
        method = from_str(obj.get("method"))
        params = AppointmentReserve.from_dict(obj.get("params"))
        return AppointmentReserveAppointmentRequest(cred, id, jsonrpc, method, params)

    def to_dict(self) -> dict:
        result: dict = {}
        result["cred"] = from_union([lambda x: to_class(Cred, x), from_none], self.cred)
        result["id"] = from_union([to_float, from_str], self.id)
        result["jsonrpc"] = from_str(self.jsonrpc)
        result["method"] = from_str(self.method)
        result["params"] = to_class(AppointmentReserve, self.params)
        return result


class AppointmentReserveAppointmentResponseError:
    """объект, содержащий информацию об ошибке
    
    Код ошибки авторизации
    """
    """код ошибки"""
    code: float
    """дополнительные данные об ошибке"""
    data: Optional[str]
    """текстовая информация об ошибке"""
    message: str

    def __init__(self, code: float, data: Optional[str], message: str) -> None:
        self.code = code
        self.data = data
        self.message = message

    @staticmethod
    def from_dict(obj: Any) -> 'AppointmentReserveAppointmentResponseError':
        assert isinstance(obj, dict)
        code = from_float(obj.get("code"))
        data = from_union([from_str, from_none], obj.get("data"))
        message = from_str(obj.get("message"))
        return AppointmentReserveAppointmentResponseError(code, data, message)

    def to_dict(self) -> dict:
        result: dict = {}
        result["code"] = to_float(self.code)
        result["data"] = from_union([from_str, from_none], self.data)
        result["message"] = from_str(self.message)
        return result


class AppointmentReserveAppointmentResponse:
    """значение числового типа для идентификации запроса на сервере"""
    id: float
    """версия протокола (2.0)"""
    jsonrpc: str
    """данные, передаваемые в ответ"""
    result: Union[List[Any], bool, AppointmentSchema, float, int, None, str]
    """объект, содержащий информацию об ошибке"""
    error: Optional[AppointmentReserveAppointmentResponseError]

    def __init__(self, id: float, jsonrpc: str, result: Union[List[Any], bool, AppointmentSchema, float, int, None, str], error: Optional[AppointmentReserveAppointmentResponseError]) -> None:
        self.id = id
        self.jsonrpc = jsonrpc
        self.result = result
        self.error = error

    @staticmethod
    def from_dict(obj: Any) -> 'AppointmentReserveAppointmentResponse':
        assert isinstance(obj, dict)
        id = from_float(obj.get("id"))
        jsonrpc = from_str(obj.get("jsonrpc"))
        result = from_union([from_none, from_float, from_int, from_bool, from_str, lambda x: from_list(lambda x: x, x), AppointmentSchema.from_dict], obj.get("result"))
        error = from_union([AppointmentReserveAppointmentResponseError.from_dict, from_none], obj.get("error"))
        return AppointmentReserveAppointmentResponse(id, jsonrpc, result, error)

    def to_dict(self) -> dict:
        result: dict = {}
        result["id"] = to_float(self.id)
        result["jsonrpc"] = from_str(self.jsonrpc)
        result["result"] = from_union([from_none, to_float, from_int, from_bool, from_str, lambda x: from_list(lambda x: x, x), lambda x: to_class(AppointmentSchema, x)], self.result)
        result["error"] = from_union([lambda x: to_class(AppointmentReserveAppointmentResponseError, x), from_none], self.error)
        return result


class ReserveAppointment:
    request: AppointmentReserveAppointmentRequest
    response: AppointmentReserveAppointmentResponse

    def __init__(self, request: AppointmentReserveAppointmentRequest, response: AppointmentReserveAppointmentResponse) -> None:
        self.request = request
        self.response = response

    @staticmethod
    def from_dict(obj: Any) -> 'ReserveAppointment':
        assert isinstance(obj, dict)
        request = AppointmentReserveAppointmentRequest.from_dict(obj.get("request"))
        response = AppointmentReserveAppointmentResponse.from_dict(obj.get("response"))
        return ReserveAppointment(request, response)

    def to_dict(self) -> dict:
        result: dict = {}
        result["request"] = to_class(AppointmentReserveAppointmentRequest, self.request)
        result["response"] = to_class(AppointmentReserveAppointmentResponse, self.response)
        return result


class AppointmentController:
    cancel_appointment_by_business: Optional[CancelAppointmentByBusiness]
    cancel_appointment_by_client: Optional[CancelAppointmentByClient]
    client_confirm_appointment: Optional[ClientConfirmAppointment]
    client_remove_empty_appointment: ClientRemoveEmptyAppointment
    get_appointment_by_filter: Optional[GetAppointmentByFilter]
    get_appointment_by_showcase: Optional[GetAppointmentByShowcase]
    reserve_appointment: ReserveAppointment

    def __init__(self, cancel_appointment_by_business: Optional[CancelAppointmentByBusiness], cancel_appointment_by_client: Optional[CancelAppointmentByClient], client_confirm_appointment: Optional[ClientConfirmAppointment], client_remove_empty_appointment: ClientRemoveEmptyAppointment, get_appointment_by_filter: Optional[GetAppointmentByFilter], get_appointment_by_showcase: Optional[GetAppointmentByShowcase], reserve_appointment: ReserveAppointment) -> None:
        self.cancel_appointment_by_business = cancel_appointment_by_business
        self.cancel_appointment_by_client = cancel_appointment_by_client
        self.client_confirm_appointment = client_confirm_appointment
        self.client_remove_empty_appointment = client_remove_empty_appointment
        self.get_appointment_by_filter = get_appointment_by_filter
        self.get_appointment_by_showcase = get_appointment_by_showcase
        self.reserve_appointment = reserve_appointment

    @staticmethod
    def from_dict(obj: Any) -> 'AppointmentController':
        assert isinstance(obj, dict)
        cancel_appointment_by_business = from_union([CancelAppointmentByBusiness.from_dict, from_none], obj.get("cancel_appointment_by_business"))
        cancel_appointment_by_client = from_union([CancelAppointmentByClient.from_dict, from_none], obj.get("cancel_appointment_by_client"))
        client_confirm_appointment = from_union([ClientConfirmAppointment.from_dict, from_none], obj.get("client_confirm_appointment"))
        client_remove_empty_appointment = ClientRemoveEmptyAppointment.from_dict(obj.get("client_remove_empty_appointment"))
        get_appointment_by_filter = from_union([GetAppointmentByFilter.from_dict, from_none], obj.get("get_appointment_by_filter"))
        get_appointment_by_showcase = from_union([GetAppointmentByShowcase.from_dict, from_none], obj.get("get_appointment_by_showcase"))
        reserve_appointment = ReserveAppointment.from_dict(obj.get("reserve_appointment"))
        return AppointmentController(cancel_appointment_by_business, cancel_appointment_by_client, client_confirm_appointment, client_remove_empty_appointment, get_appointment_by_filter, get_appointment_by_showcase, reserve_appointment)

    def to_dict(self) -> dict:
        result: dict = {}
        result["cancel_appointment_by_business"] = from_union([lambda x: to_class(CancelAppointmentByBusiness, x), from_none], self.cancel_appointment_by_business)
        result["cancel_appointment_by_client"] = from_union([lambda x: to_class(CancelAppointmentByClient, x), from_none], self.cancel_appointment_by_client)
        result["client_confirm_appointment"] = from_union([lambda x: to_class(ClientConfirmAppointment, x), from_none], self.client_confirm_appointment)
        result["client_remove_empty_appointment"] = to_class(ClientRemoveEmptyAppointment, self.client_remove_empty_appointment)
        result["get_appointment_by_filter"] = from_union([lambda x: to_class(GetAppointmentByFilter, x), from_none], self.get_appointment_by_filter)
        result["get_appointment_by_showcase"] = from_union([lambda x: to_class(GetAppointmentByShowcase, x), from_none], self.get_appointment_by_showcase)
        result["reserve_appointment"] = to_class(ReserveAppointment, self.reserve_appointment)
        return result


class BusinessGetNetworkDataRequestParams:
    """параметры запроса business.get_network_data"""
    """идентификатор сети"""
    network_id: Union[float, str]
    """Если передано true - возвращает информацию business_info/general_info по каждому бизнесу
    в массиве businesses
    """
    with_business_info: Optional[bool]

    def __init__(self, network_id: Union[float, str], with_business_info: Optional[bool]) -> None:
        self.network_id = network_id
        self.with_business_info = with_business_info

    @staticmethod
    def from_dict(obj: Any) -> 'BusinessGetNetworkDataRequestParams':
        assert isinstance(obj, dict)
        network_id = from_union([from_float, from_str], obj.get("networkID"))
        with_business_info = from_union([from_bool, from_none], obj.get("with_business_info"))
        return BusinessGetNetworkDataRequestParams(network_id, with_business_info)

    def to_dict(self) -> dict:
        result: dict = {}
        result["networkID"] = from_union([to_float, from_str], self.network_id)
        result["with_business_info"] = from_union([from_bool, from_none], self.with_business_info)
        return result


class BusinessGetNetworkDataRequest:
    """авторизационные параметры"""
    cred: Optional[Cred]
    """значение числового типа для идентификации запроса на сервере"""
    id: Union[float, str]
    """версия протокола - 2.0"""
    jsonrpc: str
    """название jsonrpc метода"""
    method: str
    """параметры запроса
    
    параметры запроса business.get_network_data
    """
    params: BusinessGetNetworkDataRequestParams

    def __init__(self, cred: Optional[Cred], id: Union[float, str], jsonrpc: str, method: str, params: BusinessGetNetworkDataRequestParams) -> None:
        self.cred = cred
        self.id = id
        self.jsonrpc = jsonrpc
        self.method = method
        self.params = params

    @staticmethod
    def from_dict(obj: Any) -> 'BusinessGetNetworkDataRequest':
        assert isinstance(obj, dict)
        cred = from_union([Cred.from_dict, from_none], obj.get("cred"))
        id = from_union([from_float, from_str], obj.get("id"))
        jsonrpc = from_str(obj.get("jsonrpc"))
        method = from_str(obj.get("method"))
        params = BusinessGetNetworkDataRequestParams.from_dict(obj.get("params"))
        return BusinessGetNetworkDataRequest(cred, id, jsonrpc, method, params)

    def to_dict(self) -> dict:
        result: dict = {}
        result["cred"] = from_union([lambda x: to_class(Cred, x), from_none], self.cred)
        result["id"] = from_union([to_float, from_str], self.id)
        result["jsonrpc"] = from_str(self.jsonrpc)
        result["method"] = from_str(self.method)
        result["params"] = to_class(BusinessGetNetworkDataRequestParams, self.params)
        return result


class BusinessGetNetworkDataResponseError:
    """объект, содержащий информацию об ошибке
    
    Код ошибки авторизации
    """
    """код ошибки"""
    code: float
    """дополнительные данные об ошибке"""
    data: Optional[str]
    """текстовая информация об ошибке"""
    message: str

    def __init__(self, code: float, data: Optional[str], message: str) -> None:
        self.code = code
        self.data = data
        self.message = message

    @staticmethod
    def from_dict(obj: Any) -> 'BusinessGetNetworkDataResponseError':
        assert isinstance(obj, dict)
        code = from_float(obj.get("code"))
        data = from_union([from_str, from_none], obj.get("data"))
        message = from_str(obj.get("message"))
        return BusinessGetNetworkDataResponseError(code, data, message)

    def to_dict(self) -> dict:
        result: dict = {}
        result["code"] = to_float(self.code)
        result["data"] = from_union([from_str, from_none], self.data)
        result["message"] = from_str(self.message)
        return result


class AppointmentExtensionType(Enum):
    MINUTES = "MINUTES"
    PERCENT = "PERCENT"


class PurpleAdditionalSettings:
    appointment_extension_amount: Optional[float]
    appointment_extension_type: Optional[AppointmentExtensionType]

    def __init__(self, appointment_extension_amount: Optional[float], appointment_extension_type: Optional[AppointmentExtensionType]) -> None:
        self.appointment_extension_amount = appointment_extension_amount
        self.appointment_extension_type = appointment_extension_type

    @staticmethod
    def from_dict(obj: Any) -> 'PurpleAdditionalSettings':
        assert isinstance(obj, dict)
        appointment_extension_amount = from_union([from_float, from_none], obj.get("appointmentExtensionAmount"))
        appointment_extension_type = from_union([AppointmentExtensionType, from_none], obj.get("appointmentExtensionType"))
        return PurpleAdditionalSettings(appointment_extension_amount, appointment_extension_type)

    def to_dict(self) -> dict:
        result: dict = {}
        result["appointmentExtensionAmount"] = from_union([to_float, from_none], self.appointment_extension_amount)
        result["appointmentExtensionType"] = from_union([lambda x: to_enum(AppointmentExtensionType, x), from_none], self.appointment_extension_type)
        return result


class FeedBackMinRating(Enum):
    THE_1 = "1"
    THE_2 = "2"
    THE_3 = "3"
    THE_4 = "4"
    THE_5 = "5"


class PaymentProvider(Enum):
    DELTA_PROCESSING = "deltaProcessing"
    DISABLE = "DISABLE"
    YANDEX_MONEY = "yandexMoney"


class ResourceTimetableType(Enum):
    DEFAULT = "DEFAULT"
    EVENODD = "EVENODD"


class SchedulerWeekViewType(Enum):
    WEEK = "week"
    WORK_WEEK = "workWeek"


class PurpleBackofficeConfiguration:
    adjacent_taxonomies_treshold: Optional[float]
    allow_hide_service_for_booking: Optional[bool]
    allow_hide_workers_from_schdeule: Optional[bool]
    allow_sms_translit: Optional[bool]
    appointment_future_moving: Optional[bool]
    block_notification_for_any_available_adjacent_service: Optional[bool]
    cabinets_enabled: Optional[bool]
    check_client_overlapping: Optional[bool]
    custom_online_payment_confirmation_template: Optional[str]
    default_gt_schedule_day_view: Optional[bool]
    disable_appointment_client_inline_editor: Optional[bool]
    edit_app_extra_id: Optional[bool]
    edit_taxonomy_children: Optional[bool]
    edit_taxonomy_visit_type: Optional[bool]
    enable_black_list: Optional[bool]
    enable_calculate_shedule: Optional[bool]
    enable_client_card: Optional[bool]
    enable_client_language: Optional[bool]
    enable_client_medical_card_report: Optional[bool]
    enable_custom_online_payment_confirmation: Optional[bool]
    enable_extended_phone: Optional[bool]
    enable_extended_records_client_statistics: Optional[bool]
    enable_master_importance: Optional[bool]
    enable_service_time_limit: Optional[bool]
    enable_source_choice: Optional[bool]
    enable_taxonomy_children_age_check: Optional[bool]
    export_to_excel_removed_clients: Optional[bool]
    feedback_customer_portal_message: Optional[str]
    feedback_customer_portal_thank_you_message: Optional[str]
    feedback_customer_portal_title: Optional[str]
    feed_back_min_rating: Optional[FeedBackMinRating]
    fin_id: Optional[str]
    fin_name: Optional[str]
    hide_customer_portal_footer: Optional[bool]
    highlighted_resource: Optional[bool]
    manual_exception_support: Optional[bool]
    no_internet_alert: Optional[bool]
    past_time_edit: Optional[float]
    payment_provider: Optional[PaymentProvider]
    readonly_resource_schedule: Optional[bool]
    resource_timetable_type: Optional[ResourceTimetableType]
    revision_version: Optional[float]
    schdule_week_view_is_default: Optional[bool]
    schedule_default_workers_limit: Optional[float]
    scheduler_week_view_type: Optional[SchedulerWeekViewType]
    schedule_worker_hours: Optional[bool]
    show_additional_fields: Optional[bool]
    show_address: Optional[bool]
    show_birth_date: Optional[bool]
    show_client_appear: Optional[bool]
    show_client_appear_on_schedule: Optional[bool]
    show_client_birthday_filter: Optional[bool]
    show_client_contract_number: Optional[bool]
    show_client_image: Optional[bool]
    show_client_payment: Optional[bool]
    show_defaulter_blockscreen: Optional[bool]
    show_delivery_status: Optional[bool]
    show_department_filter: Optional[bool]
    show_departments: Optional[bool]
    show_departments_configuration: Optional[bool]
    show_email: Optional[bool]
    show_extra_client_info: Optional[bool]
    show_fax: Optional[bool]
    show_fired_worker_appointment_alert: Optional[bool]
    show_first_available_slot: Optional[bool]
    show_gap_window: Optional[bool]
    show_gender: Optional[bool]
    show_gender_in_records: Optional[bool]
    show_generatable_reports_screen: Optional[bool]
    show_house_number: Optional[bool]
    show_israel_city: Optional[bool]
    show_kupat_holim: Optional[bool]
    show_leads_screen: Optional[bool]
    show_manual_changes: Optional[bool]
    show_passport_id: Optional[bool]
    show_rooms: Optional[bool]
    show_season_tickets: Optional[bool]
    show_taxonomy_children: Optional[bool]
    show_taxonomy_localization: Optional[bool]
    show_taxonomy_visit_type: Optional[bool]
    show_test_record: Optional[bool]
    show_utm: Optional[bool]
    show_widget_color_theme: Optional[bool]
    show_worker_description_in_event: Optional[bool]
    show_worker_extra_id: Optional[bool]
    show_worker_status: Optional[bool]
    skip_appointment_price_update: Optional[bool]
    skip_cancel_if_client_not_appear: Optional[bool]
    skip_service_filtering: Optional[bool]
    split_full_name_xls_export: Optional[bool]
    state_level_holidays: Optional[List[Dict[str, Any]]]
    state_level_holidays_not_working: Optional[bool]
    taxonomy_children_max_age: Optional[float]
    use_additional_durations: Optional[bool]
    use_adjacent_taxonomies: Optional[bool]
    use_adjacent_taxonomies_slot_splitting: Optional[bool]
    use_gt_app_method: Optional[bool]
    work_week_end: Optional[float]
    work_week_start: Optional[float]

    def __init__(self, adjacent_taxonomies_treshold: Optional[float], allow_hide_service_for_booking: Optional[bool], allow_hide_workers_from_schdeule: Optional[bool], allow_sms_translit: Optional[bool], appointment_future_moving: Optional[bool], block_notification_for_any_available_adjacent_service: Optional[bool], cabinets_enabled: Optional[bool], check_client_overlapping: Optional[bool], custom_online_payment_confirmation_template: Optional[str], default_gt_schedule_day_view: Optional[bool], disable_appointment_client_inline_editor: Optional[bool], edit_app_extra_id: Optional[bool], edit_taxonomy_children: Optional[bool], edit_taxonomy_visit_type: Optional[bool], enable_black_list: Optional[bool], enable_calculate_shedule: Optional[bool], enable_client_card: Optional[bool], enable_client_language: Optional[bool], enable_client_medical_card_report: Optional[bool], enable_custom_online_payment_confirmation: Optional[bool], enable_extended_phone: Optional[bool], enable_extended_records_client_statistics: Optional[bool], enable_master_importance: Optional[bool], enable_service_time_limit: Optional[bool], enable_source_choice: Optional[bool], enable_taxonomy_children_age_check: Optional[bool], export_to_excel_removed_clients: Optional[bool], feedback_customer_portal_message: Optional[str], feedback_customer_portal_thank_you_message: Optional[str], feedback_customer_portal_title: Optional[str], feed_back_min_rating: Optional[FeedBackMinRating], fin_id: Optional[str], fin_name: Optional[str], hide_customer_portal_footer: Optional[bool], highlighted_resource: Optional[bool], manual_exception_support: Optional[bool], no_internet_alert: Optional[bool], past_time_edit: Optional[float], payment_provider: Optional[PaymentProvider], readonly_resource_schedule: Optional[bool], resource_timetable_type: Optional[ResourceTimetableType], revision_version: Optional[float], schdule_week_view_is_default: Optional[bool], schedule_default_workers_limit: Optional[float], scheduler_week_view_type: Optional[SchedulerWeekViewType], schedule_worker_hours: Optional[bool], show_additional_fields: Optional[bool], show_address: Optional[bool], show_birth_date: Optional[bool], show_client_appear: Optional[bool], show_client_appear_on_schedule: Optional[bool], show_client_birthday_filter: Optional[bool], show_client_contract_number: Optional[bool], show_client_image: Optional[bool], show_client_payment: Optional[bool], show_defaulter_blockscreen: Optional[bool], show_delivery_status: Optional[bool], show_department_filter: Optional[bool], show_departments: Optional[bool], show_departments_configuration: Optional[bool], show_email: Optional[bool], show_extra_client_info: Optional[bool], show_fax: Optional[bool], show_fired_worker_appointment_alert: Optional[bool], show_first_available_slot: Optional[bool], show_gap_window: Optional[bool], show_gender: Optional[bool], show_gender_in_records: Optional[bool], show_generatable_reports_screen: Optional[bool], show_house_number: Optional[bool], show_israel_city: Optional[bool], show_kupat_holim: Optional[bool], show_leads_screen: Optional[bool], show_manual_changes: Optional[bool], show_passport_id: Optional[bool], show_rooms: Optional[bool], show_season_tickets: Optional[bool], show_taxonomy_children: Optional[bool], show_taxonomy_localization: Optional[bool], show_taxonomy_visit_type: Optional[bool], show_test_record: Optional[bool], show_utm: Optional[bool], show_widget_color_theme: Optional[bool], show_worker_description_in_event: Optional[bool], show_worker_extra_id: Optional[bool], show_worker_status: Optional[bool], skip_appointment_price_update: Optional[bool], skip_cancel_if_client_not_appear: Optional[bool], skip_service_filtering: Optional[bool], split_full_name_xls_export: Optional[bool], state_level_holidays: Optional[List[Dict[str, Any]]], state_level_holidays_not_working: Optional[bool], taxonomy_children_max_age: Optional[float], use_additional_durations: Optional[bool], use_adjacent_taxonomies: Optional[bool], use_adjacent_taxonomies_slot_splitting: Optional[bool], use_gt_app_method: Optional[bool], work_week_end: Optional[float], work_week_start: Optional[float]) -> None:
        self.adjacent_taxonomies_treshold = adjacent_taxonomies_treshold
        self.allow_hide_service_for_booking = allow_hide_service_for_booking
        self.allow_hide_workers_from_schdeule = allow_hide_workers_from_schdeule
        self.allow_sms_translit = allow_sms_translit
        self.appointment_future_moving = appointment_future_moving
        self.block_notification_for_any_available_adjacent_service = block_notification_for_any_available_adjacent_service
        self.cabinets_enabled = cabinets_enabled
        self.check_client_overlapping = check_client_overlapping
        self.custom_online_payment_confirmation_template = custom_online_payment_confirmation_template
        self.default_gt_schedule_day_view = default_gt_schedule_day_view
        self.disable_appointment_client_inline_editor = disable_appointment_client_inline_editor
        self.edit_app_extra_id = edit_app_extra_id
        self.edit_taxonomy_children = edit_taxonomy_children
        self.edit_taxonomy_visit_type = edit_taxonomy_visit_type
        self.enable_black_list = enable_black_list
        self.enable_calculate_shedule = enable_calculate_shedule
        self.enable_client_card = enable_client_card
        self.enable_client_language = enable_client_language
        self.enable_client_medical_card_report = enable_client_medical_card_report
        self.enable_custom_online_payment_confirmation = enable_custom_online_payment_confirmation
        self.enable_extended_phone = enable_extended_phone
        self.enable_extended_records_client_statistics = enable_extended_records_client_statistics
        self.enable_master_importance = enable_master_importance
        self.enable_service_time_limit = enable_service_time_limit
        self.enable_source_choice = enable_source_choice
        self.enable_taxonomy_children_age_check = enable_taxonomy_children_age_check
        self.export_to_excel_removed_clients = export_to_excel_removed_clients
        self.feedback_customer_portal_message = feedback_customer_portal_message
        self.feedback_customer_portal_thank_you_message = feedback_customer_portal_thank_you_message
        self.feedback_customer_portal_title = feedback_customer_portal_title
        self.feed_back_min_rating = feed_back_min_rating
        self.fin_id = fin_id
        self.fin_name = fin_name
        self.hide_customer_portal_footer = hide_customer_portal_footer
        self.highlighted_resource = highlighted_resource
        self.manual_exception_support = manual_exception_support
        self.no_internet_alert = no_internet_alert
        self.past_time_edit = past_time_edit
        self.payment_provider = payment_provider
        self.readonly_resource_schedule = readonly_resource_schedule
        self.resource_timetable_type = resource_timetable_type
        self.revision_version = revision_version
        self.schdule_week_view_is_default = schdule_week_view_is_default
        self.schedule_default_workers_limit = schedule_default_workers_limit
        self.scheduler_week_view_type = scheduler_week_view_type
        self.schedule_worker_hours = schedule_worker_hours
        self.show_additional_fields = show_additional_fields
        self.show_address = show_address
        self.show_birth_date = show_birth_date
        self.show_client_appear = show_client_appear
        self.show_client_appear_on_schedule = show_client_appear_on_schedule
        self.show_client_birthday_filter = show_client_birthday_filter
        self.show_client_contract_number = show_client_contract_number
        self.show_client_image = show_client_image
        self.show_client_payment = show_client_payment
        self.show_defaulter_blockscreen = show_defaulter_blockscreen
        self.show_delivery_status = show_delivery_status
        self.show_department_filter = show_department_filter
        self.show_departments = show_departments
        self.show_departments_configuration = show_departments_configuration
        self.show_email = show_email
        self.show_extra_client_info = show_extra_client_info
        self.show_fax = show_fax
        self.show_fired_worker_appointment_alert = show_fired_worker_appointment_alert
        self.show_first_available_slot = show_first_available_slot
        self.show_gap_window = show_gap_window
        self.show_gender = show_gender
        self.show_gender_in_records = show_gender_in_records
        self.show_generatable_reports_screen = show_generatable_reports_screen
        self.show_house_number = show_house_number
        self.show_israel_city = show_israel_city
        self.show_kupat_holim = show_kupat_holim
        self.show_leads_screen = show_leads_screen
        self.show_manual_changes = show_manual_changes
        self.show_passport_id = show_passport_id
        self.show_rooms = show_rooms
        self.show_season_tickets = show_season_tickets
        self.show_taxonomy_children = show_taxonomy_children
        self.show_taxonomy_localization = show_taxonomy_localization
        self.show_taxonomy_visit_type = show_taxonomy_visit_type
        self.show_test_record = show_test_record
        self.show_utm = show_utm
        self.show_widget_color_theme = show_widget_color_theme
        self.show_worker_description_in_event = show_worker_description_in_event
        self.show_worker_extra_id = show_worker_extra_id
        self.show_worker_status = show_worker_status
        self.skip_appointment_price_update = skip_appointment_price_update
        self.skip_cancel_if_client_not_appear = skip_cancel_if_client_not_appear
        self.skip_service_filtering = skip_service_filtering
        self.split_full_name_xls_export = split_full_name_xls_export
        self.state_level_holidays = state_level_holidays
        self.state_level_holidays_not_working = state_level_holidays_not_working
        self.taxonomy_children_max_age = taxonomy_children_max_age
        self.use_additional_durations = use_additional_durations
        self.use_adjacent_taxonomies = use_adjacent_taxonomies
        self.use_adjacent_taxonomies_slot_splitting = use_adjacent_taxonomies_slot_splitting
        self.use_gt_app_method = use_gt_app_method
        self.work_week_end = work_week_end
        self.work_week_start = work_week_start

    @staticmethod
    def from_dict(obj: Any) -> 'PurpleBackofficeConfiguration':
        assert isinstance(obj, dict)
        adjacent_taxonomies_treshold = from_union([from_float, from_none], obj.get("adjacentTaxonomiesTreshold"))
        allow_hide_service_for_booking = from_union([from_bool, from_none], obj.get("allowHideServiceForBooking"))
        allow_hide_workers_from_schdeule = from_union([from_bool, from_none], obj.get("allowHideWorkersFromSchdeule"))
        allow_sms_translit = from_union([from_bool, from_none], obj.get("allowSmsTranslit"))
        appointment_future_moving = from_union([from_bool, from_none], obj.get("appointmentFutureMoving"))
        block_notification_for_any_available_adjacent_service = from_union([from_bool, from_none], obj.get("blockNotificationForAnyAvailableAdjacentService"))
        cabinets_enabled = from_union([from_bool, from_none], obj.get("cabinetsEnabled"))
        check_client_overlapping = from_union([from_bool, from_none], obj.get("checkClientOverlapping"))
        custom_online_payment_confirmation_template = from_union([from_str, from_none], obj.get("customOnlinePaymentConfirmationTemplate"))
        default_gt_schedule_day_view = from_union([from_bool, from_none], obj.get("defaultGTScheduleDayView"))
        disable_appointment_client_inline_editor = from_union([from_bool, from_none], obj.get("disableAppointmentClientInlineEditor"))
        edit_app_extra_id = from_union([from_bool, from_none], obj.get("editAppExtraId"))
        edit_taxonomy_children = from_union([from_bool, from_none], obj.get("editTaxonomyChildren"))
        edit_taxonomy_visit_type = from_union([from_bool, from_none], obj.get("editTaxonomyVisitType"))
        enable_black_list = from_union([from_bool, from_none], obj.get("enableBlackList"))
        enable_calculate_shedule = from_union([from_bool, from_none], obj.get("enableCalculateShedule"))
        enable_client_card = from_union([from_bool, from_none], obj.get("enableClientCard"))
        enable_client_language = from_union([from_bool, from_none], obj.get("enableClientLanguage"))
        enable_client_medical_card_report = from_union([from_bool, from_none], obj.get("enableClientMedicalCardReport"))
        enable_custom_online_payment_confirmation = from_union([from_bool, from_none], obj.get("enableCustomOnlinePaymentConfirmation"))
        enable_extended_phone = from_union([from_bool, from_none], obj.get("enableExtendedPhone"))
        enable_extended_records_client_statistics = from_union([from_bool, from_none], obj.get("enableExtendedRecordsClientStatistics"))
        enable_master_importance = from_union([from_bool, from_none], obj.get("enableMasterImportance"))
        enable_service_time_limit = from_union([from_bool, from_none], obj.get("enableServiceTimeLimit"))
        enable_source_choice = from_union([from_bool, from_none], obj.get("enableSourceChoice"))
        enable_taxonomy_children_age_check = from_union([from_bool, from_none], obj.get("enableTaxonomyChildrenAgeCheck"))
        export_to_excel_removed_clients = from_union([from_bool, from_none], obj.get("exportToExcelRemovedClients"))
        feedback_customer_portal_message = from_union([from_str, from_none], obj.get("feedbackCustomerPortalMessage"))
        feedback_customer_portal_thank_you_message = from_union([from_str, from_none], obj.get("feedbackCustomerPortalThankYouMessage"))
        feedback_customer_portal_title = from_union([from_str, from_none], obj.get("feedbackCustomerPortalTitle"))
        feed_back_min_rating = from_union([FeedBackMinRating, from_none], obj.get("feedBackMinRating"))
        fin_id = from_union([from_str, from_none], obj.get("finId"))
        fin_name = from_union([from_str, from_none], obj.get("finName"))
        hide_customer_portal_footer = from_union([from_bool, from_none], obj.get("hideCustomerPortalFooter"))
        highlighted_resource = from_union([from_bool, from_none], obj.get("highlightedResource"))
        manual_exception_support = from_union([from_bool, from_none], obj.get("manualExceptionSupport"))
        no_internet_alert = from_union([from_bool, from_none], obj.get("noInternetAlert"))
        past_time_edit = from_union([from_float, from_none], obj.get("pastTimeEdit"))
        payment_provider = from_union([PaymentProvider, from_none], obj.get("paymentProvider"))
        readonly_resource_schedule = from_union([from_bool, from_none], obj.get("readonlyResourceSchedule"))
        resource_timetable_type = from_union([ResourceTimetableType, from_none], obj.get("resourceTimetableType"))
        revision_version = from_union([from_float, from_none], obj.get("revisionVersion"))
        schdule_week_view_is_default = from_union([from_bool, from_none], obj.get("schduleWeekViewIsDefault"))
        schedule_default_workers_limit = from_union([from_float, from_none], obj.get("scheduleDefaultWorkersLimit"))
        scheduler_week_view_type = from_union([SchedulerWeekViewType, from_none], obj.get("schedulerWeekViewType"))
        schedule_worker_hours = from_union([from_bool, from_none], obj.get("scheduleWorkerHours"))
        show_additional_fields = from_union([from_bool, from_none], obj.get("showAdditionalFields"))
        show_address = from_union([from_bool, from_none], obj.get("showAddress"))
        show_birth_date = from_union([from_bool, from_none], obj.get("showBirthDate"))
        show_client_appear = from_union([from_bool, from_none], obj.get("showClientAppear"))
        show_client_appear_on_schedule = from_union([from_bool, from_none], obj.get("showClientAppearOnSchedule"))
        show_client_birthday_filter = from_union([from_bool, from_none], obj.get("showClientBirthdayFilter"))
        show_client_contract_number = from_union([from_bool, from_none], obj.get("showClientContractNumber"))
        show_client_image = from_union([from_bool, from_none], obj.get("showClientImage"))
        show_client_payment = from_union([from_bool, from_none], obj.get("showClientPayment"))
        show_defaulter_blockscreen = from_union([from_bool, from_none], obj.get("showDefaulterBlockscreen"))
        show_delivery_status = from_union([from_bool, from_none], obj.get("showDeliveryStatus"))
        show_department_filter = from_union([from_bool, from_none], obj.get("showDepartmentFilter"))
        show_departments = from_union([from_bool, from_none], obj.get("showDepartments"))
        show_departments_configuration = from_union([from_bool, from_none], obj.get("showDepartmentsConfiguration"))
        show_email = from_union([from_bool, from_none], obj.get("showEmail"))
        show_extra_client_info = from_union([from_bool, from_none], obj.get("showExtraClientInfo"))
        show_fax = from_union([from_bool, from_none], obj.get("showFax"))
        show_fired_worker_appointment_alert = from_union([from_bool, from_none], obj.get("showFiredWorkerAppointmentAlert"))
        show_first_available_slot = from_union([from_bool, from_none], obj.get("showFirstAvailableSlot"))
        show_gap_window = from_union([from_bool, from_none], obj.get("showGapWindow"))
        show_gender = from_union([from_bool, from_none], obj.get("showGender"))
        show_gender_in_records = from_union([from_bool, from_none], obj.get("showGenderInRecords"))
        show_generatable_reports_screen = from_union([from_bool, from_none], obj.get("showGeneratableReportsScreen"))
        show_house_number = from_union([from_bool, from_none], obj.get("showHouseNumber"))
        show_israel_city = from_union([from_bool, from_none], obj.get("showIsraelCity"))
        show_kupat_holim = from_union([from_bool, from_none], obj.get("showKupatHolim"))
        show_leads_screen = from_union([from_bool, from_none], obj.get("showLeadsScreen"))
        show_manual_changes = from_union([from_bool, from_none], obj.get("showManualChanges"))
        show_passport_id = from_union([from_bool, from_none], obj.get("showPassportId"))
        show_rooms = from_union([from_bool, from_none], obj.get("showRooms"))
        show_season_tickets = from_union([from_bool, from_none], obj.get("showSeasonTickets"))
        show_taxonomy_children = from_union([from_bool, from_none], obj.get("showTaxonomyChildren"))
        show_taxonomy_localization = from_union([from_bool, from_none], obj.get("showTaxonomyLocalization"))
        show_taxonomy_visit_type = from_union([from_bool, from_none], obj.get("showTaxonomyVisitType"))
        show_test_record = from_union([from_bool, from_none], obj.get("showTestRecord"))
        show_utm = from_union([from_bool, from_none], obj.get("showUTM"))
        show_widget_color_theme = from_union([from_bool, from_none], obj.get("showWidgetColorTheme"))
        show_worker_description_in_event = from_union([from_bool, from_none], obj.get("showWorkerDescriptionInEvent"))
        show_worker_extra_id = from_union([from_bool, from_none], obj.get("showWorkerExtraId"))
        show_worker_status = from_union([from_bool, from_none], obj.get("showWorkerStatus"))
        skip_appointment_price_update = from_union([from_bool, from_none], obj.get("skipAppointmentPriceUpdate"))
        skip_cancel_if_client_not_appear = from_union([from_bool, from_none], obj.get("skipCancelIfClientNotAppear"))
        skip_service_filtering = from_union([from_bool, from_none], obj.get("skipServiceFiltering"))
        split_full_name_xls_export = from_union([from_bool, from_none], obj.get("splitFullNameXlsExport"))
        state_level_holidays = from_union([lambda x: from_list(lambda x: from_dict(lambda x: x, x), x), from_none], obj.get("stateLevelHolidays"))
        state_level_holidays_not_working = from_union([from_bool, from_none], obj.get("stateLevelHolidaysNotWorking"))
        taxonomy_children_max_age = from_union([from_float, from_none], obj.get("taxonomyChildrenMaxAge"))
        use_additional_durations = from_union([from_bool, from_none], obj.get("useAdditionalDurations"))
        use_adjacent_taxonomies = from_union([from_bool, from_none], obj.get("useAdjacentTaxonomies"))
        use_adjacent_taxonomies_slot_splitting = from_union([from_bool, from_none], obj.get("useAdjacentTaxonomiesSlotSplitting"))
        use_gt_app_method = from_union([from_bool, from_none], obj.get("useGtAppMethod"))
        work_week_end = from_union([from_float, from_none], obj.get("workWeekEnd"))
        work_week_start = from_union([from_float, from_none], obj.get("workWeekStart"))
        return PurpleBackofficeConfiguration(adjacent_taxonomies_treshold, allow_hide_service_for_booking, allow_hide_workers_from_schdeule, allow_sms_translit, appointment_future_moving, block_notification_for_any_available_adjacent_service, cabinets_enabled, check_client_overlapping, custom_online_payment_confirmation_template, default_gt_schedule_day_view, disable_appointment_client_inline_editor, edit_app_extra_id, edit_taxonomy_children, edit_taxonomy_visit_type, enable_black_list, enable_calculate_shedule, enable_client_card, enable_client_language, enable_client_medical_card_report, enable_custom_online_payment_confirmation, enable_extended_phone, enable_extended_records_client_statistics, enable_master_importance, enable_service_time_limit, enable_source_choice, enable_taxonomy_children_age_check, export_to_excel_removed_clients, feedback_customer_portal_message, feedback_customer_portal_thank_you_message, feedback_customer_portal_title, feed_back_min_rating, fin_id, fin_name, hide_customer_portal_footer, highlighted_resource, manual_exception_support, no_internet_alert, past_time_edit, payment_provider, readonly_resource_schedule, resource_timetable_type, revision_version, schdule_week_view_is_default, schedule_default_workers_limit, scheduler_week_view_type, schedule_worker_hours, show_additional_fields, show_address, show_birth_date, show_client_appear, show_client_appear_on_schedule, show_client_birthday_filter, show_client_contract_number, show_client_image, show_client_payment, show_defaulter_blockscreen, show_delivery_status, show_department_filter, show_departments, show_departments_configuration, show_email, show_extra_client_info, show_fax, show_fired_worker_appointment_alert, show_first_available_slot, show_gap_window, show_gender, show_gender_in_records, show_generatable_reports_screen, show_house_number, show_israel_city, show_kupat_holim, show_leads_screen, show_manual_changes, show_passport_id, show_rooms, show_season_tickets, show_taxonomy_children, show_taxonomy_localization, show_taxonomy_visit_type, show_test_record, show_utm, show_widget_color_theme, show_worker_description_in_event, show_worker_extra_id, show_worker_status, skip_appointment_price_update, skip_cancel_if_client_not_appear, skip_service_filtering, split_full_name_xls_export, state_level_holidays, state_level_holidays_not_working, taxonomy_children_max_age, use_additional_durations, use_adjacent_taxonomies, use_adjacent_taxonomies_slot_splitting, use_gt_app_method, work_week_end, work_week_start)

    def to_dict(self) -> dict:
        result: dict = {}
        result["adjacentTaxonomiesTreshold"] = from_union([to_float, from_none], self.adjacent_taxonomies_treshold)
        result["allowHideServiceForBooking"] = from_union([from_bool, from_none], self.allow_hide_service_for_booking)
        result["allowHideWorkersFromSchdeule"] = from_union([from_bool, from_none], self.allow_hide_workers_from_schdeule)
        result["allowSmsTranslit"] = from_union([from_bool, from_none], self.allow_sms_translit)
        result["appointmentFutureMoving"] = from_union([from_bool, from_none], self.appointment_future_moving)
        result["blockNotificationForAnyAvailableAdjacentService"] = from_union([from_bool, from_none], self.block_notification_for_any_available_adjacent_service)
        result["cabinetsEnabled"] = from_union([from_bool, from_none], self.cabinets_enabled)
        result["checkClientOverlapping"] = from_union([from_bool, from_none], self.check_client_overlapping)
        result["customOnlinePaymentConfirmationTemplate"] = from_union([from_str, from_none], self.custom_online_payment_confirmation_template)
        result["defaultGTScheduleDayView"] = from_union([from_bool, from_none], self.default_gt_schedule_day_view)
        result["disableAppointmentClientInlineEditor"] = from_union([from_bool, from_none], self.disable_appointment_client_inline_editor)
        result["editAppExtraId"] = from_union([from_bool, from_none], self.edit_app_extra_id)
        result["editTaxonomyChildren"] = from_union([from_bool, from_none], self.edit_taxonomy_children)
        result["editTaxonomyVisitType"] = from_union([from_bool, from_none], self.edit_taxonomy_visit_type)
        result["enableBlackList"] = from_union([from_bool, from_none], self.enable_black_list)
        result["enableCalculateShedule"] = from_union([from_bool, from_none], self.enable_calculate_shedule)
        result["enableClientCard"] = from_union([from_bool, from_none], self.enable_client_card)
        result["enableClientLanguage"] = from_union([from_bool, from_none], self.enable_client_language)
        result["enableClientMedicalCardReport"] = from_union([from_bool, from_none], self.enable_client_medical_card_report)
        result["enableCustomOnlinePaymentConfirmation"] = from_union([from_bool, from_none], self.enable_custom_online_payment_confirmation)
        result["enableExtendedPhone"] = from_union([from_bool, from_none], self.enable_extended_phone)
        result["enableExtendedRecordsClientStatistics"] = from_union([from_bool, from_none], self.enable_extended_records_client_statistics)
        result["enableMasterImportance"] = from_union([from_bool, from_none], self.enable_master_importance)
        result["enableServiceTimeLimit"] = from_union([from_bool, from_none], self.enable_service_time_limit)
        result["enableSourceChoice"] = from_union([from_bool, from_none], self.enable_source_choice)
        result["enableTaxonomyChildrenAgeCheck"] = from_union([from_bool, from_none], self.enable_taxonomy_children_age_check)
        result["exportToExcelRemovedClients"] = from_union([from_bool, from_none], self.export_to_excel_removed_clients)
        result["feedbackCustomerPortalMessage"] = from_union([from_str, from_none], self.feedback_customer_portal_message)
        result["feedbackCustomerPortalThankYouMessage"] = from_union([from_str, from_none], self.feedback_customer_portal_thank_you_message)
        result["feedbackCustomerPortalTitle"] = from_union([from_str, from_none], self.feedback_customer_portal_title)
        result["feedBackMinRating"] = from_union([lambda x: to_enum(FeedBackMinRating, x), from_none], self.feed_back_min_rating)
        result["finId"] = from_union([from_str, from_none], self.fin_id)
        result["finName"] = from_union([from_str, from_none], self.fin_name)
        result["hideCustomerPortalFooter"] = from_union([from_bool, from_none], self.hide_customer_portal_footer)
        result["highlightedResource"] = from_union([from_bool, from_none], self.highlighted_resource)
        result["manualExceptionSupport"] = from_union([from_bool, from_none], self.manual_exception_support)
        result["noInternetAlert"] = from_union([from_bool, from_none], self.no_internet_alert)
        result["pastTimeEdit"] = from_union([to_float, from_none], self.past_time_edit)
        result["paymentProvider"] = from_union([lambda x: to_enum(PaymentProvider, x), from_none], self.payment_provider)
        result["readonlyResourceSchedule"] = from_union([from_bool, from_none], self.readonly_resource_schedule)
        result["resourceTimetableType"] = from_union([lambda x: to_enum(ResourceTimetableType, x), from_none], self.resource_timetable_type)
        result["revisionVersion"] = from_union([to_float, from_none], self.revision_version)
        result["schduleWeekViewIsDefault"] = from_union([from_bool, from_none], self.schdule_week_view_is_default)
        result["scheduleDefaultWorkersLimit"] = from_union([to_float, from_none], self.schedule_default_workers_limit)
        result["schedulerWeekViewType"] = from_union([lambda x: to_enum(SchedulerWeekViewType, x), from_none], self.scheduler_week_view_type)
        result["scheduleWorkerHours"] = from_union([from_bool, from_none], self.schedule_worker_hours)
        result["showAdditionalFields"] = from_union([from_bool, from_none], self.show_additional_fields)
        result["showAddress"] = from_union([from_bool, from_none], self.show_address)
        result["showBirthDate"] = from_union([from_bool, from_none], self.show_birth_date)
        result["showClientAppear"] = from_union([from_bool, from_none], self.show_client_appear)
        result["showClientAppearOnSchedule"] = from_union([from_bool, from_none], self.show_client_appear_on_schedule)
        result["showClientBirthdayFilter"] = from_union([from_bool, from_none], self.show_client_birthday_filter)
        result["showClientContractNumber"] = from_union([from_bool, from_none], self.show_client_contract_number)
        result["showClientImage"] = from_union([from_bool, from_none], self.show_client_image)
        result["showClientPayment"] = from_union([from_bool, from_none], self.show_client_payment)
        result["showDefaulterBlockscreen"] = from_union([from_bool, from_none], self.show_defaulter_blockscreen)
        result["showDeliveryStatus"] = from_union([from_bool, from_none], self.show_delivery_status)
        result["showDepartmentFilter"] = from_union([from_bool, from_none], self.show_department_filter)
        result["showDepartments"] = from_union([from_bool, from_none], self.show_departments)
        result["showDepartmentsConfiguration"] = from_union([from_bool, from_none], self.show_departments_configuration)
        result["showEmail"] = from_union([from_bool, from_none], self.show_email)
        result["showExtraClientInfo"] = from_union([from_bool, from_none], self.show_extra_client_info)
        result["showFax"] = from_union([from_bool, from_none], self.show_fax)
        result["showFiredWorkerAppointmentAlert"] = from_union([from_bool, from_none], self.show_fired_worker_appointment_alert)
        result["showFirstAvailableSlot"] = from_union([from_bool, from_none], self.show_first_available_slot)
        result["showGapWindow"] = from_union([from_bool, from_none], self.show_gap_window)
        result["showGender"] = from_union([from_bool, from_none], self.show_gender)
        result["showGenderInRecords"] = from_union([from_bool, from_none], self.show_gender_in_records)
        result["showGeneratableReportsScreen"] = from_union([from_bool, from_none], self.show_generatable_reports_screen)
        result["showHouseNumber"] = from_union([from_bool, from_none], self.show_house_number)
        result["showIsraelCity"] = from_union([from_bool, from_none], self.show_israel_city)
        result["showKupatHolim"] = from_union([from_bool, from_none], self.show_kupat_holim)
        result["showLeadsScreen"] = from_union([from_bool, from_none], self.show_leads_screen)
        result["showManualChanges"] = from_union([from_bool, from_none], self.show_manual_changes)
        result["showPassportId"] = from_union([from_bool, from_none], self.show_passport_id)
        result["showRooms"] = from_union([from_bool, from_none], self.show_rooms)
        result["showSeasonTickets"] = from_union([from_bool, from_none], self.show_season_tickets)
        result["showTaxonomyChildren"] = from_union([from_bool, from_none], self.show_taxonomy_children)
        result["showTaxonomyLocalization"] = from_union([from_bool, from_none], self.show_taxonomy_localization)
        result["showTaxonomyVisitType"] = from_union([from_bool, from_none], self.show_taxonomy_visit_type)
        result["showTestRecord"] = from_union([from_bool, from_none], self.show_test_record)
        result["showUTM"] = from_union([from_bool, from_none], self.show_utm)
        result["showWidgetColorTheme"] = from_union([from_bool, from_none], self.show_widget_color_theme)
        result["showWorkerDescriptionInEvent"] = from_union([from_bool, from_none], self.show_worker_description_in_event)
        result["showWorkerExtraId"] = from_union([from_bool, from_none], self.show_worker_extra_id)
        result["showWorkerStatus"] = from_union([from_bool, from_none], self.show_worker_status)
        result["skipAppointmentPriceUpdate"] = from_union([from_bool, from_none], self.skip_appointment_price_update)
        result["skipCancelIfClientNotAppear"] = from_union([from_bool, from_none], self.skip_cancel_if_client_not_appear)
        result["skipServiceFiltering"] = from_union([from_bool, from_none], self.skip_service_filtering)
        result["splitFullNameXlsExport"] = from_union([from_bool, from_none], self.split_full_name_xls_export)
        result["stateLevelHolidays"] = from_union([lambda x: from_list(lambda x: from_dict(lambda x: x, x), x), from_none], self.state_level_holidays)
        result["stateLevelHolidaysNotWorking"] = from_union([from_bool, from_none], self.state_level_holidays_not_working)
        result["taxonomyChildrenMaxAge"] = from_union([to_float, from_none], self.taxonomy_children_max_age)
        result["useAdditionalDurations"] = from_union([from_bool, from_none], self.use_additional_durations)
        result["useAdjacentTaxonomies"] = from_union([from_bool, from_none], self.use_adjacent_taxonomies)
        result["useAdjacentTaxonomiesSlotSplitting"] = from_union([from_bool, from_none], self.use_adjacent_taxonomies_slot_splitting)
        result["useGtAppMethod"] = from_union([from_bool, from_none], self.use_gt_app_method)
        result["workWeekEnd"] = from_union([to_float, from_none], self.work_week_end)
        result["workWeekStart"] = from_union([to_float, from_none], self.work_week_start)
        return result


class BackofficeType(Enum):
    COMMON = "COMMON"
    GT = "GT"
    LL = "LL"
    MB = "MB"
    MU = "MU"


class FluffyBackofficeConfiguration:
    enable_master_importance: Optional[bool]
    resource_timetable_type: Optional[ResourceTimetableType]

    def __init__(self, enable_master_importance: Optional[bool], resource_timetable_type: Optional[ResourceTimetableType]) -> None:
        self.enable_master_importance = enable_master_importance
        self.resource_timetable_type = resource_timetable_type

    @staticmethod
    def from_dict(obj: Any) -> 'FluffyBackofficeConfiguration':
        assert isinstance(obj, dict)
        enable_master_importance = from_union([from_bool, from_none], obj.get("enableMasterImportance"))
        resource_timetable_type = from_union([ResourceTimetableType, from_none], obj.get("resourceTimetableType"))
        return FluffyBackofficeConfiguration(enable_master_importance, resource_timetable_type)

    def to_dict(self) -> dict:
        result: dict = {}
        result["enableMasterImportance"] = from_union([from_bool, from_none], self.enable_master_importance)
        result["resourceTimetableType"] = from_union([lambda x: to_enum(ResourceTimetableType, x), from_none], self.resource_timetable_type)
        return result


class PurpleCabinet:
    active: Optional[bool]
    id: Optional[str]
    name: Optional[str]

    def __init__(self, active: Optional[bool], id: Optional[str], name: Optional[str]) -> None:
        self.active = active
        self.id = id
        self.name = name

    @staticmethod
    def from_dict(obj: Any) -> 'PurpleCabinet':
        assert isinstance(obj, dict)
        active = from_union([from_bool, from_none], obj.get("active"))
        id = from_union([from_str, from_none], obj.get("id"))
        name = from_union([from_str, from_none], obj.get("name"))
        return PurpleCabinet(active, id, name)

    def to_dict(self) -> dict:
        result: dict = {}
        result["active"] = from_union([from_bool, from_none], self.active)
        result["id"] = from_union([from_str, from_none], self.id)
        result["name"] = from_union([from_str, from_none], self.name)
        return result


class PurpleCallbackWidgetConfiguration:
    title1: Optional[str]
    title2: Optional[str]

    def __init__(self, title1: Optional[str], title2: Optional[str]) -> None:
        self.title1 = title1
        self.title2 = title2

    @staticmethod
    def from_dict(obj: Any) -> 'PurpleCallbackWidgetConfiguration':
        assert isinstance(obj, dict)
        title1 = from_union([from_str, from_none], obj.get("title1"))
        title2 = from_union([from_str, from_none], obj.get("title2"))
        return PurpleCallbackWidgetConfiguration(title1, title2)

    def to_dict(self) -> dict:
        result: dict = {}
        result["title1"] = from_union([from_str, from_none], self.title1)
        result["title2"] = from_union([from_str, from_none], self.title2)
        return result


class PurpleConsumable:
    extra_id: str
    name: str
    quantity: float

    def __init__(self, extra_id: str, name: str, quantity: float) -> None:
        self.extra_id = extra_id
        self.name = name
        self.quantity = quantity

    @staticmethod
    def from_dict(obj: Any) -> 'PurpleConsumable':
        assert isinstance(obj, dict)
        extra_id = from_str(obj.get("extraID"))
        name = from_str(obj.get("name"))
        quantity = from_float(obj.get("quantity"))
        return PurpleConsumable(extra_id, name, quantity)

    def to_dict(self) -> dict:
        result: dict = {}
        result["extraID"] = from_str(self.extra_id)
        result["name"] = from_str(self.name)
        result["quantity"] = to_float(self.quantity)
        return result


class PurpleDepartment:
    id: str
    department_id: Optional[float]
    name: str

    def __init__(self, id: str, department_id: Optional[float], name: str) -> None:
        self.id = id
        self.department_id = department_id
        self.name = name

    @staticmethod
    def from_dict(obj: Any) -> 'PurpleDepartment':
        assert isinstance(obj, dict)
        id = from_str(obj.get("id"))
        department_id = from_union([from_float, from_none], obj.get("id_"))
        name = from_str(obj.get("name"))
        return PurpleDepartment(id, department_id, name)

    def to_dict(self) -> dict:
        result: dict = {}
        result["id"] = from_str(self.id)
        result["id_"] = from_union([to_float, from_none], self.department_id)
        result["name"] = from_str(self.name)
        return result


class AdditionalFieldsClass:
    name: str
    required_field: bool
    short_name: str
    type: AdditionalFieldType
    value: str

    def __init__(self, name: str, required_field: bool, short_name: str, type: AdditionalFieldType, value: str) -> None:
        self.name = name
        self.required_field = required_field
        self.short_name = short_name
        self.type = type
        self.value = value

    @staticmethod
    def from_dict(obj: Any) -> 'AdditionalFieldsClass':
        assert isinstance(obj, dict)
        name = from_str(obj.get("name"))
        required_field = from_bool(obj.get("requiredField"))
        short_name = from_str(obj.get("shortName"))
        type = AdditionalFieldType(obj.get("type"))
        value = from_str(obj.get("value"))
        return AdditionalFieldsClass(name, required_field, short_name, type, value)

    def to_dict(self) -> dict:
        result: dict = {}
        result["name"] = from_str(self.name)
        result["requiredField"] = from_bool(self.required_field)
        result["shortName"] = from_str(self.short_name)
        result["type"] = to_enum(AdditionalFieldType, self.type)
        result["value"] = from_str(self.value)
        return result


class Country(Enum):
    AM = "AM"
    BLR = "BLR"
    CH = "CH"
    DE = "DE"
    EMPTY = "_"
    ES = "ES"
    FI = "FI"
    FR = "FR"
    GE = "GE"
    HU = "HU"
    IL = "IL"
    KZ = "KZ"
    LI = "LI"
    LT = "LT"
    LV = "LV"
    RU = "RU"
    UA = "UA"
    UK = "UK"
    US = "US"
    UZ = "UZ"


class PurpleMetroStation:
    id: Optional[str]
    description: Optional[str]
    name: str

    def __init__(self, id: Optional[str], description: Optional[str], name: str) -> None:
        self.id = id
        self.description = description
        self.name = name

    @staticmethod
    def from_dict(obj: Any) -> 'PurpleMetroStation':
        assert isinstance(obj, dict)
        id = from_union([from_str, from_none], obj.get("_id"))
        description = from_union([from_str, from_none], obj.get("description"))
        name = from_str(obj.get("name"))
        return PurpleMetroStation(id, description, name)

    def to_dict(self) -> dict:
        result: dict = {}
        result["_id"] = from_union([from_str, from_none], self.id)
        result["description"] = from_union([from_str, from_none], self.description)
        result["name"] = from_str(self.name)
        return result


class AddressClass:
    address: Optional[str]
    address_add: Optional[str]
    admin_area: Optional[str]
    admin_area_type: Optional[str]
    building: Optional[str]
    corps: Optional[str]
    country: Country
    group: Optional[str]
    house_add: Optional[str]
    kilometer: Optional[str]
    latitude: Optional[str]
    locality: Optional[str]
    locality_type: Optional[str]
    longitude: Optional[str]
    metro_stations: Optional[List[PurpleMetroStation]]
    number: Optional[str]
    office: Optional[str]
    possesion: Optional[str]
    street: Optional[str]
    street_type: Optional[str]
    sub_admin_area: Optional[str]
    sub_admin_area_type: Optional[str]
    sub_locality: Optional[str]
    sub_locality_type: Optional[str]
    way: Optional[str]
    zip_code: Optional[str]

    def __init__(self, address: Optional[str], address_add: Optional[str], admin_area: Optional[str], admin_area_type: Optional[str], building: Optional[str], corps: Optional[str], country: Country, group: Optional[str], house_add: Optional[str], kilometer: Optional[str], latitude: Optional[str], locality: Optional[str], locality_type: Optional[str], longitude: Optional[str], metro_stations: Optional[List[PurpleMetroStation]], number: Optional[str], office: Optional[str], possesion: Optional[str], street: Optional[str], street_type: Optional[str], sub_admin_area: Optional[str], sub_admin_area_type: Optional[str], sub_locality: Optional[str], sub_locality_type: Optional[str], way: Optional[str], zip_code: Optional[str]) -> None:
        self.address = address
        self.address_add = address_add
        self.admin_area = admin_area
        self.admin_area_type = admin_area_type
        self.building = building
        self.corps = corps
        self.country = country
        self.group = group
        self.house_add = house_add
        self.kilometer = kilometer
        self.latitude = latitude
        self.locality = locality
        self.locality_type = locality_type
        self.longitude = longitude
        self.metro_stations = metro_stations
        self.number = number
        self.office = office
        self.possesion = possesion
        self.street = street
        self.street_type = street_type
        self.sub_admin_area = sub_admin_area
        self.sub_admin_area_type = sub_admin_area_type
        self.sub_locality = sub_locality
        self.sub_locality_type = sub_locality_type
        self.way = way
        self.zip_code = zip_code

    @staticmethod
    def from_dict(obj: Any) -> 'AddressClass':
        assert isinstance(obj, dict)
        address = from_union([from_str, from_none], obj.get("address"))
        address_add = from_union([from_str, from_none], obj.get("address_add"))
        admin_area = from_union([from_str, from_none], obj.get("admin_area"))
        admin_area_type = from_union([from_str, from_none], obj.get("admin_area_type"))
        building = from_union([from_str, from_none], obj.get("building"))
        corps = from_union([from_str, from_none], obj.get("corps"))
        country = Country(obj.get("country"))
        group = from_union([from_str, from_none], obj.get("group"))
        house_add = from_union([from_str, from_none], obj.get("house_add"))
        kilometer = from_union([from_str, from_none], obj.get("kilometer"))
        latitude = from_union([from_str, from_none], obj.get("latitude"))
        locality = from_union([from_str, from_none], obj.get("locality"))
        locality_type = from_union([from_str, from_none], obj.get("locality_type"))
        longitude = from_union([from_str, from_none], obj.get("longitude"))
        metro_stations = from_union([lambda x: from_list(PurpleMetroStation.from_dict, x), from_none], obj.get("metroStations"))
        number = from_union([from_str, from_none], obj.get("number"))
        office = from_union([from_str, from_none], obj.get("office"))
        possesion = from_union([from_str, from_none], obj.get("possesion"))
        street = from_union([from_str, from_none], obj.get("street"))
        street_type = from_union([from_str, from_none], obj.get("street_type"))
        sub_admin_area = from_union([from_str, from_none], obj.get("sub_admin_area"))
        sub_admin_area_type = from_union([from_str, from_none], obj.get("sub_admin_area_type"))
        sub_locality = from_union([from_str, from_none], obj.get("sub_locality"))
        sub_locality_type = from_union([from_str, from_none], obj.get("sub_locality_type"))
        way = from_union([from_str, from_none], obj.get("way"))
        zip_code = from_union([from_str, from_none], obj.get("zip_code"))
        return AddressClass(address, address_add, admin_area, admin_area_type, building, corps, country, group, house_add, kilometer, latitude, locality, locality_type, longitude, metro_stations, number, office, possesion, street, street_type, sub_admin_area, sub_admin_area_type, sub_locality, sub_locality_type, way, zip_code)

    def to_dict(self) -> dict:
        result: dict = {}
        result["address"] = from_union([from_str, from_none], self.address)
        result["address_add"] = from_union([from_str, from_none], self.address_add)
        result["admin_area"] = from_union([from_str, from_none], self.admin_area)
        result["admin_area_type"] = from_union([from_str, from_none], self.admin_area_type)
        result["building"] = from_union([from_str, from_none], self.building)
        result["corps"] = from_union([from_str, from_none], self.corps)
        result["country"] = to_enum(Country, self.country)
        result["group"] = from_union([from_str, from_none], self.group)
        result["house_add"] = from_union([from_str, from_none], self.house_add)
        result["kilometer"] = from_union([from_str, from_none], self.kilometer)
        result["latitude"] = from_union([from_str, from_none], self.latitude)
        result["locality"] = from_union([from_str, from_none], self.locality)
        result["locality_type"] = from_union([from_str, from_none], self.locality_type)
        result["longitude"] = from_union([from_str, from_none], self.longitude)
        result["metroStations"] = from_union([lambda x: from_list(lambda x: to_class(PurpleMetroStation, x), x), from_none], self.metro_stations)
        result["number"] = from_union([from_str, from_none], self.number)
        result["office"] = from_union([from_str, from_none], self.office)
        result["possesion"] = from_union([from_str, from_none], self.possesion)
        result["street"] = from_union([from_str, from_none], self.street)
        result["street_type"] = from_union([from_str, from_none], self.street_type)
        result["sub_admin_area"] = from_union([from_str, from_none], self.sub_admin_area)
        result["sub_admin_area_type"] = from_union([from_str, from_none], self.sub_admin_area_type)
        result["sub_locality"] = from_union([from_str, from_none], self.sub_locality)
        result["sub_locality_type"] = from_union([from_str, from_none], self.sub_locality_type)
        result["way"] = from_union([from_str, from_none], self.way)
        result["zip_code"] = from_union([from_str, from_none], self.zip_code)
        return result


class BusinessShowcaseAlias:
    internal_id: Optional[str]

    def __init__(self, internal_id: Optional[str]) -> None:
        self.internal_id = internal_id

    @staticmethod
    def from_dict(obj: Any) -> 'BusinessShowcaseAlias':
        assert isinstance(obj, dict)
        internal_id = from_union([from_str, from_none], obj.get("internalID"))
        return BusinessShowcaseAlias(internal_id)

    def to_dict(self) -> dict:
        result: dict = {}
        result["internalID"] = from_union([from_str, from_none], self.internal_id)
        return result


class PhoneClass:
    area_code: str
    country_code: str
    number: str

    def __init__(self, area_code: str, country_code: str, number: str) -> None:
        self.area_code = area_code
        self.country_code = country_code
        self.number = number

    @staticmethod
    def from_dict(obj: Any) -> 'PhoneClass':
        assert isinstance(obj, dict)
        area_code = from_str(obj.get("area_code"))
        country_code = from_str(obj.get("country_code"))
        number = from_str(obj.get("number"))
        return PhoneClass(area_code, country_code, number)

    def to_dict(self) -> dict:
        result: dict = {}
        result["area_code"] = from_str(self.area_code)
        result["country_code"] = from_str(self.country_code)
        result["number"] = from_str(self.number)
        return result


class LanguageList(Enum):
    AM_AM = "am-am"
    DE_DE = "de-de"
    EE_EE = "ee-ee"
    EN_US = "en-us"
    ES_ES = "es-es"
    FI_FI = "fi-fi"
    FR_FR = "fr-fr"
    GE_GE = "ge-ge"
    HE_IL = "he-il"
    HU_HU = "hu-hu"
    LT_LT = "lt-lt"
    LV_LV = "lv-lv"
    RU_RU = "ru-ru"
    UZ_UZ = "uz-uz"
    ZH_CN = "zh-cn"


class MarketingNotifications:
    accepted: bool
    active: bool
    use_sms_alpha_name: bool

    def __init__(self, accepted: bool, active: bool, use_sms_alpha_name: bool) -> None:
        self.accepted = accepted
        self.active = active
        self.use_sms_alpha_name = use_sms_alpha_name

    @staticmethod
    def from_dict(obj: Any) -> 'MarketingNotifications':
        assert isinstance(obj, dict)
        accepted = from_bool(obj.get("accepted"))
        active = from_bool(obj.get("active"))
        use_sms_alpha_name = from_bool(obj.get("useSmsAlphaName"))
        return MarketingNotifications(accepted, active, use_sms_alpha_name)

    def to_dict(self) -> dict:
        result: dict = {}
        result["accepted"] = from_bool(self.accepted)
        result["active"] = from_bool(self.active)
        result["useSmsAlphaName"] = from_bool(self.use_sms_alpha_name)
        return result


class Metro:
    color: Optional[str]
    distance: Optional[float]
    name: Optional[str]

    def __init__(self, color: Optional[str], distance: Optional[float], name: Optional[str]) -> None:
        self.color = color
        self.distance = distance
        self.name = name

    @staticmethod
    def from_dict(obj: Any) -> 'Metro':
        assert isinstance(obj, dict)
        color = from_union([from_str, from_none], obj.get("color"))
        distance = from_union([from_float, from_none], obj.get("distance"))
        name = from_union([from_str, from_none], obj.get("name"))
        return Metro(color, distance, name)

    def to_dict(self) -> dict:
        result: dict = {}
        result["color"] = from_union([from_str, from_none], self.color)
        result["distance"] = from_union([to_float, from_none], self.distance)
        result["name"] = from_union([from_str, from_none], self.name)
        return result


class PaymentMethods(Enum):
    AMEX = "Amex"
    MASTERCARD = "Mastercard"
    MONEY_BOOKERS = "MoneyBookers"
    PAY_PAL = "PayPal"
    VISA = "Visa"


class PricingType(Enum):
    DEFAULT = "DEFAULT"
    MASTER_TOPMASTER = "MASTER_TOPMASTER"


class ShowcaseElement:
    base_business_id: Optional[str]

    def __init__(self, base_business_id: Optional[str]) -> None:
        self.base_business_id = base_business_id

    @staticmethod
    def from_dict(obj: Any) -> 'ShowcaseElement':
        assert isinstance(obj, dict)
        base_business_id = from_union([from_str, from_none], obj.get("baseBusinessID"))
        return ShowcaseElement(base_business_id)

    def to_dict(self) -> dict:
        result: dict = {}
        result["baseBusinessID"] = from_union([from_str, from_none], self.base_business_id)
        return result


class SMSDuplicateFilter:
    active: Optional[bool]

    def __init__(self, active: Optional[bool]) -> None:
        self.active = active

    @staticmethod
    def from_dict(obj: Any) -> 'SMSDuplicateFilter':
        assert isinstance(obj, dict)
        active = from_union([from_bool, from_none], obj.get("active"))
        return SMSDuplicateFilter(active)

    def to_dict(self) -> dict:
        result: dict = {}
        result["active"] = from_union([from_bool, from_none], self.active)
        return result


class SocialNetwork(Enum):
    FACEBOOK = "Facebook"
    GOOGLE = "Google"
    G_BOOKING = "GBooking"
    LINKED_IN = "LinkedIn"
    MAILRU = "Mailru"
    ODNOKLASSNIKI = "Odnoklassniki"
    TWITTER = "Twitter"
    V_KONTAKTE = "VKontakte"
    YAHOO = "Yahoo"
    YANDEX = "Yandex"


class SocialNetworkSchema:
    handle: str
    """network id"""
    id: str
    social_network: SocialNetwork
    url: str

    def __init__(self, handle: str, id: str, social_network: SocialNetwork, url: str) -> None:
        self.handle = handle
        self.id = id
        self.social_network = social_network
        self.url = url

    @staticmethod
    def from_dict(obj: Any) -> 'SocialNetworkSchema':
        assert isinstance(obj, dict)
        handle = from_str(obj.get("handle"))
        id = from_str(obj.get("id"))
        social_network = SocialNetwork(obj.get("social_network"))
        url = from_str(obj.get("url"))
        return SocialNetworkSchema(handle, id, social_network, url)

    def to_dict(self) -> dict:
        result: dict = {}
        result["handle"] = from_str(self.handle)
        result["id"] = from_str(self.id)
        result["social_network"] = to_enum(SocialNetwork, self.social_network)
        result["url"] = from_str(self.url)
        return result


class TimeFrame:
    capacity: Optional[float]
    """смещение в минутах от начала дня"""
    end: float
    end_date: Union[datetime, float, None]
    extra_id: Optional[str]
    """уникальный идентификатор временного слота"""
    id: Optional[str]
    resources: Optional[List[str]]
    room_id: Optional[str]
    """смещение в минутах от начала дня"""
    start: float
    start_date: Union[datetime, float, None]

    def __init__(self, capacity: Optional[float], end: float, end_date: Union[datetime, float, None], extra_id: Optional[str], id: Optional[str], resources: Optional[List[str]], room_id: Optional[str], start: float, start_date: Union[datetime, float, None]) -> None:
        self.capacity = capacity
        self.end = end
        self.end_date = end_date
        self.extra_id = extra_id
        self.id = id
        self.resources = resources
        self.room_id = room_id
        self.start = start
        self.start_date = start_date

    @staticmethod
    def from_dict(obj: Any) -> 'TimeFrame':
        assert isinstance(obj, dict)
        capacity = from_union([from_float, from_none], obj.get("capacity"))
        end = from_float(obj.get("end"))
        end_date = from_union([from_float, from_datetime, from_none], obj.get("endDate"))
        extra_id = from_union([from_str, from_none], obj.get("extraId"))
        id = from_union([from_str, from_none], obj.get("id"))
        resources = from_union([lambda x: from_list(from_str, x), from_none], obj.get("resources"))
        room_id = from_union([from_str, from_none], obj.get("roomID"))
        start = from_float(obj.get("start"))
        start_date = from_union([from_float, from_datetime, from_none], obj.get("startDate"))
        return TimeFrame(capacity, end, end_date, extra_id, id, resources, room_id, start, start_date)

    def to_dict(self) -> dict:
        result: dict = {}
        result["capacity"] = from_union([to_float, from_none], self.capacity)
        result["end"] = to_float(self.end)
        result["endDate"] = from_union([to_float, lambda x: x.isoformat(), from_none], self.end_date)
        result["extraId"] = from_union([from_str, from_none], self.extra_id)
        result["id"] = from_union([from_str, from_none], self.id)
        result["resources"] = from_union([lambda x: from_list(from_str, x), from_none], self.resources)
        result["roomID"] = from_union([from_str, from_none], self.room_id)
        result["start"] = to_float(self.start)
        result["startDate"] = from_union([to_float, lambda x: x.isoformat(), from_none], self.start_date)
        return result


class Week:
    fri: List[TimeFrame]
    mon: List[TimeFrame]
    sat: List[TimeFrame]
    sun: List[TimeFrame]
    thu: List[TimeFrame]
    tue: List[TimeFrame]
    wed: List[TimeFrame]

    def __init__(self, fri: List[TimeFrame], mon: List[TimeFrame], sat: List[TimeFrame], sun: List[TimeFrame], thu: List[TimeFrame], tue: List[TimeFrame], wed: List[TimeFrame]) -> None:
        self.fri = fri
        self.mon = mon
        self.sat = sat
        self.sun = sun
        self.thu = thu
        self.tue = tue
        self.wed = wed

    @staticmethod
    def from_dict(obj: Any) -> 'Week':
        assert isinstance(obj, dict)
        fri = from_list(TimeFrame.from_dict, obj.get("fri"))
        mon = from_list(TimeFrame.from_dict, obj.get("mon"))
        sat = from_list(TimeFrame.from_dict, obj.get("sat"))
        sun = from_list(TimeFrame.from_dict, obj.get("sun"))
        thu = from_list(TimeFrame.from_dict, obj.get("thu"))
        tue = from_list(TimeFrame.from_dict, obj.get("tue"))
        wed = from_list(TimeFrame.from_dict, obj.get("wed"))
        return Week(fri, mon, sat, sun, thu, tue, wed)

    def to_dict(self) -> dict:
        result: dict = {}
        result["fri"] = from_list(lambda x: to_class(TimeFrame, x), self.fri)
        result["mon"] = from_list(lambda x: to_class(TimeFrame, x), self.mon)
        result["sat"] = from_list(lambda x: to_class(TimeFrame, x), self.sat)
        result["sun"] = from_list(lambda x: to_class(TimeFrame, x), self.sun)
        result["thu"] = from_list(lambda x: to_class(TimeFrame, x), self.thu)
        result["tue"] = from_list(lambda x: to_class(TimeFrame, x), self.tue)
        result["wed"] = from_list(lambda x: to_class(TimeFrame, x), self.wed)
        return result


class Timetable:
    """таблица регулярного недельного расписания"""
    """установлено ли расписание для сущности"""
    active: Optional[bool]
    week: Optional[Week]

    def __init__(self, active: Optional[bool], week: Optional[Week]) -> None:
        self.active = active
        self.week = week

    @staticmethod
    def from_dict(obj: Any) -> 'Timetable':
        assert isinstance(obj, dict)
        active = from_union([from_bool, from_none], obj.get("active"))
        week = from_union([Week.from_dict, from_none], obj.get("week"))
        return Timetable(active, week)

    def to_dict(self) -> dict:
        result: dict = {}
        result["active"] = from_union([from_bool, from_none], self.active)
        result["week"] = from_union([lambda x: to_class(Week, x), from_none], self.week)
        return result


class VerticalTranslation(Enum):
    BEAUTY = "BEAUTY"
    FITNESS = "FITNESS"
    GENERIC = "GENERIC"
    MEDICAL = "MEDICAL"
    NONE = "NONE"
    SPORT = "SPORT"
    YOGA = "YOGA"


class BusinessInfo:
    """Содержит детальную информацию о бизнесе — название, адрес, график работы и другое"""
    accepted_currency: Optional[List[CurrencyList]]
    additional_info: Optional[str]
    additional_fields: Optional[List[Union[List[Any], bool, AdditionalFieldsClass, float, int, None, str]]]
    """Адреса компании или филиала"""
    address: Optional[List[Union[List[Any], bool, AddressClass, float, int, None, str]]]
    auto_accept_appointment: Optional[bool]
    """если данный бизнес является витриной, идентификаторы бизнесов, которые входят в витрину"""
    business_showcase_aliases: Optional[List[BusinessShowcaseAlias]]
    contact_name: Optional[str]
    date_joined: Optional[datetime]
    description: Optional[str]
    """Список e-mail адресов компании или филиала"""
    email: Optional[str]
    fax: Optional[List[Union[List[Any], bool, PhoneClass, float, int, None, str]]]
    images: Optional[List[str]]
    instant_messaging: Optional[List[Dict[str, Any]]]
    """является ли данный бизнес витриной"""
    is_showcase: Optional[bool]
    language: Optional[LanguageList]
    logo_url: Optional[str]
    marketing_notifications: Optional[MarketingNotifications]
    metro: Optional[Metro]
    min_booking_time: Optional[float]
    """Список телефонов бизнеса"""
    mobile: Optional[List[Union[List[Any], bool, PhoneClass, float, int, None, str]]]
    """Название бизнеса"""
    name: Optional[str]
    network_id: Optional[float]
    newbo_enabled_for: Optional[List[str]]
    payment_methods: Optional[PaymentMethods]
    """Список телефонов бизнеса"""
    phone: Optional[List[Union[List[Any], bool, PhoneClass, float, int, None, str]]]
    phone_mask: Optional[str]
    pricing_type: Optional[PricingType]
    revision_version: Optional[float]
    scheduler_tick: Optional[float]
    """Короткое название филиала"""
    short_name: Optional[str]
    show_appointment_color: Optional[bool]
    show_appointment_tooltip: Optional[bool]
    """идентификаторы витрин, в которых участвует данный бизнес"""
    showcases: Optional[List[ShowcaseElement]]
    show_resource_work_statistics: Optional[bool]
    show_worker_profession: Optional[bool]
    skip_billing: Optional[bool]
    sms_duplicate_filter: Optional[SMSDuplicateFilter]
    social_network: Optional[List[SocialNetworkSchema]]
    timetable: Optional[Timetable]
    timezone: Optional[str]
    vertical_translation: Optional[VerticalTranslation]
    website: Optional[str]

    def __init__(self, accepted_currency: Optional[List[CurrencyList]], additional_info: Optional[str], additional_fields: Optional[List[Union[List[Any], bool, AdditionalFieldsClass, float, int, None, str]]], address: Optional[List[Union[List[Any], bool, AddressClass, float, int, None, str]]], auto_accept_appointment: Optional[bool], business_showcase_aliases: Optional[List[BusinessShowcaseAlias]], contact_name: Optional[str], date_joined: Optional[datetime], description: Optional[str], email: Optional[str], fax: Optional[List[Union[List[Any], bool, PhoneClass, float, int, None, str]]], images: Optional[List[str]], instant_messaging: Optional[List[Dict[str, Any]]], is_showcase: Optional[bool], language: Optional[LanguageList], logo_url: Optional[str], marketing_notifications: Optional[MarketingNotifications], metro: Optional[Metro], min_booking_time: Optional[float], mobile: Optional[List[Union[List[Any], bool, PhoneClass, float, int, None, str]]], name: Optional[str], network_id: Optional[float], newbo_enabled_for: Optional[List[str]], payment_methods: Optional[PaymentMethods], phone: Optional[List[Union[List[Any], bool, PhoneClass, float, int, None, str]]], phone_mask: Optional[str], pricing_type: Optional[PricingType], revision_version: Optional[float], scheduler_tick: Optional[float], short_name: Optional[str], show_appointment_color: Optional[bool], show_appointment_tooltip: Optional[bool], showcases: Optional[List[ShowcaseElement]], show_resource_work_statistics: Optional[bool], show_worker_profession: Optional[bool], skip_billing: Optional[bool], sms_duplicate_filter: Optional[SMSDuplicateFilter], social_network: Optional[List[SocialNetworkSchema]], timetable: Optional[Timetable], timezone: Optional[str], vertical_translation: Optional[VerticalTranslation], website: Optional[str]) -> None:
        self.accepted_currency = accepted_currency
        self.additional_info = additional_info
        self.additional_fields = additional_fields
        self.address = address
        self.auto_accept_appointment = auto_accept_appointment
        self.business_showcase_aliases = business_showcase_aliases
        self.contact_name = contact_name
        self.date_joined = date_joined
        self.description = description
        self.email = email
        self.fax = fax
        self.images = images
        self.instant_messaging = instant_messaging
        self.is_showcase = is_showcase
        self.language = language
        self.logo_url = logo_url
        self.marketing_notifications = marketing_notifications
        self.metro = metro
        self.min_booking_time = min_booking_time
        self.mobile = mobile
        self.name = name
        self.network_id = network_id
        self.newbo_enabled_for = newbo_enabled_for
        self.payment_methods = payment_methods
        self.phone = phone
        self.phone_mask = phone_mask
        self.pricing_type = pricing_type
        self.revision_version = revision_version
        self.scheduler_tick = scheduler_tick
        self.short_name = short_name
        self.show_appointment_color = show_appointment_color
        self.show_appointment_tooltip = show_appointment_tooltip
        self.showcases = showcases
        self.show_resource_work_statistics = show_resource_work_statistics
        self.show_worker_profession = show_worker_profession
        self.skip_billing = skip_billing
        self.sms_duplicate_filter = sms_duplicate_filter
        self.social_network = social_network
        self.timetable = timetable
        self.timezone = timezone
        self.vertical_translation = vertical_translation
        self.website = website

    @staticmethod
    def from_dict(obj: Any) -> 'BusinessInfo':
        assert isinstance(obj, dict)
        accepted_currency = from_union([lambda x: from_list(CurrencyList, x), from_none], obj.get("accepted_currency"))
        additional_info = from_union([from_none, from_str], obj.get("additional_info"))
        additional_fields = from_union([lambda x: from_list(lambda x: from_union([from_none, from_float, from_int, from_bool, from_str, lambda x: from_list(lambda x: x, x), AdditionalFieldsClass.from_dict], x), x), from_none], obj.get("additionalFields"))
        address = from_union([lambda x: from_list(lambda x: from_union([from_none, from_float, from_int, from_bool, from_str, lambda x: from_list(lambda x: x, x), AddressClass.from_dict], x), x), from_none], obj.get("address"))
        auto_accept_appointment = from_union([from_bool, from_none], obj.get("autoAcceptAppointment"))
        business_showcase_aliases = from_union([lambda x: from_list(BusinessShowcaseAlias.from_dict, x), from_none], obj.get("businessShowcaseAliases"))
        contact_name = from_union([from_str, from_none], obj.get("contactName"))
        date_joined = from_union([from_datetime, from_none], obj.get("date_joined"))
        description = from_union([from_str, from_none], obj.get("description"))
        email = from_union([from_str, from_none], obj.get("email"))
        fax = from_union([lambda x: from_list(lambda x: from_union([from_none, from_float, from_int, from_bool, from_str, lambda x: from_list(lambda x: x, x), PhoneClass.from_dict], x), x), from_none], obj.get("fax"))
        images = from_union([lambda x: from_list(from_str, x), from_none], obj.get("images"))
        instant_messaging = from_union([lambda x: from_list(lambda x: from_dict(lambda x: x, x), x), from_none], obj.get("instant_messaging"))
        is_showcase = from_union([from_bool, from_none], obj.get("isShowcase"))
        language = from_union([LanguageList, from_none], obj.get("language"))
        logo_url = from_union([from_none, from_str], obj.get("logo_url"))
        marketing_notifications = from_union([MarketingNotifications.from_dict, from_none], obj.get("marketingNotifications"))
        metro = from_union([Metro.from_dict, from_none], obj.get("metro"))
        min_booking_time = from_union([from_float, from_none], obj.get("min_booking_time"))
        mobile = from_union([lambda x: from_list(lambda x: from_union([from_none, from_float, from_int, from_bool, from_str, lambda x: from_list(lambda x: x, x), PhoneClass.from_dict], x), x), from_none], obj.get("mobile"))
        name = from_union([from_str, from_none], obj.get("name"))
        network_id = from_union([from_float, from_none], obj.get("networkID"))
        newbo_enabled_for = from_union([lambda x: from_list(from_str, x), from_none], obj.get("newboEnabledFor"))
        payment_methods = from_union([PaymentMethods, from_none], obj.get("paymentMethods"))
        phone = from_union([lambda x: from_list(lambda x: from_union([from_none, from_float, from_int, from_bool, from_str, lambda x: from_list(lambda x: x, x), PhoneClass.from_dict], x), x), from_none], obj.get("phone"))
        phone_mask = from_union([from_none, from_str], obj.get("phone_mask"))
        pricing_type = from_union([PricingType, from_none], obj.get("pricingType"))
        revision_version = from_union([from_float, from_none], obj.get("revisionVersion"))
        scheduler_tick = from_union([from_float, from_none], obj.get("schedulerTick"))
        short_name = from_union([from_none, from_str], obj.get("shortName"))
        show_appointment_color = from_union([from_bool, from_none], obj.get("showAppointmentColor"))
        show_appointment_tooltip = from_union([from_bool, from_none], obj.get("showAppointmentTooltip"))
        showcases = from_union([lambda x: from_list(ShowcaseElement.from_dict, x), from_none], obj.get("showcases"))
        show_resource_work_statistics = from_union([from_bool, from_none], obj.get("showResourceWorkStatistics"))
        show_worker_profession = from_union([from_bool, from_none], obj.get("showWorkerProfession"))
        skip_billing = from_union([from_bool, from_none], obj.get("skipBilling"))
        sms_duplicate_filter = from_union([SMSDuplicateFilter.from_dict, from_none], obj.get("smsDuplicateFilter"))
        social_network = from_union([lambda x: from_list(SocialNetworkSchema.from_dict, x), from_none], obj.get("social_network"))
        timetable = from_union([Timetable.from_dict, from_none], obj.get("timetable"))
        timezone = from_union([from_none, from_str], obj.get("timezone"))
        vertical_translation = from_union([VerticalTranslation, from_none], obj.get("verticalTranslation"))
        website = from_union([from_str, from_none], obj.get("website"))
        return BusinessInfo(accepted_currency, additional_info, additional_fields, address, auto_accept_appointment, business_showcase_aliases, contact_name, date_joined, description, email, fax, images, instant_messaging, is_showcase, language, logo_url, marketing_notifications, metro, min_booking_time, mobile, name, network_id, newbo_enabled_for, payment_methods, phone, phone_mask, pricing_type, revision_version, scheduler_tick, short_name, show_appointment_color, show_appointment_tooltip, showcases, show_resource_work_statistics, show_worker_profession, skip_billing, sms_duplicate_filter, social_network, timetable, timezone, vertical_translation, website)

    def to_dict(self) -> dict:
        result: dict = {}
        result["accepted_currency"] = from_union([lambda x: from_list(lambda x: to_enum(CurrencyList, x), x), from_none], self.accepted_currency)
        result["additional_info"] = from_union([from_none, from_str], self.additional_info)
        result["additionalFields"] = from_union([lambda x: from_list(lambda x: from_union([from_none, to_float, from_int, from_bool, from_str, lambda x: from_list(lambda x: x, x), lambda x: to_class(AdditionalFieldsClass, x)], x), x), from_none], self.additional_fields)
        result["address"] = from_union([lambda x: from_list(lambda x: from_union([from_none, to_float, from_int, from_bool, from_str, lambda x: from_list(lambda x: x, x), lambda x: to_class(AddressClass, x)], x), x), from_none], self.address)
        result["autoAcceptAppointment"] = from_union([from_bool, from_none], self.auto_accept_appointment)
        result["businessShowcaseAliases"] = from_union([lambda x: from_list(lambda x: to_class(BusinessShowcaseAlias, x), x), from_none], self.business_showcase_aliases)
        result["contactName"] = from_union([from_str, from_none], self.contact_name)
        result["date_joined"] = from_union([lambda x: x.isoformat(), from_none], self.date_joined)
        result["description"] = from_union([from_str, from_none], self.description)
        result["email"] = from_union([from_str, from_none], self.email)
        result["fax"] = from_union([lambda x: from_list(lambda x: from_union([from_none, to_float, from_int, from_bool, from_str, lambda x: from_list(lambda x: x, x), lambda x: to_class(PhoneClass, x)], x), x), from_none], self.fax)
        result["images"] = from_union([lambda x: from_list(from_str, x), from_none], self.images)
        result["instant_messaging"] = from_union([lambda x: from_list(lambda x: from_dict(lambda x: x, x), x), from_none], self.instant_messaging)
        result["isShowcase"] = from_union([from_bool, from_none], self.is_showcase)
        result["language"] = from_union([lambda x: to_enum(LanguageList, x), from_none], self.language)
        result["logo_url"] = from_union([from_none, from_str], self.logo_url)
        result["marketingNotifications"] = from_union([lambda x: to_class(MarketingNotifications, x), from_none], self.marketing_notifications)
        result["metro"] = from_union([lambda x: to_class(Metro, x), from_none], self.metro)
        result["min_booking_time"] = from_union([to_float, from_none], self.min_booking_time)
        result["mobile"] = from_union([lambda x: from_list(lambda x: from_union([from_none, to_float, from_int, from_bool, from_str, lambda x: from_list(lambda x: x, x), lambda x: to_class(PhoneClass, x)], x), x), from_none], self.mobile)
        result["name"] = from_union([from_str, from_none], self.name)
        result["networkID"] = from_union([to_float, from_none], self.network_id)
        result["newboEnabledFor"] = from_union([lambda x: from_list(from_str, x), from_none], self.newbo_enabled_for)
        result["paymentMethods"] = from_union([lambda x: to_enum(PaymentMethods, x), from_none], self.payment_methods)
        result["phone"] = from_union([lambda x: from_list(lambda x: from_union([from_none, to_float, from_int, from_bool, from_str, lambda x: from_list(lambda x: x, x), lambda x: to_class(PhoneClass, x)], x), x), from_none], self.phone)
        result["phone_mask"] = from_union([from_none, from_str], self.phone_mask)
        result["pricingType"] = from_union([lambda x: to_enum(PricingType, x), from_none], self.pricing_type)
        result["revisionVersion"] = from_union([to_float, from_none], self.revision_version)
        result["schedulerTick"] = from_union([to_float, from_none], self.scheduler_tick)
        result["shortName"] = from_union([from_none, from_str], self.short_name)
        result["showAppointmentColor"] = from_union([from_bool, from_none], self.show_appointment_color)
        result["showAppointmentTooltip"] = from_union([from_bool, from_none], self.show_appointment_tooltip)
        result["showcases"] = from_union([lambda x: from_list(lambda x: to_class(ShowcaseElement, x), x), from_none], self.showcases)
        result["showResourceWorkStatistics"] = from_union([from_bool, from_none], self.show_resource_work_statistics)
        result["showWorkerProfession"] = from_union([from_bool, from_none], self.show_worker_profession)
        result["skipBilling"] = from_union([from_bool, from_none], self.skip_billing)
        result["smsDuplicateFilter"] = from_union([lambda x: to_class(SMSDuplicateFilter, x), from_none], self.sms_duplicate_filter)
        result["social_network"] = from_union([lambda x: from_list(lambda x: to_class(SocialNetworkSchema, x), x), from_none], self.social_network)
        result["timetable"] = from_union([lambda x: to_class(Timetable, x), from_none], self.timetable)
        result["timezone"] = from_union([from_none, from_str], self.timezone)
        result["verticalTranslation"] = from_union([lambda x: to_enum(VerticalTranslation, x), from_none], self.vertical_translation)
        result["website"] = from_union([from_str, from_none], self.website)
        return result


class Group(Enum):
    FRENCH = "FRENCH"
    GENERAL = "GENERAL"
    HUNGARIAN = "HUNGARIAN"
    LATVIAN = "LATVIAN"


class FieldElement(Enum):
    EMAIL = "email"
    NAME = "name"
    SURNAME = "surname"


class PurpleMiniWidgetConfiguration:
    fields: Optional[List[FieldElement]]
    title1: Optional[str]
    title2: Optional[str]

    def __init__(self, fields: Optional[List[FieldElement]], title1: Optional[str], title2: Optional[str]) -> None:
        self.fields = fields
        self.title1 = title1
        self.title2 = title2

    @staticmethod
    def from_dict(obj: Any) -> 'PurpleMiniWidgetConfiguration':
        assert isinstance(obj, dict)
        fields = from_union([lambda x: from_list(FieldElement, x), from_none], obj.get("fields"))
        title1 = from_union([from_str, from_none], obj.get("title1"))
        title2 = from_union([from_str, from_none], obj.get("title2"))
        return PurpleMiniWidgetConfiguration(fields, title1, title2)

    def to_dict(self) -> dict:
        result: dict = {}
        result["fields"] = from_union([lambda x: from_list(lambda x: to_enum(FieldElement, x), x), from_none], self.fields)
        result["title1"] = from_union([from_str, from_none], self.title1)
        result["title2"] = from_union([from_str, from_none], self.title2)
        return result


class PurpleTaxonomiesComplex:
    name: Optional[str]
    taxonomies: Optional[List[str]]

    def __init__(self, name: Optional[str], taxonomies: Optional[List[str]]) -> None:
        self.name = name
        self.taxonomies = taxonomies

    @staticmethod
    def from_dict(obj: Any) -> 'PurpleTaxonomiesComplex':
        assert isinstance(obj, dict)
        name = from_union([from_str, from_none], obj.get("name"))
        taxonomies = from_union([lambda x: from_list(from_str, x), from_none], obj.get("taxonomies"))
        return PurpleTaxonomiesComplex(name, taxonomies)

    def to_dict(self) -> dict:
        result: dict = {}
        result["name"] = from_union([from_str, from_none], self.name)
        result["taxonomies"] = from_union([lambda x: from_list(from_str, x), from_none], self.taxonomies)
        return result


class PurpleTopServices:
    services: Optional[List[Any]]
    status: Optional[str]

    def __init__(self, services: Optional[List[Any]], status: Optional[str]) -> None:
        self.services = services
        self.status = status

    @staticmethod
    def from_dict(obj: Any) -> 'PurpleTopServices':
        assert isinstance(obj, dict)
        services = from_union([lambda x: from_list(lambda x: x, x), from_none], obj.get("services"))
        status = from_union([from_str, from_none], obj.get("status"))
        return PurpleTopServices(services, status)

    def to_dict(self) -> dict:
        result: dict = {}
        result["services"] = from_union([lambda x: from_list(lambda x: x, x), from_none], self.services)
        result["status"] = from_union([from_str, from_none], self.status)
        return result


class PurpleBookableDateRanges:
    enabled: Optional[bool]
    end: Any
    start: Any

    def __init__(self, enabled: Optional[bool], end: Any, start: Any) -> None:
        self.enabled = enabled
        self.end = end
        self.start = start

    @staticmethod
    def from_dict(obj: Any) -> 'PurpleBookableDateRanges':
        assert isinstance(obj, dict)
        enabled = from_union([from_bool, from_none], obj.get("enabled"))
        end = obj.get("end")
        start = obj.get("start")
        return PurpleBookableDateRanges(enabled, end, start)

    def to_dict(self) -> dict:
        result: dict = {}
        result["enabled"] = from_union([from_bool, from_none], self.enabled)
        result["end"] = self.end
        result["start"] = self.start
        return result


class PurpleClientBlockingSettings:
    appointment_client_block: Optional[bool]
    appointment_client_block_days: Optional[float]
    appointment_client_block_text: Optional[str]
    block_if_future_record_exists: Optional[bool]
    block_repeated_records_count: Optional[float]
    block_repeated_records_range: Optional[float]
    block_repeated_records_text: Optional[str]

    def __init__(self, appointment_client_block: Optional[bool], appointment_client_block_days: Optional[float], appointment_client_block_text: Optional[str], block_if_future_record_exists: Optional[bool], block_repeated_records_count: Optional[float], block_repeated_records_range: Optional[float], block_repeated_records_text: Optional[str]) -> None:
        self.appointment_client_block = appointment_client_block
        self.appointment_client_block_days = appointment_client_block_days
        self.appointment_client_block_text = appointment_client_block_text
        self.block_if_future_record_exists = block_if_future_record_exists
        self.block_repeated_records_count = block_repeated_records_count
        self.block_repeated_records_range = block_repeated_records_range
        self.block_repeated_records_text = block_repeated_records_text

    @staticmethod
    def from_dict(obj: Any) -> 'PurpleClientBlockingSettings':
        assert isinstance(obj, dict)
        appointment_client_block = from_union([from_bool, from_none], obj.get("appointmentClientBlock"))
        appointment_client_block_days = from_union([from_float, from_none], obj.get("appointmentClientBlockDays"))
        appointment_client_block_text = from_union([from_str, from_none], obj.get("appointmentClientBlockText"))
        block_if_future_record_exists = from_union([from_bool, from_none], obj.get("blockIfFutureRecordExists"))
        block_repeated_records_count = from_union([from_float, from_none], obj.get("blockRepeatedRecordsCount"))
        block_repeated_records_range = from_union([from_float, from_none], obj.get("blockRepeatedRecordsRange"))
        block_repeated_records_text = from_union([from_str, from_none], obj.get("blockRepeatedRecordsText"))
        return PurpleClientBlockingSettings(appointment_client_block, appointment_client_block_days, appointment_client_block_text, block_if_future_record_exists, block_repeated_records_count, block_repeated_records_range, block_repeated_records_text)

    def to_dict(self) -> dict:
        result: dict = {}
        result["appointmentClientBlock"] = from_union([from_bool, from_none], self.appointment_client_block)
        result["appointmentClientBlockDays"] = from_union([to_float, from_none], self.appointment_client_block_days)
        result["appointmentClientBlockText"] = from_union([from_str, from_none], self.appointment_client_block_text)
        result["blockIfFutureRecordExists"] = from_union([from_bool, from_none], self.block_if_future_record_exists)
        result["blockRepeatedRecordsCount"] = from_union([to_float, from_none], self.block_repeated_records_count)
        result["blockRepeatedRecordsRange"] = from_union([to_float, from_none], self.block_repeated_records_range)
        result["blockRepeatedRecordsText"] = from_union([from_str, from_none], self.block_repeated_records_text)
        return result


class CracServer(Enum):
    CRAC = "CRAC"
    CRAC_PROD3 = "CRAC_PROD3"


class Rule(Enum):
    CUSTOM = "CUSTOM"
    NEAREST_INTEGER = "NEAREST_INTEGER"
    TWO_DECIMALS = "TWO_DECIMALS"


class PurpleDiscountedPriceRounding:
    rule: Optional[Rule]
    value: Optional[float]

    def __init__(self, rule: Optional[Rule], value: Optional[float]) -> None:
        self.rule = rule
        self.value = value

    @staticmethod
    def from_dict(obj: Any) -> 'PurpleDiscountedPriceRounding':
        assert isinstance(obj, dict)
        rule = from_union([Rule, from_none], obj.get("rule"))
        value = from_union([from_float, from_none], obj.get("value"))
        return PurpleDiscountedPriceRounding(rule, value)

    def to_dict(self) -> dict:
        result: dict = {}
        result["rule"] = from_union([lambda x: to_enum(Rule, x), from_none], self.rule)
        result["value"] = from_union([to_float, from_none], self.value)
        return result


class Payment(Enum):
    OPTIONAL = "OPTIONAL"
    REQUIRED = "REQUIRED"
    WITHOUT = "WITHOUT"


class DiscountType(Enum):
    PERCENT = "PERCENT"


class PurpleSocialSharing:
    active: Optional[bool]
    discount_amount: Optional[float]
    discount_enabled: Optional[bool]
    discount_type: Optional[DiscountType]
    text: Optional[str]
    widget_text: Optional[str]

    def __init__(self, active: Optional[bool], discount_amount: Optional[float], discount_enabled: Optional[bool], discount_type: Optional[DiscountType], text: Optional[str], widget_text: Optional[str]) -> None:
        self.active = active
        self.discount_amount = discount_amount
        self.discount_enabled = discount_enabled
        self.discount_type = discount_type
        self.text = text
        self.widget_text = widget_text

    @staticmethod
    def from_dict(obj: Any) -> 'PurpleSocialSharing':
        assert isinstance(obj, dict)
        active = from_union([from_bool, from_none], obj.get("active"))
        discount_amount = from_union([from_float, from_none], obj.get("discountAmount"))
        discount_enabled = from_union([from_bool, from_none], obj.get("discountEnabled"))
        discount_type = from_union([DiscountType, from_none], obj.get("discountType"))
        text = from_union([from_none, from_str], obj.get("text"))
        widget_text = from_union([from_none, from_str], obj.get("widgetText"))
        return PurpleSocialSharing(active, discount_amount, discount_enabled, discount_type, text, widget_text)

    def to_dict(self) -> dict:
        result: dict = {}
        result["active"] = from_union([from_bool, from_none], self.active)
        result["discountAmount"] = from_union([to_float, from_none], self.discount_amount)
        result["discountEnabled"] = from_union([from_bool, from_none], self.discount_enabled)
        result["discountType"] = from_union([lambda x: to_enum(DiscountType, x), from_none], self.discount_type)
        result["text"] = from_union([from_none, from_str], self.text)
        result["widgetText"] = from_union([from_none, from_str], self.widget_text)
        return result


class UseDirectScheduleRead(Enum):
    ALL = "ALL"
    AUTHENTICATED = "AUTHENTICATED"
    GUEST = "GUEST"
    NONE = "NONE"


class PurpleWidgetConfiguration:
    additional_name: Optional[str]
    alignment_taxonomy_slots: Optional[bool]
    allow_auto_select: Optional[bool]
    allow_book_visitor: Optional[bool]
    allow_skip_time_check: Optional[bool]
    appointment_confirmation_text: Optional[str]
    appointment_confirmation_title: Optional[str]
    ask_client_birthday: Optional[bool]
    ask_client_gender: Optional[bool]
    bookable_date_ranges: Optional[PurpleBookableDateRanges]
    bookable_months_count: Optional[float]
    calendar_mode: Optional[bool]
    calendar_mode_hide_time: Optional[bool]
    client_blocking_settings: Optional[PurpleClientBlockingSettings]
    client_comment_title: Optional[str]
    crac_server: Optional[CracServer]
    crac_slot_size: Optional[float]
    crunchv2: Optional[bool]
    day_off_label: Optional[str]
    days_forward: Optional[float]
    day_unavailable_label: Optional[str]
    default_service_img_url: Optional[str]
    default_worker_img_url: Optional[str]
    deny_same_time_records: Optional[bool]
    disabled_taxonomies_text: Optional[str]
    disable_mobile_widget: Optional[bool]
    disable_widget: Optional[bool]
    disable_widget_message: Optional[str]
    discounted_price_rounding: Optional[PurpleDiscountedPriceRounding]
    display_slot_size: Optional[float]
    dont_require_email: Optional[bool]
    email_is_mandatory: Optional[bool]
    enable_override_footer: Optional[bool]
    enable_warning_contact_data: Optional[bool]
    extra_visitors: Optional[bool]
    filter_non_insurance_schedule: Optional[bool]
    hide_any_worker_booking: Optional[bool]
    hide_call_button: Optional[bool]
    hide_empty_days: Optional[bool]
    hide_g_booking_logo: Optional[bool]
    hide_gray_slots: Optional[bool]
    hide_new_appointment_button: Optional[bool]
    hide_prices: Optional[bool]
    hide_social_networks_authentication: Optional[bool]
    insurance_client_support_phone: Optional[List[Union[List[Any], bool, PhoneClass, float, int, None, str]]]
    max_service_booking: Optional[float]
    max_timeslot_booking: Optional[float]
    middle_name_support: Optional[bool]
    most_free_enable: Optional[bool]
    multi_service_booking: Optional[bool]
    multi_timeslot_booking: Optional[bool]
    multi_timeslot_booking_all_days: Optional[bool]
    new_widget_theme: Optional[Dict[str, Any]]
    no_default_images: Optional[bool]
    override_footer: Optional[str]
    payment: Optional[Payment]
    payment_provider: Optional[PaymentProvider]
    require_agreement: Optional[bool]
    require_agreement_link: Optional[str]
    revision_version: Optional[float]
    short_link: Optional[str]
    show_all_workers: Optional[bool]
    show_client_address: Optional[bool]
    show_client_comment: Optional[bool]
    show_disabled_taxonomies: Optional[bool]
    show_drink_question: Optional[bool]
    show_map: Optional[bool]
    show_surname_first: Optional[bool]
    show_talk_question: Optional[bool]
    show_taxonomy_confirmation_alert: Optional[bool]
    skip_authentication: Optional[bool]
    skip_days_forward: Optional[bool]
    skip_mobile_map: Optional[bool]
    skip_service_duration_alignment: Optional[bool]
    skip_service_selection: Optional[bool]
    skip_time_selection: Optional[bool]
    skip_time_selection_service_i_ds: Optional[List[str]]
    skip_worker_selected_service_i_ds: Optional[List[str]]
    skip_worker_services_selection: Optional[bool]
    social_network_image: Optional[str]
    social_sharing: Optional[PurpleSocialSharing]
    sort_by_most_free: Optional[bool]
    sort_workers_by_workload: Optional[bool]
    split_insurance_client: Optional[bool]
    split_name: Optional[bool]
    tentative_ttl: Optional[float]
    theme: Optional[str]
    use_appointment_reminder: Optional[bool]
    use_business_schedule_for_unavailable_label: Optional[bool]
    use_clusters_map: Optional[bool]
    use_coupon: Optional[bool]
    use_crac: Optional[bool]
    use_default_service_img: Optional[bool]
    use_default_worker_img: Optional[bool]
    use_direct_schedule_read: Optional[UseDirectScheduleRead]
    use_insurance_guarantee_letter: Optional[bool]
    use_insurance_select: Optional[bool]
    use_med_auth: Optional[bool]
    use_middle_name: Optional[bool]
    use_new_reserve_api: Optional[bool]
    use_resource_page_loading: Optional[bool]
    use_sort_by_name: Optional[bool]
    warning_contact_data_text: Optional[str]
    widget_use_crac: Optional[bool]
    without_workers: Optional[bool]
    worker_unavailability_text: Optional[str]
    worker_name_reverse: Optional[bool]

    def __init__(self, additional_name: Optional[str], alignment_taxonomy_slots: Optional[bool], allow_auto_select: Optional[bool], allow_book_visitor: Optional[bool], allow_skip_time_check: Optional[bool], appointment_confirmation_text: Optional[str], appointment_confirmation_title: Optional[str], ask_client_birthday: Optional[bool], ask_client_gender: Optional[bool], bookable_date_ranges: Optional[PurpleBookableDateRanges], bookable_months_count: Optional[float], calendar_mode: Optional[bool], calendar_mode_hide_time: Optional[bool], client_blocking_settings: Optional[PurpleClientBlockingSettings], client_comment_title: Optional[str], crac_server: Optional[CracServer], crac_slot_size: Optional[float], crunchv2: Optional[bool], day_off_label: Optional[str], days_forward: Optional[float], day_unavailable_label: Optional[str], default_service_img_url: Optional[str], default_worker_img_url: Optional[str], deny_same_time_records: Optional[bool], disabled_taxonomies_text: Optional[str], disable_mobile_widget: Optional[bool], disable_widget: Optional[bool], disable_widget_message: Optional[str], discounted_price_rounding: Optional[PurpleDiscountedPriceRounding], display_slot_size: Optional[float], dont_require_email: Optional[bool], email_is_mandatory: Optional[bool], enable_override_footer: Optional[bool], enable_warning_contact_data: Optional[bool], extra_visitors: Optional[bool], filter_non_insurance_schedule: Optional[bool], hide_any_worker_booking: Optional[bool], hide_call_button: Optional[bool], hide_empty_days: Optional[bool], hide_g_booking_logo: Optional[bool], hide_gray_slots: Optional[bool], hide_new_appointment_button: Optional[bool], hide_prices: Optional[bool], hide_social_networks_authentication: Optional[bool], insurance_client_support_phone: Optional[List[Union[List[Any], bool, PhoneClass, float, int, None, str]]], max_service_booking: Optional[float], max_timeslot_booking: Optional[float], middle_name_support: Optional[bool], most_free_enable: Optional[bool], multi_service_booking: Optional[bool], multi_timeslot_booking: Optional[bool], multi_timeslot_booking_all_days: Optional[bool], new_widget_theme: Optional[Dict[str, Any]], no_default_images: Optional[bool], override_footer: Optional[str], payment: Optional[Payment], payment_provider: Optional[PaymentProvider], require_agreement: Optional[bool], require_agreement_link: Optional[str], revision_version: Optional[float], short_link: Optional[str], show_all_workers: Optional[bool], show_client_address: Optional[bool], show_client_comment: Optional[bool], show_disabled_taxonomies: Optional[bool], show_drink_question: Optional[bool], show_map: Optional[bool], show_surname_first: Optional[bool], show_talk_question: Optional[bool], show_taxonomy_confirmation_alert: Optional[bool], skip_authentication: Optional[bool], skip_days_forward: Optional[bool], skip_mobile_map: Optional[bool], skip_service_duration_alignment: Optional[bool], skip_service_selection: Optional[bool], skip_time_selection: Optional[bool], skip_time_selection_service_i_ds: Optional[List[str]], skip_worker_selected_service_i_ds: Optional[List[str]], skip_worker_services_selection: Optional[bool], social_network_image: Optional[str], social_sharing: Optional[PurpleSocialSharing], sort_by_most_free: Optional[bool], sort_workers_by_workload: Optional[bool], split_insurance_client: Optional[bool], split_name: Optional[bool], tentative_ttl: Optional[float], theme: Optional[str], use_appointment_reminder: Optional[bool], use_business_schedule_for_unavailable_label: Optional[bool], use_clusters_map: Optional[bool], use_coupon: Optional[bool], use_crac: Optional[bool], use_default_service_img: Optional[bool], use_default_worker_img: Optional[bool], use_direct_schedule_read: Optional[UseDirectScheduleRead], use_insurance_guarantee_letter: Optional[bool], use_insurance_select: Optional[bool], use_med_auth: Optional[bool], use_middle_name: Optional[bool], use_new_reserve_api: Optional[bool], use_resource_page_loading: Optional[bool], use_sort_by_name: Optional[bool], warning_contact_data_text: Optional[str], widget_use_crac: Optional[bool], without_workers: Optional[bool], worker_unavailability_text: Optional[str], worker_name_reverse: Optional[bool]) -> None:
        self.additional_name = additional_name
        self.alignment_taxonomy_slots = alignment_taxonomy_slots
        self.allow_auto_select = allow_auto_select
        self.allow_book_visitor = allow_book_visitor
        self.allow_skip_time_check = allow_skip_time_check
        self.appointment_confirmation_text = appointment_confirmation_text
        self.appointment_confirmation_title = appointment_confirmation_title
        self.ask_client_birthday = ask_client_birthday
        self.ask_client_gender = ask_client_gender
        self.bookable_date_ranges = bookable_date_ranges
        self.bookable_months_count = bookable_months_count
        self.calendar_mode = calendar_mode
        self.calendar_mode_hide_time = calendar_mode_hide_time
        self.client_blocking_settings = client_blocking_settings
        self.client_comment_title = client_comment_title
        self.crac_server = crac_server
        self.crac_slot_size = crac_slot_size
        self.crunchv2 = crunchv2
        self.day_off_label = day_off_label
        self.days_forward = days_forward
        self.day_unavailable_label = day_unavailable_label
        self.default_service_img_url = default_service_img_url
        self.default_worker_img_url = default_worker_img_url
        self.deny_same_time_records = deny_same_time_records
        self.disabled_taxonomies_text = disabled_taxonomies_text
        self.disable_mobile_widget = disable_mobile_widget
        self.disable_widget = disable_widget
        self.disable_widget_message = disable_widget_message
        self.discounted_price_rounding = discounted_price_rounding
        self.display_slot_size = display_slot_size
        self.dont_require_email = dont_require_email
        self.email_is_mandatory = email_is_mandatory
        self.enable_override_footer = enable_override_footer
        self.enable_warning_contact_data = enable_warning_contact_data
        self.extra_visitors = extra_visitors
        self.filter_non_insurance_schedule = filter_non_insurance_schedule
        self.hide_any_worker_booking = hide_any_worker_booking
        self.hide_call_button = hide_call_button
        self.hide_empty_days = hide_empty_days
        self.hide_g_booking_logo = hide_g_booking_logo
        self.hide_gray_slots = hide_gray_slots
        self.hide_new_appointment_button = hide_new_appointment_button
        self.hide_prices = hide_prices
        self.hide_social_networks_authentication = hide_social_networks_authentication
        self.insurance_client_support_phone = insurance_client_support_phone
        self.max_service_booking = max_service_booking
        self.max_timeslot_booking = max_timeslot_booking
        self.middle_name_support = middle_name_support
        self.most_free_enable = most_free_enable
        self.multi_service_booking = multi_service_booking
        self.multi_timeslot_booking = multi_timeslot_booking
        self.multi_timeslot_booking_all_days = multi_timeslot_booking_all_days
        self.new_widget_theme = new_widget_theme
        self.no_default_images = no_default_images
        self.override_footer = override_footer
        self.payment = payment
        self.payment_provider = payment_provider
        self.require_agreement = require_agreement
        self.require_agreement_link = require_agreement_link
        self.revision_version = revision_version
        self.short_link = short_link
        self.show_all_workers = show_all_workers
        self.show_client_address = show_client_address
        self.show_client_comment = show_client_comment
        self.show_disabled_taxonomies = show_disabled_taxonomies
        self.show_drink_question = show_drink_question
        self.show_map = show_map
        self.show_surname_first = show_surname_first
        self.show_talk_question = show_talk_question
        self.show_taxonomy_confirmation_alert = show_taxonomy_confirmation_alert
        self.skip_authentication = skip_authentication
        self.skip_days_forward = skip_days_forward
        self.skip_mobile_map = skip_mobile_map
        self.skip_service_duration_alignment = skip_service_duration_alignment
        self.skip_service_selection = skip_service_selection
        self.skip_time_selection = skip_time_selection
        self.skip_time_selection_service_i_ds = skip_time_selection_service_i_ds
        self.skip_worker_selected_service_i_ds = skip_worker_selected_service_i_ds
        self.skip_worker_services_selection = skip_worker_services_selection
        self.social_network_image = social_network_image
        self.social_sharing = social_sharing
        self.sort_by_most_free = sort_by_most_free
        self.sort_workers_by_workload = sort_workers_by_workload
        self.split_insurance_client = split_insurance_client
        self.split_name = split_name
        self.tentative_ttl = tentative_ttl
        self.theme = theme
        self.use_appointment_reminder = use_appointment_reminder
        self.use_business_schedule_for_unavailable_label = use_business_schedule_for_unavailable_label
        self.use_clusters_map = use_clusters_map
        self.use_coupon = use_coupon
        self.use_crac = use_crac
        self.use_default_service_img = use_default_service_img
        self.use_default_worker_img = use_default_worker_img
        self.use_direct_schedule_read = use_direct_schedule_read
        self.use_insurance_guarantee_letter = use_insurance_guarantee_letter
        self.use_insurance_select = use_insurance_select
        self.use_med_auth = use_med_auth
        self.use_middle_name = use_middle_name
        self.use_new_reserve_api = use_new_reserve_api
        self.use_resource_page_loading = use_resource_page_loading
        self.use_sort_by_name = use_sort_by_name
        self.warning_contact_data_text = warning_contact_data_text
        self.widget_use_crac = widget_use_crac
        self.without_workers = without_workers
        self.worker_unavailability_text = worker_unavailability_text
        self.worker_name_reverse = worker_name_reverse

    @staticmethod
    def from_dict(obj: Any) -> 'PurpleWidgetConfiguration':
        assert isinstance(obj, dict)
        additional_name = from_union([from_str, from_none], obj.get("additionalName"))
        alignment_taxonomy_slots = from_union([from_bool, from_none], obj.get("alignmentTaxonomySlots"))
        allow_auto_select = from_union([from_bool, from_none], obj.get("allowAutoSelect"))
        allow_book_visitor = from_union([from_bool, from_none], obj.get("allowBookVisitor"))
        allow_skip_time_check = from_union([from_bool, from_none], obj.get("allowSkipTimeCheck"))
        appointment_confirmation_text = from_union([from_str, from_none], obj.get("appointment_confirmation_text"))
        appointment_confirmation_title = from_union([from_str, from_none], obj.get("appointment_confirmation_title"))
        ask_client_birthday = from_union([from_bool, from_none], obj.get("askClientBirthday"))
        ask_client_gender = from_union([from_bool, from_none], obj.get("askClientGender"))
        bookable_date_ranges = from_union([PurpleBookableDateRanges.from_dict, from_none], obj.get("bookableDateRanges"))
        bookable_months_count = from_union([from_float, from_none], obj.get("bookableMonthsCount"))
        calendar_mode = from_union([from_bool, from_none], obj.get("calendarMode"))
        calendar_mode_hide_time = from_union([from_bool, from_none], obj.get("calendarModeHideTime"))
        client_blocking_settings = from_union([PurpleClientBlockingSettings.from_dict, from_none], obj.get("clientBlockingSettings"))
        client_comment_title = from_union([from_str, from_none], obj.get("clientCommentTitle"))
        crac_server = from_union([CracServer, from_none], obj.get("cracServer"))
        crac_slot_size = from_union([from_float, from_none], obj.get("cracSlotSize"))
        crunchv2 = from_union([from_bool, from_none], obj.get("crunchv2"))
        day_off_label = from_union([from_str, from_none], obj.get("dayOffLabel"))
        days_forward = from_union([from_float, from_none], obj.get("daysForward"))
        day_unavailable_label = from_union([from_str, from_none], obj.get("dayUnavailableLabel"))
        default_service_img_url = from_union([from_str, from_none], obj.get("defaultServiceImgUrl"))
        default_worker_img_url = from_union([from_str, from_none], obj.get("defaultWorkerImgUrl"))
        deny_same_time_records = from_union([from_bool, from_none], obj.get("denySameTimeRecords"))
        disabled_taxonomies_text = from_union([from_str, from_none], obj.get("disabledTaxonomiesText"))
        disable_mobile_widget = from_union([from_bool, from_none], obj.get("disableMobileWidget"))
        disable_widget = from_union([from_bool, from_none], obj.get("disableWidget"))
        disable_widget_message = from_union([from_str, from_none], obj.get("disableWidgetMessage"))
        discounted_price_rounding = from_union([PurpleDiscountedPriceRounding.from_dict, from_none], obj.get("discountedPriceRounding"))
        display_slot_size = from_union([from_float, from_none], obj.get("displaySlotSize"))
        dont_require_email = from_union([from_bool, from_none], obj.get("dontRequireEmail"))
        email_is_mandatory = from_union([from_bool, from_none], obj.get("emailIsMandatory"))
        enable_override_footer = from_union([from_bool, from_none], obj.get("enableOverrideFooter"))
        enable_warning_contact_data = from_union([from_bool, from_none], obj.get("enableWarningContactData"))
        extra_visitors = from_union([from_bool, from_none], obj.get("extraVisitors"))
        filter_non_insurance_schedule = from_union([from_bool, from_none], obj.get("filterNonInsuranceSchedule"))
        hide_any_worker_booking = from_union([from_bool, from_none], obj.get("hideAnyWorkerBooking"))
        hide_call_button = from_union([from_bool, from_none], obj.get("hideCallButton"))
        hide_empty_days = from_union([from_bool, from_none], obj.get("hideEmptyDays"))
        hide_g_booking_logo = from_union([from_bool, from_none], obj.get("hideGBookingLogo"))
        hide_gray_slots = from_union([from_bool, from_none], obj.get("hideGraySlots"))
        hide_new_appointment_button = from_union([from_bool, from_none], obj.get("hideNewAppointmentButton"))
        hide_prices = from_union([from_bool, from_none], obj.get("hidePrices"))
        hide_social_networks_authentication = from_union([from_bool, from_none], obj.get("hideSocialNetworksAuthentication"))
        insurance_client_support_phone = from_union([lambda x: from_list(lambda x: from_union([from_none, from_float, from_int, from_bool, from_str, lambda x: from_list(lambda x: x, x), PhoneClass.from_dict], x), x), from_none], obj.get("insuranceClientSupportPhone"))
        max_service_booking = from_union([from_float, from_none], obj.get("maxServiceBooking"))
        max_timeslot_booking = from_union([from_float, from_none], obj.get("maxTimeslotBooking"))
        middle_name_support = from_union([from_bool, from_none], obj.get("middleNameSupport"))
        most_free_enable = from_union([from_bool, from_none], obj.get("mostFreeEnable"))
        multi_service_booking = from_union([from_bool, from_none], obj.get("multiServiceBooking"))
        multi_timeslot_booking = from_union([from_bool, from_none], obj.get("multiTimeslotBooking"))
        multi_timeslot_booking_all_days = from_union([from_bool, from_none], obj.get("multiTimeslotBookingAllDays"))
        new_widget_theme = from_union([lambda x: from_dict(lambda x: x, x), from_none], obj.get("newWidgetTheme"))
        no_default_images = from_union([from_bool, from_none], obj.get("noDefaultImages"))
        override_footer = from_union([from_str, from_none], obj.get("overrideFooter"))
        payment = from_union([Payment, from_none], obj.get("payment"))
        payment_provider = from_union([PaymentProvider, from_none], obj.get("paymentProvider"))
        require_agreement = from_union([from_bool, from_none], obj.get("requireAgreement"))
        require_agreement_link = from_union([from_str, from_none], obj.get("requireAgreementLink"))
        revision_version = from_union([from_float, from_none], obj.get("revisionVersion"))
        short_link = from_union([from_str, from_none], obj.get("shortLink"))
        show_all_workers = from_union([from_bool, from_none], obj.get("showAllWorkers"))
        show_client_address = from_union([from_bool, from_none], obj.get("showClientAddress"))
        show_client_comment = from_union([from_bool, from_none], obj.get("showClientComment"))
        show_disabled_taxonomies = from_union([from_bool, from_none], obj.get("showDisabledTaxonomies"))
        show_drink_question = from_union([from_bool, from_none], obj.get("showDrinkQuestion"))
        show_map = from_union([from_bool, from_none], obj.get("showMap"))
        show_surname_first = from_union([from_bool, from_none], obj.get("showSurnameFirst"))
        show_talk_question = from_union([from_bool, from_none], obj.get("showTalkQuestion"))
        show_taxonomy_confirmation_alert = from_union([from_bool, from_none], obj.get("showTaxonomyConfirmationAlert"))
        skip_authentication = from_union([from_bool, from_none], obj.get("skipAuthentication"))
        skip_days_forward = from_union([from_bool, from_none], obj.get("skipDaysForward"))
        skip_mobile_map = from_union([from_bool, from_none], obj.get("skipMobileMap"))
        skip_service_duration_alignment = from_union([from_bool, from_none], obj.get("skipServiceDurationAlignment"))
        skip_service_selection = from_union([from_bool, from_none], obj.get("skipServiceSelection"))
        skip_time_selection = from_union([from_bool, from_none], obj.get("skipTimeSelection"))
        skip_time_selection_service_i_ds = from_union([lambda x: from_list(from_str, x), from_none], obj.get("skipTimeSelectionServiceIDs"))
        skip_worker_selected_service_i_ds = from_union([lambda x: from_list(from_str, x), from_none], obj.get("skipWorkerSelectedServiceIDs"))
        skip_worker_services_selection = from_union([from_bool, from_none], obj.get("skipWorkerServicesSelection"))
        social_network_image = from_union([from_str, from_none], obj.get("socialNetworkImage"))
        social_sharing = from_union([PurpleSocialSharing.from_dict, from_none], obj.get("socialSharing"))
        sort_by_most_free = from_union([from_bool, from_none], obj.get("sortByMostFree"))
        sort_workers_by_workload = from_union([from_bool, from_none], obj.get("sortWorkersByWorkload"))
        split_insurance_client = from_union([from_bool, from_none], obj.get("splitInsuranceClient"))
        split_name = from_union([from_bool, from_none], obj.get("splitName"))
        tentative_ttl = from_union([from_float, from_none], obj.get("tentativeTTL"))
        theme = from_union([from_str, from_none], obj.get("theme"))
        use_appointment_reminder = from_union([from_bool, from_none], obj.get("useAppointmentReminder"))
        use_business_schedule_for_unavailable_label = from_union([from_bool, from_none], obj.get("useBusinessScheduleForUnavailableLabel"))
        use_clusters_map = from_union([from_bool, from_none], obj.get("useClustersMap"))
        use_coupon = from_union([from_bool, from_none], obj.get("useCoupon"))
        use_crac = from_union([from_bool, from_none], obj.get("useCRAC"))
        use_default_service_img = from_union([from_bool, from_none], obj.get("useDefaultServiceImg"))
        use_default_worker_img = from_union([from_bool, from_none], obj.get("useDefaultWorkerImg"))
        use_direct_schedule_read = from_union([UseDirectScheduleRead, from_none], obj.get("useDirectScheduleRead"))
        use_insurance_guarantee_letter = from_union([from_bool, from_none], obj.get("useInsuranceGuaranteeLetter"))
        use_insurance_select = from_union([from_bool, from_none], obj.get("useInsuranceSelect"))
        use_med_auth = from_union([from_bool, from_none], obj.get("useMedAuth"))
        use_middle_name = from_union([from_bool, from_none], obj.get("useMiddleName"))
        use_new_reserve_api = from_union([from_bool, from_none], obj.get("useNewReserveAPI"))
        use_resource_page_loading = from_union([from_bool, from_none], obj.get("useResourcePageLoading"))
        use_sort_by_name = from_union([from_bool, from_none], obj.get("useSortByName"))
        warning_contact_data_text = from_union([from_str, from_none], obj.get("warningContactDataText"))
        widget_use_crac = from_union([from_bool, from_none], obj.get("widgetUseCRAC"))
        without_workers = from_union([from_bool, from_none], obj.get("withoutWorkers"))
        worker_unavailability_text = from_union([from_str, from_none], obj.get("worker_unavailability_text"))
        worker_name_reverse = from_union([from_bool, from_none], obj.get("workerNameReverse"))
        return PurpleWidgetConfiguration(additional_name, alignment_taxonomy_slots, allow_auto_select, allow_book_visitor, allow_skip_time_check, appointment_confirmation_text, appointment_confirmation_title, ask_client_birthday, ask_client_gender, bookable_date_ranges, bookable_months_count, calendar_mode, calendar_mode_hide_time, client_blocking_settings, client_comment_title, crac_server, crac_slot_size, crunchv2, day_off_label, days_forward, day_unavailable_label, default_service_img_url, default_worker_img_url, deny_same_time_records, disabled_taxonomies_text, disable_mobile_widget, disable_widget, disable_widget_message, discounted_price_rounding, display_slot_size, dont_require_email, email_is_mandatory, enable_override_footer, enable_warning_contact_data, extra_visitors, filter_non_insurance_schedule, hide_any_worker_booking, hide_call_button, hide_empty_days, hide_g_booking_logo, hide_gray_slots, hide_new_appointment_button, hide_prices, hide_social_networks_authentication, insurance_client_support_phone, max_service_booking, max_timeslot_booking, middle_name_support, most_free_enable, multi_service_booking, multi_timeslot_booking, multi_timeslot_booking_all_days, new_widget_theme, no_default_images, override_footer, payment, payment_provider, require_agreement, require_agreement_link, revision_version, short_link, show_all_workers, show_client_address, show_client_comment, show_disabled_taxonomies, show_drink_question, show_map, show_surname_first, show_talk_question, show_taxonomy_confirmation_alert, skip_authentication, skip_days_forward, skip_mobile_map, skip_service_duration_alignment, skip_service_selection, skip_time_selection, skip_time_selection_service_i_ds, skip_worker_selected_service_i_ds, skip_worker_services_selection, social_network_image, social_sharing, sort_by_most_free, sort_workers_by_workload, split_insurance_client, split_name, tentative_ttl, theme, use_appointment_reminder, use_business_schedule_for_unavailable_label, use_clusters_map, use_coupon, use_crac, use_default_service_img, use_default_worker_img, use_direct_schedule_read, use_insurance_guarantee_letter, use_insurance_select, use_med_auth, use_middle_name, use_new_reserve_api, use_resource_page_loading, use_sort_by_name, warning_contact_data_text, widget_use_crac, without_workers, worker_unavailability_text, worker_name_reverse)

    def to_dict(self) -> dict:
        result: dict = {}
        result["additionalName"] = from_union([from_str, from_none], self.additional_name)
        result["alignmentTaxonomySlots"] = from_union([from_bool, from_none], self.alignment_taxonomy_slots)
        result["allowAutoSelect"] = from_union([from_bool, from_none], self.allow_auto_select)
        result["allowBookVisitor"] = from_union([from_bool, from_none], self.allow_book_visitor)
        result["allowSkipTimeCheck"] = from_union([from_bool, from_none], self.allow_skip_time_check)
        result["appointment_confirmation_text"] = from_union([from_str, from_none], self.appointment_confirmation_text)
        result["appointment_confirmation_title"] = from_union([from_str, from_none], self.appointment_confirmation_title)
        result["askClientBirthday"] = from_union([from_bool, from_none], self.ask_client_birthday)
        result["askClientGender"] = from_union([from_bool, from_none], self.ask_client_gender)
        result["bookableDateRanges"] = from_union([lambda x: to_class(PurpleBookableDateRanges, x), from_none], self.bookable_date_ranges)
        result["bookableMonthsCount"] = from_union([to_float, from_none], self.bookable_months_count)
        result["calendarMode"] = from_union([from_bool, from_none], self.calendar_mode)
        result["calendarModeHideTime"] = from_union([from_bool, from_none], self.calendar_mode_hide_time)
        result["clientBlockingSettings"] = from_union([lambda x: to_class(PurpleClientBlockingSettings, x), from_none], self.client_blocking_settings)
        result["clientCommentTitle"] = from_union([from_str, from_none], self.client_comment_title)
        result["cracServer"] = from_union([lambda x: to_enum(CracServer, x), from_none], self.crac_server)
        result["cracSlotSize"] = from_union([to_float, from_none], self.crac_slot_size)
        result["crunchv2"] = from_union([from_bool, from_none], self.crunchv2)
        result["dayOffLabel"] = from_union([from_str, from_none], self.day_off_label)
        result["daysForward"] = from_union([to_float, from_none], self.days_forward)
        result["dayUnavailableLabel"] = from_union([from_str, from_none], self.day_unavailable_label)
        result["defaultServiceImgUrl"] = from_union([from_str, from_none], self.default_service_img_url)
        result["defaultWorkerImgUrl"] = from_union([from_str, from_none], self.default_worker_img_url)
        result["denySameTimeRecords"] = from_union([from_bool, from_none], self.deny_same_time_records)
        result["disabledTaxonomiesText"] = from_union([from_str, from_none], self.disabled_taxonomies_text)
        result["disableMobileWidget"] = from_union([from_bool, from_none], self.disable_mobile_widget)
        result["disableWidget"] = from_union([from_bool, from_none], self.disable_widget)
        result["disableWidgetMessage"] = from_union([from_str, from_none], self.disable_widget_message)
        result["discountedPriceRounding"] = from_union([lambda x: to_class(PurpleDiscountedPriceRounding, x), from_none], self.discounted_price_rounding)
        result["displaySlotSize"] = from_union([to_float, from_none], self.display_slot_size)
        result["dontRequireEmail"] = from_union([from_bool, from_none], self.dont_require_email)
        result["emailIsMandatory"] = from_union([from_bool, from_none], self.email_is_mandatory)
        result["enableOverrideFooter"] = from_union([from_bool, from_none], self.enable_override_footer)
        result["enableWarningContactData"] = from_union([from_bool, from_none], self.enable_warning_contact_data)
        result["extraVisitors"] = from_union([from_bool, from_none], self.extra_visitors)
        result["filterNonInsuranceSchedule"] = from_union([from_bool, from_none], self.filter_non_insurance_schedule)
        result["hideAnyWorkerBooking"] = from_union([from_bool, from_none], self.hide_any_worker_booking)
        result["hideCallButton"] = from_union([from_bool, from_none], self.hide_call_button)
        result["hideEmptyDays"] = from_union([from_bool, from_none], self.hide_empty_days)
        result["hideGBookingLogo"] = from_union([from_bool, from_none], self.hide_g_booking_logo)
        result["hideGraySlots"] = from_union([from_bool, from_none], self.hide_gray_slots)
        result["hideNewAppointmentButton"] = from_union([from_bool, from_none], self.hide_new_appointment_button)
        result["hidePrices"] = from_union([from_bool, from_none], self.hide_prices)
        result["hideSocialNetworksAuthentication"] = from_union([from_bool, from_none], self.hide_social_networks_authentication)
        result["insuranceClientSupportPhone"] = from_union([lambda x: from_list(lambda x: from_union([from_none, to_float, from_int, from_bool, from_str, lambda x: from_list(lambda x: x, x), lambda x: to_class(PhoneClass, x)], x), x), from_none], self.insurance_client_support_phone)
        result["maxServiceBooking"] = from_union([to_float, from_none], self.max_service_booking)
        result["maxTimeslotBooking"] = from_union([to_float, from_none], self.max_timeslot_booking)
        result["middleNameSupport"] = from_union([from_bool, from_none], self.middle_name_support)
        result["mostFreeEnable"] = from_union([from_bool, from_none], self.most_free_enable)
        result["multiServiceBooking"] = from_union([from_bool, from_none], self.multi_service_booking)
        result["multiTimeslotBooking"] = from_union([from_bool, from_none], self.multi_timeslot_booking)
        result["multiTimeslotBookingAllDays"] = from_union([from_bool, from_none], self.multi_timeslot_booking_all_days)
        result["newWidgetTheme"] = from_union([lambda x: from_dict(lambda x: x, x), from_none], self.new_widget_theme)
        result["noDefaultImages"] = from_union([from_bool, from_none], self.no_default_images)
        result["overrideFooter"] = from_union([from_str, from_none], self.override_footer)
        result["payment"] = from_union([lambda x: to_enum(Payment, x), from_none], self.payment)
        result["paymentProvider"] = from_union([lambda x: to_enum(PaymentProvider, x), from_none], self.payment_provider)
        result["requireAgreement"] = from_union([from_bool, from_none], self.require_agreement)
        result["requireAgreementLink"] = from_union([from_str, from_none], self.require_agreement_link)
        result["revisionVersion"] = from_union([to_float, from_none], self.revision_version)
        result["shortLink"] = from_union([from_str, from_none], self.short_link)
        result["showAllWorkers"] = from_union([from_bool, from_none], self.show_all_workers)
        result["showClientAddress"] = from_union([from_bool, from_none], self.show_client_address)
        result["showClientComment"] = from_union([from_bool, from_none], self.show_client_comment)
        result["showDisabledTaxonomies"] = from_union([from_bool, from_none], self.show_disabled_taxonomies)
        result["showDrinkQuestion"] = from_union([from_bool, from_none], self.show_drink_question)
        result["showMap"] = from_union([from_bool, from_none], self.show_map)
        result["showSurnameFirst"] = from_union([from_bool, from_none], self.show_surname_first)
        result["showTalkQuestion"] = from_union([from_bool, from_none], self.show_talk_question)
        result["showTaxonomyConfirmationAlert"] = from_union([from_bool, from_none], self.show_taxonomy_confirmation_alert)
        result["skipAuthentication"] = from_union([from_bool, from_none], self.skip_authentication)
        result["skipDaysForward"] = from_union([from_bool, from_none], self.skip_days_forward)
        result["skipMobileMap"] = from_union([from_bool, from_none], self.skip_mobile_map)
        result["skipServiceDurationAlignment"] = from_union([from_bool, from_none], self.skip_service_duration_alignment)
        result["skipServiceSelection"] = from_union([from_bool, from_none], self.skip_service_selection)
        result["skipTimeSelection"] = from_union([from_bool, from_none], self.skip_time_selection)
        result["skipTimeSelectionServiceIDs"] = from_union([lambda x: from_list(from_str, x), from_none], self.skip_time_selection_service_i_ds)
        result["skipWorkerSelectedServiceIDs"] = from_union([lambda x: from_list(from_str, x), from_none], self.skip_worker_selected_service_i_ds)
        result["skipWorkerServicesSelection"] = from_union([from_bool, from_none], self.skip_worker_services_selection)
        result["socialNetworkImage"] = from_union([from_str, from_none], self.social_network_image)
        result["socialSharing"] = from_union([lambda x: to_class(PurpleSocialSharing, x), from_none], self.social_sharing)
        result["sortByMostFree"] = from_union([from_bool, from_none], self.sort_by_most_free)
        result["sortWorkersByWorkload"] = from_union([from_bool, from_none], self.sort_workers_by_workload)
        result["splitInsuranceClient"] = from_union([from_bool, from_none], self.split_insurance_client)
        result["splitName"] = from_union([from_bool, from_none], self.split_name)
        result["tentativeTTL"] = from_union([to_float, from_none], self.tentative_ttl)
        result["theme"] = from_union([from_str, from_none], self.theme)
        result["useAppointmentReminder"] = from_union([from_bool, from_none], self.use_appointment_reminder)
        result["useBusinessScheduleForUnavailableLabel"] = from_union([from_bool, from_none], self.use_business_schedule_for_unavailable_label)
        result["useClustersMap"] = from_union([from_bool, from_none], self.use_clusters_map)
        result["useCoupon"] = from_union([from_bool, from_none], self.use_coupon)
        result["useCRAC"] = from_union([from_bool, from_none], self.use_crac)
        result["useDefaultServiceImg"] = from_union([from_bool, from_none], self.use_default_service_img)
        result["useDefaultWorkerImg"] = from_union([from_bool, from_none], self.use_default_worker_img)
        result["useDirectScheduleRead"] = from_union([lambda x: to_enum(UseDirectScheduleRead, x), from_none], self.use_direct_schedule_read)
        result["useInsuranceGuaranteeLetter"] = from_union([from_bool, from_none], self.use_insurance_guarantee_letter)
        result["useInsuranceSelect"] = from_union([from_bool, from_none], self.use_insurance_select)
        result["useMedAuth"] = from_union([from_bool, from_none], self.use_med_auth)
        result["useMiddleName"] = from_union([from_bool, from_none], self.use_middle_name)
        result["useNewReserveAPI"] = from_union([from_bool, from_none], self.use_new_reserve_api)
        result["useResourcePageLoading"] = from_union([from_bool, from_none], self.use_resource_page_loading)
        result["useSortByName"] = from_union([from_bool, from_none], self.use_sort_by_name)
        result["warningContactDataText"] = from_union([from_str, from_none], self.warning_contact_data_text)
        result["widgetUseCRAC"] = from_union([from_bool, from_none], self.widget_use_crac)
        result["withoutWorkers"] = from_union([from_bool, from_none], self.without_workers)
        result["worker_unavailability_text"] = from_union([from_str, from_none], self.worker_unavailability_text)
        result["workerNameReverse"] = from_union([from_bool, from_none], self.worker_name_reverse)
        return result


class IndecentBusiness:
    active: Optional[bool]
    additional_settings: Optional[PurpleAdditionalSettings]
    allow_category_booking: Optional[bool]
    business_backoffice_configuration: Optional[FluffyBackofficeConfiguration]
    backoffice_configuration: Optional[PurpleBackofficeConfiguration]
    backoffice_type: Optional[BackofficeType]
    cabinets: Optional[List[PurpleCabinet]]
    cabinets_enabled: Optional[bool]
    callback_widget_configuration: Optional[PurpleCallbackWidgetConfiguration]
    consumables: Optional[List[PurpleConsumable]]
    created_on: Optional[datetime]
    default_filtered_workers: Optional[List[str]]
    departments: Optional[List[PurpleDepartment]]
    designs: Optional[List[Dict[str, Any]]]
    extra_id: Optional[str]
    flat_taxonomy_display: Optional[bool]
    general_info: BusinessInfo
    group: Optional[Group]
    id: Optional[str]
    integration_data: Optional[Dict[str, Any]]
    mini_widget_configuration: PurpleMiniWidgetConfiguration
    mobile_data: Optional[List[Any]]
    notifications: Optional[List[Any]]
    state_level_holidays_not_working: Optional[bool]
    taxonomies_complex: Optional[List[PurpleTaxonomiesComplex]]
    taxonomy_tree_capacity: Optional[List[Dict[str, Any]]]
    top_services: Optional[PurpleTopServices]
    vertical: Optional[str]
    widget_configuration: PurpleWidgetConfiguration
    yandex_feed_type: Optional[str]

    def __init__(self, active: Optional[bool], additional_settings: Optional[PurpleAdditionalSettings], allow_category_booking: Optional[bool], business_backoffice_configuration: Optional[FluffyBackofficeConfiguration], backoffice_configuration: Optional[PurpleBackofficeConfiguration], backoffice_type: Optional[BackofficeType], cabinets: Optional[List[PurpleCabinet]], cabinets_enabled: Optional[bool], callback_widget_configuration: Optional[PurpleCallbackWidgetConfiguration], consumables: Optional[List[PurpleConsumable]], created_on: Optional[datetime], default_filtered_workers: Optional[List[str]], departments: Optional[List[PurpleDepartment]], designs: Optional[List[Dict[str, Any]]], extra_id: Optional[str], flat_taxonomy_display: Optional[bool], general_info: BusinessInfo, group: Optional[Group], id: Optional[str], integration_data: Optional[Dict[str, Any]], mini_widget_configuration: PurpleMiniWidgetConfiguration, mobile_data: Optional[List[Any]], notifications: Optional[List[Any]], state_level_holidays_not_working: Optional[bool], taxonomies_complex: Optional[List[PurpleTaxonomiesComplex]], taxonomy_tree_capacity: Optional[List[Dict[str, Any]]], top_services: Optional[PurpleTopServices], vertical: Optional[str], widget_configuration: PurpleWidgetConfiguration, yandex_feed_type: Optional[str]) -> None:
        self.active = active
        self.additional_settings = additional_settings
        self.allow_category_booking = allow_category_booking
        self.business_backoffice_configuration = business_backoffice_configuration
        self.backoffice_configuration = backoffice_configuration
        self.backoffice_type = backoffice_type
        self.cabinets = cabinets
        self.cabinets_enabled = cabinets_enabled
        self.callback_widget_configuration = callback_widget_configuration
        self.consumables = consumables
        self.created_on = created_on
        self.default_filtered_workers = default_filtered_workers
        self.departments = departments
        self.designs = designs
        self.extra_id = extra_id
        self.flat_taxonomy_display = flat_taxonomy_display
        self.general_info = general_info
        self.group = group
        self.id = id
        self.integration_data = integration_data
        self.mini_widget_configuration = mini_widget_configuration
        self.mobile_data = mobile_data
        self.notifications = notifications
        self.state_level_holidays_not_working = state_level_holidays_not_working
        self.taxonomies_complex = taxonomies_complex
        self.taxonomy_tree_capacity = taxonomy_tree_capacity
        self.top_services = top_services
        self.vertical = vertical
        self.widget_configuration = widget_configuration
        self.yandex_feed_type = yandex_feed_type

    @staticmethod
    def from_dict(obj: Any) -> 'IndecentBusiness':
        assert isinstance(obj, dict)
        active = from_union([from_bool, from_none], obj.get("active"))
        additional_settings = from_union([PurpleAdditionalSettings.from_dict, from_none], obj.get("additionalSettings"))
        allow_category_booking = from_union([from_bool, from_none], obj.get("allowCategoryBooking"))
        business_backoffice_configuration = from_union([FluffyBackofficeConfiguration.from_dict, from_none], obj.get("backoffice_configuration"))
        backoffice_configuration = from_union([PurpleBackofficeConfiguration.from_dict, from_none], obj.get("backofficeConfiguration"))
        backoffice_type = from_union([BackofficeType, from_none], obj.get("backofficeType"))
        cabinets = from_union([lambda x: from_list(PurpleCabinet.from_dict, x), from_none], obj.get("cabinets"))
        cabinets_enabled = from_union([from_bool, from_none], obj.get("cabinetsEnabled"))
        callback_widget_configuration = from_union([PurpleCallbackWidgetConfiguration.from_dict, from_none], obj.get("callback_widget_configuration"))
        consumables = from_union([lambda x: from_list(PurpleConsumable.from_dict, x), from_none], obj.get("consumables"))
        created_on = from_union([from_datetime, from_none], obj.get("created_on"))
        default_filtered_workers = from_union([lambda x: from_list(from_str, x), from_none], obj.get("defaultFilteredWorkers"))
        departments = from_union([lambda x: from_list(PurpleDepartment.from_dict, x), from_none], obj.get("departments"))
        designs = from_union([lambda x: from_list(lambda x: from_dict(lambda x: x, x), x), from_none], obj.get("designs"))
        extra_id = from_union([from_str, from_none], obj.get("extraID"))
        flat_taxonomy_display = from_union([from_bool, from_none], obj.get("flatTaxonomyDisplay"))
        general_info = BusinessInfo.from_dict(obj.get("general_info"))
        group = from_union([Group, from_none], obj.get("group"))
        id = from_union([from_str, from_none], obj.get("id"))
        integration_data = from_union([lambda x: from_dict(lambda x: x, x), from_none], obj.get("integration_data"))
        mini_widget_configuration = PurpleMiniWidgetConfiguration.from_dict(obj.get("mini_widget_configuration"))
        mobile_data = from_union([lambda x: from_list(lambda x: x, x), from_none], obj.get("mobileData"))
        notifications = from_union([lambda x: from_list(lambda x: x, x), from_none], obj.get("notifications"))
        state_level_holidays_not_working = from_union([from_bool, from_none], obj.get("stateLevelHolidaysNotWorking"))
        taxonomies_complex = from_union([lambda x: from_list(PurpleTaxonomiesComplex.from_dict, x), from_none], obj.get("taxonomiesComplex"))
        taxonomy_tree_capacity = from_union([lambda x: from_list(lambda x: from_dict(lambda x: x, x), x), from_none], obj.get("taxonomy_tree_capacity"))
        top_services = from_union([PurpleTopServices.from_dict, from_none], obj.get("top_services"))
        vertical = from_union([from_str, from_none], obj.get("vertical"))
        widget_configuration = PurpleWidgetConfiguration.from_dict(obj.get("widget_configuration"))
        yandex_feed_type = from_union([from_str, from_none], obj.get("yandexFeedType"))
        return IndecentBusiness(active, additional_settings, allow_category_booking, business_backoffice_configuration, backoffice_configuration, backoffice_type, cabinets, cabinets_enabled, callback_widget_configuration, consumables, created_on, default_filtered_workers, departments, designs, extra_id, flat_taxonomy_display, general_info, group, id, integration_data, mini_widget_configuration, mobile_data, notifications, state_level_holidays_not_working, taxonomies_complex, taxonomy_tree_capacity, top_services, vertical, widget_configuration, yandex_feed_type)

    def to_dict(self) -> dict:
        result: dict = {}
        result["active"] = from_union([from_bool, from_none], self.active)
        result["additionalSettings"] = from_union([lambda x: to_class(PurpleAdditionalSettings, x), from_none], self.additional_settings)
        result["allowCategoryBooking"] = from_union([from_bool, from_none], self.allow_category_booking)
        result["backoffice_configuration"] = from_union([lambda x: to_class(FluffyBackofficeConfiguration, x), from_none], self.business_backoffice_configuration)
        result["backofficeConfiguration"] = from_union([lambda x: to_class(PurpleBackofficeConfiguration, x), from_none], self.backoffice_configuration)
        result["backofficeType"] = from_union([lambda x: to_enum(BackofficeType, x), from_none], self.backoffice_type)
        result["cabinets"] = from_union([lambda x: from_list(lambda x: to_class(PurpleCabinet, x), x), from_none], self.cabinets)
        result["cabinetsEnabled"] = from_union([from_bool, from_none], self.cabinets_enabled)
        result["callback_widget_configuration"] = from_union([lambda x: to_class(PurpleCallbackWidgetConfiguration, x), from_none], self.callback_widget_configuration)
        result["consumables"] = from_union([lambda x: from_list(lambda x: to_class(PurpleConsumable, x), x), from_none], self.consumables)
        result["created_on"] = from_union([lambda x: x.isoformat(), from_none], self.created_on)
        result["defaultFilteredWorkers"] = from_union([lambda x: from_list(from_str, x), from_none], self.default_filtered_workers)
        result["departments"] = from_union([lambda x: from_list(lambda x: to_class(PurpleDepartment, x), x), from_none], self.departments)
        result["designs"] = from_union([lambda x: from_list(lambda x: from_dict(lambda x: x, x), x), from_none], self.designs)
        result["extraID"] = from_union([from_str, from_none], self.extra_id)
        result["flatTaxonomyDisplay"] = from_union([from_bool, from_none], self.flat_taxonomy_display)
        result["general_info"] = to_class(BusinessInfo, self.general_info)
        result["group"] = from_union([lambda x: to_enum(Group, x), from_none], self.group)
        result["id"] = from_union([from_str, from_none], self.id)
        result["integration_data"] = from_union([lambda x: from_dict(lambda x: x, x), from_none], self.integration_data)
        result["mini_widget_configuration"] = to_class(PurpleMiniWidgetConfiguration, self.mini_widget_configuration)
        result["mobileData"] = from_union([lambda x: from_list(lambda x: x, x), from_none], self.mobile_data)
        result["notifications"] = from_union([lambda x: from_list(lambda x: x, x), from_none], self.notifications)
        result["stateLevelHolidaysNotWorking"] = from_union([from_bool, from_none], self.state_level_holidays_not_working)
        result["taxonomiesComplex"] = from_union([lambda x: from_list(lambda x: to_class(PurpleTaxonomiesComplex, x), x), from_none], self.taxonomies_complex)
        result["taxonomy_tree_capacity"] = from_union([lambda x: from_list(lambda x: from_dict(lambda x: x, x), x), from_none], self.taxonomy_tree_capacity)
        result["top_services"] = from_union([lambda x: to_class(PurpleTopServices, x), from_none], self.top_services)
        result["vertical"] = from_union([from_str, from_none], self.vertical)
        result["widget_configuration"] = to_class(PurpleWidgetConfiguration, self.widget_configuration)
        result["yandexFeedType"] = from_union([from_str, from_none], self.yandex_feed_type)
        return result


class IndigoBusiness:
    """указатель на бизнес в сети"""
    id: Optional[str]
    business_id: str
    info: Union[List[Any], bool, IndecentBusiness, float, int, None, str]
    is_map_business: bool
    order: Optional[float]
    virtual_taxonomies: Optional[List[str]]

    def __init__(self, id: Optional[str], business_id: str, info: Union[List[Any], bool, IndecentBusiness, float, int, None, str], is_map_business: bool, order: Optional[float], virtual_taxonomies: Optional[List[str]]) -> None:
        self.id = id
        self.business_id = business_id
        self.info = info
        self.is_map_business = is_map_business
        self.order = order
        self.virtual_taxonomies = virtual_taxonomies

    @staticmethod
    def from_dict(obj: Any) -> 'IndigoBusiness':
        assert isinstance(obj, dict)
        id = from_union([from_str, from_none], obj.get("_id"))
        business_id = from_str(obj.get("businessID"))
        info = from_union([from_none, from_float, from_int, from_bool, from_str, lambda x: from_list(lambda x: x, x), IndecentBusiness.from_dict], obj.get("info"))
        is_map_business = from_bool(obj.get("isMapBusiness"))
        order = from_union([from_float, from_none], obj.get("order"))
        virtual_taxonomies = from_union([lambda x: from_list(from_str, x), from_none], obj.get("virtualTaxonomies"))
        return IndigoBusiness(id, business_id, info, is_map_business, order, virtual_taxonomies)

    def to_dict(self) -> dict:
        result: dict = {}
        result["_id"] = from_union([from_str, from_none], self.id)
        result["businessID"] = from_str(self.business_id)
        result["info"] = from_union([from_none, to_float, from_int, from_bool, from_str, lambda x: from_list(lambda x: x, x), lambda x: to_class(IndecentBusiness, x)], self.info)
        result["isMapBusiness"] = from_bool(self.is_map_business)
        result["order"] = from_union([to_float, from_none], self.order)
        result["virtualTaxonomies"] = from_union([lambda x: from_list(from_str, x), from_none], self.virtual_taxonomies)
        return result


class NetworkWidgetConfigurationBusiness:
    id: Optional[str]
    active: bool
    internal_id: str

    def __init__(self, id: Optional[str], active: bool, internal_id: str) -> None:
        self.id = id
        self.active = active
        self.internal_id = internal_id

    @staticmethod
    def from_dict(obj: Any) -> 'NetworkWidgetConfigurationBusiness':
        assert isinstance(obj, dict)
        id = from_union([from_str, from_none], obj.get("_id"))
        active = from_bool(obj.get("active"))
        internal_id = from_str(obj.get("internalID"))
        return NetworkWidgetConfigurationBusiness(id, active, internal_id)

    def to_dict(self) -> dict:
        result: dict = {}
        result["_id"] = from_union([from_str, from_none], self.id)
        result["active"] = from_bool(self.active)
        result["internalID"] = from_str(self.internal_id)
        return result


class NetworkWidgetConfiguration:
    id: Optional[str]
    businesses: List[NetworkWidgetConfigurationBusiness]
    default_service_id: Optional[str]
    show_branch_selector: bool
    show_default_service: bool
    show_on_map: bool
    source: str

    def __init__(self, id: Optional[str], businesses: List[NetworkWidgetConfigurationBusiness], default_service_id: Optional[str], show_branch_selector: bool, show_default_service: bool, show_on_map: bool, source: str) -> None:
        self.id = id
        self.businesses = businesses
        self.default_service_id = default_service_id
        self.show_branch_selector = show_branch_selector
        self.show_default_service = show_default_service
        self.show_on_map = show_on_map
        self.source = source

    @staticmethod
    def from_dict(obj: Any) -> 'NetworkWidgetConfiguration':
        assert isinstance(obj, dict)
        id = from_union([from_str, from_none], obj.get("_id"))
        businesses = from_list(NetworkWidgetConfigurationBusiness.from_dict, obj.get("businesses"))
        default_service_id = from_union([from_none, from_str], obj.get("defaultServiceID"))
        show_branch_selector = from_bool(obj.get("showBranchSelector"))
        show_default_service = from_bool(obj.get("showDefaultService"))
        show_on_map = from_bool(obj.get("showOnMap"))
        source = from_str(obj.get("source"))
        return NetworkWidgetConfiguration(id, businesses, default_service_id, show_branch_selector, show_default_service, show_on_map, source)

    def to_dict(self) -> dict:
        result: dict = {}
        result["_id"] = from_union([from_str, from_none], self.id)
        result["businesses"] = from_list(lambda x: to_class(NetworkWidgetConfigurationBusiness, x), self.businesses)
        result["defaultServiceID"] = from_union([from_none, from_str], self.default_service_id)
        result["showBranchSelector"] = from_bool(self.show_branch_selector)
        result["showDefaultService"] = from_bool(self.show_default_service)
        result["showOnMap"] = from_bool(self.show_on_map)
        result["source"] = from_str(self.source)
        return result


class BusinessGetNetworkDataResponseResult:
    business_configuration: Dict[str, Any]
    businesses: List[IndigoBusiness]
    client_vip_phones: List[str]
    grant_groups: List[Dict[str, Any]]
    network_id: str
    network_info: Dict[str, Any]
    network_name: Optional[str]
    """настройки показа сети в зависимости от источника, на котором размещено приложение"""
    network_widget_configuration: List[NetworkWidgetConfiguration]

    def __init__(self, business_configuration: Dict[str, Any], businesses: List[IndigoBusiness], client_vip_phones: List[str], grant_groups: List[Dict[str, Any]], network_id: str, network_info: Dict[str, Any], network_name: Optional[str], network_widget_configuration: List[NetworkWidgetConfiguration]) -> None:
        self.business_configuration = business_configuration
        self.businesses = businesses
        self.client_vip_phones = client_vip_phones
        self.grant_groups = grant_groups
        self.network_id = network_id
        self.network_info = network_info
        self.network_name = network_name
        self.network_widget_configuration = network_widget_configuration

    @staticmethod
    def from_dict(obj: Any) -> 'BusinessGetNetworkDataResponseResult':
        assert isinstance(obj, dict)
        business_configuration = from_dict(lambda x: x, obj.get("businessConfiguration"))
        businesses = from_list(IndigoBusiness.from_dict, obj.get("businesses"))
        client_vip_phones = from_list(from_str, obj.get("clientVIPPhones"))
        grant_groups = from_list(lambda x: from_dict(lambda x: x, x), obj.get("grantGroups"))
        network_id = from_str(obj.get("networkID"))
        network_info = from_dict(lambda x: x, obj.get("networkInfo"))
        network_name = from_union([from_str, from_none], obj.get("networkName"))
        network_widget_configuration = from_list(NetworkWidgetConfiguration.from_dict, obj.get("networkWidgetConfiguration"))
        return BusinessGetNetworkDataResponseResult(business_configuration, businesses, client_vip_phones, grant_groups, network_id, network_info, network_name, network_widget_configuration)

    def to_dict(self) -> dict:
        result: dict = {}
        result["businessConfiguration"] = from_dict(lambda x: x, self.business_configuration)
        result["businesses"] = from_list(lambda x: to_class(IndigoBusiness, x), self.businesses)
        result["clientVIPPhones"] = from_list(from_str, self.client_vip_phones)
        result["grantGroups"] = from_list(lambda x: from_dict(lambda x: x, x), self.grant_groups)
        result["networkID"] = from_str(self.network_id)
        result["networkInfo"] = from_dict(lambda x: x, self.network_info)
        result["networkName"] = from_union([from_str, from_none], self.network_name)
        result["networkWidgetConfiguration"] = from_list(lambda x: to_class(NetworkWidgetConfiguration, x), self.network_widget_configuration)
        return result


class BusinessGetNetworkDataResponse:
    """значение числового типа для идентификации запроса на сервере"""
    id: float
    """версия протокола (2.0)"""
    jsonrpc: str
    """данные, передаваемые в ответ"""
    result: Optional[BusinessGetNetworkDataResponseResult]
    """объект, содержащий информацию об ошибке"""
    error: Optional[BusinessGetNetworkDataResponseError]

    def __init__(self, id: float, jsonrpc: str, result: Optional[BusinessGetNetworkDataResponseResult], error: Optional[BusinessGetNetworkDataResponseError]) -> None:
        self.id = id
        self.jsonrpc = jsonrpc
        self.result = result
        self.error = error

    @staticmethod
    def from_dict(obj: Any) -> 'BusinessGetNetworkDataResponse':
        assert isinstance(obj, dict)
        id = from_float(obj.get("id"))
        jsonrpc = from_str(obj.get("jsonrpc"))
        result = from_union([from_none, BusinessGetNetworkDataResponseResult.from_dict], obj.get("result"))
        error = from_union([BusinessGetNetworkDataResponseError.from_dict, from_none], obj.get("error"))
        return BusinessGetNetworkDataResponse(id, jsonrpc, result, error)

    def to_dict(self) -> dict:
        result: dict = {}
        result["id"] = to_float(self.id)
        result["jsonrpc"] = from_str(self.jsonrpc)
        result["result"] = from_union([from_none, lambda x: to_class(BusinessGetNetworkDataResponseResult, x)], self.result)
        result["error"] = from_union([lambda x: to_class(BusinessGetNetworkDataResponseError, x), from_none], self.error)
        return result


class GetNetworkData:
    request: BusinessGetNetworkDataRequest
    response: BusinessGetNetworkDataResponse

    def __init__(self, request: BusinessGetNetworkDataRequest, response: BusinessGetNetworkDataResponse) -> None:
        self.request = request
        self.response = response

    @staticmethod
    def from_dict(obj: Any) -> 'GetNetworkData':
        assert isinstance(obj, dict)
        request = BusinessGetNetworkDataRequest.from_dict(obj.get("request"))
        response = BusinessGetNetworkDataResponse.from_dict(obj.get("response"))
        return GetNetworkData(request, response)

    def to_dict(self) -> dict:
        result: dict = {}
        result["request"] = to_class(BusinessGetNetworkDataRequest, self.request)
        result["response"] = to_class(BusinessGetNetworkDataResponse, self.response)
        return result


class HilariousBusiness:
    """идентификатор бизнеса"""
    id: str

    def __init__(self, id: str) -> None:
        self.id = id

    @staticmethod
    def from_dict(obj: Any) -> 'HilariousBusiness':
        assert isinstance(obj, dict)
        id = from_str(obj.get("id"))
        return HilariousBusiness(id)

    def to_dict(self) -> dict:
        result: dict = {}
        result["id"] = from_str(self.id)
        return result


class WorkerSortingType(Enum):
    """тип сортировки работника"""
    MOST_FREE = "most_free"
    NONE = "none"
    WORKLOAD = "workload"


class BusinessGetProfileByIDRequestParams:
    """параметры запроса business.get_profile_by_id"""
    business: HilariousBusiness
    """если указано true - меняет формат представления discounts"""
    desktop_discounts: Optional[bool]
    """если указано true - возвращает только активных работников (status == 'INACTIVE')"""
    only_active_workers: Optional[bool]
    """если указано true - возвращает всех работников в том числе и неактивных (status ==
    'INACTIVE')
    """
    show_inactive_workers: Optional[bool]
    """идентификатор витрины (передаётся вместе с with_taxonomy_showcase)"""
    showcase_business_id: Union[float, None, str]
    """если указано true - не приминяет сортировку работников"""
    skip_worker_sorting: Optional[bool]
    """если указано true - возвращает историю биллинга в поле billing (недоступно для роли guest)"""
    with_billing: Optional[bool]
    """если указано true - возвращает список операций, доступных в БекОфисе в поле profiles
    (недоступно для роли guest)
    """
    with_bop: Optional[bool]
    """если указано true - возвращает кампании скидочных купонов в поле campaigns"""
    with_campaigns: Optional[bool]
    """если указано true - возвращает список скидочных акций в поле discounts"""
    with_discounts: Optional[bool]
    """дата начала расписания, для которого нужно получить скидочные акции"""
    with_discounts_from: Optional[datetime]
    """дата окончания расписания, для которого нужно получить скидочные акции"""
    with_discounts_to: Optional[datetime]
    """если указано true - возвращает информацию о других филиалах сети в поле networks"""
    with_networks: Optional[bool]
    """если указано true - заполняет идентификаторы таксономий витрины showcaseTaxonomyID для
    каждой таксономии (недоступно для роли guest)
    """
    with_taxonomy_showcase: Optional[bool]
    """тип сортировки работника"""
    worker_sorting_type: Optional[WorkerSortingType]

    def __init__(self, business: HilariousBusiness, desktop_discounts: Optional[bool], only_active_workers: Optional[bool], show_inactive_workers: Optional[bool], showcase_business_id: Union[float, None, str], skip_worker_sorting: Optional[bool], with_billing: Optional[bool], with_bop: Optional[bool], with_campaigns: Optional[bool], with_discounts: Optional[bool], with_discounts_from: Optional[datetime], with_discounts_to: Optional[datetime], with_networks: Optional[bool], with_taxonomy_showcase: Optional[bool], worker_sorting_type: Optional[WorkerSortingType]) -> None:
        self.business = business
        self.desktop_discounts = desktop_discounts
        self.only_active_workers = only_active_workers
        self.show_inactive_workers = show_inactive_workers
        self.showcase_business_id = showcase_business_id
        self.skip_worker_sorting = skip_worker_sorting
        self.with_billing = with_billing
        self.with_bop = with_bop
        self.with_campaigns = with_campaigns
        self.with_discounts = with_discounts
        self.with_discounts_from = with_discounts_from
        self.with_discounts_to = with_discounts_to
        self.with_networks = with_networks
        self.with_taxonomy_showcase = with_taxonomy_showcase
        self.worker_sorting_type = worker_sorting_type

    @staticmethod
    def from_dict(obj: Any) -> 'BusinessGetProfileByIDRequestParams':
        assert isinstance(obj, dict)
        business = HilariousBusiness.from_dict(obj.get("business"))
        desktop_discounts = from_union([from_bool, from_none], obj.get("desktop_discounts"))
        only_active_workers = from_union([from_bool, from_none], obj.get("only_active_workers"))
        show_inactive_workers = from_union([from_bool, from_none], obj.get("show_inactive_workers"))
        showcase_business_id = from_union([from_float, from_str, from_none], obj.get("showcase_business_id"))
        skip_worker_sorting = from_union([from_bool, from_none], obj.get("skip_worker_sorting"))
        with_billing = from_union([from_bool, from_none], obj.get("with_billing"))
        with_bop = from_union([from_bool, from_none], obj.get("with_bop"))
        with_campaigns = from_union([from_bool, from_none], obj.get("with_campaigns"))
        with_discounts = from_union([from_bool, from_none], obj.get("with_discounts"))
        with_discounts_from = from_union([from_datetime, from_none], obj.get("with_discounts_from"))
        with_discounts_to = from_union([from_datetime, from_none], obj.get("with_discounts_to"))
        with_networks = from_union([from_bool, from_none], obj.get("with_networks"))
        with_taxonomy_showcase = from_union([from_bool, from_none], obj.get("with_taxonomy_showcase"))
        worker_sorting_type = from_union([WorkerSortingType, from_none], obj.get("worker_sorting_type"))
        return BusinessGetProfileByIDRequestParams(business, desktop_discounts, only_active_workers, show_inactive_workers, showcase_business_id, skip_worker_sorting, with_billing, with_bop, with_campaigns, with_discounts, with_discounts_from, with_discounts_to, with_networks, with_taxonomy_showcase, worker_sorting_type)

    def to_dict(self) -> dict:
        result: dict = {}
        result["business"] = to_class(HilariousBusiness, self.business)
        result["desktop_discounts"] = from_union([from_bool, from_none], self.desktop_discounts)
        result["only_active_workers"] = from_union([from_bool, from_none], self.only_active_workers)
        result["show_inactive_workers"] = from_union([from_bool, from_none], self.show_inactive_workers)
        result["showcase_business_id"] = from_union([to_float, from_str, from_none], self.showcase_business_id)
        result["skip_worker_sorting"] = from_union([from_bool, from_none], self.skip_worker_sorting)
        result["with_billing"] = from_union([from_bool, from_none], self.with_billing)
        result["with_bop"] = from_union([from_bool, from_none], self.with_bop)
        result["with_campaigns"] = from_union([from_bool, from_none], self.with_campaigns)
        result["with_discounts"] = from_union([from_bool, from_none], self.with_discounts)
        result["with_discounts_from"] = from_union([lambda x: x.isoformat(), from_none], self.with_discounts_from)
        result["with_discounts_to"] = from_union([lambda x: x.isoformat(), from_none], self.with_discounts_to)
        result["with_networks"] = from_union([from_bool, from_none], self.with_networks)
        result["with_taxonomy_showcase"] = from_union([from_bool, from_none], self.with_taxonomy_showcase)
        result["worker_sorting_type"] = from_union([lambda x: to_enum(WorkerSortingType, x), from_none], self.worker_sorting_type)
        return result


class BusinessGetProfileByIDRequest:
    """авторизационные параметры"""
    cred: Optional[Cred]
    """значение числового типа для идентификации запроса на сервере"""
    id: Union[float, str]
    """версия протокола - 2.0"""
    jsonrpc: str
    """название jsonrpc метода"""
    method: str
    """параметры запроса
    
    параметры запроса business.get_profile_by_id
    """
    params: BusinessGetProfileByIDRequestParams

    def __init__(self, cred: Optional[Cred], id: Union[float, str], jsonrpc: str, method: str, params: BusinessGetProfileByIDRequestParams) -> None:
        self.cred = cred
        self.id = id
        self.jsonrpc = jsonrpc
        self.method = method
        self.params = params

    @staticmethod
    def from_dict(obj: Any) -> 'BusinessGetProfileByIDRequest':
        assert isinstance(obj, dict)
        cred = from_union([Cred.from_dict, from_none], obj.get("cred"))
        id = from_union([from_float, from_str], obj.get("id"))
        jsonrpc = from_str(obj.get("jsonrpc"))
        method = from_str(obj.get("method"))
        params = BusinessGetProfileByIDRequestParams.from_dict(obj.get("params"))
        return BusinessGetProfileByIDRequest(cred, id, jsonrpc, method, params)

    def to_dict(self) -> dict:
        result: dict = {}
        result["cred"] = from_union([lambda x: to_class(Cred, x), from_none], self.cred)
        result["id"] = from_union([to_float, from_str], self.id)
        result["jsonrpc"] = from_str(self.jsonrpc)
        result["method"] = from_str(self.method)
        result["params"] = to_class(BusinessGetProfileByIDRequestParams, self.params)
        return result


class BusinessGetProfileByIDResponseError:
    """объект, содержащий информацию об ошибке
    
    Код ошибки авторизации
    """
    """код ошибки"""
    code: float
    """дополнительные данные об ошибке"""
    data: Optional[str]
    """текстовая информация об ошибке"""
    message: str

    def __init__(self, code: float, data: Optional[str], message: str) -> None:
        self.code = code
        self.data = data
        self.message = message

    @staticmethod
    def from_dict(obj: Any) -> 'BusinessGetProfileByIDResponseError':
        assert isinstance(obj, dict)
        code = from_float(obj.get("code"))
        data = from_union([from_str, from_none], obj.get("data"))
        message = from_str(obj.get("message"))
        return BusinessGetProfileByIDResponseError(code, data, message)

    def to_dict(self) -> dict:
        result: dict = {}
        result["code"] = to_float(self.code)
        result["data"] = from_union([from_str, from_none], self.data)
        result["message"] = from_str(self.message)
        return result


class FluffyAdditionalSettings:
    appointment_extension_amount: Optional[float]
    appointment_extension_type: Optional[AppointmentExtensionType]

    def __init__(self, appointment_extension_amount: Optional[float], appointment_extension_type: Optional[AppointmentExtensionType]) -> None:
        self.appointment_extension_amount = appointment_extension_amount
        self.appointment_extension_type = appointment_extension_type

    @staticmethod
    def from_dict(obj: Any) -> 'FluffyAdditionalSettings':
        assert isinstance(obj, dict)
        appointment_extension_amount = from_union([from_float, from_none], obj.get("appointmentExtensionAmount"))
        appointment_extension_type = from_union([AppointmentExtensionType, from_none], obj.get("appointmentExtensionType"))
        return FluffyAdditionalSettings(appointment_extension_amount, appointment_extension_type)

    def to_dict(self) -> dict:
        result: dict = {}
        result["appointmentExtensionAmount"] = from_union([to_float, from_none], self.appointment_extension_amount)
        result["appointmentExtensionType"] = from_union([lambda x: to_enum(AppointmentExtensionType, x), from_none], self.appointment_extension_type)
        return result


class TentacledBackofficeConfiguration:
    adjacent_taxonomies_treshold: Optional[float]
    allow_hide_service_for_booking: Optional[bool]
    allow_hide_workers_from_schdeule: Optional[bool]
    allow_sms_translit: Optional[bool]
    appointment_future_moving: Optional[bool]
    block_notification_for_any_available_adjacent_service: Optional[bool]
    cabinets_enabled: Optional[bool]
    check_client_overlapping: Optional[bool]
    custom_online_payment_confirmation_template: Optional[str]
    default_gt_schedule_day_view: Optional[bool]
    disable_appointment_client_inline_editor: Optional[bool]
    edit_app_extra_id: Optional[bool]
    edit_taxonomy_children: Optional[bool]
    edit_taxonomy_visit_type: Optional[bool]
    enable_black_list: Optional[bool]
    enable_calculate_shedule: Optional[bool]
    enable_client_card: Optional[bool]
    enable_client_language: Optional[bool]
    enable_client_medical_card_report: Optional[bool]
    enable_custom_online_payment_confirmation: Optional[bool]
    enable_extended_phone: Optional[bool]
    enable_extended_records_client_statistics: Optional[bool]
    enable_master_importance: Optional[bool]
    enable_service_time_limit: Optional[bool]
    enable_source_choice: Optional[bool]
    enable_taxonomy_children_age_check: Optional[bool]
    export_to_excel_removed_clients: Optional[bool]
    feedback_customer_portal_message: Optional[str]
    feedback_customer_portal_thank_you_message: Optional[str]
    feedback_customer_portal_title: Optional[str]
    feed_back_min_rating: Optional[FeedBackMinRating]
    fin_id: Optional[str]
    fin_name: Optional[str]
    hide_customer_portal_footer: Optional[bool]
    highlighted_resource: Optional[bool]
    manual_exception_support: Optional[bool]
    no_internet_alert: Optional[bool]
    past_time_edit: Optional[float]
    payment_provider: Optional[PaymentProvider]
    readonly_resource_schedule: Optional[bool]
    resource_timetable_type: Optional[ResourceTimetableType]
    revision_version: Optional[float]
    schdule_week_view_is_default: Optional[bool]
    schedule_default_workers_limit: Optional[float]
    scheduler_week_view_type: Optional[SchedulerWeekViewType]
    schedule_worker_hours: Optional[bool]
    show_additional_fields: Optional[bool]
    show_address: Optional[bool]
    show_birth_date: Optional[bool]
    show_client_appear: Optional[bool]
    show_client_appear_on_schedule: Optional[bool]
    show_client_birthday_filter: Optional[bool]
    show_client_contract_number: Optional[bool]
    show_client_image: Optional[bool]
    show_client_payment: Optional[bool]
    show_defaulter_blockscreen: Optional[bool]
    show_delivery_status: Optional[bool]
    show_department_filter: Optional[bool]
    show_departments: Optional[bool]
    show_departments_configuration: Optional[bool]
    show_email: Optional[bool]
    show_extra_client_info: Optional[bool]
    show_fax: Optional[bool]
    show_fired_worker_appointment_alert: Optional[bool]
    show_first_available_slot: Optional[bool]
    show_gap_window: Optional[bool]
    show_gender: Optional[bool]
    show_gender_in_records: Optional[bool]
    show_generatable_reports_screen: Optional[bool]
    show_house_number: Optional[bool]
    show_israel_city: Optional[bool]
    show_kupat_holim: Optional[bool]
    show_leads_screen: Optional[bool]
    show_manual_changes: Optional[bool]
    show_passport_id: Optional[bool]
    show_rooms: Optional[bool]
    show_season_tickets: Optional[bool]
    show_taxonomy_children: Optional[bool]
    show_taxonomy_localization: Optional[bool]
    show_taxonomy_visit_type: Optional[bool]
    show_test_record: Optional[bool]
    show_utm: Optional[bool]
    show_widget_color_theme: Optional[bool]
    show_worker_description_in_event: Optional[bool]
    show_worker_extra_id: Optional[bool]
    show_worker_status: Optional[bool]
    skip_appointment_price_update: Optional[bool]
    skip_cancel_if_client_not_appear: Optional[bool]
    skip_service_filtering: Optional[bool]
    split_full_name_xls_export: Optional[bool]
    state_level_holidays: Optional[List[Dict[str, Any]]]
    state_level_holidays_not_working: Optional[bool]
    taxonomy_children_max_age: Optional[float]
    use_additional_durations: Optional[bool]
    use_adjacent_taxonomies: Optional[bool]
    use_adjacent_taxonomies_slot_splitting: Optional[bool]
    use_gt_app_method: Optional[bool]
    work_week_end: Optional[float]
    work_week_start: Optional[float]

    def __init__(self, adjacent_taxonomies_treshold: Optional[float], allow_hide_service_for_booking: Optional[bool], allow_hide_workers_from_schdeule: Optional[bool], allow_sms_translit: Optional[bool], appointment_future_moving: Optional[bool], block_notification_for_any_available_adjacent_service: Optional[bool], cabinets_enabled: Optional[bool], check_client_overlapping: Optional[bool], custom_online_payment_confirmation_template: Optional[str], default_gt_schedule_day_view: Optional[bool], disable_appointment_client_inline_editor: Optional[bool], edit_app_extra_id: Optional[bool], edit_taxonomy_children: Optional[bool], edit_taxonomy_visit_type: Optional[bool], enable_black_list: Optional[bool], enable_calculate_shedule: Optional[bool], enable_client_card: Optional[bool], enable_client_language: Optional[bool], enable_client_medical_card_report: Optional[bool], enable_custom_online_payment_confirmation: Optional[bool], enable_extended_phone: Optional[bool], enable_extended_records_client_statistics: Optional[bool], enable_master_importance: Optional[bool], enable_service_time_limit: Optional[bool], enable_source_choice: Optional[bool], enable_taxonomy_children_age_check: Optional[bool], export_to_excel_removed_clients: Optional[bool], feedback_customer_portal_message: Optional[str], feedback_customer_portal_thank_you_message: Optional[str], feedback_customer_portal_title: Optional[str], feed_back_min_rating: Optional[FeedBackMinRating], fin_id: Optional[str], fin_name: Optional[str], hide_customer_portal_footer: Optional[bool], highlighted_resource: Optional[bool], manual_exception_support: Optional[bool], no_internet_alert: Optional[bool], past_time_edit: Optional[float], payment_provider: Optional[PaymentProvider], readonly_resource_schedule: Optional[bool], resource_timetable_type: Optional[ResourceTimetableType], revision_version: Optional[float], schdule_week_view_is_default: Optional[bool], schedule_default_workers_limit: Optional[float], scheduler_week_view_type: Optional[SchedulerWeekViewType], schedule_worker_hours: Optional[bool], show_additional_fields: Optional[bool], show_address: Optional[bool], show_birth_date: Optional[bool], show_client_appear: Optional[bool], show_client_appear_on_schedule: Optional[bool], show_client_birthday_filter: Optional[bool], show_client_contract_number: Optional[bool], show_client_image: Optional[bool], show_client_payment: Optional[bool], show_defaulter_blockscreen: Optional[bool], show_delivery_status: Optional[bool], show_department_filter: Optional[bool], show_departments: Optional[bool], show_departments_configuration: Optional[bool], show_email: Optional[bool], show_extra_client_info: Optional[bool], show_fax: Optional[bool], show_fired_worker_appointment_alert: Optional[bool], show_first_available_slot: Optional[bool], show_gap_window: Optional[bool], show_gender: Optional[bool], show_gender_in_records: Optional[bool], show_generatable_reports_screen: Optional[bool], show_house_number: Optional[bool], show_israel_city: Optional[bool], show_kupat_holim: Optional[bool], show_leads_screen: Optional[bool], show_manual_changes: Optional[bool], show_passport_id: Optional[bool], show_rooms: Optional[bool], show_season_tickets: Optional[bool], show_taxonomy_children: Optional[bool], show_taxonomy_localization: Optional[bool], show_taxonomy_visit_type: Optional[bool], show_test_record: Optional[bool], show_utm: Optional[bool], show_widget_color_theme: Optional[bool], show_worker_description_in_event: Optional[bool], show_worker_extra_id: Optional[bool], show_worker_status: Optional[bool], skip_appointment_price_update: Optional[bool], skip_cancel_if_client_not_appear: Optional[bool], skip_service_filtering: Optional[bool], split_full_name_xls_export: Optional[bool], state_level_holidays: Optional[List[Dict[str, Any]]], state_level_holidays_not_working: Optional[bool], taxonomy_children_max_age: Optional[float], use_additional_durations: Optional[bool], use_adjacent_taxonomies: Optional[bool], use_adjacent_taxonomies_slot_splitting: Optional[bool], use_gt_app_method: Optional[bool], work_week_end: Optional[float], work_week_start: Optional[float]) -> None:
        self.adjacent_taxonomies_treshold = adjacent_taxonomies_treshold
        self.allow_hide_service_for_booking = allow_hide_service_for_booking
        self.allow_hide_workers_from_schdeule = allow_hide_workers_from_schdeule
        self.allow_sms_translit = allow_sms_translit
        self.appointment_future_moving = appointment_future_moving
        self.block_notification_for_any_available_adjacent_service = block_notification_for_any_available_adjacent_service
        self.cabinets_enabled = cabinets_enabled
        self.check_client_overlapping = check_client_overlapping
        self.custom_online_payment_confirmation_template = custom_online_payment_confirmation_template
        self.default_gt_schedule_day_view = default_gt_schedule_day_view
        self.disable_appointment_client_inline_editor = disable_appointment_client_inline_editor
        self.edit_app_extra_id = edit_app_extra_id
        self.edit_taxonomy_children = edit_taxonomy_children
        self.edit_taxonomy_visit_type = edit_taxonomy_visit_type
        self.enable_black_list = enable_black_list
        self.enable_calculate_shedule = enable_calculate_shedule
        self.enable_client_card = enable_client_card
        self.enable_client_language = enable_client_language
        self.enable_client_medical_card_report = enable_client_medical_card_report
        self.enable_custom_online_payment_confirmation = enable_custom_online_payment_confirmation
        self.enable_extended_phone = enable_extended_phone
        self.enable_extended_records_client_statistics = enable_extended_records_client_statistics
        self.enable_master_importance = enable_master_importance
        self.enable_service_time_limit = enable_service_time_limit
        self.enable_source_choice = enable_source_choice
        self.enable_taxonomy_children_age_check = enable_taxonomy_children_age_check
        self.export_to_excel_removed_clients = export_to_excel_removed_clients
        self.feedback_customer_portal_message = feedback_customer_portal_message
        self.feedback_customer_portal_thank_you_message = feedback_customer_portal_thank_you_message
        self.feedback_customer_portal_title = feedback_customer_portal_title
        self.feed_back_min_rating = feed_back_min_rating
        self.fin_id = fin_id
        self.fin_name = fin_name
        self.hide_customer_portal_footer = hide_customer_portal_footer
        self.highlighted_resource = highlighted_resource
        self.manual_exception_support = manual_exception_support
        self.no_internet_alert = no_internet_alert
        self.past_time_edit = past_time_edit
        self.payment_provider = payment_provider
        self.readonly_resource_schedule = readonly_resource_schedule
        self.resource_timetable_type = resource_timetable_type
        self.revision_version = revision_version
        self.schdule_week_view_is_default = schdule_week_view_is_default
        self.schedule_default_workers_limit = schedule_default_workers_limit
        self.scheduler_week_view_type = scheduler_week_view_type
        self.schedule_worker_hours = schedule_worker_hours
        self.show_additional_fields = show_additional_fields
        self.show_address = show_address
        self.show_birth_date = show_birth_date
        self.show_client_appear = show_client_appear
        self.show_client_appear_on_schedule = show_client_appear_on_schedule
        self.show_client_birthday_filter = show_client_birthday_filter
        self.show_client_contract_number = show_client_contract_number
        self.show_client_image = show_client_image
        self.show_client_payment = show_client_payment
        self.show_defaulter_blockscreen = show_defaulter_blockscreen
        self.show_delivery_status = show_delivery_status
        self.show_department_filter = show_department_filter
        self.show_departments = show_departments
        self.show_departments_configuration = show_departments_configuration
        self.show_email = show_email
        self.show_extra_client_info = show_extra_client_info
        self.show_fax = show_fax
        self.show_fired_worker_appointment_alert = show_fired_worker_appointment_alert
        self.show_first_available_slot = show_first_available_slot
        self.show_gap_window = show_gap_window
        self.show_gender = show_gender
        self.show_gender_in_records = show_gender_in_records
        self.show_generatable_reports_screen = show_generatable_reports_screen
        self.show_house_number = show_house_number
        self.show_israel_city = show_israel_city
        self.show_kupat_holim = show_kupat_holim
        self.show_leads_screen = show_leads_screen
        self.show_manual_changes = show_manual_changes
        self.show_passport_id = show_passport_id
        self.show_rooms = show_rooms
        self.show_season_tickets = show_season_tickets
        self.show_taxonomy_children = show_taxonomy_children
        self.show_taxonomy_localization = show_taxonomy_localization
        self.show_taxonomy_visit_type = show_taxonomy_visit_type
        self.show_test_record = show_test_record
        self.show_utm = show_utm
        self.show_widget_color_theme = show_widget_color_theme
        self.show_worker_description_in_event = show_worker_description_in_event
        self.show_worker_extra_id = show_worker_extra_id
        self.show_worker_status = show_worker_status
        self.skip_appointment_price_update = skip_appointment_price_update
        self.skip_cancel_if_client_not_appear = skip_cancel_if_client_not_appear
        self.skip_service_filtering = skip_service_filtering
        self.split_full_name_xls_export = split_full_name_xls_export
        self.state_level_holidays = state_level_holidays
        self.state_level_holidays_not_working = state_level_holidays_not_working
        self.taxonomy_children_max_age = taxonomy_children_max_age
        self.use_additional_durations = use_additional_durations
        self.use_adjacent_taxonomies = use_adjacent_taxonomies
        self.use_adjacent_taxonomies_slot_splitting = use_adjacent_taxonomies_slot_splitting
        self.use_gt_app_method = use_gt_app_method
        self.work_week_end = work_week_end
        self.work_week_start = work_week_start

    @staticmethod
    def from_dict(obj: Any) -> 'TentacledBackofficeConfiguration':
        assert isinstance(obj, dict)
        adjacent_taxonomies_treshold = from_union([from_float, from_none], obj.get("adjacentTaxonomiesTreshold"))
        allow_hide_service_for_booking = from_union([from_bool, from_none], obj.get("allowHideServiceForBooking"))
        allow_hide_workers_from_schdeule = from_union([from_bool, from_none], obj.get("allowHideWorkersFromSchdeule"))
        allow_sms_translit = from_union([from_bool, from_none], obj.get("allowSmsTranslit"))
        appointment_future_moving = from_union([from_bool, from_none], obj.get("appointmentFutureMoving"))
        block_notification_for_any_available_adjacent_service = from_union([from_bool, from_none], obj.get("blockNotificationForAnyAvailableAdjacentService"))
        cabinets_enabled = from_union([from_bool, from_none], obj.get("cabinetsEnabled"))
        check_client_overlapping = from_union([from_bool, from_none], obj.get("checkClientOverlapping"))
        custom_online_payment_confirmation_template = from_union([from_str, from_none], obj.get("customOnlinePaymentConfirmationTemplate"))
        default_gt_schedule_day_view = from_union([from_bool, from_none], obj.get("defaultGTScheduleDayView"))
        disable_appointment_client_inline_editor = from_union([from_bool, from_none], obj.get("disableAppointmentClientInlineEditor"))
        edit_app_extra_id = from_union([from_bool, from_none], obj.get("editAppExtraId"))
        edit_taxonomy_children = from_union([from_bool, from_none], obj.get("editTaxonomyChildren"))
        edit_taxonomy_visit_type = from_union([from_bool, from_none], obj.get("editTaxonomyVisitType"))
        enable_black_list = from_union([from_bool, from_none], obj.get("enableBlackList"))
        enable_calculate_shedule = from_union([from_bool, from_none], obj.get("enableCalculateShedule"))
        enable_client_card = from_union([from_bool, from_none], obj.get("enableClientCard"))
        enable_client_language = from_union([from_bool, from_none], obj.get("enableClientLanguage"))
        enable_client_medical_card_report = from_union([from_bool, from_none], obj.get("enableClientMedicalCardReport"))
        enable_custom_online_payment_confirmation = from_union([from_bool, from_none], obj.get("enableCustomOnlinePaymentConfirmation"))
        enable_extended_phone = from_union([from_bool, from_none], obj.get("enableExtendedPhone"))
        enable_extended_records_client_statistics = from_union([from_bool, from_none], obj.get("enableExtendedRecordsClientStatistics"))
        enable_master_importance = from_union([from_bool, from_none], obj.get("enableMasterImportance"))
        enable_service_time_limit = from_union([from_bool, from_none], obj.get("enableServiceTimeLimit"))
        enable_source_choice = from_union([from_bool, from_none], obj.get("enableSourceChoice"))
        enable_taxonomy_children_age_check = from_union([from_bool, from_none], obj.get("enableTaxonomyChildrenAgeCheck"))
        export_to_excel_removed_clients = from_union([from_bool, from_none], obj.get("exportToExcelRemovedClients"))
        feedback_customer_portal_message = from_union([from_str, from_none], obj.get("feedbackCustomerPortalMessage"))
        feedback_customer_portal_thank_you_message = from_union([from_str, from_none], obj.get("feedbackCustomerPortalThankYouMessage"))
        feedback_customer_portal_title = from_union([from_str, from_none], obj.get("feedbackCustomerPortalTitle"))
        feed_back_min_rating = from_union([FeedBackMinRating, from_none], obj.get("feedBackMinRating"))
        fin_id = from_union([from_str, from_none], obj.get("finId"))
        fin_name = from_union([from_str, from_none], obj.get("finName"))
        hide_customer_portal_footer = from_union([from_bool, from_none], obj.get("hideCustomerPortalFooter"))
        highlighted_resource = from_union([from_bool, from_none], obj.get("highlightedResource"))
        manual_exception_support = from_union([from_bool, from_none], obj.get("manualExceptionSupport"))
        no_internet_alert = from_union([from_bool, from_none], obj.get("noInternetAlert"))
        past_time_edit = from_union([from_float, from_none], obj.get("pastTimeEdit"))
        payment_provider = from_union([PaymentProvider, from_none], obj.get("paymentProvider"))
        readonly_resource_schedule = from_union([from_bool, from_none], obj.get("readonlyResourceSchedule"))
        resource_timetable_type = from_union([ResourceTimetableType, from_none], obj.get("resourceTimetableType"))
        revision_version = from_union([from_float, from_none], obj.get("revisionVersion"))
        schdule_week_view_is_default = from_union([from_bool, from_none], obj.get("schduleWeekViewIsDefault"))
        schedule_default_workers_limit = from_union([from_float, from_none], obj.get("scheduleDefaultWorkersLimit"))
        scheduler_week_view_type = from_union([SchedulerWeekViewType, from_none], obj.get("schedulerWeekViewType"))
        schedule_worker_hours = from_union([from_bool, from_none], obj.get("scheduleWorkerHours"))
        show_additional_fields = from_union([from_bool, from_none], obj.get("showAdditionalFields"))
        show_address = from_union([from_bool, from_none], obj.get("showAddress"))
        show_birth_date = from_union([from_bool, from_none], obj.get("showBirthDate"))
        show_client_appear = from_union([from_bool, from_none], obj.get("showClientAppear"))
        show_client_appear_on_schedule = from_union([from_bool, from_none], obj.get("showClientAppearOnSchedule"))
        show_client_birthday_filter = from_union([from_bool, from_none], obj.get("showClientBirthdayFilter"))
        show_client_contract_number = from_union([from_bool, from_none], obj.get("showClientContractNumber"))
        show_client_image = from_union([from_bool, from_none], obj.get("showClientImage"))
        show_client_payment = from_union([from_bool, from_none], obj.get("showClientPayment"))
        show_defaulter_blockscreen = from_union([from_bool, from_none], obj.get("showDefaulterBlockscreen"))
        show_delivery_status = from_union([from_bool, from_none], obj.get("showDeliveryStatus"))
        show_department_filter = from_union([from_bool, from_none], obj.get("showDepartmentFilter"))
        show_departments = from_union([from_bool, from_none], obj.get("showDepartments"))
        show_departments_configuration = from_union([from_bool, from_none], obj.get("showDepartmentsConfiguration"))
        show_email = from_union([from_bool, from_none], obj.get("showEmail"))
        show_extra_client_info = from_union([from_bool, from_none], obj.get("showExtraClientInfo"))
        show_fax = from_union([from_bool, from_none], obj.get("showFax"))
        show_fired_worker_appointment_alert = from_union([from_bool, from_none], obj.get("showFiredWorkerAppointmentAlert"))
        show_first_available_slot = from_union([from_bool, from_none], obj.get("showFirstAvailableSlot"))
        show_gap_window = from_union([from_bool, from_none], obj.get("showGapWindow"))
        show_gender = from_union([from_bool, from_none], obj.get("showGender"))
        show_gender_in_records = from_union([from_bool, from_none], obj.get("showGenderInRecords"))
        show_generatable_reports_screen = from_union([from_bool, from_none], obj.get("showGeneratableReportsScreen"))
        show_house_number = from_union([from_bool, from_none], obj.get("showHouseNumber"))
        show_israel_city = from_union([from_bool, from_none], obj.get("showIsraelCity"))
        show_kupat_holim = from_union([from_bool, from_none], obj.get("showKupatHolim"))
        show_leads_screen = from_union([from_bool, from_none], obj.get("showLeadsScreen"))
        show_manual_changes = from_union([from_bool, from_none], obj.get("showManualChanges"))
        show_passport_id = from_union([from_bool, from_none], obj.get("showPassportId"))
        show_rooms = from_union([from_bool, from_none], obj.get("showRooms"))
        show_season_tickets = from_union([from_bool, from_none], obj.get("showSeasonTickets"))
        show_taxonomy_children = from_union([from_bool, from_none], obj.get("showTaxonomyChildren"))
        show_taxonomy_localization = from_union([from_bool, from_none], obj.get("showTaxonomyLocalization"))
        show_taxonomy_visit_type = from_union([from_bool, from_none], obj.get("showTaxonomyVisitType"))
        show_test_record = from_union([from_bool, from_none], obj.get("showTestRecord"))
        show_utm = from_union([from_bool, from_none], obj.get("showUTM"))
        show_widget_color_theme = from_union([from_bool, from_none], obj.get("showWidgetColorTheme"))
        show_worker_description_in_event = from_union([from_bool, from_none], obj.get("showWorkerDescriptionInEvent"))
        show_worker_extra_id = from_union([from_bool, from_none], obj.get("showWorkerExtraId"))
        show_worker_status = from_union([from_bool, from_none], obj.get("showWorkerStatus"))
        skip_appointment_price_update = from_union([from_bool, from_none], obj.get("skipAppointmentPriceUpdate"))
        skip_cancel_if_client_not_appear = from_union([from_bool, from_none], obj.get("skipCancelIfClientNotAppear"))
        skip_service_filtering = from_union([from_bool, from_none], obj.get("skipServiceFiltering"))
        split_full_name_xls_export = from_union([from_bool, from_none], obj.get("splitFullNameXlsExport"))
        state_level_holidays = from_union([lambda x: from_list(lambda x: from_dict(lambda x: x, x), x), from_none], obj.get("stateLevelHolidays"))
        state_level_holidays_not_working = from_union([from_bool, from_none], obj.get("stateLevelHolidaysNotWorking"))
        taxonomy_children_max_age = from_union([from_float, from_none], obj.get("taxonomyChildrenMaxAge"))
        use_additional_durations = from_union([from_bool, from_none], obj.get("useAdditionalDurations"))
        use_adjacent_taxonomies = from_union([from_bool, from_none], obj.get("useAdjacentTaxonomies"))
        use_adjacent_taxonomies_slot_splitting = from_union([from_bool, from_none], obj.get("useAdjacentTaxonomiesSlotSplitting"))
        use_gt_app_method = from_union([from_bool, from_none], obj.get("useGtAppMethod"))
        work_week_end = from_union([from_float, from_none], obj.get("workWeekEnd"))
        work_week_start = from_union([from_float, from_none], obj.get("workWeekStart"))
        return TentacledBackofficeConfiguration(adjacent_taxonomies_treshold, allow_hide_service_for_booking, allow_hide_workers_from_schdeule, allow_sms_translit, appointment_future_moving, block_notification_for_any_available_adjacent_service, cabinets_enabled, check_client_overlapping, custom_online_payment_confirmation_template, default_gt_schedule_day_view, disable_appointment_client_inline_editor, edit_app_extra_id, edit_taxonomy_children, edit_taxonomy_visit_type, enable_black_list, enable_calculate_shedule, enable_client_card, enable_client_language, enable_client_medical_card_report, enable_custom_online_payment_confirmation, enable_extended_phone, enable_extended_records_client_statistics, enable_master_importance, enable_service_time_limit, enable_source_choice, enable_taxonomy_children_age_check, export_to_excel_removed_clients, feedback_customer_portal_message, feedback_customer_portal_thank_you_message, feedback_customer_portal_title, feed_back_min_rating, fin_id, fin_name, hide_customer_portal_footer, highlighted_resource, manual_exception_support, no_internet_alert, past_time_edit, payment_provider, readonly_resource_schedule, resource_timetable_type, revision_version, schdule_week_view_is_default, schedule_default_workers_limit, scheduler_week_view_type, schedule_worker_hours, show_additional_fields, show_address, show_birth_date, show_client_appear, show_client_appear_on_schedule, show_client_birthday_filter, show_client_contract_number, show_client_image, show_client_payment, show_defaulter_blockscreen, show_delivery_status, show_department_filter, show_departments, show_departments_configuration, show_email, show_extra_client_info, show_fax, show_fired_worker_appointment_alert, show_first_available_slot, show_gap_window, show_gender, show_gender_in_records, show_generatable_reports_screen, show_house_number, show_israel_city, show_kupat_holim, show_leads_screen, show_manual_changes, show_passport_id, show_rooms, show_season_tickets, show_taxonomy_children, show_taxonomy_localization, show_taxonomy_visit_type, show_test_record, show_utm, show_widget_color_theme, show_worker_description_in_event, show_worker_extra_id, show_worker_status, skip_appointment_price_update, skip_cancel_if_client_not_appear, skip_service_filtering, split_full_name_xls_export, state_level_holidays, state_level_holidays_not_working, taxonomy_children_max_age, use_additional_durations, use_adjacent_taxonomies, use_adjacent_taxonomies_slot_splitting, use_gt_app_method, work_week_end, work_week_start)

    def to_dict(self) -> dict:
        result: dict = {}
        result["adjacentTaxonomiesTreshold"] = from_union([to_float, from_none], self.adjacent_taxonomies_treshold)
        result["allowHideServiceForBooking"] = from_union([from_bool, from_none], self.allow_hide_service_for_booking)
        result["allowHideWorkersFromSchdeule"] = from_union([from_bool, from_none], self.allow_hide_workers_from_schdeule)
        result["allowSmsTranslit"] = from_union([from_bool, from_none], self.allow_sms_translit)
        result["appointmentFutureMoving"] = from_union([from_bool, from_none], self.appointment_future_moving)
        result["blockNotificationForAnyAvailableAdjacentService"] = from_union([from_bool, from_none], self.block_notification_for_any_available_adjacent_service)
        result["cabinetsEnabled"] = from_union([from_bool, from_none], self.cabinets_enabled)
        result["checkClientOverlapping"] = from_union([from_bool, from_none], self.check_client_overlapping)
        result["customOnlinePaymentConfirmationTemplate"] = from_union([from_str, from_none], self.custom_online_payment_confirmation_template)
        result["defaultGTScheduleDayView"] = from_union([from_bool, from_none], self.default_gt_schedule_day_view)
        result["disableAppointmentClientInlineEditor"] = from_union([from_bool, from_none], self.disable_appointment_client_inline_editor)
        result["editAppExtraId"] = from_union([from_bool, from_none], self.edit_app_extra_id)
        result["editTaxonomyChildren"] = from_union([from_bool, from_none], self.edit_taxonomy_children)
        result["editTaxonomyVisitType"] = from_union([from_bool, from_none], self.edit_taxonomy_visit_type)
        result["enableBlackList"] = from_union([from_bool, from_none], self.enable_black_list)
        result["enableCalculateShedule"] = from_union([from_bool, from_none], self.enable_calculate_shedule)
        result["enableClientCard"] = from_union([from_bool, from_none], self.enable_client_card)
        result["enableClientLanguage"] = from_union([from_bool, from_none], self.enable_client_language)
        result["enableClientMedicalCardReport"] = from_union([from_bool, from_none], self.enable_client_medical_card_report)
        result["enableCustomOnlinePaymentConfirmation"] = from_union([from_bool, from_none], self.enable_custom_online_payment_confirmation)
        result["enableExtendedPhone"] = from_union([from_bool, from_none], self.enable_extended_phone)
        result["enableExtendedRecordsClientStatistics"] = from_union([from_bool, from_none], self.enable_extended_records_client_statistics)
        result["enableMasterImportance"] = from_union([from_bool, from_none], self.enable_master_importance)
        result["enableServiceTimeLimit"] = from_union([from_bool, from_none], self.enable_service_time_limit)
        result["enableSourceChoice"] = from_union([from_bool, from_none], self.enable_source_choice)
        result["enableTaxonomyChildrenAgeCheck"] = from_union([from_bool, from_none], self.enable_taxonomy_children_age_check)
        result["exportToExcelRemovedClients"] = from_union([from_bool, from_none], self.export_to_excel_removed_clients)
        result["feedbackCustomerPortalMessage"] = from_union([from_str, from_none], self.feedback_customer_portal_message)
        result["feedbackCustomerPortalThankYouMessage"] = from_union([from_str, from_none], self.feedback_customer_portal_thank_you_message)
        result["feedbackCustomerPortalTitle"] = from_union([from_str, from_none], self.feedback_customer_portal_title)
        result["feedBackMinRating"] = from_union([lambda x: to_enum(FeedBackMinRating, x), from_none], self.feed_back_min_rating)
        result["finId"] = from_union([from_str, from_none], self.fin_id)
        result["finName"] = from_union([from_str, from_none], self.fin_name)
        result["hideCustomerPortalFooter"] = from_union([from_bool, from_none], self.hide_customer_portal_footer)
        result["highlightedResource"] = from_union([from_bool, from_none], self.highlighted_resource)
        result["manualExceptionSupport"] = from_union([from_bool, from_none], self.manual_exception_support)
        result["noInternetAlert"] = from_union([from_bool, from_none], self.no_internet_alert)
        result["pastTimeEdit"] = from_union([to_float, from_none], self.past_time_edit)
        result["paymentProvider"] = from_union([lambda x: to_enum(PaymentProvider, x), from_none], self.payment_provider)
        result["readonlyResourceSchedule"] = from_union([from_bool, from_none], self.readonly_resource_schedule)
        result["resourceTimetableType"] = from_union([lambda x: to_enum(ResourceTimetableType, x), from_none], self.resource_timetable_type)
        result["revisionVersion"] = from_union([to_float, from_none], self.revision_version)
        result["schduleWeekViewIsDefault"] = from_union([from_bool, from_none], self.schdule_week_view_is_default)
        result["scheduleDefaultWorkersLimit"] = from_union([to_float, from_none], self.schedule_default_workers_limit)
        result["schedulerWeekViewType"] = from_union([lambda x: to_enum(SchedulerWeekViewType, x), from_none], self.scheduler_week_view_type)
        result["scheduleWorkerHours"] = from_union([from_bool, from_none], self.schedule_worker_hours)
        result["showAdditionalFields"] = from_union([from_bool, from_none], self.show_additional_fields)
        result["showAddress"] = from_union([from_bool, from_none], self.show_address)
        result["showBirthDate"] = from_union([from_bool, from_none], self.show_birth_date)
        result["showClientAppear"] = from_union([from_bool, from_none], self.show_client_appear)
        result["showClientAppearOnSchedule"] = from_union([from_bool, from_none], self.show_client_appear_on_schedule)
        result["showClientBirthdayFilter"] = from_union([from_bool, from_none], self.show_client_birthday_filter)
        result["showClientContractNumber"] = from_union([from_bool, from_none], self.show_client_contract_number)
        result["showClientImage"] = from_union([from_bool, from_none], self.show_client_image)
        result["showClientPayment"] = from_union([from_bool, from_none], self.show_client_payment)
        result["showDefaulterBlockscreen"] = from_union([from_bool, from_none], self.show_defaulter_blockscreen)
        result["showDeliveryStatus"] = from_union([from_bool, from_none], self.show_delivery_status)
        result["showDepartmentFilter"] = from_union([from_bool, from_none], self.show_department_filter)
        result["showDepartments"] = from_union([from_bool, from_none], self.show_departments)
        result["showDepartmentsConfiguration"] = from_union([from_bool, from_none], self.show_departments_configuration)
        result["showEmail"] = from_union([from_bool, from_none], self.show_email)
        result["showExtraClientInfo"] = from_union([from_bool, from_none], self.show_extra_client_info)
        result["showFax"] = from_union([from_bool, from_none], self.show_fax)
        result["showFiredWorkerAppointmentAlert"] = from_union([from_bool, from_none], self.show_fired_worker_appointment_alert)
        result["showFirstAvailableSlot"] = from_union([from_bool, from_none], self.show_first_available_slot)
        result["showGapWindow"] = from_union([from_bool, from_none], self.show_gap_window)
        result["showGender"] = from_union([from_bool, from_none], self.show_gender)
        result["showGenderInRecords"] = from_union([from_bool, from_none], self.show_gender_in_records)
        result["showGeneratableReportsScreen"] = from_union([from_bool, from_none], self.show_generatable_reports_screen)
        result["showHouseNumber"] = from_union([from_bool, from_none], self.show_house_number)
        result["showIsraelCity"] = from_union([from_bool, from_none], self.show_israel_city)
        result["showKupatHolim"] = from_union([from_bool, from_none], self.show_kupat_holim)
        result["showLeadsScreen"] = from_union([from_bool, from_none], self.show_leads_screen)
        result["showManualChanges"] = from_union([from_bool, from_none], self.show_manual_changes)
        result["showPassportId"] = from_union([from_bool, from_none], self.show_passport_id)
        result["showRooms"] = from_union([from_bool, from_none], self.show_rooms)
        result["showSeasonTickets"] = from_union([from_bool, from_none], self.show_season_tickets)
        result["showTaxonomyChildren"] = from_union([from_bool, from_none], self.show_taxonomy_children)
        result["showTaxonomyLocalization"] = from_union([from_bool, from_none], self.show_taxonomy_localization)
        result["showTaxonomyVisitType"] = from_union([from_bool, from_none], self.show_taxonomy_visit_type)
        result["showTestRecord"] = from_union([from_bool, from_none], self.show_test_record)
        result["showUTM"] = from_union([from_bool, from_none], self.show_utm)
        result["showWidgetColorTheme"] = from_union([from_bool, from_none], self.show_widget_color_theme)
        result["showWorkerDescriptionInEvent"] = from_union([from_bool, from_none], self.show_worker_description_in_event)
        result["showWorkerExtraId"] = from_union([from_bool, from_none], self.show_worker_extra_id)
        result["showWorkerStatus"] = from_union([from_bool, from_none], self.show_worker_status)
        result["skipAppointmentPriceUpdate"] = from_union([from_bool, from_none], self.skip_appointment_price_update)
        result["skipCancelIfClientNotAppear"] = from_union([from_bool, from_none], self.skip_cancel_if_client_not_appear)
        result["skipServiceFiltering"] = from_union([from_bool, from_none], self.skip_service_filtering)
        result["splitFullNameXlsExport"] = from_union([from_bool, from_none], self.split_full_name_xls_export)
        result["stateLevelHolidays"] = from_union([lambda x: from_list(lambda x: from_dict(lambda x: x, x), x), from_none], self.state_level_holidays)
        result["stateLevelHolidaysNotWorking"] = from_union([from_bool, from_none], self.state_level_holidays_not_working)
        result["taxonomyChildrenMaxAge"] = from_union([to_float, from_none], self.taxonomy_children_max_age)
        result["useAdditionalDurations"] = from_union([from_bool, from_none], self.use_additional_durations)
        result["useAdjacentTaxonomies"] = from_union([from_bool, from_none], self.use_adjacent_taxonomies)
        result["useAdjacentTaxonomiesSlotSplitting"] = from_union([from_bool, from_none], self.use_adjacent_taxonomies_slot_splitting)
        result["useGtAppMethod"] = from_union([from_bool, from_none], self.use_gt_app_method)
        result["workWeekEnd"] = from_union([to_float, from_none], self.work_week_end)
        result["workWeekStart"] = from_union([to_float, from_none], self.work_week_start)
        return result


class StickyBackofficeConfiguration:
    enable_master_importance: Optional[bool]
    resource_timetable_type: Optional[ResourceTimetableType]

    def __init__(self, enable_master_importance: Optional[bool], resource_timetable_type: Optional[ResourceTimetableType]) -> None:
        self.enable_master_importance = enable_master_importance
        self.resource_timetable_type = resource_timetable_type

    @staticmethod
    def from_dict(obj: Any) -> 'StickyBackofficeConfiguration':
        assert isinstance(obj, dict)
        enable_master_importance = from_union([from_bool, from_none], obj.get("enableMasterImportance"))
        resource_timetable_type = from_union([ResourceTimetableType, from_none], obj.get("resourceTimetableType"))
        return StickyBackofficeConfiguration(enable_master_importance, resource_timetable_type)

    def to_dict(self) -> dict:
        result: dict = {}
        result["enableMasterImportance"] = from_union([from_bool, from_none], self.enable_master_importance)
        result["resourceTimetableType"] = from_union([lambda x: to_enum(ResourceTimetableType, x), from_none], self.resource_timetable_type)
        return result


class FluffyCabinet:
    active: Optional[bool]
    id: Optional[str]
    name: Optional[str]

    def __init__(self, active: Optional[bool], id: Optional[str], name: Optional[str]) -> None:
        self.active = active
        self.id = id
        self.name = name

    @staticmethod
    def from_dict(obj: Any) -> 'FluffyCabinet':
        assert isinstance(obj, dict)
        active = from_union([from_bool, from_none], obj.get("active"))
        id = from_union([from_str, from_none], obj.get("id"))
        name = from_union([from_str, from_none], obj.get("name"))
        return FluffyCabinet(active, id, name)

    def to_dict(self) -> dict:
        result: dict = {}
        result["active"] = from_union([from_bool, from_none], self.active)
        result["id"] = from_union([from_str, from_none], self.id)
        result["name"] = from_union([from_str, from_none], self.name)
        return result


class FluffyCallbackWidgetConfiguration:
    title1: Optional[str]
    title2: Optional[str]

    def __init__(self, title1: Optional[str], title2: Optional[str]) -> None:
        self.title1 = title1
        self.title2 = title2

    @staticmethod
    def from_dict(obj: Any) -> 'FluffyCallbackWidgetConfiguration':
        assert isinstance(obj, dict)
        title1 = from_union([from_str, from_none], obj.get("title1"))
        title2 = from_union([from_str, from_none], obj.get("title2"))
        return FluffyCallbackWidgetConfiguration(title1, title2)

    def to_dict(self) -> dict:
        result: dict = {}
        result["title1"] = from_union([from_str, from_none], self.title1)
        result["title2"] = from_union([from_str, from_none], self.title2)
        return result


class FluffyConsumable:
    extra_id: str
    name: str
    quantity: float

    def __init__(self, extra_id: str, name: str, quantity: float) -> None:
        self.extra_id = extra_id
        self.name = name
        self.quantity = quantity

    @staticmethod
    def from_dict(obj: Any) -> 'FluffyConsumable':
        assert isinstance(obj, dict)
        extra_id = from_str(obj.get("extraID"))
        name = from_str(obj.get("name"))
        quantity = from_float(obj.get("quantity"))
        return FluffyConsumable(extra_id, name, quantity)

    def to_dict(self) -> dict:
        result: dict = {}
        result["extraID"] = from_str(self.extra_id)
        result["name"] = from_str(self.name)
        result["quantity"] = to_float(self.quantity)
        return result


class FluffyDepartment:
    id: str
    department_id: Optional[float]
    name: str

    def __init__(self, id: str, department_id: Optional[float], name: str) -> None:
        self.id = id
        self.department_id = department_id
        self.name = name

    @staticmethod
    def from_dict(obj: Any) -> 'FluffyDepartment':
        assert isinstance(obj, dict)
        id = from_str(obj.get("id"))
        department_id = from_union([from_float, from_none], obj.get("id_"))
        name = from_str(obj.get("name"))
        return FluffyDepartment(id, department_id, name)

    def to_dict(self) -> dict:
        result: dict = {}
        result["id"] = from_str(self.id)
        result["id_"] = from_union([to_float, from_none], self.department_id)
        result["name"] = from_str(self.name)
        return result


class FluffyMiniWidgetConfiguration:
    fields: Optional[List[FieldElement]]
    title1: Optional[str]
    title2: Optional[str]

    def __init__(self, fields: Optional[List[FieldElement]], title1: Optional[str], title2: Optional[str]) -> None:
        self.fields = fields
        self.title1 = title1
        self.title2 = title2

    @staticmethod
    def from_dict(obj: Any) -> 'FluffyMiniWidgetConfiguration':
        assert isinstance(obj, dict)
        fields = from_union([lambda x: from_list(FieldElement, x), from_none], obj.get("fields"))
        title1 = from_union([from_str, from_none], obj.get("title1"))
        title2 = from_union([from_str, from_none], obj.get("title2"))
        return FluffyMiniWidgetConfiguration(fields, title1, title2)

    def to_dict(self) -> dict:
        result: dict = {}
        result["fields"] = from_union([lambda x: from_list(lambda x: to_enum(FieldElement, x), x), from_none], self.fields)
        result["title1"] = from_union([from_str, from_none], self.title1)
        result["title2"] = from_union([from_str, from_none], self.title2)
        return result


class StartPeriod(Enum):
    """month - по дням месяца (1-е число каждого месяца - нечётно), week - по дням недели
    (понедельник считается нечётным)
    """
    MONTH = "month"
    WEEK = "week"


class EvenOddTimetable:
    """расписание для чётных дней"""
    even: List[TimeFrame]
    """расписание для нечётных дней"""
    odd: List[TimeFrame]
    """month - по дням месяца (1-е число каждого месяца - нечётно), week - по дням недели
    (понедельник считается нечётным)
    """
    start_period: StartPeriod

    def __init__(self, even: List[TimeFrame], odd: List[TimeFrame], start_period: StartPeriod) -> None:
        self.even = even
        self.odd = odd
        self.start_period = start_period

    @staticmethod
    def from_dict(obj: Any) -> 'EvenOddTimetable':
        assert isinstance(obj, dict)
        even = from_list(TimeFrame.from_dict, obj.get("even"))
        odd = from_list(TimeFrame.from_dict, obj.get("odd"))
        start_period = StartPeriod(obj.get("startPeriod"))
        return EvenOddTimetable(even, odd, start_period)

    def to_dict(self) -> dict:
        result: dict = {}
        result["even"] = from_list(lambda x: to_class(TimeFrame, x), self.even)
        result["odd"] = from_list(lambda x: to_class(TimeFrame, x), self.odd)
        result["startPeriod"] = to_enum(StartPeriod, self.start_period)
        return result


class ResourceLocation:
    latitude: Optional[float]
    longitude: Optional[float]
    """время последнего обновления координат"""
    time: Optional[str]

    def __init__(self, latitude: Optional[float], longitude: Optional[float], time: Optional[str]) -> None:
        self.latitude = latitude
        self.longitude = longitude
        self.time = time

    @staticmethod
    def from_dict(obj: Any) -> 'ResourceLocation':
        assert isinstance(obj, dict)
        latitude = from_union([from_float, from_none], obj.get("latitude"))
        longitude = from_union([from_float, from_none], obj.get("longitude"))
        time = from_union([from_str, from_none], obj.get("time"))
        return ResourceLocation(latitude, longitude, time)

    def to_dict(self) -> dict:
        result: dict = {}
        result["latitude"] = from_union([to_float, from_none], self.latitude)
        result["longitude"] = from_union([to_float, from_none], self.longitude)
        result["time"] = from_union([from_str, from_none], self.time)
        return result


class Info:
    """(только в витрине) объект с данными бизнеса-филиала
    
    Содержит детальную информацию о бизнесе — название, адрес, график работы и другое
    """
    accepted_currency: Optional[List[CurrencyList]]
    additional_info: Optional[str]
    additional_fields: Optional[List[Union[List[Any], bool, AdditionalFieldsClass, float, int, None, str]]]
    """Адреса компании или филиала"""
    address: Optional[List[Union[List[Any], bool, AddressClass, float, int, None, str]]]
    auto_accept_appointment: Optional[bool]
    """если данный бизнес является витриной, идентификаторы бизнесов, которые входят в витрину"""
    business_showcase_aliases: Optional[List[BusinessShowcaseAlias]]
    contact_name: Optional[str]
    date_joined: Optional[datetime]
    description: Optional[str]
    """Список e-mail адресов компании или филиала"""
    email: Optional[str]
    fax: Optional[List[Union[List[Any], bool, PhoneClass, float, int, None, str]]]
    images: Optional[List[str]]
    instant_messaging: Optional[List[Dict[str, Any]]]
    """является ли данный бизнес витриной"""
    is_showcase: Optional[bool]
    language: Optional[LanguageList]
    logo_url: Optional[str]
    marketing_notifications: Optional[MarketingNotifications]
    metro: Optional[Metro]
    min_booking_time: Optional[float]
    """Список телефонов бизнеса"""
    mobile: Optional[List[Union[List[Any], bool, PhoneClass, float, int, None, str]]]
    """Название бизнеса"""
    name: Optional[str]
    network_id: Optional[float]
    newbo_enabled_for: Optional[List[str]]
    payment_methods: Optional[PaymentMethods]
    """Список телефонов бизнеса"""
    phone: Optional[List[Union[List[Any], bool, PhoneClass, float, int, None, str]]]
    phone_mask: Optional[str]
    pricing_type: Optional[PricingType]
    revision_version: Optional[float]
    scheduler_tick: Optional[float]
    """Короткое название филиала"""
    short_name: Optional[str]
    show_appointment_color: Optional[bool]
    show_appointment_tooltip: Optional[bool]
    """идентификаторы витрин, в которых участвует данный бизнес"""
    showcases: Optional[List[ShowcaseElement]]
    show_resource_work_statistics: Optional[bool]
    show_worker_profession: Optional[bool]
    skip_billing: Optional[bool]
    sms_duplicate_filter: Optional[SMSDuplicateFilter]
    social_network: Optional[List[SocialNetworkSchema]]
    timetable: Optional[Timetable]
    timezone: Optional[str]
    vertical_translation: Optional[VerticalTranslation]
    website: Optional[str]

    def __init__(self, accepted_currency: Optional[List[CurrencyList]], additional_info: Optional[str], additional_fields: Optional[List[Union[List[Any], bool, AdditionalFieldsClass, float, int, None, str]]], address: Optional[List[Union[List[Any], bool, AddressClass, float, int, None, str]]], auto_accept_appointment: Optional[bool], business_showcase_aliases: Optional[List[BusinessShowcaseAlias]], contact_name: Optional[str], date_joined: Optional[datetime], description: Optional[str], email: Optional[str], fax: Optional[List[Union[List[Any], bool, PhoneClass, float, int, None, str]]], images: Optional[List[str]], instant_messaging: Optional[List[Dict[str, Any]]], is_showcase: Optional[bool], language: Optional[LanguageList], logo_url: Optional[str], marketing_notifications: Optional[MarketingNotifications], metro: Optional[Metro], min_booking_time: Optional[float], mobile: Optional[List[Union[List[Any], bool, PhoneClass, float, int, None, str]]], name: Optional[str], network_id: Optional[float], newbo_enabled_for: Optional[List[str]], payment_methods: Optional[PaymentMethods], phone: Optional[List[Union[List[Any], bool, PhoneClass, float, int, None, str]]], phone_mask: Optional[str], pricing_type: Optional[PricingType], revision_version: Optional[float], scheduler_tick: Optional[float], short_name: Optional[str], show_appointment_color: Optional[bool], show_appointment_tooltip: Optional[bool], showcases: Optional[List[ShowcaseElement]], show_resource_work_statistics: Optional[bool], show_worker_profession: Optional[bool], skip_billing: Optional[bool], sms_duplicate_filter: Optional[SMSDuplicateFilter], social_network: Optional[List[SocialNetworkSchema]], timetable: Optional[Timetable], timezone: Optional[str], vertical_translation: Optional[VerticalTranslation], website: Optional[str]) -> None:
        self.accepted_currency = accepted_currency
        self.additional_info = additional_info
        self.additional_fields = additional_fields
        self.address = address
        self.auto_accept_appointment = auto_accept_appointment
        self.business_showcase_aliases = business_showcase_aliases
        self.contact_name = contact_name
        self.date_joined = date_joined
        self.description = description
        self.email = email
        self.fax = fax
        self.images = images
        self.instant_messaging = instant_messaging
        self.is_showcase = is_showcase
        self.language = language
        self.logo_url = logo_url
        self.marketing_notifications = marketing_notifications
        self.metro = metro
        self.min_booking_time = min_booking_time
        self.mobile = mobile
        self.name = name
        self.network_id = network_id
        self.newbo_enabled_for = newbo_enabled_for
        self.payment_methods = payment_methods
        self.phone = phone
        self.phone_mask = phone_mask
        self.pricing_type = pricing_type
        self.revision_version = revision_version
        self.scheduler_tick = scheduler_tick
        self.short_name = short_name
        self.show_appointment_color = show_appointment_color
        self.show_appointment_tooltip = show_appointment_tooltip
        self.showcases = showcases
        self.show_resource_work_statistics = show_resource_work_statistics
        self.show_worker_profession = show_worker_profession
        self.skip_billing = skip_billing
        self.sms_duplicate_filter = sms_duplicate_filter
        self.social_network = social_network
        self.timetable = timetable
        self.timezone = timezone
        self.vertical_translation = vertical_translation
        self.website = website

    @staticmethod
    def from_dict(obj: Any) -> 'Info':
        assert isinstance(obj, dict)
        accepted_currency = from_union([lambda x: from_list(CurrencyList, x), from_none], obj.get("accepted_currency"))
        additional_info = from_union([from_none, from_str], obj.get("additional_info"))
        additional_fields = from_union([lambda x: from_list(lambda x: from_union([from_none, from_float, from_int, from_bool, from_str, lambda x: from_list(lambda x: x, x), AdditionalFieldsClass.from_dict], x), x), from_none], obj.get("additionalFields"))
        address = from_union([lambda x: from_list(lambda x: from_union([from_none, from_float, from_int, from_bool, from_str, lambda x: from_list(lambda x: x, x), AddressClass.from_dict], x), x), from_none], obj.get("address"))
        auto_accept_appointment = from_union([from_bool, from_none], obj.get("autoAcceptAppointment"))
        business_showcase_aliases = from_union([lambda x: from_list(BusinessShowcaseAlias.from_dict, x), from_none], obj.get("businessShowcaseAliases"))
        contact_name = from_union([from_str, from_none], obj.get("contactName"))
        date_joined = from_union([from_datetime, from_none], obj.get("date_joined"))
        description = from_union([from_str, from_none], obj.get("description"))
        email = from_union([from_str, from_none], obj.get("email"))
        fax = from_union([lambda x: from_list(lambda x: from_union([from_none, from_float, from_int, from_bool, from_str, lambda x: from_list(lambda x: x, x), PhoneClass.from_dict], x), x), from_none], obj.get("fax"))
        images = from_union([lambda x: from_list(from_str, x), from_none], obj.get("images"))
        instant_messaging = from_union([lambda x: from_list(lambda x: from_dict(lambda x: x, x), x), from_none], obj.get("instant_messaging"))
        is_showcase = from_union([from_bool, from_none], obj.get("isShowcase"))
        language = from_union([LanguageList, from_none], obj.get("language"))
        logo_url = from_union([from_none, from_str], obj.get("logo_url"))
        marketing_notifications = from_union([MarketingNotifications.from_dict, from_none], obj.get("marketingNotifications"))
        metro = from_union([Metro.from_dict, from_none], obj.get("metro"))
        min_booking_time = from_union([from_float, from_none], obj.get("min_booking_time"))
        mobile = from_union([lambda x: from_list(lambda x: from_union([from_none, from_float, from_int, from_bool, from_str, lambda x: from_list(lambda x: x, x), PhoneClass.from_dict], x), x), from_none], obj.get("mobile"))
        name = from_union([from_str, from_none], obj.get("name"))
        network_id = from_union([from_float, from_none], obj.get("networkID"))
        newbo_enabled_for = from_union([lambda x: from_list(from_str, x), from_none], obj.get("newboEnabledFor"))
        payment_methods = from_union([PaymentMethods, from_none], obj.get("paymentMethods"))
        phone = from_union([lambda x: from_list(lambda x: from_union([from_none, from_float, from_int, from_bool, from_str, lambda x: from_list(lambda x: x, x), PhoneClass.from_dict], x), x), from_none], obj.get("phone"))
        phone_mask = from_union([from_none, from_str], obj.get("phone_mask"))
        pricing_type = from_union([PricingType, from_none], obj.get("pricingType"))
        revision_version = from_union([from_float, from_none], obj.get("revisionVersion"))
        scheduler_tick = from_union([from_float, from_none], obj.get("schedulerTick"))
        short_name = from_union([from_none, from_str], obj.get("shortName"))
        show_appointment_color = from_union([from_bool, from_none], obj.get("showAppointmentColor"))
        show_appointment_tooltip = from_union([from_bool, from_none], obj.get("showAppointmentTooltip"))
        showcases = from_union([lambda x: from_list(ShowcaseElement.from_dict, x), from_none], obj.get("showcases"))
        show_resource_work_statistics = from_union([from_bool, from_none], obj.get("showResourceWorkStatistics"))
        show_worker_profession = from_union([from_bool, from_none], obj.get("showWorkerProfession"))
        skip_billing = from_union([from_bool, from_none], obj.get("skipBilling"))
        sms_duplicate_filter = from_union([SMSDuplicateFilter.from_dict, from_none], obj.get("smsDuplicateFilter"))
        social_network = from_union([lambda x: from_list(SocialNetworkSchema.from_dict, x), from_none], obj.get("social_network"))
        timetable = from_union([Timetable.from_dict, from_none], obj.get("timetable"))
        timezone = from_union([from_none, from_str], obj.get("timezone"))
        vertical_translation = from_union([VerticalTranslation, from_none], obj.get("verticalTranslation"))
        website = from_union([from_str, from_none], obj.get("website"))
        return Info(accepted_currency, additional_info, additional_fields, address, auto_accept_appointment, business_showcase_aliases, contact_name, date_joined, description, email, fax, images, instant_messaging, is_showcase, language, logo_url, marketing_notifications, metro, min_booking_time, mobile, name, network_id, newbo_enabled_for, payment_methods, phone, phone_mask, pricing_type, revision_version, scheduler_tick, short_name, show_appointment_color, show_appointment_tooltip, showcases, show_resource_work_statistics, show_worker_profession, skip_billing, sms_duplicate_filter, social_network, timetable, timezone, vertical_translation, website)

    def to_dict(self) -> dict:
        result: dict = {}
        result["accepted_currency"] = from_union([lambda x: from_list(lambda x: to_enum(CurrencyList, x), x), from_none], self.accepted_currency)
        result["additional_info"] = from_union([from_none, from_str], self.additional_info)
        result["additionalFields"] = from_union([lambda x: from_list(lambda x: from_union([from_none, to_float, from_int, from_bool, from_str, lambda x: from_list(lambda x: x, x), lambda x: to_class(AdditionalFieldsClass, x)], x), x), from_none], self.additional_fields)
        result["address"] = from_union([lambda x: from_list(lambda x: from_union([from_none, to_float, from_int, from_bool, from_str, lambda x: from_list(lambda x: x, x), lambda x: to_class(AddressClass, x)], x), x), from_none], self.address)
        result["autoAcceptAppointment"] = from_union([from_bool, from_none], self.auto_accept_appointment)
        result["businessShowcaseAliases"] = from_union([lambda x: from_list(lambda x: to_class(BusinessShowcaseAlias, x), x), from_none], self.business_showcase_aliases)
        result["contactName"] = from_union([from_str, from_none], self.contact_name)
        result["date_joined"] = from_union([lambda x: x.isoformat(), from_none], self.date_joined)
        result["description"] = from_union([from_str, from_none], self.description)
        result["email"] = from_union([from_str, from_none], self.email)
        result["fax"] = from_union([lambda x: from_list(lambda x: from_union([from_none, to_float, from_int, from_bool, from_str, lambda x: from_list(lambda x: x, x), lambda x: to_class(PhoneClass, x)], x), x), from_none], self.fax)
        result["images"] = from_union([lambda x: from_list(from_str, x), from_none], self.images)
        result["instant_messaging"] = from_union([lambda x: from_list(lambda x: from_dict(lambda x: x, x), x), from_none], self.instant_messaging)
        result["isShowcase"] = from_union([from_bool, from_none], self.is_showcase)
        result["language"] = from_union([lambda x: to_enum(LanguageList, x), from_none], self.language)
        result["logo_url"] = from_union([from_none, from_str], self.logo_url)
        result["marketingNotifications"] = from_union([lambda x: to_class(MarketingNotifications, x), from_none], self.marketing_notifications)
        result["metro"] = from_union([lambda x: to_class(Metro, x), from_none], self.metro)
        result["min_booking_time"] = from_union([to_float, from_none], self.min_booking_time)
        result["mobile"] = from_union([lambda x: from_list(lambda x: from_union([from_none, to_float, from_int, from_bool, from_str, lambda x: from_list(lambda x: x, x), lambda x: to_class(PhoneClass, x)], x), x), from_none], self.mobile)
        result["name"] = from_union([from_str, from_none], self.name)
        result["networkID"] = from_union([to_float, from_none], self.network_id)
        result["newboEnabledFor"] = from_union([lambda x: from_list(from_str, x), from_none], self.newbo_enabled_for)
        result["paymentMethods"] = from_union([lambda x: to_enum(PaymentMethods, x), from_none], self.payment_methods)
        result["phone"] = from_union([lambda x: from_list(lambda x: from_union([from_none, to_float, from_int, from_bool, from_str, lambda x: from_list(lambda x: x, x), lambda x: to_class(PhoneClass, x)], x), x), from_none], self.phone)
        result["phone_mask"] = from_union([from_none, from_str], self.phone_mask)
        result["pricingType"] = from_union([lambda x: to_enum(PricingType, x), from_none], self.pricing_type)
        result["revisionVersion"] = from_union([to_float, from_none], self.revision_version)
        result["schedulerTick"] = from_union([to_float, from_none], self.scheduler_tick)
        result["shortName"] = from_union([from_none, from_str], self.short_name)
        result["showAppointmentColor"] = from_union([from_bool, from_none], self.show_appointment_color)
        result["showAppointmentTooltip"] = from_union([from_bool, from_none], self.show_appointment_tooltip)
        result["showcases"] = from_union([lambda x: from_list(lambda x: to_class(ShowcaseElement, x), x), from_none], self.showcases)
        result["showResourceWorkStatistics"] = from_union([from_bool, from_none], self.show_resource_work_statistics)
        result["showWorkerProfession"] = from_union([from_bool, from_none], self.show_worker_profession)
        result["skipBilling"] = from_union([from_bool, from_none], self.skip_billing)
        result["smsDuplicateFilter"] = from_union([lambda x: to_class(SMSDuplicateFilter, x), from_none], self.sms_duplicate_filter)
        result["social_network"] = from_union([lambda x: from_list(lambda x: to_class(SocialNetworkSchema, x), x), from_none], self.social_network)
        result["timetable"] = from_union([lambda x: to_class(Timetable, x), from_none], self.timetable)
        result["timezone"] = from_union([from_none, from_str], self.timezone)
        result["verticalTranslation"] = from_union([lambda x: to_enum(VerticalTranslation, x), from_none], self.vertical_translation)
        result["website"] = from_union([from_str, from_none], self.website)
        return result


class AccessType(Enum):
    """тип доступа работника в систему через его учётную запись"""
    NONE = "NONE"
    WORKER_EXTENDED = "WORKER_EXTENDED"
    WORKER_SIMPLE = "WORKER_SIMPLE"


class ИнформацияОПрофилеРаботника:
    """Доступ имеют только пользователи с правами resource или admin"""
    """тип доступа работника в систему через его учётную запись"""
    access_type: AccessType
    """e-mail профиля работника"""
    email: str
    """идентификатор профиля работника уникальный во всей системе"""
    profile_id: str
    """идентификатор работника"""
    user_id: str

    def __init__(self, access_type: AccessType, email: str, profile_id: str, user_id: str) -> None:
        self.access_type = access_type
        self.email = email
        self.profile_id = profile_id
        self.user_id = user_id

    @staticmethod
    def from_dict(obj: Any) -> 'ИнформацияОПрофилеРаботника':
        assert isinstance(obj, dict)
        access_type = AccessType(obj.get("accessType"))
        email = from_str(obj.get("email"))
        profile_id = from_str(obj.get("profileID"))
        user_id = from_str(obj.get("userID"))
        return ИнформацияОПрофилеРаботника(access_type, email, profile_id, user_id)

    def to_dict(self) -> dict:
        result: dict = {}
        result["accessType"] = to_enum(AccessType, self.access_type)
        result["email"] = from_str(self.email)
        result["profileID"] = from_str(self.profile_id)
        result["userID"] = from_str(self.user_id)
        return result


class ResourceStatus(Enum):
    ACTIVE = "ACTIVE"
    INACTIVE = "INACTIVE"


class ResourceTaxonomyChildren:
    """true - детская услуга; false - взрослая услуга"""
    children: bool
    """идентификатор услуги, для которой установлено свойство"""
    taxonomy_id: str

    def __init__(self, children: bool, taxonomy_id: str) -> None:
        self.children = children
        self.taxonomy_id = taxonomy_id

    @staticmethod
    def from_dict(obj: Any) -> 'ResourceTaxonomyChildren':
        assert isinstance(obj, dict)
        children = from_bool(obj.get("children"))
        taxonomy_id = from_str(obj.get("taxonomyID"))
        return ResourceTaxonomyChildren(children, taxonomy_id)

    def to_dict(self) -> dict:
        result: dict = {}
        result["children"] = from_bool(self.children)
        result["taxonomyID"] = from_str(self.taxonomy_id)
        return result


class ResourceTaxonomyLevel:
    """идентификатор услуги, для которой установлено уровень скорости"""
    id: str
    """уровень скорости"""
    level: float

    def __init__(self, id: str, level: float) -> None:
        self.id = id
        self.level = level

    @staticmethod
    def from_dict(obj: Any) -> 'ResourceTaxonomyLevel':
        assert isinstance(obj, dict)
        id = from_str(obj.get("id"))
        level = from_float(obj.get("level"))
        return ResourceTaxonomyLevel(id, level)

    def to_dict(self) -> dict:
        result: dict = {}
        result["id"] = from_str(self.id)
        result["level"] = to_float(self.level)
        return result


class ResourceResource:
    """информация из внешней информационной системы как есть (при интеграции)"""
    additional_extra_id: Optional[List[str]]
    """Количество записей, которые может принимать работник единовременно"""
    capacity: float
    """цвет колонки с работником"""
    color: Optional[str]
    degree: Optional[str]
    """идентификатор отделения, к которому привязан работник"""
    department_id: Optional[str]
    """краткое описание работника"""
    description: Optional[str]
    display_in_schedule: Optional[bool]
    """отображать ли данного работника на виджете или любом другом клиенте"""
    display_in_widget: bool
    """e-mail работника"""
    email: Optional[str]
    """включена ли отправка e-mail уведомлений для данного работника"""
    email_enabled: Optional[bool]
    even_odd_timetable: EvenOddTimetable
    exceptions: Optional[List[Any]]
    experience: Optional[datetime]
    """информация из внешней информационной системы как есть (при интеграции)"""
    extra_description: Optional[str]
    """информация из внешней информационной системы как есть (при интеграции)"""
    extra_id: Optional[str]
    """информация из внешней информационной системы как есть (при интеграции)"""
    extra_link: Optional[str]
    """информация из внешней информационной системы как есть (при интеграции)"""
    extra_media_id: Optional[str]
    """url изображения работника; Если указан относительный путь, то используйте
    http://cdn.gbooking.ru (см. так же Business WidgetConfiguration.useDefaultWorkerImg и
    WidgetConfiguration.defaultWorkerImgUrl)
    """
    icon_url: Optional[str]
    """внутренний идентификатор работника; уникальный во всей системе GBooking"""
    id: str
    image: Optional[str]
    last_su: Optional[datetime]
    """уровень скорости выполнения услуги по-умолчанию (если не найдено в taxonomyLevels)"""
    level: float
    """не используется"""
    loaned: bool
    """не используется"""
    loaned_from: Optional[str]
    """не используется"""
    loaned_to: Optional[str]
    location: ResourceLocation
    manual_changes: bool
    """отчество работника"""
    middle_name: Optional[str]
    """имя работника"""
    name: str
    """внутреннее название работника в Бекофис"""
    nickname: Optional[str]
    """индекс сортировки работника"""
    order: Optional[float]
    """вес работника, в зависимости от указанного способа сортировки"""
    order_weight: Union[float, None, str]
    """(только в витрине) объект с данными бизнеса-филиала"""
    origin_general_info: Optional[Info]
    """(только в витрине) идентификатор бизнеса-филиала, откуда был взят работник"""
    origin_business_id: Optional[str]
    """(только в витрине) список идентификаторов услуг на бизнесе-филиале, которые выполняет
    работник
    """
    origin_taxonomies: Optional[List[str]]
    """особый навык"""
    perk: Optional[str]
    phone: Union[List[Any], bool, PhoneClass, float, int, None, str]
    """информация о профессии работника, используется в Бекофис"""
    profession: Optional[str]
    profile: Optional[ИнформацияОПрофилеРаботника]
    """Рейтинг работника"""
    rating: Optional[float]
    readonly_taxonomies: Optional[List[str]]
    """Версия изменений документа"""
    revision_version: float
    schedule_is_empty: Optional[bool]
    """информация из внешней информационной системы как есть (при интеграции)"""
    site_id: Optional[str]
    """включена ли отправка смс уведомлений для данного работника"""
    sms_enabled: Optional[bool]
    status: Optional[ResourceStatus]
    """фамилия и отчество работника"""
    surname: str
    """массив идентификаторов услуг, которые выполняет работник"""
    taxonomies: List[str]
    """массив свойств выполнения услуги как детской, как взрослой или как общей (если указаны
    оба или не указаны вовсе для услуги)
    """
    taxonomy_children: List[ResourceTaxonomyChildren]
    """массив уровня скорости выполнения услуги (см так же Resource level)"""
    taxonomy_levels: List[ResourceTaxonomyLevel]
    timetable: Timetable
    user_data: Optional[Dict[str, Any]]
    """рабочее место, которое занимает работник"""
    work_place: Optional[str]

    def __init__(self, additional_extra_id: Optional[List[str]], capacity: float, color: Optional[str], degree: Optional[str], department_id: Optional[str], description: Optional[str], display_in_schedule: Optional[bool], display_in_widget: bool, email: Optional[str], email_enabled: Optional[bool], even_odd_timetable: EvenOddTimetable, exceptions: Optional[List[Any]], experience: Optional[datetime], extra_description: Optional[str], extra_id: Optional[str], extra_link: Optional[str], extra_media_id: Optional[str], icon_url: Optional[str], id: str, image: Optional[str], last_su: Optional[datetime], level: float, loaned: bool, loaned_from: Optional[str], loaned_to: Optional[str], location: ResourceLocation, manual_changes: bool, middle_name: Optional[str], name: str, nickname: Optional[str], order: Optional[float], order_weight: Union[float, None, str], origin_general_info: Optional[Info], origin_business_id: Optional[str], origin_taxonomies: Optional[List[str]], perk: Optional[str], phone: Union[List[Any], bool, PhoneClass, float, int, None, str], profession: Optional[str], profile: Optional[ИнформацияОПрофилеРаботника], rating: Optional[float], readonly_taxonomies: Optional[List[str]], revision_version: float, schedule_is_empty: Optional[bool], site_id: Optional[str], sms_enabled: Optional[bool], status: Optional[ResourceStatus], surname: str, taxonomies: List[str], taxonomy_children: List[ResourceTaxonomyChildren], taxonomy_levels: List[ResourceTaxonomyLevel], timetable: Timetable, user_data: Optional[Dict[str, Any]], work_place: Optional[str]) -> None:
        self.additional_extra_id = additional_extra_id
        self.capacity = capacity
        self.color = color
        self.degree = degree
        self.department_id = department_id
        self.description = description
        self.display_in_schedule = display_in_schedule
        self.display_in_widget = display_in_widget
        self.email = email
        self.email_enabled = email_enabled
        self.even_odd_timetable = even_odd_timetable
        self.exceptions = exceptions
        self.experience = experience
        self.extra_description = extra_description
        self.extra_id = extra_id
        self.extra_link = extra_link
        self.extra_media_id = extra_media_id
        self.icon_url = icon_url
        self.id = id
        self.image = image
        self.last_su = last_su
        self.level = level
        self.loaned = loaned
        self.loaned_from = loaned_from
        self.loaned_to = loaned_to
        self.location = location
        self.manual_changes = manual_changes
        self.middle_name = middle_name
        self.name = name
        self.nickname = nickname
        self.order = order
        self.order_weight = order_weight
        self.origin_general_info = origin_general_info
        self.origin_business_id = origin_business_id
        self.origin_taxonomies = origin_taxonomies
        self.perk = perk
        self.phone = phone
        self.profession = profession
        self.profile = profile
        self.rating = rating
        self.readonly_taxonomies = readonly_taxonomies
        self.revision_version = revision_version
        self.schedule_is_empty = schedule_is_empty
        self.site_id = site_id
        self.sms_enabled = sms_enabled
        self.status = status
        self.surname = surname
        self.taxonomies = taxonomies
        self.taxonomy_children = taxonomy_children
        self.taxonomy_levels = taxonomy_levels
        self.timetable = timetable
        self.user_data = user_data
        self.work_place = work_place

    @staticmethod
    def from_dict(obj: Any) -> 'ResourceResource':
        assert isinstance(obj, dict)
        additional_extra_id = from_union([lambda x: from_list(from_str, x), from_none], obj.get("additionalExtraId"))
        capacity = from_float(obj.get("capacity"))
        color = from_union([from_str, from_none], obj.get("color"))
        degree = from_union([from_str, from_none], obj.get("degree"))
        department_id = from_union([from_str, from_none], obj.get("departmentId"))
        description = from_union([from_str, from_none], obj.get("description"))
        display_in_schedule = from_union([from_bool, from_none], obj.get("displayInSchedule"))
        display_in_widget = from_bool(obj.get("displayInWidget"))
        email = from_union([from_str, from_none], obj.get("email"))
        email_enabled = from_union([from_bool, from_none], obj.get("emailEnabled"))
        even_odd_timetable = EvenOddTimetable.from_dict(obj.get("evenOddTimetable"))
        exceptions = from_union([lambda x: from_list(lambda x: x, x), from_none], obj.get("exceptions"))
        experience = from_union([from_datetime, from_none], obj.get("experience"))
        extra_description = from_union([from_str, from_none], obj.get("extraDescription"))
        extra_id = from_union([from_str, from_none], obj.get("extraId"))
        extra_link = from_union([from_str, from_none], obj.get("extraLink"))
        extra_media_id = from_union([from_str, from_none], obj.get("extraMediaId"))
        icon_url = from_union([from_none, from_str], obj.get("icon_url"))
        id = from_str(obj.get("id"))
        image = from_union([from_str, from_none], obj.get("image"))
        last_su = from_union([from_datetime, from_none], obj.get("lastSU"))
        level = from_float(obj.get("level"))
        loaned = from_bool(obj.get("loaned"))
        loaned_from = from_union([from_str, from_none], obj.get("loanedFrom"))
        loaned_to = from_union([from_str, from_none], obj.get("loanedTo"))
        location = ResourceLocation.from_dict(obj.get("location"))
        manual_changes = from_bool(obj.get("manualChanges"))
        middle_name = from_union([from_str, from_none], obj.get("middleName"))
        name = from_str(obj.get("name"))
        nickname = from_union([from_str, from_none], obj.get("nickname"))
        order = from_union([from_float, from_none], obj.get("order"))
        order_weight = from_union([from_float, from_str, from_none], obj.get("orderWeight"))
        origin_general_info = from_union([Info.from_dict, from_none], obj.get("origin_general_info"))
        origin_business_id = from_union([from_str, from_none], obj.get("originBusinessID"))
        origin_taxonomies = from_union([lambda x: from_list(from_str, x), from_none], obj.get("originTaxonomies"))
        perk = from_union([from_str, from_none], obj.get("perk"))
        phone = from_union([from_none, from_float, from_int, from_bool, from_str, lambda x: from_list(lambda x: x, x), PhoneClass.from_dict], obj.get("phone"))
        profession = from_union([from_str, from_none], obj.get("profession"))
        profile = from_union([ИнформацияОПрофилеРаботника.from_dict, from_none], obj.get("profile"))
        rating = from_union([from_float, from_none], obj.get("rating"))
        readonly_taxonomies = from_union([lambda x: from_list(from_str, x), from_none], obj.get("readonlyTaxonomies"))
        revision_version = from_float(obj.get("revisionVersion"))
        schedule_is_empty = from_union([from_bool, from_none], obj.get("scheduleIsEmpty"))
        site_id = from_union([from_str, from_none], obj.get("siteId"))
        sms_enabled = from_union([from_bool, from_none], obj.get("smsEnabled"))
        status = from_union([ResourceStatus, from_none], obj.get("status"))
        surname = from_str(obj.get("surname"))
        taxonomies = from_list(from_str, obj.get("taxonomies"))
        taxonomy_children = from_list(ResourceTaxonomyChildren.from_dict, obj.get("taxonomyChildren"))
        taxonomy_levels = from_list(ResourceTaxonomyLevel.from_dict, obj.get("taxonomyLevels"))
        timetable = Timetable.from_dict(obj.get("timetable"))
        user_data = from_union([lambda x: from_dict(lambda x: x, x), from_none], obj.get("userData"))
        work_place = from_union([from_str, from_none], obj.get("workPlace"))
        return ResourceResource(additional_extra_id, capacity, color, degree, department_id, description, display_in_schedule, display_in_widget, email, email_enabled, even_odd_timetable, exceptions, experience, extra_description, extra_id, extra_link, extra_media_id, icon_url, id, image, last_su, level, loaned, loaned_from, loaned_to, location, manual_changes, middle_name, name, nickname, order, order_weight, origin_general_info, origin_business_id, origin_taxonomies, perk, phone, profession, profile, rating, readonly_taxonomies, revision_version, schedule_is_empty, site_id, sms_enabled, status, surname, taxonomies, taxonomy_children, taxonomy_levels, timetable, user_data, work_place)

    def to_dict(self) -> dict:
        result: dict = {}
        result["additionalExtraId"] = from_union([lambda x: from_list(from_str, x), from_none], self.additional_extra_id)
        result["capacity"] = to_float(self.capacity)
        result["color"] = from_union([from_str, from_none], self.color)
        result["degree"] = from_union([from_str, from_none], self.degree)
        result["departmentId"] = from_union([from_str, from_none], self.department_id)
        result["description"] = from_union([from_str, from_none], self.description)
        result["displayInSchedule"] = from_union([from_bool, from_none], self.display_in_schedule)
        result["displayInWidget"] = from_bool(self.display_in_widget)
        result["email"] = from_union([from_str, from_none], self.email)
        result["emailEnabled"] = from_union([from_bool, from_none], self.email_enabled)
        result["evenOddTimetable"] = to_class(EvenOddTimetable, self.even_odd_timetable)
        result["exceptions"] = from_union([lambda x: from_list(lambda x: x, x), from_none], self.exceptions)
        result["experience"] = from_union([lambda x: x.isoformat(), from_none], self.experience)
        result["extraDescription"] = from_union([from_str, from_none], self.extra_description)
        result["extraId"] = from_union([from_str, from_none], self.extra_id)
        result["extraLink"] = from_union([from_str, from_none], self.extra_link)
        result["extraMediaId"] = from_union([from_str, from_none], self.extra_media_id)
        result["icon_url"] = from_union([from_none, from_str], self.icon_url)
        result["id"] = from_str(self.id)
        result["image"] = from_union([from_str, from_none], self.image)
        result["lastSU"] = from_union([lambda x: x.isoformat(), from_none], self.last_su)
        result["level"] = to_float(self.level)
        result["loaned"] = from_bool(self.loaned)
        result["loanedFrom"] = from_union([from_str, from_none], self.loaned_from)
        result["loanedTo"] = from_union([from_str, from_none], self.loaned_to)
        result["location"] = to_class(ResourceLocation, self.location)
        result["manualChanges"] = from_bool(self.manual_changes)
        result["middleName"] = from_union([from_str, from_none], self.middle_name)
        result["name"] = from_str(self.name)
        result["nickname"] = from_union([from_str, from_none], self.nickname)
        result["order"] = from_union([to_float, from_none], self.order)
        result["orderWeight"] = from_union([to_float, from_str, from_none], self.order_weight)
        result["origin_general_info"] = from_union([lambda x: to_class(Info, x), from_none], self.origin_general_info)
        result["originBusinessID"] = from_union([from_str, from_none], self.origin_business_id)
        result["originTaxonomies"] = from_union([lambda x: from_list(from_str, x), from_none], self.origin_taxonomies)
        result["perk"] = from_union([from_str, from_none], self.perk)
        result["phone"] = from_union([from_none, to_float, from_int, from_bool, from_str, lambda x: from_list(lambda x: x, x), lambda x: to_class(PhoneClass, x)], self.phone)
        result["profession"] = from_union([from_str, from_none], self.profession)
        result["profile"] = from_union([lambda x: to_class(ИнформацияОПрофилеРаботника, x), from_none], self.profile)
        result["rating"] = from_union([to_float, from_none], self.rating)
        result["readonlyTaxonomies"] = from_union([lambda x: from_list(from_str, x), from_none], self.readonly_taxonomies)
        result["revisionVersion"] = to_float(self.revision_version)
        result["scheduleIsEmpty"] = from_union([from_bool, from_none], self.schedule_is_empty)
        result["siteId"] = from_union([from_str, from_none], self.site_id)
        result["smsEnabled"] = from_union([from_bool, from_none], self.sms_enabled)
        result["status"] = from_union([lambda x: to_enum(ResourceStatus, x), from_none], self.status)
        result["surname"] = from_str(self.surname)
        result["taxonomies"] = from_list(from_str, self.taxonomies)
        result["taxonomyChildren"] = from_list(lambda x: to_class(ResourceTaxonomyChildren, x), self.taxonomy_children)
        result["taxonomyLevels"] = from_list(lambda x: to_class(ResourceTaxonomyLevel, x), self.taxonomy_levels)
        result["timetable"] = to_class(Timetable, self.timetable)
        result["userData"] = from_union([lambda x: from_dict(lambda x: x, x), from_none], self.user_data)
        result["workPlace"] = from_union([from_str, from_none], self.work_place)
        return result


class AdditionalDuration:
    duration: Optional[float]
    level: Optional[float]

    def __init__(self, duration: Optional[float], level: Optional[float]) -> None:
        self.duration = duration
        self.level = level

    @staticmethod
    def from_dict(obj: Any) -> 'AdditionalDuration':
        assert isinstance(obj, dict)
        duration = from_union([from_float, from_none], obj.get("duration"))
        level = from_union([from_float, from_none], obj.get("level"))
        return AdditionalDuration(duration, level)

    def to_dict(self) -> dict:
        result: dict = {}
        result["duration"] = from_union([to_float, from_none], self.duration)
        result["level"] = from_union([to_float, from_none], self.level)
        return result


class AdditionalPriceType(Enum):
    """Тип цены"""
    AVERAGE = "average"
    BEGIN_WITH = "begin_with"
    EQUAL = "equal"


class BusinessTaxonomyPrice:
    """Значение цены"""
    amount: Optional[str]
    """Аббревиатура валюты"""
    currency: CurrencyList
    """"Уровень" цены. Работнику можно выставить его "уровень" (поле level в resources)"""
    resource_level: float
    """Значение цены, с учётом промо акций"""
    stock_amount: Optional[str]
    """Тип цены"""
    type: Optional[AdditionalPriceType]

    def __init__(self, amount: Optional[str], currency: CurrencyList, resource_level: float, stock_amount: Optional[str], type: Optional[AdditionalPriceType]) -> None:
        self.amount = amount
        self.currency = currency
        self.resource_level = resource_level
        self.stock_amount = stock_amount
        self.type = type

    @staticmethod
    def from_dict(obj: Any) -> 'BusinessTaxonomyPrice':
        assert isinstance(obj, dict)
        amount = from_union([from_str, from_none], obj.get("amount"))
        currency = CurrencyList(obj.get("currency"))
        resource_level = from_float(obj.get("resourceLevel"))
        stock_amount = from_union([from_none, from_str], obj.get("stockAmount"))
        type = from_union([AdditionalPriceType, from_none], obj.get("type"))
        return BusinessTaxonomyPrice(amount, currency, resource_level, stock_amount, type)

    def to_dict(self) -> dict:
        result: dict = {}
        result["amount"] = from_union([from_str, from_none], self.amount)
        result["currency"] = to_enum(CurrencyList, self.currency)
        result["resourceLevel"] = to_float(self.resource_level)
        result["stockAmount"] = from_union([from_none, from_str], self.stock_amount)
        result["type"] = from_union([lambda x: to_enum(AdditionalPriceType, x), from_none], self.type)
        return result


class BusinessTaxonomyProduct:
    """Дополнительный ID товара"""
    extra_id: str
    """ID товара"""
    id: str
    """Является ли обязательным при выполнении данной услуги"""
    required: bool

    def __init__(self, extra_id: str, id: str, required: bool) -> None:
        self.extra_id = extra_id
        self.id = id
        self.required = required

    @staticmethod
    def from_dict(obj: Any) -> 'BusinessTaxonomyProduct':
        assert isinstance(obj, dict)
        extra_id = from_str(obj.get("extraID"))
        id = from_str(obj.get("id"))
        required = from_bool(obj.get("required"))
        return BusinessTaxonomyProduct(extra_id, id, required)

    def to_dict(self) -> dict:
        result: dict = {}
        result["extraID"] = from_str(self.extra_id)
        result["id"] = from_str(self.id)
        result["required"] = from_bool(self.required)
        return result


class AdjacentTaxonomy:
    is_any_available: Optional[bool]
    order: Optional[float]
    slot_duration: Optional[float]
    taxonomy_id: Optional[str]

    def __init__(self, is_any_available: Optional[bool], order: Optional[float], slot_duration: Optional[float], taxonomy_id: Optional[str]) -> None:
        self.is_any_available = is_any_available
        self.order = order
        self.slot_duration = slot_duration
        self.taxonomy_id = taxonomy_id

    @staticmethod
    def from_dict(obj: Any) -> 'AdjacentTaxonomy':
        assert isinstance(obj, dict)
        is_any_available = from_union([from_bool, from_none], obj.get("isAnyAvailable"))
        order = from_union([from_float, from_none], obj.get("order"))
        slot_duration = from_union([from_float, from_none], obj.get("slotDuration"))
        taxonomy_id = from_union([from_str, from_none], obj.get("taxonomyID"))
        return AdjacentTaxonomy(is_any_available, order, slot_duration, taxonomy_id)

    def to_dict(self) -> dict:
        result: dict = {}
        result["isAnyAvailable"] = from_union([from_bool, from_none], self.is_any_available)
        result["order"] = from_union([to_float, from_none], self.order)
        result["slotDuration"] = from_union([to_float, from_none], self.slot_duration)
        result["taxonomyID"] = from_union([from_str, from_none], self.taxonomy_id)
        return result


class ChildrenTaxonomyType(Enum):
    CHILD = "child"
    NONE = "none"
    PARENT = "parent"


class DateLimitType(Enum):
    ALL_DATES = "all_dates"
    FROM_DATE = "from_date"
    RANGE_DATES = "range_dates"
    TO_DATE = "to_date"


class DateLimit:
    id: Optional[str]
    date_limit_from: Optional[datetime]
    date_limit_to: Optional[datetime]

    def __init__(self, id: Optional[str], date_limit_from: Optional[datetime], date_limit_to: Optional[datetime]) -> None:
        self.id = id
        self.date_limit_from = date_limit_from
        self.date_limit_to = date_limit_to

    @staticmethod
    def from_dict(obj: Any) -> 'DateLimit':
        assert isinstance(obj, dict)
        id = from_union([from_str, from_none], obj.get("_id"))
        date_limit_from = from_union([from_datetime, from_none], obj.get("dateLimitFrom"))
        date_limit_to = from_union([from_datetime, from_none], obj.get("dateLimitTo"))
        return DateLimit(id, date_limit_from, date_limit_to)

    def to_dict(self) -> dict:
        result: dict = {}
        result["_id"] = from_union([from_str, from_none], self.id)
        result["dateLimitFrom"] = from_union([lambda x: x.isoformat(), from_none], self.date_limit_from)
        result["dateLimitTo"] = from_union([lambda x: x.isoformat(), from_none], self.date_limit_to)
        return result


class DaysOfWeek(Enum):
    FRI = "fri"
    MON = "mon"
    SAT = "sat"
    SUN = "sun"
    THU = "thu"
    TUE = "tue"
    WED = "wed"


class Repeats(Enum):
    DAILY = "daily"
    NONE = "none"
    WEEKLY = "weekly"


class Slots:
    time: Optional[TimeFrame]

    def __init__(self, time: Optional[TimeFrame]) -> None:
        self.time = time

    @staticmethod
    def from_dict(obj: Any) -> 'Slots':
        assert isinstance(obj, dict)
        time = from_union([TimeFrame.from_dict, from_none], obj.get("time"))
        return Slots(time)

    def to_dict(self) -> dict:
        result: dict = {}
        result["time"] = from_union([lambda x: to_class(TimeFrame, x), from_none], self.time)
        return result


class DiscountClass:
    active: Optional[bool]
    days_of_week: Optional[DaysOfWeek]
    repeats: Optional[Repeats]
    slots: Optional[Slots]
    start: Optional[datetime]
    unlim_weekly_repeat: Optional[bool]
    weekly_repeat: Optional[float]

    def __init__(self, active: Optional[bool], days_of_week: Optional[DaysOfWeek], repeats: Optional[Repeats], slots: Optional[Slots], start: Optional[datetime], unlim_weekly_repeat: Optional[bool], weekly_repeat: Optional[float]) -> None:
        self.active = active
        self.days_of_week = days_of_week
        self.repeats = repeats
        self.slots = slots
        self.start = start
        self.unlim_weekly_repeat = unlim_weekly_repeat
        self.weekly_repeat = weekly_repeat

    @staticmethod
    def from_dict(obj: Any) -> 'DiscountClass':
        assert isinstance(obj, dict)
        active = from_union([from_bool, from_none], obj.get("active"))
        days_of_week = from_union([DaysOfWeek, from_none], obj.get("daysOfWeek"))
        repeats = from_union([Repeats, from_none], obj.get("repeats"))
        slots = from_union([Slots.from_dict, from_none], obj.get("slots"))
        start = from_union([from_datetime, from_none], obj.get("start"))
        unlim_weekly_repeat = from_union([from_bool, from_none], obj.get("unlimWeeklyRepeat"))
        weekly_repeat = from_union([from_float, from_none], obj.get("weeklyRepeat"))
        return DiscountClass(active, days_of_week, repeats, slots, start, unlim_weekly_repeat, weekly_repeat)

    def to_dict(self) -> dict:
        result: dict = {}
        result["active"] = from_union([from_bool, from_none], self.active)
        result["daysOfWeek"] = from_union([lambda x: to_enum(DaysOfWeek, x), from_none], self.days_of_week)
        result["repeats"] = from_union([lambda x: to_enum(Repeats, x), from_none], self.repeats)
        result["slots"] = from_union([lambda x: to_class(Slots, x), from_none], self.slots)
        result["start"] = from_union([lambda x: x.isoformat(), from_none], self.start)
        result["unlimWeeklyRepeat"] = from_union([from_bool, from_none], self.unlim_weekly_repeat)
        result["weeklyRepeat"] = from_union([to_float, from_none], self.weekly_repeat)
        return result


class OnlineMode(Enum):
    ONCALL_ONLINE = "ONCALL_ONLINE"
    PLAN_CLINIC = "PLAN_CLINIC"
    PLAN_CLINIC_ONLINE = "PLAN_CLINIC_ONLINE"
    PLAN_ONLINE = "PLAN_ONLINE"


class TaxonomyPrice:
    """Значение цены"""
    amount: str
    """Аббревиатура валюты (например, RUB - рубль)"""
    currency: CurrencyList
    """Значение цены, с учётом промо акций"""
    stock_amount: Optional[str]
    """Тип цены"""
    type: AdditionalPriceType

    def __init__(self, amount: str, currency: CurrencyList, stock_amount: Optional[str], type: AdditionalPriceType) -> None:
        self.amount = amount
        self.currency = currency
        self.stock_amount = stock_amount
        self.type = type

    @staticmethod
    def from_dict(obj: Any) -> 'TaxonomyPrice':
        assert isinstance(obj, dict)
        amount = from_str(obj.get("amount"))
        currency = CurrencyList(obj.get("currency"))
        stock_amount = from_union([from_none, from_str], obj.get("stockAmount"))
        type = AdditionalPriceType(obj.get("type"))
        return TaxonomyPrice(amount, currency, stock_amount, type)

    def to_dict(self) -> dict:
        result: dict = {}
        result["amount"] = from_str(self.amount)
        result["currency"] = to_enum(CurrencyList, self.currency)
        result["stockAmount"] = from_union([from_none, from_str], self.stock_amount)
        result["type"] = to_enum(AdditionalPriceType, self.type)
        return result


class ShowcaseItemAdditionalDuration:
    id: Optional[str]
    duration: Optional[float]
    """поддержка различной длительности услуг в зависимости от работника"""
    level: Optional[float]

    def __init__(self, id: Optional[str], duration: Optional[float], level: Optional[float]) -> None:
        self.id = id
        self.duration = duration
        self.level = level

    @staticmethod
    def from_dict(obj: Any) -> 'ShowcaseItemAdditionalDuration':
        assert isinstance(obj, dict)
        id = from_union([from_str, from_none], obj.get("_id"))
        duration = from_union([from_float, from_none], obj.get("duration"))
        level = from_union([from_float, from_none], obj.get("level"))
        return ShowcaseItemAdditionalDuration(id, duration, level)

    def to_dict(self) -> dict:
        result: dict = {}
        result["_id"] = from_union([from_str, from_none], self.id)
        result["duration"] = from_union([to_float, from_none], self.duration)
        result["level"] = from_union([to_float, from_none], self.level)
        return result


class ShowcaseItem:
    id: Optional[str]
    additional_durations: Optional[List[ShowcaseItemAdditionalDuration]]
    business_id: Optional[str]
    taxonomy_id: Optional[str]

    def __init__(self, id: Optional[str], additional_durations: Optional[List[ShowcaseItemAdditionalDuration]], business_id: Optional[str], taxonomy_id: Optional[str]) -> None:
        self.id = id
        self.additional_durations = additional_durations
        self.business_id = business_id
        self.taxonomy_id = taxonomy_id

    @staticmethod
    def from_dict(obj: Any) -> 'ShowcaseItem':
        assert isinstance(obj, dict)
        id = from_union([from_str, from_none], obj.get("_id"))
        additional_durations = from_union([lambda x: from_list(ShowcaseItemAdditionalDuration.from_dict, x), from_none], obj.get("additionalDurations"))
        business_id = from_union([from_str, from_none], obj.get("businessID"))
        taxonomy_id = from_union([from_str, from_none], obj.get("taxonomyID"))
        return ShowcaseItem(id, additional_durations, business_id, taxonomy_id)

    def to_dict(self) -> dict:
        result: dict = {}
        result["_id"] = from_union([from_str, from_none], self.id)
        result["additionalDurations"] = from_union([lambda x: from_list(lambda x: to_class(ShowcaseItemAdditionalDuration, x), x), from_none], self.additional_durations)
        result["businessID"] = from_union([from_str, from_none], self.business_id)
        result["taxonomyID"] = from_union([from_str, from_none], self.taxonomy_id)
        return result


class TaxonomyShowcase:
    base_business_id: Optional[str]
    is_base_node: Optional[bool]
    origin_business_id: Optional[str]
    showcase_item_id: Optional[str]

    def __init__(self, base_business_id: Optional[str], is_base_node: Optional[bool], origin_business_id: Optional[str], showcase_item_id: Optional[str]) -> None:
        self.base_business_id = base_business_id
        self.is_base_node = is_base_node
        self.origin_business_id = origin_business_id
        self.showcase_item_id = showcase_item_id

    @staticmethod
    def from_dict(obj: Any) -> 'TaxonomyShowcase':
        assert isinstance(obj, dict)
        base_business_id = from_union([from_str, from_none], obj.get("baseBusinessID"))
        is_base_node = from_union([from_bool, from_none], obj.get("isBaseNode"))
        origin_business_id = from_union([from_str, from_none], obj.get("originBusinessID"))
        showcase_item_id = from_union([from_str, from_none], obj.get("showcaseItemID"))
        return TaxonomyShowcase(base_business_id, is_base_node, origin_business_id, showcase_item_id)

    def to_dict(self) -> dict:
        result: dict = {}
        result["baseBusinessID"] = from_union([from_str, from_none], self.base_business_id)
        result["isBaseNode"] = from_union([from_bool, from_none], self.is_base_node)
        result["originBusinessID"] = from_union([from_str, from_none], self.origin_business_id)
        result["showcaseItemID"] = from_union([from_str, from_none], self.showcase_item_id)
        return result


class TaxonomyType(Enum):
    CATEGORY = "CATEGORY"
    SERVICE = "SERVICE"
    SUBCATEGORY = "SUBCATEGORY"


class BusinessTaxonomy:
    active: Optional[bool]
    additional_durations: Optional[List[AdditionalDuration]]
    additional_prices: Optional[List[BusinessTaxonomyPrice]]
    additional_products: Optional[List[BusinessTaxonomyProduct]]
    additional_taxonomy_extra_id: Optional[List[Dict[str, Any]]]
    adjacent_same_time_start: Optional[bool]
    adjacent_taxonomies: Optional[List[AdjacentTaxonomy]]
    alias: Optional[Dict[str, Any]]
    allow_booking_in_bo: Optional[bool]
    allow_next_booking_count: Optional[float]
    allow_next_booking_in_days: Optional[float]
    allow_next_booking_in_days_text: Optional[str]
    cabinets: Optional[List[str]]
    cabinets_enabled: Optional[bool]
    capacity: Optional[float]
    capacity_decrease: Optional[float]
    charge_units_step: Optional[float]
    children_taxonomy_types: Optional[List[ChildrenTaxonomyType]]
    color: Optional[str]
    confirmation_alert: Optional[str]
    confirmation_sms_alert: Optional[str]
    date_limits: Optional[List[DateLimit]]
    date_limit_type: Optional[DateLimitType]
    designs: Optional[List[str]]
    discounts: Union[List[Any], bool, DiscountClass, float, int, None, str]
    display_in_widget: Optional[bool]
    duration: Optional[float]
    exceptions: Optional[List[Any]]
    extra_description: Optional[str]
    extra_id: Optional[str]
    extra_link: Optional[str]
    for_pay: Optional[bool]
    id: Optional[str]
    images: Optional[List[str]]
    is_other: Optional[bool]
    last_modified: Optional[datetime]
    leaves: Optional[List[str]]
    manual_changes: Optional[bool]
    new_taxonomy: Optional[bool]
    online_mode: Optional[OnlineMode]
    only_after_taxonomies: Optional[List[str]]
    order: Optional[float]
    parallel_taxonomies: Optional[List[str]]
    popularity: Optional[float]
    price: Optional[TaxonomyPrice]
    price_link: Optional[str]
    rooms: Optional[List[str]]
    showcase_items: Optional[List[ShowcaseItem]]
    showcases: Optional[List[TaxonomyShowcase]]
    """Идентификатор услуги в витрине"""
    showcase_taxonomy_id: Optional[str]
    """Внешний идентификатор таксономии"""
    site_id: Optional[str]
    special_cabinet: Optional[str]
    taxonomy_app_extra_id: Optional[str]
    taxonomy_category_extra_id: Optional[str]
    taxonomy_parent_id: Optional[str]
    taxonomy_type: Optional[TaxonomyType]
    timetable: Optional[Timetable]
    use_confirmation_sms_alert: Optional[bool]
    visit_type: Optional[str]

    def __init__(self, active: Optional[bool], additional_durations: Optional[List[AdditionalDuration]], additional_prices: Optional[List[BusinessTaxonomyPrice]], additional_products: Optional[List[BusinessTaxonomyProduct]], additional_taxonomy_extra_id: Optional[List[Dict[str, Any]]], adjacent_same_time_start: Optional[bool], adjacent_taxonomies: Optional[List[AdjacentTaxonomy]], alias: Optional[Dict[str, Any]], allow_booking_in_bo: Optional[bool], allow_next_booking_count: Optional[float], allow_next_booking_in_days: Optional[float], allow_next_booking_in_days_text: Optional[str], cabinets: Optional[List[str]], cabinets_enabled: Optional[bool], capacity: Optional[float], capacity_decrease: Optional[float], charge_units_step: Optional[float], children_taxonomy_types: Optional[List[ChildrenTaxonomyType]], color: Optional[str], confirmation_alert: Optional[str], confirmation_sms_alert: Optional[str], date_limits: Optional[List[DateLimit]], date_limit_type: Optional[DateLimitType], designs: Optional[List[str]], discounts: Union[List[Any], bool, DiscountClass, float, int, None, str], display_in_widget: Optional[bool], duration: Optional[float], exceptions: Optional[List[Any]], extra_description: Optional[str], extra_id: Optional[str], extra_link: Optional[str], for_pay: Optional[bool], id: Optional[str], images: Optional[List[str]], is_other: Optional[bool], last_modified: Optional[datetime], leaves: Optional[List[str]], manual_changes: Optional[bool], new_taxonomy: Optional[bool], online_mode: Optional[OnlineMode], only_after_taxonomies: Optional[List[str]], order: Optional[float], parallel_taxonomies: Optional[List[str]], popularity: Optional[float], price: Optional[TaxonomyPrice], price_link: Optional[str], rooms: Optional[List[str]], showcase_items: Optional[List[ShowcaseItem]], showcases: Optional[List[TaxonomyShowcase]], showcase_taxonomy_id: Optional[str], site_id: Optional[str], special_cabinet: Optional[str], taxonomy_app_extra_id: Optional[str], taxonomy_category_extra_id: Optional[str], taxonomy_parent_id: Optional[str], taxonomy_type: Optional[TaxonomyType], timetable: Optional[Timetable], use_confirmation_sms_alert: Optional[bool], visit_type: Optional[str]) -> None:
        self.active = active
        self.additional_durations = additional_durations
        self.additional_prices = additional_prices
        self.additional_products = additional_products
        self.additional_taxonomy_extra_id = additional_taxonomy_extra_id
        self.adjacent_same_time_start = adjacent_same_time_start
        self.adjacent_taxonomies = adjacent_taxonomies
        self.alias = alias
        self.allow_booking_in_bo = allow_booking_in_bo
        self.allow_next_booking_count = allow_next_booking_count
        self.allow_next_booking_in_days = allow_next_booking_in_days
        self.allow_next_booking_in_days_text = allow_next_booking_in_days_text
        self.cabinets = cabinets
        self.cabinets_enabled = cabinets_enabled
        self.capacity = capacity
        self.capacity_decrease = capacity_decrease
        self.charge_units_step = charge_units_step
        self.children_taxonomy_types = children_taxonomy_types
        self.color = color
        self.confirmation_alert = confirmation_alert
        self.confirmation_sms_alert = confirmation_sms_alert
        self.date_limits = date_limits
        self.date_limit_type = date_limit_type
        self.designs = designs
        self.discounts = discounts
        self.display_in_widget = display_in_widget
        self.duration = duration
        self.exceptions = exceptions
        self.extra_description = extra_description
        self.extra_id = extra_id
        self.extra_link = extra_link
        self.for_pay = for_pay
        self.id = id
        self.images = images
        self.is_other = is_other
        self.last_modified = last_modified
        self.leaves = leaves
        self.manual_changes = manual_changes
        self.new_taxonomy = new_taxonomy
        self.online_mode = online_mode
        self.only_after_taxonomies = only_after_taxonomies
        self.order = order
        self.parallel_taxonomies = parallel_taxonomies
        self.popularity = popularity
        self.price = price
        self.price_link = price_link
        self.rooms = rooms
        self.showcase_items = showcase_items
        self.showcases = showcases
        self.showcase_taxonomy_id = showcase_taxonomy_id
        self.site_id = site_id
        self.special_cabinet = special_cabinet
        self.taxonomy_app_extra_id = taxonomy_app_extra_id
        self.taxonomy_category_extra_id = taxonomy_category_extra_id
        self.taxonomy_parent_id = taxonomy_parent_id
        self.taxonomy_type = taxonomy_type
        self.timetable = timetable
        self.use_confirmation_sms_alert = use_confirmation_sms_alert
        self.visit_type = visit_type

    @staticmethod
    def from_dict(obj: Any) -> 'BusinessTaxonomy':
        assert isinstance(obj, dict)
        active = from_union([from_bool, from_none], obj.get("active"))
        additional_durations = from_union([lambda x: from_list(AdditionalDuration.from_dict, x), from_none], obj.get("additionalDurations"))
        additional_prices = from_union([lambda x: from_list(BusinessTaxonomyPrice.from_dict, x), from_none], obj.get("additionalPrices"))
        additional_products = from_union([lambda x: from_list(BusinessTaxonomyProduct.from_dict, x), from_none], obj.get("additionalProducts"))
        additional_taxonomy_extra_id = from_union([lambda x: from_list(lambda x: from_dict(lambda x: x, x), x), from_none], obj.get("additionalTaxonomyExtraId"))
        adjacent_same_time_start = from_union([from_bool, from_none], obj.get("adjacentSameTimeStart"))
        adjacent_taxonomies = from_union([lambda x: from_list(AdjacentTaxonomy.from_dict, x), from_none], obj.get("adjacentTaxonomies"))
        alias = from_union([lambda x: from_dict(lambda x: x, x), from_none], obj.get("alias"))
        allow_booking_in_bo = from_union([from_bool, from_none], obj.get("allowBookingInBO"))
        allow_next_booking_count = from_union([from_float, from_none], obj.get("allowNextBookingCount"))
        allow_next_booking_in_days = from_union([from_float, from_none], obj.get("allowNextBookingInDays"))
        allow_next_booking_in_days_text = from_union([from_str, from_none], obj.get("allowNextBookingInDaysText"))
        cabinets = from_union([lambda x: from_list(from_str, x), from_none], obj.get("cabinets"))
        cabinets_enabled = from_union([from_bool, from_none], obj.get("cabinetsEnabled"))
        capacity = from_union([from_float, from_none], obj.get("capacity"))
        capacity_decrease = from_union([from_float, from_none], obj.get("capacity_decrease"))
        charge_units_step = from_union([from_float, from_none], obj.get("chargeUnitsStep"))
        children_taxonomy_types = from_union([lambda x: from_list(ChildrenTaxonomyType, x), from_none], obj.get("childrenTaxonomyTypes"))
        color = from_union([from_str, from_none], obj.get("color"))
        confirmation_alert = from_union([from_str, from_none], obj.get("confirmationAlert"))
        confirmation_sms_alert = from_union([from_str, from_none], obj.get("confirmationSmsAlert"))
        date_limits = from_union([lambda x: from_list(DateLimit.from_dict, x), from_none], obj.get("dateLimits"))
        date_limit_type = from_union([DateLimitType, from_none], obj.get("dateLimitType"))
        designs = from_union([lambda x: from_list(from_str, x), from_none], obj.get("designs"))
        discounts = from_union([from_none, from_float, from_int, from_bool, from_str, lambda x: from_list(lambda x: x, x), DiscountClass.from_dict], obj.get("discounts"))
        display_in_widget = from_union([from_bool, from_none], obj.get("displayInWidget"))
        duration = from_union([from_float, from_none], obj.get("duration"))
        exceptions = from_union([lambda x: from_list(lambda x: x, x), from_none], obj.get("exceptions"))
        extra_description = from_union([from_str, from_none], obj.get("extraDescription"))
        extra_id = from_union([from_str, from_none], obj.get("extraId"))
        extra_link = from_union([from_str, from_none], obj.get("extraLink"))
        for_pay = from_union([from_bool, from_none], obj.get("forPay"))
        id = from_union([from_str, from_none], obj.get("id"))
        images = from_union([lambda x: from_list(from_str, x), from_none], obj.get("images"))
        is_other = from_union([from_bool, from_none], obj.get("isOther"))
        last_modified = from_union([from_datetime, from_none], obj.get("lastModified"))
        leaves = from_union([lambda x: from_list(from_str, x), from_none], obj.get("leaves"))
        manual_changes = from_union([from_bool, from_none], obj.get("manualChanges"))
        new_taxonomy = from_union([from_bool, from_none], obj.get("newTaxonomy"))
        online_mode = from_union([OnlineMode, from_none], obj.get("onlineMode"))
        only_after_taxonomies = from_union([lambda x: from_list(from_str, x), from_none], obj.get("onlyAfterTaxonomies"))
        order = from_union([from_float, from_none], obj.get("order"))
        parallel_taxonomies = from_union([lambda x: from_list(from_str, x), from_none], obj.get("parallelTaxonomies"))
        popularity = from_union([from_float, from_none], obj.get("popularity"))
        price = from_union([TaxonomyPrice.from_dict, from_none], obj.get("price"))
        price_link = from_union([from_str, from_none], obj.get("priceLink"))
        rooms = from_union([lambda x: from_list(from_str, x), from_none], obj.get("rooms"))
        showcase_items = from_union([lambda x: from_list(ShowcaseItem.from_dict, x), from_none], obj.get("showcaseItems"))
        showcases = from_union([lambda x: from_list(TaxonomyShowcase.from_dict, x), from_none], obj.get("showcases"))
        showcase_taxonomy_id = from_union([from_str, from_none], obj.get("showcaseTaxonomyID"))
        site_id = from_union([from_str, from_none], obj.get("siteId"))
        special_cabinet = from_union([from_str, from_none], obj.get("specialCabinet"))
        taxonomy_app_extra_id = from_union([from_str, from_none], obj.get("taxonomyAppExtraID"))
        taxonomy_category_extra_id = from_union([from_str, from_none], obj.get("taxonomyCategoryExtraID"))
        taxonomy_parent_id = from_union([from_str, from_none], obj.get("taxonomyParentID"))
        taxonomy_type = from_union([TaxonomyType, from_none], obj.get("taxonomyType"))
        timetable = from_union([Timetable.from_dict, from_none], obj.get("timetable"))
        use_confirmation_sms_alert = from_union([from_bool, from_none], obj.get("useConfirmationSmsAlert"))
        visit_type = from_union([from_str, from_none], obj.get("visitType"))
        return BusinessTaxonomy(active, additional_durations, additional_prices, additional_products, additional_taxonomy_extra_id, adjacent_same_time_start, adjacent_taxonomies, alias, allow_booking_in_bo, allow_next_booking_count, allow_next_booking_in_days, allow_next_booking_in_days_text, cabinets, cabinets_enabled, capacity, capacity_decrease, charge_units_step, children_taxonomy_types, color, confirmation_alert, confirmation_sms_alert, date_limits, date_limit_type, designs, discounts, display_in_widget, duration, exceptions, extra_description, extra_id, extra_link, for_pay, id, images, is_other, last_modified, leaves, manual_changes, new_taxonomy, online_mode, only_after_taxonomies, order, parallel_taxonomies, popularity, price, price_link, rooms, showcase_items, showcases, showcase_taxonomy_id, site_id, special_cabinet, taxonomy_app_extra_id, taxonomy_category_extra_id, taxonomy_parent_id, taxonomy_type, timetable, use_confirmation_sms_alert, visit_type)

    def to_dict(self) -> dict:
        result: dict = {}
        result["active"] = from_union([from_bool, from_none], self.active)
        result["additionalDurations"] = from_union([lambda x: from_list(lambda x: to_class(AdditionalDuration, x), x), from_none], self.additional_durations)
        result["additionalPrices"] = from_union([lambda x: from_list(lambda x: to_class(BusinessTaxonomyPrice, x), x), from_none], self.additional_prices)
        result["additionalProducts"] = from_union([lambda x: from_list(lambda x: to_class(BusinessTaxonomyProduct, x), x), from_none], self.additional_products)
        result["additionalTaxonomyExtraId"] = from_union([lambda x: from_list(lambda x: from_dict(lambda x: x, x), x), from_none], self.additional_taxonomy_extra_id)
        result["adjacentSameTimeStart"] = from_union([from_bool, from_none], self.adjacent_same_time_start)
        result["adjacentTaxonomies"] = from_union([lambda x: from_list(lambda x: to_class(AdjacentTaxonomy, x), x), from_none], self.adjacent_taxonomies)
        result["alias"] = from_union([lambda x: from_dict(lambda x: x, x), from_none], self.alias)
        result["allowBookingInBO"] = from_union([from_bool, from_none], self.allow_booking_in_bo)
        result["allowNextBookingCount"] = from_union([to_float, from_none], self.allow_next_booking_count)
        result["allowNextBookingInDays"] = from_union([to_float, from_none], self.allow_next_booking_in_days)
        result["allowNextBookingInDaysText"] = from_union([from_str, from_none], self.allow_next_booking_in_days_text)
        result["cabinets"] = from_union([lambda x: from_list(from_str, x), from_none], self.cabinets)
        result["cabinetsEnabled"] = from_union([from_bool, from_none], self.cabinets_enabled)
        result["capacity"] = from_union([to_float, from_none], self.capacity)
        result["capacity_decrease"] = from_union([to_float, from_none], self.capacity_decrease)
        result["chargeUnitsStep"] = from_union([to_float, from_none], self.charge_units_step)
        result["childrenTaxonomyTypes"] = from_union([lambda x: from_list(lambda x: to_enum(ChildrenTaxonomyType, x), x), from_none], self.children_taxonomy_types)
        result["color"] = from_union([from_str, from_none], self.color)
        result["confirmationAlert"] = from_union([from_str, from_none], self.confirmation_alert)
        result["confirmationSmsAlert"] = from_union([from_str, from_none], self.confirmation_sms_alert)
        result["dateLimits"] = from_union([lambda x: from_list(lambda x: to_class(DateLimit, x), x), from_none], self.date_limits)
        result["dateLimitType"] = from_union([lambda x: to_enum(DateLimitType, x), from_none], self.date_limit_type)
        result["designs"] = from_union([lambda x: from_list(from_str, x), from_none], self.designs)
        result["discounts"] = from_union([from_none, to_float, from_int, from_bool, from_str, lambda x: from_list(lambda x: x, x), lambda x: to_class(DiscountClass, x)], self.discounts)
        result["displayInWidget"] = from_union([from_bool, from_none], self.display_in_widget)
        result["duration"] = from_union([to_float, from_none], self.duration)
        result["exceptions"] = from_union([lambda x: from_list(lambda x: x, x), from_none], self.exceptions)
        result["extraDescription"] = from_union([from_str, from_none], self.extra_description)
        result["extraId"] = from_union([from_str, from_none], self.extra_id)
        result["extraLink"] = from_union([from_str, from_none], self.extra_link)
        result["forPay"] = from_union([from_bool, from_none], self.for_pay)
        result["id"] = from_union([from_str, from_none], self.id)
        result["images"] = from_union([lambda x: from_list(from_str, x), from_none], self.images)
        result["isOther"] = from_union([from_bool, from_none], self.is_other)
        result["lastModified"] = from_union([lambda x: x.isoformat(), from_none], self.last_modified)
        result["leaves"] = from_union([lambda x: from_list(from_str, x), from_none], self.leaves)
        result["manualChanges"] = from_union([from_bool, from_none], self.manual_changes)
        result["newTaxonomy"] = from_union([from_bool, from_none], self.new_taxonomy)
        result["onlineMode"] = from_union([lambda x: to_enum(OnlineMode, x), from_none], self.online_mode)
        result["onlyAfterTaxonomies"] = from_union([lambda x: from_list(from_str, x), from_none], self.only_after_taxonomies)
        result["order"] = from_union([to_float, from_none], self.order)
        result["parallelTaxonomies"] = from_union([lambda x: from_list(from_str, x), from_none], self.parallel_taxonomies)
        result["popularity"] = from_union([to_float, from_none], self.popularity)
        result["price"] = from_union([lambda x: to_class(TaxonomyPrice, x), from_none], self.price)
        result["priceLink"] = from_union([from_str, from_none], self.price_link)
        result["rooms"] = from_union([lambda x: from_list(from_str, x), from_none], self.rooms)
        result["showcaseItems"] = from_union([lambda x: from_list(lambda x: to_class(ShowcaseItem, x), x), from_none], self.showcase_items)
        result["showcases"] = from_union([lambda x: from_list(lambda x: to_class(TaxonomyShowcase, x), x), from_none], self.showcases)
        result["showcaseTaxonomyID"] = from_union([from_str, from_none], self.showcase_taxonomy_id)
        result["siteId"] = from_union([from_str, from_none], self.site_id)
        result["specialCabinet"] = from_union([from_str, from_none], self.special_cabinet)
        result["taxonomyAppExtraID"] = from_union([from_str, from_none], self.taxonomy_app_extra_id)
        result["taxonomyCategoryExtraID"] = from_union([from_str, from_none], self.taxonomy_category_extra_id)
        result["taxonomyParentID"] = from_union([from_str, from_none], self.taxonomy_parent_id)
        result["taxonomyType"] = from_union([lambda x: to_enum(TaxonomyType, x), from_none], self.taxonomy_type)
        result["timetable"] = from_union([lambda x: to_class(Timetable, x), from_none], self.timetable)
        result["useConfirmationSmsAlert"] = from_union([from_bool, from_none], self.use_confirmation_sms_alert)
        result["visitType"] = from_union([from_str, from_none], self.visit_type)
        return result


class FluffyTaxonomiesComplex:
    name: Optional[str]
    taxonomies: Optional[List[str]]

    def __init__(self, name: Optional[str], taxonomies: Optional[List[str]]) -> None:
        self.name = name
        self.taxonomies = taxonomies

    @staticmethod
    def from_dict(obj: Any) -> 'FluffyTaxonomiesComplex':
        assert isinstance(obj, dict)
        name = from_union([from_str, from_none], obj.get("name"))
        taxonomies = from_union([lambda x: from_list(from_str, x), from_none], obj.get("taxonomies"))
        return FluffyTaxonomiesComplex(name, taxonomies)

    def to_dict(self) -> dict:
        result: dict = {}
        result["name"] = from_union([from_str, from_none], self.name)
        result["taxonomies"] = from_union([lambda x: from_list(from_str, x), from_none], self.taxonomies)
        return result


class FluffyTopServices:
    services: Optional[List[Any]]
    status: Optional[str]

    def __init__(self, services: Optional[List[Any]], status: Optional[str]) -> None:
        self.services = services
        self.status = status

    @staticmethod
    def from_dict(obj: Any) -> 'FluffyTopServices':
        assert isinstance(obj, dict)
        services = from_union([lambda x: from_list(lambda x: x, x), from_none], obj.get("services"))
        status = from_union([from_str, from_none], obj.get("status"))
        return FluffyTopServices(services, status)

    def to_dict(self) -> dict:
        result: dict = {}
        result["services"] = from_union([lambda x: from_list(lambda x: x, x), from_none], self.services)
        result["status"] = from_union([from_str, from_none], self.status)
        return result


class FluffyBookableDateRanges:
    enabled: Optional[bool]
    end: Any
    start: Any

    def __init__(self, enabled: Optional[bool], end: Any, start: Any) -> None:
        self.enabled = enabled
        self.end = end
        self.start = start

    @staticmethod
    def from_dict(obj: Any) -> 'FluffyBookableDateRanges':
        assert isinstance(obj, dict)
        enabled = from_union([from_bool, from_none], obj.get("enabled"))
        end = obj.get("end")
        start = obj.get("start")
        return FluffyBookableDateRanges(enabled, end, start)

    def to_dict(self) -> dict:
        result: dict = {}
        result["enabled"] = from_union([from_bool, from_none], self.enabled)
        result["end"] = self.end
        result["start"] = self.start
        return result


class FluffyClientBlockingSettings:
    appointment_client_block: Optional[bool]
    appointment_client_block_days: Optional[float]
    appointment_client_block_text: Optional[str]
    block_if_future_record_exists: Optional[bool]
    block_repeated_records_count: Optional[float]
    block_repeated_records_range: Optional[float]
    block_repeated_records_text: Optional[str]

    def __init__(self, appointment_client_block: Optional[bool], appointment_client_block_days: Optional[float], appointment_client_block_text: Optional[str], block_if_future_record_exists: Optional[bool], block_repeated_records_count: Optional[float], block_repeated_records_range: Optional[float], block_repeated_records_text: Optional[str]) -> None:
        self.appointment_client_block = appointment_client_block
        self.appointment_client_block_days = appointment_client_block_days
        self.appointment_client_block_text = appointment_client_block_text
        self.block_if_future_record_exists = block_if_future_record_exists
        self.block_repeated_records_count = block_repeated_records_count
        self.block_repeated_records_range = block_repeated_records_range
        self.block_repeated_records_text = block_repeated_records_text

    @staticmethod
    def from_dict(obj: Any) -> 'FluffyClientBlockingSettings':
        assert isinstance(obj, dict)
        appointment_client_block = from_union([from_bool, from_none], obj.get("appointmentClientBlock"))
        appointment_client_block_days = from_union([from_float, from_none], obj.get("appointmentClientBlockDays"))
        appointment_client_block_text = from_union([from_str, from_none], obj.get("appointmentClientBlockText"))
        block_if_future_record_exists = from_union([from_bool, from_none], obj.get("blockIfFutureRecordExists"))
        block_repeated_records_count = from_union([from_float, from_none], obj.get("blockRepeatedRecordsCount"))
        block_repeated_records_range = from_union([from_float, from_none], obj.get("blockRepeatedRecordsRange"))
        block_repeated_records_text = from_union([from_str, from_none], obj.get("blockRepeatedRecordsText"))
        return FluffyClientBlockingSettings(appointment_client_block, appointment_client_block_days, appointment_client_block_text, block_if_future_record_exists, block_repeated_records_count, block_repeated_records_range, block_repeated_records_text)

    def to_dict(self) -> dict:
        result: dict = {}
        result["appointmentClientBlock"] = from_union([from_bool, from_none], self.appointment_client_block)
        result["appointmentClientBlockDays"] = from_union([to_float, from_none], self.appointment_client_block_days)
        result["appointmentClientBlockText"] = from_union([from_str, from_none], self.appointment_client_block_text)
        result["blockIfFutureRecordExists"] = from_union([from_bool, from_none], self.block_if_future_record_exists)
        result["blockRepeatedRecordsCount"] = from_union([to_float, from_none], self.block_repeated_records_count)
        result["blockRepeatedRecordsRange"] = from_union([to_float, from_none], self.block_repeated_records_range)
        result["blockRepeatedRecordsText"] = from_union([from_str, from_none], self.block_repeated_records_text)
        return result


class FluffyDiscountedPriceRounding:
    rule: Optional[Rule]
    value: Optional[float]

    def __init__(self, rule: Optional[Rule], value: Optional[float]) -> None:
        self.rule = rule
        self.value = value

    @staticmethod
    def from_dict(obj: Any) -> 'FluffyDiscountedPriceRounding':
        assert isinstance(obj, dict)
        rule = from_union([Rule, from_none], obj.get("rule"))
        value = from_union([from_float, from_none], obj.get("value"))
        return FluffyDiscountedPriceRounding(rule, value)

    def to_dict(self) -> dict:
        result: dict = {}
        result["rule"] = from_union([lambda x: to_enum(Rule, x), from_none], self.rule)
        result["value"] = from_union([to_float, from_none], self.value)
        return result


class FluffySocialSharing:
    active: Optional[bool]
    discount_amount: Optional[float]
    discount_enabled: Optional[bool]
    discount_type: Optional[DiscountType]
    text: Optional[str]
    widget_text: Optional[str]

    def __init__(self, active: Optional[bool], discount_amount: Optional[float], discount_enabled: Optional[bool], discount_type: Optional[DiscountType], text: Optional[str], widget_text: Optional[str]) -> None:
        self.active = active
        self.discount_amount = discount_amount
        self.discount_enabled = discount_enabled
        self.discount_type = discount_type
        self.text = text
        self.widget_text = widget_text

    @staticmethod
    def from_dict(obj: Any) -> 'FluffySocialSharing':
        assert isinstance(obj, dict)
        active = from_union([from_bool, from_none], obj.get("active"))
        discount_amount = from_union([from_float, from_none], obj.get("discountAmount"))
        discount_enabled = from_union([from_bool, from_none], obj.get("discountEnabled"))
        discount_type = from_union([DiscountType, from_none], obj.get("discountType"))
        text = from_union([from_none, from_str], obj.get("text"))
        widget_text = from_union([from_none, from_str], obj.get("widgetText"))
        return FluffySocialSharing(active, discount_amount, discount_enabled, discount_type, text, widget_text)

    def to_dict(self) -> dict:
        result: dict = {}
        result["active"] = from_union([from_bool, from_none], self.active)
        result["discountAmount"] = from_union([to_float, from_none], self.discount_amount)
        result["discountEnabled"] = from_union([from_bool, from_none], self.discount_enabled)
        result["discountType"] = from_union([lambda x: to_enum(DiscountType, x), from_none], self.discount_type)
        result["text"] = from_union([from_none, from_str], self.text)
        result["widgetText"] = from_union([from_none, from_str], self.widget_text)
        return result


class FluffyWidgetConfiguration:
    additional_name: Optional[str]
    alignment_taxonomy_slots: Optional[bool]
    allow_auto_select: Optional[bool]
    allow_book_visitor: Optional[bool]
    allow_skip_time_check: Optional[bool]
    appointment_confirmation_text: Optional[str]
    appointment_confirmation_title: Optional[str]
    ask_client_birthday: Optional[bool]
    ask_client_gender: Optional[bool]
    bookable_date_ranges: Optional[FluffyBookableDateRanges]
    bookable_months_count: Optional[float]
    calendar_mode: Optional[bool]
    calendar_mode_hide_time: Optional[bool]
    client_blocking_settings: Optional[FluffyClientBlockingSettings]
    client_comment_title: Optional[str]
    crac_server: Optional[CracServer]
    crac_slot_size: Optional[float]
    crunchv2: Optional[bool]
    day_off_label: Optional[str]
    days_forward: Optional[float]
    day_unavailable_label: Optional[str]
    default_service_img_url: Optional[str]
    default_worker_img_url: Optional[str]
    deny_same_time_records: Optional[bool]
    disabled_taxonomies_text: Optional[str]
    disable_mobile_widget: Optional[bool]
    disable_widget: Optional[bool]
    disable_widget_message: Optional[str]
    discounted_price_rounding: Optional[FluffyDiscountedPriceRounding]
    display_slot_size: Optional[float]
    dont_require_email: Optional[bool]
    email_is_mandatory: Optional[bool]
    enable_override_footer: Optional[bool]
    enable_warning_contact_data: Optional[bool]
    extra_visitors: Optional[bool]
    filter_non_insurance_schedule: Optional[bool]
    hide_any_worker_booking: Optional[bool]
    hide_call_button: Optional[bool]
    hide_empty_days: Optional[bool]
    hide_g_booking_logo: Optional[bool]
    hide_gray_slots: Optional[bool]
    hide_new_appointment_button: Optional[bool]
    hide_prices: Optional[bool]
    hide_social_networks_authentication: Optional[bool]
    insurance_client_support_phone: Optional[List[Union[List[Any], bool, PhoneClass, float, int, None, str]]]
    max_service_booking: Optional[float]
    max_timeslot_booking: Optional[float]
    middle_name_support: Optional[bool]
    most_free_enable: Optional[bool]
    multi_service_booking: Optional[bool]
    multi_timeslot_booking: Optional[bool]
    multi_timeslot_booking_all_days: Optional[bool]
    new_widget_theme: Optional[Dict[str, Any]]
    no_default_images: Optional[bool]
    override_footer: Optional[str]
    payment: Optional[Payment]
    payment_provider: Optional[PaymentProvider]
    require_agreement: Optional[bool]
    require_agreement_link: Optional[str]
    revision_version: Optional[float]
    short_link: Optional[str]
    show_all_workers: Optional[bool]
    show_client_address: Optional[bool]
    show_client_comment: Optional[bool]
    show_disabled_taxonomies: Optional[bool]
    show_drink_question: Optional[bool]
    show_map: Optional[bool]
    show_surname_first: Optional[bool]
    show_talk_question: Optional[bool]
    show_taxonomy_confirmation_alert: Optional[bool]
    skip_authentication: Optional[bool]
    skip_days_forward: Optional[bool]
    skip_mobile_map: Optional[bool]
    skip_service_duration_alignment: Optional[bool]
    skip_service_selection: Optional[bool]
    skip_time_selection: Optional[bool]
    skip_time_selection_service_i_ds: Optional[List[str]]
    skip_worker_selected_service_i_ds: Optional[List[str]]
    skip_worker_services_selection: Optional[bool]
    social_network_image: Optional[str]
    social_sharing: Optional[FluffySocialSharing]
    sort_by_most_free: Optional[bool]
    sort_workers_by_workload: Optional[bool]
    split_insurance_client: Optional[bool]
    split_name: Optional[bool]
    tentative_ttl: Optional[float]
    theme: Optional[str]
    use_appointment_reminder: Optional[bool]
    use_business_schedule_for_unavailable_label: Optional[bool]
    use_clusters_map: Optional[bool]
    use_coupon: Optional[bool]
    use_crac: Optional[bool]
    use_default_service_img: Optional[bool]
    use_default_worker_img: Optional[bool]
    use_direct_schedule_read: Optional[UseDirectScheduleRead]
    use_insurance_guarantee_letter: Optional[bool]
    use_insurance_select: Optional[bool]
    use_med_auth: Optional[bool]
    use_middle_name: Optional[bool]
    use_new_reserve_api: Optional[bool]
    use_resource_page_loading: Optional[bool]
    use_sort_by_name: Optional[bool]
    warning_contact_data_text: Optional[str]
    widget_use_crac: Optional[bool]
    without_workers: Optional[bool]
    worker_unavailability_text: Optional[str]
    worker_name_reverse: Optional[bool]

    def __init__(self, additional_name: Optional[str], alignment_taxonomy_slots: Optional[bool], allow_auto_select: Optional[bool], allow_book_visitor: Optional[bool], allow_skip_time_check: Optional[bool], appointment_confirmation_text: Optional[str], appointment_confirmation_title: Optional[str], ask_client_birthday: Optional[bool], ask_client_gender: Optional[bool], bookable_date_ranges: Optional[FluffyBookableDateRanges], bookable_months_count: Optional[float], calendar_mode: Optional[bool], calendar_mode_hide_time: Optional[bool], client_blocking_settings: Optional[FluffyClientBlockingSettings], client_comment_title: Optional[str], crac_server: Optional[CracServer], crac_slot_size: Optional[float], crunchv2: Optional[bool], day_off_label: Optional[str], days_forward: Optional[float], day_unavailable_label: Optional[str], default_service_img_url: Optional[str], default_worker_img_url: Optional[str], deny_same_time_records: Optional[bool], disabled_taxonomies_text: Optional[str], disable_mobile_widget: Optional[bool], disable_widget: Optional[bool], disable_widget_message: Optional[str], discounted_price_rounding: Optional[FluffyDiscountedPriceRounding], display_slot_size: Optional[float], dont_require_email: Optional[bool], email_is_mandatory: Optional[bool], enable_override_footer: Optional[bool], enable_warning_contact_data: Optional[bool], extra_visitors: Optional[bool], filter_non_insurance_schedule: Optional[bool], hide_any_worker_booking: Optional[bool], hide_call_button: Optional[bool], hide_empty_days: Optional[bool], hide_g_booking_logo: Optional[bool], hide_gray_slots: Optional[bool], hide_new_appointment_button: Optional[bool], hide_prices: Optional[bool], hide_social_networks_authentication: Optional[bool], insurance_client_support_phone: Optional[List[Union[List[Any], bool, PhoneClass, float, int, None, str]]], max_service_booking: Optional[float], max_timeslot_booking: Optional[float], middle_name_support: Optional[bool], most_free_enable: Optional[bool], multi_service_booking: Optional[bool], multi_timeslot_booking: Optional[bool], multi_timeslot_booking_all_days: Optional[bool], new_widget_theme: Optional[Dict[str, Any]], no_default_images: Optional[bool], override_footer: Optional[str], payment: Optional[Payment], payment_provider: Optional[PaymentProvider], require_agreement: Optional[bool], require_agreement_link: Optional[str], revision_version: Optional[float], short_link: Optional[str], show_all_workers: Optional[bool], show_client_address: Optional[bool], show_client_comment: Optional[bool], show_disabled_taxonomies: Optional[bool], show_drink_question: Optional[bool], show_map: Optional[bool], show_surname_first: Optional[bool], show_talk_question: Optional[bool], show_taxonomy_confirmation_alert: Optional[bool], skip_authentication: Optional[bool], skip_days_forward: Optional[bool], skip_mobile_map: Optional[bool], skip_service_duration_alignment: Optional[bool], skip_service_selection: Optional[bool], skip_time_selection: Optional[bool], skip_time_selection_service_i_ds: Optional[List[str]], skip_worker_selected_service_i_ds: Optional[List[str]], skip_worker_services_selection: Optional[bool], social_network_image: Optional[str], social_sharing: Optional[FluffySocialSharing], sort_by_most_free: Optional[bool], sort_workers_by_workload: Optional[bool], split_insurance_client: Optional[bool], split_name: Optional[bool], tentative_ttl: Optional[float], theme: Optional[str], use_appointment_reminder: Optional[bool], use_business_schedule_for_unavailable_label: Optional[bool], use_clusters_map: Optional[bool], use_coupon: Optional[bool], use_crac: Optional[bool], use_default_service_img: Optional[bool], use_default_worker_img: Optional[bool], use_direct_schedule_read: Optional[UseDirectScheduleRead], use_insurance_guarantee_letter: Optional[bool], use_insurance_select: Optional[bool], use_med_auth: Optional[bool], use_middle_name: Optional[bool], use_new_reserve_api: Optional[bool], use_resource_page_loading: Optional[bool], use_sort_by_name: Optional[bool], warning_contact_data_text: Optional[str], widget_use_crac: Optional[bool], without_workers: Optional[bool], worker_unavailability_text: Optional[str], worker_name_reverse: Optional[bool]) -> None:
        self.additional_name = additional_name
        self.alignment_taxonomy_slots = alignment_taxonomy_slots
        self.allow_auto_select = allow_auto_select
        self.allow_book_visitor = allow_book_visitor
        self.allow_skip_time_check = allow_skip_time_check
        self.appointment_confirmation_text = appointment_confirmation_text
        self.appointment_confirmation_title = appointment_confirmation_title
        self.ask_client_birthday = ask_client_birthday
        self.ask_client_gender = ask_client_gender
        self.bookable_date_ranges = bookable_date_ranges
        self.bookable_months_count = bookable_months_count
        self.calendar_mode = calendar_mode
        self.calendar_mode_hide_time = calendar_mode_hide_time
        self.client_blocking_settings = client_blocking_settings
        self.client_comment_title = client_comment_title
        self.crac_server = crac_server
        self.crac_slot_size = crac_slot_size
        self.crunchv2 = crunchv2
        self.day_off_label = day_off_label
        self.days_forward = days_forward
        self.day_unavailable_label = day_unavailable_label
        self.default_service_img_url = default_service_img_url
        self.default_worker_img_url = default_worker_img_url
        self.deny_same_time_records = deny_same_time_records
        self.disabled_taxonomies_text = disabled_taxonomies_text
        self.disable_mobile_widget = disable_mobile_widget
        self.disable_widget = disable_widget
        self.disable_widget_message = disable_widget_message
        self.discounted_price_rounding = discounted_price_rounding
        self.display_slot_size = display_slot_size
        self.dont_require_email = dont_require_email
        self.email_is_mandatory = email_is_mandatory
        self.enable_override_footer = enable_override_footer
        self.enable_warning_contact_data = enable_warning_contact_data
        self.extra_visitors = extra_visitors
        self.filter_non_insurance_schedule = filter_non_insurance_schedule
        self.hide_any_worker_booking = hide_any_worker_booking
        self.hide_call_button = hide_call_button
        self.hide_empty_days = hide_empty_days
        self.hide_g_booking_logo = hide_g_booking_logo
        self.hide_gray_slots = hide_gray_slots
        self.hide_new_appointment_button = hide_new_appointment_button
        self.hide_prices = hide_prices
        self.hide_social_networks_authentication = hide_social_networks_authentication
        self.insurance_client_support_phone = insurance_client_support_phone
        self.max_service_booking = max_service_booking
        self.max_timeslot_booking = max_timeslot_booking
        self.middle_name_support = middle_name_support
        self.most_free_enable = most_free_enable
        self.multi_service_booking = multi_service_booking
        self.multi_timeslot_booking = multi_timeslot_booking
        self.multi_timeslot_booking_all_days = multi_timeslot_booking_all_days
        self.new_widget_theme = new_widget_theme
        self.no_default_images = no_default_images
        self.override_footer = override_footer
        self.payment = payment
        self.payment_provider = payment_provider
        self.require_agreement = require_agreement
        self.require_agreement_link = require_agreement_link
        self.revision_version = revision_version
        self.short_link = short_link
        self.show_all_workers = show_all_workers
        self.show_client_address = show_client_address
        self.show_client_comment = show_client_comment
        self.show_disabled_taxonomies = show_disabled_taxonomies
        self.show_drink_question = show_drink_question
        self.show_map = show_map
        self.show_surname_first = show_surname_first
        self.show_talk_question = show_talk_question
        self.show_taxonomy_confirmation_alert = show_taxonomy_confirmation_alert
        self.skip_authentication = skip_authentication
        self.skip_days_forward = skip_days_forward
        self.skip_mobile_map = skip_mobile_map
        self.skip_service_duration_alignment = skip_service_duration_alignment
        self.skip_service_selection = skip_service_selection
        self.skip_time_selection = skip_time_selection
        self.skip_time_selection_service_i_ds = skip_time_selection_service_i_ds
        self.skip_worker_selected_service_i_ds = skip_worker_selected_service_i_ds
        self.skip_worker_services_selection = skip_worker_services_selection
        self.social_network_image = social_network_image
        self.social_sharing = social_sharing
        self.sort_by_most_free = sort_by_most_free
        self.sort_workers_by_workload = sort_workers_by_workload
        self.split_insurance_client = split_insurance_client
        self.split_name = split_name
        self.tentative_ttl = tentative_ttl
        self.theme = theme
        self.use_appointment_reminder = use_appointment_reminder
        self.use_business_schedule_for_unavailable_label = use_business_schedule_for_unavailable_label
        self.use_clusters_map = use_clusters_map
        self.use_coupon = use_coupon
        self.use_crac = use_crac
        self.use_default_service_img = use_default_service_img
        self.use_default_worker_img = use_default_worker_img
        self.use_direct_schedule_read = use_direct_schedule_read
        self.use_insurance_guarantee_letter = use_insurance_guarantee_letter
        self.use_insurance_select = use_insurance_select
        self.use_med_auth = use_med_auth
        self.use_middle_name = use_middle_name
        self.use_new_reserve_api = use_new_reserve_api
        self.use_resource_page_loading = use_resource_page_loading
        self.use_sort_by_name = use_sort_by_name
        self.warning_contact_data_text = warning_contact_data_text
        self.widget_use_crac = widget_use_crac
        self.without_workers = without_workers
        self.worker_unavailability_text = worker_unavailability_text
        self.worker_name_reverse = worker_name_reverse

    @staticmethod
    def from_dict(obj: Any) -> 'FluffyWidgetConfiguration':
        assert isinstance(obj, dict)
        additional_name = from_union([from_str, from_none], obj.get("additionalName"))
        alignment_taxonomy_slots = from_union([from_bool, from_none], obj.get("alignmentTaxonomySlots"))
        allow_auto_select = from_union([from_bool, from_none], obj.get("allowAutoSelect"))
        allow_book_visitor = from_union([from_bool, from_none], obj.get("allowBookVisitor"))
        allow_skip_time_check = from_union([from_bool, from_none], obj.get("allowSkipTimeCheck"))
        appointment_confirmation_text = from_union([from_str, from_none], obj.get("appointment_confirmation_text"))
        appointment_confirmation_title = from_union([from_str, from_none], obj.get("appointment_confirmation_title"))
        ask_client_birthday = from_union([from_bool, from_none], obj.get("askClientBirthday"))
        ask_client_gender = from_union([from_bool, from_none], obj.get("askClientGender"))
        bookable_date_ranges = from_union([FluffyBookableDateRanges.from_dict, from_none], obj.get("bookableDateRanges"))
        bookable_months_count = from_union([from_float, from_none], obj.get("bookableMonthsCount"))
        calendar_mode = from_union([from_bool, from_none], obj.get("calendarMode"))
        calendar_mode_hide_time = from_union([from_bool, from_none], obj.get("calendarModeHideTime"))
        client_blocking_settings = from_union([FluffyClientBlockingSettings.from_dict, from_none], obj.get("clientBlockingSettings"))
        client_comment_title = from_union([from_str, from_none], obj.get("clientCommentTitle"))
        crac_server = from_union([CracServer, from_none], obj.get("cracServer"))
        crac_slot_size = from_union([from_float, from_none], obj.get("cracSlotSize"))
        crunchv2 = from_union([from_bool, from_none], obj.get("crunchv2"))
        day_off_label = from_union([from_str, from_none], obj.get("dayOffLabel"))
        days_forward = from_union([from_float, from_none], obj.get("daysForward"))
        day_unavailable_label = from_union([from_str, from_none], obj.get("dayUnavailableLabel"))
        default_service_img_url = from_union([from_str, from_none], obj.get("defaultServiceImgUrl"))
        default_worker_img_url = from_union([from_str, from_none], obj.get("defaultWorkerImgUrl"))
        deny_same_time_records = from_union([from_bool, from_none], obj.get("denySameTimeRecords"))
        disabled_taxonomies_text = from_union([from_str, from_none], obj.get("disabledTaxonomiesText"))
        disable_mobile_widget = from_union([from_bool, from_none], obj.get("disableMobileWidget"))
        disable_widget = from_union([from_bool, from_none], obj.get("disableWidget"))
        disable_widget_message = from_union([from_str, from_none], obj.get("disableWidgetMessage"))
        discounted_price_rounding = from_union([FluffyDiscountedPriceRounding.from_dict, from_none], obj.get("discountedPriceRounding"))
        display_slot_size = from_union([from_float, from_none], obj.get("displaySlotSize"))
        dont_require_email = from_union([from_bool, from_none], obj.get("dontRequireEmail"))
        email_is_mandatory = from_union([from_bool, from_none], obj.get("emailIsMandatory"))
        enable_override_footer = from_union([from_bool, from_none], obj.get("enableOverrideFooter"))
        enable_warning_contact_data = from_union([from_bool, from_none], obj.get("enableWarningContactData"))
        extra_visitors = from_union([from_bool, from_none], obj.get("extraVisitors"))
        filter_non_insurance_schedule = from_union([from_bool, from_none], obj.get("filterNonInsuranceSchedule"))
        hide_any_worker_booking = from_union([from_bool, from_none], obj.get("hideAnyWorkerBooking"))
        hide_call_button = from_union([from_bool, from_none], obj.get("hideCallButton"))
        hide_empty_days = from_union([from_bool, from_none], obj.get("hideEmptyDays"))
        hide_g_booking_logo = from_union([from_bool, from_none], obj.get("hideGBookingLogo"))
        hide_gray_slots = from_union([from_bool, from_none], obj.get("hideGraySlots"))
        hide_new_appointment_button = from_union([from_bool, from_none], obj.get("hideNewAppointmentButton"))
        hide_prices = from_union([from_bool, from_none], obj.get("hidePrices"))
        hide_social_networks_authentication = from_union([from_bool, from_none], obj.get("hideSocialNetworksAuthentication"))
        insurance_client_support_phone = from_union([lambda x: from_list(lambda x: from_union([from_none, from_float, from_int, from_bool, from_str, lambda x: from_list(lambda x: x, x), PhoneClass.from_dict], x), x), from_none], obj.get("insuranceClientSupportPhone"))
        max_service_booking = from_union([from_float, from_none], obj.get("maxServiceBooking"))
        max_timeslot_booking = from_union([from_float, from_none], obj.get("maxTimeslotBooking"))
        middle_name_support = from_union([from_bool, from_none], obj.get("middleNameSupport"))
        most_free_enable = from_union([from_bool, from_none], obj.get("mostFreeEnable"))
        multi_service_booking = from_union([from_bool, from_none], obj.get("multiServiceBooking"))
        multi_timeslot_booking = from_union([from_bool, from_none], obj.get("multiTimeslotBooking"))
        multi_timeslot_booking_all_days = from_union([from_bool, from_none], obj.get("multiTimeslotBookingAllDays"))
        new_widget_theme = from_union([lambda x: from_dict(lambda x: x, x), from_none], obj.get("newWidgetTheme"))
        no_default_images = from_union([from_bool, from_none], obj.get("noDefaultImages"))
        override_footer = from_union([from_str, from_none], obj.get("overrideFooter"))
        payment = from_union([Payment, from_none], obj.get("payment"))
        payment_provider = from_union([PaymentProvider, from_none], obj.get("paymentProvider"))
        require_agreement = from_union([from_bool, from_none], obj.get("requireAgreement"))
        require_agreement_link = from_union([from_str, from_none], obj.get("requireAgreementLink"))
        revision_version = from_union([from_float, from_none], obj.get("revisionVersion"))
        short_link = from_union([from_str, from_none], obj.get("shortLink"))
        show_all_workers = from_union([from_bool, from_none], obj.get("showAllWorkers"))
        show_client_address = from_union([from_bool, from_none], obj.get("showClientAddress"))
        show_client_comment = from_union([from_bool, from_none], obj.get("showClientComment"))
        show_disabled_taxonomies = from_union([from_bool, from_none], obj.get("showDisabledTaxonomies"))
        show_drink_question = from_union([from_bool, from_none], obj.get("showDrinkQuestion"))
        show_map = from_union([from_bool, from_none], obj.get("showMap"))
        show_surname_first = from_union([from_bool, from_none], obj.get("showSurnameFirst"))
        show_talk_question = from_union([from_bool, from_none], obj.get("showTalkQuestion"))
        show_taxonomy_confirmation_alert = from_union([from_bool, from_none], obj.get("showTaxonomyConfirmationAlert"))
        skip_authentication = from_union([from_bool, from_none], obj.get("skipAuthentication"))
        skip_days_forward = from_union([from_bool, from_none], obj.get("skipDaysForward"))
        skip_mobile_map = from_union([from_bool, from_none], obj.get("skipMobileMap"))
        skip_service_duration_alignment = from_union([from_bool, from_none], obj.get("skipServiceDurationAlignment"))
        skip_service_selection = from_union([from_bool, from_none], obj.get("skipServiceSelection"))
        skip_time_selection = from_union([from_bool, from_none], obj.get("skipTimeSelection"))
        skip_time_selection_service_i_ds = from_union([lambda x: from_list(from_str, x), from_none], obj.get("skipTimeSelectionServiceIDs"))
        skip_worker_selected_service_i_ds = from_union([lambda x: from_list(from_str, x), from_none], obj.get("skipWorkerSelectedServiceIDs"))
        skip_worker_services_selection = from_union([from_bool, from_none], obj.get("skipWorkerServicesSelection"))
        social_network_image = from_union([from_str, from_none], obj.get("socialNetworkImage"))
        social_sharing = from_union([FluffySocialSharing.from_dict, from_none], obj.get("socialSharing"))
        sort_by_most_free = from_union([from_bool, from_none], obj.get("sortByMostFree"))
        sort_workers_by_workload = from_union([from_bool, from_none], obj.get("sortWorkersByWorkload"))
        split_insurance_client = from_union([from_bool, from_none], obj.get("splitInsuranceClient"))
        split_name = from_union([from_bool, from_none], obj.get("splitName"))
        tentative_ttl = from_union([from_float, from_none], obj.get("tentativeTTL"))
        theme = from_union([from_str, from_none], obj.get("theme"))
        use_appointment_reminder = from_union([from_bool, from_none], obj.get("useAppointmentReminder"))
        use_business_schedule_for_unavailable_label = from_union([from_bool, from_none], obj.get("useBusinessScheduleForUnavailableLabel"))
        use_clusters_map = from_union([from_bool, from_none], obj.get("useClustersMap"))
        use_coupon = from_union([from_bool, from_none], obj.get("useCoupon"))
        use_crac = from_union([from_bool, from_none], obj.get("useCRAC"))
        use_default_service_img = from_union([from_bool, from_none], obj.get("useDefaultServiceImg"))
        use_default_worker_img = from_union([from_bool, from_none], obj.get("useDefaultWorkerImg"))
        use_direct_schedule_read = from_union([UseDirectScheduleRead, from_none], obj.get("useDirectScheduleRead"))
        use_insurance_guarantee_letter = from_union([from_bool, from_none], obj.get("useInsuranceGuaranteeLetter"))
        use_insurance_select = from_union([from_bool, from_none], obj.get("useInsuranceSelect"))
        use_med_auth = from_union([from_bool, from_none], obj.get("useMedAuth"))
        use_middle_name = from_union([from_bool, from_none], obj.get("useMiddleName"))
        use_new_reserve_api = from_union([from_bool, from_none], obj.get("useNewReserveAPI"))
        use_resource_page_loading = from_union([from_bool, from_none], obj.get("useResourcePageLoading"))
        use_sort_by_name = from_union([from_bool, from_none], obj.get("useSortByName"))
        warning_contact_data_text = from_union([from_str, from_none], obj.get("warningContactDataText"))
        widget_use_crac = from_union([from_bool, from_none], obj.get("widgetUseCRAC"))
        without_workers = from_union([from_bool, from_none], obj.get("withoutWorkers"))
        worker_unavailability_text = from_union([from_str, from_none], obj.get("worker_unavailability_text"))
        worker_name_reverse = from_union([from_bool, from_none], obj.get("workerNameReverse"))
        return FluffyWidgetConfiguration(additional_name, alignment_taxonomy_slots, allow_auto_select, allow_book_visitor, allow_skip_time_check, appointment_confirmation_text, appointment_confirmation_title, ask_client_birthday, ask_client_gender, bookable_date_ranges, bookable_months_count, calendar_mode, calendar_mode_hide_time, client_blocking_settings, client_comment_title, crac_server, crac_slot_size, crunchv2, day_off_label, days_forward, day_unavailable_label, default_service_img_url, default_worker_img_url, deny_same_time_records, disabled_taxonomies_text, disable_mobile_widget, disable_widget, disable_widget_message, discounted_price_rounding, display_slot_size, dont_require_email, email_is_mandatory, enable_override_footer, enable_warning_contact_data, extra_visitors, filter_non_insurance_schedule, hide_any_worker_booking, hide_call_button, hide_empty_days, hide_g_booking_logo, hide_gray_slots, hide_new_appointment_button, hide_prices, hide_social_networks_authentication, insurance_client_support_phone, max_service_booking, max_timeslot_booking, middle_name_support, most_free_enable, multi_service_booking, multi_timeslot_booking, multi_timeslot_booking_all_days, new_widget_theme, no_default_images, override_footer, payment, payment_provider, require_agreement, require_agreement_link, revision_version, short_link, show_all_workers, show_client_address, show_client_comment, show_disabled_taxonomies, show_drink_question, show_map, show_surname_first, show_talk_question, show_taxonomy_confirmation_alert, skip_authentication, skip_days_forward, skip_mobile_map, skip_service_duration_alignment, skip_service_selection, skip_time_selection, skip_time_selection_service_i_ds, skip_worker_selected_service_i_ds, skip_worker_services_selection, social_network_image, social_sharing, sort_by_most_free, sort_workers_by_workload, split_insurance_client, split_name, tentative_ttl, theme, use_appointment_reminder, use_business_schedule_for_unavailable_label, use_clusters_map, use_coupon, use_crac, use_default_service_img, use_default_worker_img, use_direct_schedule_read, use_insurance_guarantee_letter, use_insurance_select, use_med_auth, use_middle_name, use_new_reserve_api, use_resource_page_loading, use_sort_by_name, warning_contact_data_text, widget_use_crac, without_workers, worker_unavailability_text, worker_name_reverse)

    def to_dict(self) -> dict:
        result: dict = {}
        result["additionalName"] = from_union([from_str, from_none], self.additional_name)
        result["alignmentTaxonomySlots"] = from_union([from_bool, from_none], self.alignment_taxonomy_slots)
        result["allowAutoSelect"] = from_union([from_bool, from_none], self.allow_auto_select)
        result["allowBookVisitor"] = from_union([from_bool, from_none], self.allow_book_visitor)
        result["allowSkipTimeCheck"] = from_union([from_bool, from_none], self.allow_skip_time_check)
        result["appointment_confirmation_text"] = from_union([from_str, from_none], self.appointment_confirmation_text)
        result["appointment_confirmation_title"] = from_union([from_str, from_none], self.appointment_confirmation_title)
        result["askClientBirthday"] = from_union([from_bool, from_none], self.ask_client_birthday)
        result["askClientGender"] = from_union([from_bool, from_none], self.ask_client_gender)
        result["bookableDateRanges"] = from_union([lambda x: to_class(FluffyBookableDateRanges, x), from_none], self.bookable_date_ranges)
        result["bookableMonthsCount"] = from_union([to_float, from_none], self.bookable_months_count)
        result["calendarMode"] = from_union([from_bool, from_none], self.calendar_mode)
        result["calendarModeHideTime"] = from_union([from_bool, from_none], self.calendar_mode_hide_time)
        result["clientBlockingSettings"] = from_union([lambda x: to_class(FluffyClientBlockingSettings, x), from_none], self.client_blocking_settings)
        result["clientCommentTitle"] = from_union([from_str, from_none], self.client_comment_title)
        result["cracServer"] = from_union([lambda x: to_enum(CracServer, x), from_none], self.crac_server)
        result["cracSlotSize"] = from_union([to_float, from_none], self.crac_slot_size)
        result["crunchv2"] = from_union([from_bool, from_none], self.crunchv2)
        result["dayOffLabel"] = from_union([from_str, from_none], self.day_off_label)
        result["daysForward"] = from_union([to_float, from_none], self.days_forward)
        result["dayUnavailableLabel"] = from_union([from_str, from_none], self.day_unavailable_label)
        result["defaultServiceImgUrl"] = from_union([from_str, from_none], self.default_service_img_url)
        result["defaultWorkerImgUrl"] = from_union([from_str, from_none], self.default_worker_img_url)
        result["denySameTimeRecords"] = from_union([from_bool, from_none], self.deny_same_time_records)
        result["disabledTaxonomiesText"] = from_union([from_str, from_none], self.disabled_taxonomies_text)
        result["disableMobileWidget"] = from_union([from_bool, from_none], self.disable_mobile_widget)
        result["disableWidget"] = from_union([from_bool, from_none], self.disable_widget)
        result["disableWidgetMessage"] = from_union([from_str, from_none], self.disable_widget_message)
        result["discountedPriceRounding"] = from_union([lambda x: to_class(FluffyDiscountedPriceRounding, x), from_none], self.discounted_price_rounding)
        result["displaySlotSize"] = from_union([to_float, from_none], self.display_slot_size)
        result["dontRequireEmail"] = from_union([from_bool, from_none], self.dont_require_email)
        result["emailIsMandatory"] = from_union([from_bool, from_none], self.email_is_mandatory)
        result["enableOverrideFooter"] = from_union([from_bool, from_none], self.enable_override_footer)
        result["enableWarningContactData"] = from_union([from_bool, from_none], self.enable_warning_contact_data)
        result["extraVisitors"] = from_union([from_bool, from_none], self.extra_visitors)
        result["filterNonInsuranceSchedule"] = from_union([from_bool, from_none], self.filter_non_insurance_schedule)
        result["hideAnyWorkerBooking"] = from_union([from_bool, from_none], self.hide_any_worker_booking)
        result["hideCallButton"] = from_union([from_bool, from_none], self.hide_call_button)
        result["hideEmptyDays"] = from_union([from_bool, from_none], self.hide_empty_days)
        result["hideGBookingLogo"] = from_union([from_bool, from_none], self.hide_g_booking_logo)
        result["hideGraySlots"] = from_union([from_bool, from_none], self.hide_gray_slots)
        result["hideNewAppointmentButton"] = from_union([from_bool, from_none], self.hide_new_appointment_button)
        result["hidePrices"] = from_union([from_bool, from_none], self.hide_prices)
        result["hideSocialNetworksAuthentication"] = from_union([from_bool, from_none], self.hide_social_networks_authentication)
        result["insuranceClientSupportPhone"] = from_union([lambda x: from_list(lambda x: from_union([from_none, to_float, from_int, from_bool, from_str, lambda x: from_list(lambda x: x, x), lambda x: to_class(PhoneClass, x)], x), x), from_none], self.insurance_client_support_phone)
        result["maxServiceBooking"] = from_union([to_float, from_none], self.max_service_booking)
        result["maxTimeslotBooking"] = from_union([to_float, from_none], self.max_timeslot_booking)
        result["middleNameSupport"] = from_union([from_bool, from_none], self.middle_name_support)
        result["mostFreeEnable"] = from_union([from_bool, from_none], self.most_free_enable)
        result["multiServiceBooking"] = from_union([from_bool, from_none], self.multi_service_booking)
        result["multiTimeslotBooking"] = from_union([from_bool, from_none], self.multi_timeslot_booking)
        result["multiTimeslotBookingAllDays"] = from_union([from_bool, from_none], self.multi_timeslot_booking_all_days)
        result["newWidgetTheme"] = from_union([lambda x: from_dict(lambda x: x, x), from_none], self.new_widget_theme)
        result["noDefaultImages"] = from_union([from_bool, from_none], self.no_default_images)
        result["overrideFooter"] = from_union([from_str, from_none], self.override_footer)
        result["payment"] = from_union([lambda x: to_enum(Payment, x), from_none], self.payment)
        result["paymentProvider"] = from_union([lambda x: to_enum(PaymentProvider, x), from_none], self.payment_provider)
        result["requireAgreement"] = from_union([from_bool, from_none], self.require_agreement)
        result["requireAgreementLink"] = from_union([from_str, from_none], self.require_agreement_link)
        result["revisionVersion"] = from_union([to_float, from_none], self.revision_version)
        result["shortLink"] = from_union([from_str, from_none], self.short_link)
        result["showAllWorkers"] = from_union([from_bool, from_none], self.show_all_workers)
        result["showClientAddress"] = from_union([from_bool, from_none], self.show_client_address)
        result["showClientComment"] = from_union([from_bool, from_none], self.show_client_comment)
        result["showDisabledTaxonomies"] = from_union([from_bool, from_none], self.show_disabled_taxonomies)
        result["showDrinkQuestion"] = from_union([from_bool, from_none], self.show_drink_question)
        result["showMap"] = from_union([from_bool, from_none], self.show_map)
        result["showSurnameFirst"] = from_union([from_bool, from_none], self.show_surname_first)
        result["showTalkQuestion"] = from_union([from_bool, from_none], self.show_talk_question)
        result["showTaxonomyConfirmationAlert"] = from_union([from_bool, from_none], self.show_taxonomy_confirmation_alert)
        result["skipAuthentication"] = from_union([from_bool, from_none], self.skip_authentication)
        result["skipDaysForward"] = from_union([from_bool, from_none], self.skip_days_forward)
        result["skipMobileMap"] = from_union([from_bool, from_none], self.skip_mobile_map)
        result["skipServiceDurationAlignment"] = from_union([from_bool, from_none], self.skip_service_duration_alignment)
        result["skipServiceSelection"] = from_union([from_bool, from_none], self.skip_service_selection)
        result["skipTimeSelection"] = from_union([from_bool, from_none], self.skip_time_selection)
        result["skipTimeSelectionServiceIDs"] = from_union([lambda x: from_list(from_str, x), from_none], self.skip_time_selection_service_i_ds)
        result["skipWorkerSelectedServiceIDs"] = from_union([lambda x: from_list(from_str, x), from_none], self.skip_worker_selected_service_i_ds)
        result["skipWorkerServicesSelection"] = from_union([from_bool, from_none], self.skip_worker_services_selection)
        result["socialNetworkImage"] = from_union([from_str, from_none], self.social_network_image)
        result["socialSharing"] = from_union([lambda x: to_class(FluffySocialSharing, x), from_none], self.social_sharing)
        result["sortByMostFree"] = from_union([from_bool, from_none], self.sort_by_most_free)
        result["sortWorkersByWorkload"] = from_union([from_bool, from_none], self.sort_workers_by_workload)
        result["splitInsuranceClient"] = from_union([from_bool, from_none], self.split_insurance_client)
        result["splitName"] = from_union([from_bool, from_none], self.split_name)
        result["tentativeTTL"] = from_union([to_float, from_none], self.tentative_ttl)
        result["theme"] = from_union([from_str, from_none], self.theme)
        result["useAppointmentReminder"] = from_union([from_bool, from_none], self.use_appointment_reminder)
        result["useBusinessScheduleForUnavailableLabel"] = from_union([from_bool, from_none], self.use_business_schedule_for_unavailable_label)
        result["useClustersMap"] = from_union([from_bool, from_none], self.use_clusters_map)
        result["useCoupon"] = from_union([from_bool, from_none], self.use_coupon)
        result["useCRAC"] = from_union([from_bool, from_none], self.use_crac)
        result["useDefaultServiceImg"] = from_union([from_bool, from_none], self.use_default_service_img)
        result["useDefaultWorkerImg"] = from_union([from_bool, from_none], self.use_default_worker_img)
        result["useDirectScheduleRead"] = from_union([lambda x: to_enum(UseDirectScheduleRead, x), from_none], self.use_direct_schedule_read)
        result["useInsuranceGuaranteeLetter"] = from_union([from_bool, from_none], self.use_insurance_guarantee_letter)
        result["useInsuranceSelect"] = from_union([from_bool, from_none], self.use_insurance_select)
        result["useMedAuth"] = from_union([from_bool, from_none], self.use_med_auth)
        result["useMiddleName"] = from_union([from_bool, from_none], self.use_middle_name)
        result["useNewReserveAPI"] = from_union([from_bool, from_none], self.use_new_reserve_api)
        result["useResourcePageLoading"] = from_union([from_bool, from_none], self.use_resource_page_loading)
        result["useSortByName"] = from_union([from_bool, from_none], self.use_sort_by_name)
        result["warningContactDataText"] = from_union([from_str, from_none], self.warning_contact_data_text)
        result["widgetUseCRAC"] = from_union([from_bool, from_none], self.widget_use_crac)
        result["withoutWorkers"] = from_union([from_bool, from_none], self.without_workers)
        result["worker_unavailability_text"] = from_union([from_str, from_none], self.worker_unavailability_text)
        result["workerNameReverse"] = from_union([from_bool, from_none], self.worker_name_reverse)
        return result


class AmbitiousBusiness:
    active: Optional[bool]
    additional_settings: Optional[FluffyAdditionalSettings]
    allow_category_booking: Optional[bool]
    business_backoffice_configuration: Optional[StickyBackofficeConfiguration]
    backoffice_configuration: Optional[TentacledBackofficeConfiguration]
    backoffice_type: Optional[BackofficeType]
    cabinets: Optional[List[FluffyCabinet]]
    cabinets_enabled: Optional[bool]
    callback_widget_configuration: Optional[FluffyCallbackWidgetConfiguration]
    consumables: Optional[List[FluffyConsumable]]
    created_on: Optional[datetime]
    default_filtered_workers: Optional[List[str]]
    departments: Optional[List[FluffyDepartment]]
    designs: Optional[List[Dict[str, Any]]]
    extra_id: Optional[str]
    flat_taxonomy_display: Optional[bool]
    general_info: BusinessInfo
    group: Optional[Group]
    id: Optional[str]
    integration_data: Optional[Dict[str, Any]]
    mini_widget_configuration: FluffyMiniWidgetConfiguration
    mobile_data: Optional[List[Any]]
    notifications: Optional[List[Any]]
    resources: List[Union[List[Any], bool, ResourceResource, float, int, None, str]]
    state_level_holidays_not_working: Optional[bool]
    taxonomies: List[BusinessTaxonomy]
    taxonomies_complex: Optional[List[FluffyTaxonomiesComplex]]
    taxonomy_tree_capacity: Optional[List[Dict[str, Any]]]
    top_services: Optional[FluffyTopServices]
    vertical: Optional[str]
    widget_configuration: FluffyWidgetConfiguration
    yandex_feed_type: Optional[str]

    def __init__(self, active: Optional[bool], additional_settings: Optional[FluffyAdditionalSettings], allow_category_booking: Optional[bool], business_backoffice_configuration: Optional[StickyBackofficeConfiguration], backoffice_configuration: Optional[TentacledBackofficeConfiguration], backoffice_type: Optional[BackofficeType], cabinets: Optional[List[FluffyCabinet]], cabinets_enabled: Optional[bool], callback_widget_configuration: Optional[FluffyCallbackWidgetConfiguration], consumables: Optional[List[FluffyConsumable]], created_on: Optional[datetime], default_filtered_workers: Optional[List[str]], departments: Optional[List[FluffyDepartment]], designs: Optional[List[Dict[str, Any]]], extra_id: Optional[str], flat_taxonomy_display: Optional[bool], general_info: BusinessInfo, group: Optional[Group], id: Optional[str], integration_data: Optional[Dict[str, Any]], mini_widget_configuration: FluffyMiniWidgetConfiguration, mobile_data: Optional[List[Any]], notifications: Optional[List[Any]], resources: List[Union[List[Any], bool, ResourceResource, float, int, None, str]], state_level_holidays_not_working: Optional[bool], taxonomies: List[BusinessTaxonomy], taxonomies_complex: Optional[List[FluffyTaxonomiesComplex]], taxonomy_tree_capacity: Optional[List[Dict[str, Any]]], top_services: Optional[FluffyTopServices], vertical: Optional[str], widget_configuration: FluffyWidgetConfiguration, yandex_feed_type: Optional[str]) -> None:
        self.active = active
        self.additional_settings = additional_settings
        self.allow_category_booking = allow_category_booking
        self.business_backoffice_configuration = business_backoffice_configuration
        self.backoffice_configuration = backoffice_configuration
        self.backoffice_type = backoffice_type
        self.cabinets = cabinets
        self.cabinets_enabled = cabinets_enabled
        self.callback_widget_configuration = callback_widget_configuration
        self.consumables = consumables
        self.created_on = created_on
        self.default_filtered_workers = default_filtered_workers
        self.departments = departments
        self.designs = designs
        self.extra_id = extra_id
        self.flat_taxonomy_display = flat_taxonomy_display
        self.general_info = general_info
        self.group = group
        self.id = id
        self.integration_data = integration_data
        self.mini_widget_configuration = mini_widget_configuration
        self.mobile_data = mobile_data
        self.notifications = notifications
        self.resources = resources
        self.state_level_holidays_not_working = state_level_holidays_not_working
        self.taxonomies = taxonomies
        self.taxonomies_complex = taxonomies_complex
        self.taxonomy_tree_capacity = taxonomy_tree_capacity
        self.top_services = top_services
        self.vertical = vertical
        self.widget_configuration = widget_configuration
        self.yandex_feed_type = yandex_feed_type

    @staticmethod
    def from_dict(obj: Any) -> 'AmbitiousBusiness':
        assert isinstance(obj, dict)
        active = from_union([from_bool, from_none], obj.get("active"))
        additional_settings = from_union([FluffyAdditionalSettings.from_dict, from_none], obj.get("additionalSettings"))
        allow_category_booking = from_union([from_bool, from_none], obj.get("allowCategoryBooking"))
        business_backoffice_configuration = from_union([StickyBackofficeConfiguration.from_dict, from_none], obj.get("backoffice_configuration"))
        backoffice_configuration = from_union([TentacledBackofficeConfiguration.from_dict, from_none], obj.get("backofficeConfiguration"))
        backoffice_type = from_union([BackofficeType, from_none], obj.get("backofficeType"))
        cabinets = from_union([lambda x: from_list(FluffyCabinet.from_dict, x), from_none], obj.get("cabinets"))
        cabinets_enabled = from_union([from_bool, from_none], obj.get("cabinetsEnabled"))
        callback_widget_configuration = from_union([FluffyCallbackWidgetConfiguration.from_dict, from_none], obj.get("callback_widget_configuration"))
        consumables = from_union([lambda x: from_list(FluffyConsumable.from_dict, x), from_none], obj.get("consumables"))
        created_on = from_union([from_datetime, from_none], obj.get("created_on"))
        default_filtered_workers = from_union([lambda x: from_list(from_str, x), from_none], obj.get("defaultFilteredWorkers"))
        departments = from_union([lambda x: from_list(FluffyDepartment.from_dict, x), from_none], obj.get("departments"))
        designs = from_union([lambda x: from_list(lambda x: from_dict(lambda x: x, x), x), from_none], obj.get("designs"))
        extra_id = from_union([from_str, from_none], obj.get("extraID"))
        flat_taxonomy_display = from_union([from_bool, from_none], obj.get("flatTaxonomyDisplay"))
        general_info = BusinessInfo.from_dict(obj.get("general_info"))
        group = from_union([Group, from_none], obj.get("group"))
        id = from_union([from_str, from_none], obj.get("id"))
        integration_data = from_union([lambda x: from_dict(lambda x: x, x), from_none], obj.get("integration_data"))
        mini_widget_configuration = FluffyMiniWidgetConfiguration.from_dict(obj.get("mini_widget_configuration"))
        mobile_data = from_union([lambda x: from_list(lambda x: x, x), from_none], obj.get("mobileData"))
        notifications = from_union([lambda x: from_list(lambda x: x, x), from_none], obj.get("notifications"))
        resources = from_list(lambda x: from_union([from_none, from_float, from_int, from_bool, from_str, lambda x: from_list(lambda x: x, x), ResourceResource.from_dict], x), obj.get("resources"))
        state_level_holidays_not_working = from_union([from_bool, from_none], obj.get("stateLevelHolidaysNotWorking"))
        taxonomies = from_list(BusinessTaxonomy.from_dict, obj.get("taxonomies"))
        taxonomies_complex = from_union([lambda x: from_list(FluffyTaxonomiesComplex.from_dict, x), from_none], obj.get("taxonomiesComplex"))
        taxonomy_tree_capacity = from_union([lambda x: from_list(lambda x: from_dict(lambda x: x, x), x), from_none], obj.get("taxonomy_tree_capacity"))
        top_services = from_union([FluffyTopServices.from_dict, from_none], obj.get("top_services"))
        vertical = from_union([from_str, from_none], obj.get("vertical"))
        widget_configuration = FluffyWidgetConfiguration.from_dict(obj.get("widget_configuration"))
        yandex_feed_type = from_union([from_str, from_none], obj.get("yandexFeedType"))
        return AmbitiousBusiness(active, additional_settings, allow_category_booking, business_backoffice_configuration, backoffice_configuration, backoffice_type, cabinets, cabinets_enabled, callback_widget_configuration, consumables, created_on, default_filtered_workers, departments, designs, extra_id, flat_taxonomy_display, general_info, group, id, integration_data, mini_widget_configuration, mobile_data, notifications, resources, state_level_holidays_not_working, taxonomies, taxonomies_complex, taxonomy_tree_capacity, top_services, vertical, widget_configuration, yandex_feed_type)

    def to_dict(self) -> dict:
        result: dict = {}
        result["active"] = from_union([from_bool, from_none], self.active)
        result["additionalSettings"] = from_union([lambda x: to_class(FluffyAdditionalSettings, x), from_none], self.additional_settings)
        result["allowCategoryBooking"] = from_union([from_bool, from_none], self.allow_category_booking)
        result["backoffice_configuration"] = from_union([lambda x: to_class(StickyBackofficeConfiguration, x), from_none], self.business_backoffice_configuration)
        result["backofficeConfiguration"] = from_union([lambda x: to_class(TentacledBackofficeConfiguration, x), from_none], self.backoffice_configuration)
        result["backofficeType"] = from_union([lambda x: to_enum(BackofficeType, x), from_none], self.backoffice_type)
        result["cabinets"] = from_union([lambda x: from_list(lambda x: to_class(FluffyCabinet, x), x), from_none], self.cabinets)
        result["cabinetsEnabled"] = from_union([from_bool, from_none], self.cabinets_enabled)
        result["callback_widget_configuration"] = from_union([lambda x: to_class(FluffyCallbackWidgetConfiguration, x), from_none], self.callback_widget_configuration)
        result["consumables"] = from_union([lambda x: from_list(lambda x: to_class(FluffyConsumable, x), x), from_none], self.consumables)
        result["created_on"] = from_union([lambda x: x.isoformat(), from_none], self.created_on)
        result["defaultFilteredWorkers"] = from_union([lambda x: from_list(from_str, x), from_none], self.default_filtered_workers)
        result["departments"] = from_union([lambda x: from_list(lambda x: to_class(FluffyDepartment, x), x), from_none], self.departments)
        result["designs"] = from_union([lambda x: from_list(lambda x: from_dict(lambda x: x, x), x), from_none], self.designs)
        result["extraID"] = from_union([from_str, from_none], self.extra_id)
        result["flatTaxonomyDisplay"] = from_union([from_bool, from_none], self.flat_taxonomy_display)
        result["general_info"] = to_class(BusinessInfo, self.general_info)
        result["group"] = from_union([lambda x: to_enum(Group, x), from_none], self.group)
        result["id"] = from_union([from_str, from_none], self.id)
        result["integration_data"] = from_union([lambda x: from_dict(lambda x: x, x), from_none], self.integration_data)
        result["mini_widget_configuration"] = to_class(FluffyMiniWidgetConfiguration, self.mini_widget_configuration)
        result["mobileData"] = from_union([lambda x: from_list(lambda x: x, x), from_none], self.mobile_data)
        result["notifications"] = from_union([lambda x: from_list(lambda x: x, x), from_none], self.notifications)
        result["resources"] = from_list(lambda x: from_union([from_none, to_float, from_int, from_bool, from_str, lambda x: from_list(lambda x: x, x), lambda x: to_class(ResourceResource, x)], x), self.resources)
        result["stateLevelHolidaysNotWorking"] = from_union([from_bool, from_none], self.state_level_holidays_not_working)
        result["taxonomies"] = from_list(lambda x: to_class(BusinessTaxonomy, x), self.taxonomies)
        result["taxonomiesComplex"] = from_union([lambda x: from_list(lambda x: to_class(FluffyTaxonomiesComplex, x), x), from_none], self.taxonomies_complex)
        result["taxonomy_tree_capacity"] = from_union([lambda x: from_list(lambda x: from_dict(lambda x: x, x), x), from_none], self.taxonomy_tree_capacity)
        result["top_services"] = from_union([lambda x: to_class(FluffyTopServices, x), from_none], self.top_services)
        result["vertical"] = from_union([from_str, from_none], self.vertical)
        result["widget_configuration"] = to_class(FluffyWidgetConfiguration, self.widget_configuration)
        result["yandexFeedType"] = from_union([from_str, from_none], self.yandex_feed_type)
        return result


class FluffyMetroStation:
    id: Optional[str]
    description: Optional[str]
    name: str

    def __init__(self, id: Optional[str], description: Optional[str], name: str) -> None:
        self.id = id
        self.description = description
        self.name = name

    @staticmethod
    def from_dict(obj: Any) -> 'FluffyMetroStation':
        assert isinstance(obj, dict)
        id = from_union([from_str, from_none], obj.get("_id"))
        description = from_union([from_str, from_none], obj.get("description"))
        name = from_str(obj.get("name"))
        return FluffyMetroStation(id, description, name)

    def to_dict(self) -> dict:
        result: dict = {}
        result["_id"] = from_union([from_str, from_none], self.id)
        result["description"] = from_union([from_str, from_none], self.description)
        result["name"] = from_str(self.name)
        return result


class AddressCamelCaseSchema:
    address: Optional[str]
    address_add: Optional[str]
    admin_area: Optional[str]
    admin_area_type: Optional[str]
    building: Optional[str]
    corps: Optional[str]
    country: Country
    group: Optional[str]
    house_add: Optional[str]
    kilometer: Optional[str]
    latitude: Optional[str]
    locality: Optional[str]
    locality_type: Optional[str]
    longitude: Optional[str]
    metro_stations: Optional[List[FluffyMetroStation]]
    number: Optional[str]
    office: Optional[str]
    possesion: Optional[str]
    street: Optional[str]
    street_type: Optional[str]
    sub_admin_area: Optional[str]
    sub_admin_area_type: Optional[str]
    sub_locality: Optional[str]
    sub_locality_type: Optional[str]
    way: Optional[str]
    zip_code: Optional[str]

    def __init__(self, address: Optional[str], address_add: Optional[str], admin_area: Optional[str], admin_area_type: Optional[str], building: Optional[str], corps: Optional[str], country: Country, group: Optional[str], house_add: Optional[str], kilometer: Optional[str], latitude: Optional[str], locality: Optional[str], locality_type: Optional[str], longitude: Optional[str], metro_stations: Optional[List[FluffyMetroStation]], number: Optional[str], office: Optional[str], possesion: Optional[str], street: Optional[str], street_type: Optional[str], sub_admin_area: Optional[str], sub_admin_area_type: Optional[str], sub_locality: Optional[str], sub_locality_type: Optional[str], way: Optional[str], zip_code: Optional[str]) -> None:
        self.address = address
        self.address_add = address_add
        self.admin_area = admin_area
        self.admin_area_type = admin_area_type
        self.building = building
        self.corps = corps
        self.country = country
        self.group = group
        self.house_add = house_add
        self.kilometer = kilometer
        self.latitude = latitude
        self.locality = locality
        self.locality_type = locality_type
        self.longitude = longitude
        self.metro_stations = metro_stations
        self.number = number
        self.office = office
        self.possesion = possesion
        self.street = street
        self.street_type = street_type
        self.sub_admin_area = sub_admin_area
        self.sub_admin_area_type = sub_admin_area_type
        self.sub_locality = sub_locality
        self.sub_locality_type = sub_locality_type
        self.way = way
        self.zip_code = zip_code

    @staticmethod
    def from_dict(obj: Any) -> 'AddressCamelCaseSchema':
        assert isinstance(obj, dict)
        address = from_union([from_str, from_none], obj.get("address"))
        address_add = from_union([from_str, from_none], obj.get("addressAdd"))
        admin_area = from_union([from_str, from_none], obj.get("adminArea"))
        admin_area_type = from_union([from_str, from_none], obj.get("adminAreaType"))
        building = from_union([from_str, from_none], obj.get("building"))
        corps = from_union([from_str, from_none], obj.get("corps"))
        country = Country(obj.get("country"))
        group = from_union([from_str, from_none], obj.get("group"))
        house_add = from_union([from_str, from_none], obj.get("houseAdd"))
        kilometer = from_union([from_str, from_none], obj.get("kilometer"))
        latitude = from_union([from_str, from_none], obj.get("latitude"))
        locality = from_union([from_str, from_none], obj.get("locality"))
        locality_type = from_union([from_str, from_none], obj.get("localityType"))
        longitude = from_union([from_str, from_none], obj.get("longitude"))
        metro_stations = from_union([lambda x: from_list(FluffyMetroStation.from_dict, x), from_none], obj.get("metroStations"))
        number = from_union([from_str, from_none], obj.get("number"))
        office = from_union([from_str, from_none], obj.get("office"))
        possesion = from_union([from_str, from_none], obj.get("possesion"))
        street = from_union([from_str, from_none], obj.get("street"))
        street_type = from_union([from_str, from_none], obj.get("streetType"))
        sub_admin_area = from_union([from_str, from_none], obj.get("subAdminArea"))
        sub_admin_area_type = from_union([from_str, from_none], obj.get("subAdminAreaType"))
        sub_locality = from_union([from_str, from_none], obj.get("subLocality"))
        sub_locality_type = from_union([from_str, from_none], obj.get("subLocalityType"))
        way = from_union([from_str, from_none], obj.get("way"))
        zip_code = from_union([from_str, from_none], obj.get("zipCode"))
        return AddressCamelCaseSchema(address, address_add, admin_area, admin_area_type, building, corps, country, group, house_add, kilometer, latitude, locality, locality_type, longitude, metro_stations, number, office, possesion, street, street_type, sub_admin_area, sub_admin_area_type, sub_locality, sub_locality_type, way, zip_code)

    def to_dict(self) -> dict:
        result: dict = {}
        result["address"] = from_union([from_str, from_none], self.address)
        result["addressAdd"] = from_union([from_str, from_none], self.address_add)
        result["adminArea"] = from_union([from_str, from_none], self.admin_area)
        result["adminAreaType"] = from_union([from_str, from_none], self.admin_area_type)
        result["building"] = from_union([from_str, from_none], self.building)
        result["corps"] = from_union([from_str, from_none], self.corps)
        result["country"] = to_enum(Country, self.country)
        result["group"] = from_union([from_str, from_none], self.group)
        result["houseAdd"] = from_union([from_str, from_none], self.house_add)
        result["kilometer"] = from_union([from_str, from_none], self.kilometer)
        result["latitude"] = from_union([from_str, from_none], self.latitude)
        result["locality"] = from_union([from_str, from_none], self.locality)
        result["localityType"] = from_union([from_str, from_none], self.locality_type)
        result["longitude"] = from_union([from_str, from_none], self.longitude)
        result["metroStations"] = from_union([lambda x: from_list(lambda x: to_class(FluffyMetroStation, x), x), from_none], self.metro_stations)
        result["number"] = from_union([from_str, from_none], self.number)
        result["office"] = from_union([from_str, from_none], self.office)
        result["possesion"] = from_union([from_str, from_none], self.possesion)
        result["street"] = from_union([from_str, from_none], self.street)
        result["streetType"] = from_union([from_str, from_none], self.street_type)
        result["subAdminArea"] = from_union([from_str, from_none], self.sub_admin_area)
        result["subAdminAreaType"] = from_union([from_str, from_none], self.sub_admin_area_type)
        result["subLocality"] = from_union([from_str, from_none], self.sub_locality)
        result["subLocalityType"] = from_union([from_str, from_none], self.sub_locality_type)
        result["way"] = from_union([from_str, from_none], self.way)
        result["zipCode"] = from_union([from_str, from_none], self.zip_code)
        return result


class NetworkElement:
    address: Union[List[Any], bool, AddressCamelCaseSchema, float, int, None, str]
    business_name: str
    description: str
    internal_id: str

    def __init__(self, address: Union[List[Any], bool, AddressCamelCaseSchema, float, int, None, str], business_name: str, description: str, internal_id: str) -> None:
        self.address = address
        self.business_name = business_name
        self.description = description
        self.internal_id = internal_id

    @staticmethod
    def from_dict(obj: Any) -> 'NetworkElement':
        assert isinstance(obj, dict)
        address = from_union([from_none, from_float, from_int, from_bool, from_str, lambda x: from_list(lambda x: x, x), AddressCamelCaseSchema.from_dict], obj.get("address"))
        business_name = from_str(obj.get("businessName"))
        description = from_str(obj.get("description"))
        internal_id = from_str(obj.get("internalID"))
        return NetworkElement(address, business_name, description, internal_id)

    def to_dict(self) -> dict:
        result: dict = {}
        result["address"] = from_union([from_none, to_float, from_int, from_bool, from_str, lambda x: from_list(lambda x: x, x), lambda x: to_class(AddressCamelCaseSchema, x)], self.address)
        result["businessName"] = from_str(self.business_name)
        result["description"] = from_str(self.description)
        result["internalID"] = from_str(self.internal_id)
        return result


class ResultTopServices:
    services: List[str]
    status: bool

    def __init__(self, services: List[str], status: bool) -> None:
        self.services = services
        self.status = status

    @staticmethod
    def from_dict(obj: Any) -> 'ResultTopServices':
        assert isinstance(obj, dict)
        services = from_list(from_str, obj.get("services"))
        status = from_bool(obj.get("status"))
        return ResultTopServices(services, status)

    def to_dict(self) -> dict:
        result: dict = {}
        result["services"] = from_list(from_str, self.services)
        result["status"] = from_bool(self.status)
        return result


class YandexFeedType(Enum):
    DYNAMIC = "dynamic"
    NO = "no"
    STATIC = "static"
    STATIC_SERVICE_ONLY = "static-service-only"


class BusinessGetProfileByIDResponseResult:
    """данные, передаваемые в ответ"""
    active: Optional[bool]
    business: Union[List[Any], bool, AmbitiousBusiness, float, int, None, str]
    free_sms: Optional[float]
    monthly_free_sms: Optional[float]
    networks: Optional[List[NetworkElement]]
    profiles: Optional[List[Dict[str, Any]]]
    top_services: Optional[ResultTopServices]
    use_default_sms_template: Optional[bool]
    yandex_feed_type: Optional[YandexFeedType]

    def __init__(self, active: Optional[bool], business: Union[List[Any], bool, AmbitiousBusiness, float, int, None, str], free_sms: Optional[float], monthly_free_sms: Optional[float], networks: Optional[List[NetworkElement]], profiles: Optional[List[Dict[str, Any]]], top_services: Optional[ResultTopServices], use_default_sms_template: Optional[bool], yandex_feed_type: Optional[YandexFeedType]) -> None:
        self.active = active
        self.business = business
        self.free_sms = free_sms
        self.monthly_free_sms = monthly_free_sms
        self.networks = networks
        self.profiles = profiles
        self.top_services = top_services
        self.use_default_sms_template = use_default_sms_template
        self.yandex_feed_type = yandex_feed_type

    @staticmethod
    def from_dict(obj: Any) -> 'BusinessGetProfileByIDResponseResult':
        assert isinstance(obj, dict)
        active = from_union([from_bool, from_none], obj.get("active"))
        business = from_union([from_none, from_float, from_int, from_bool, from_str, lambda x: from_list(lambda x: x, x), AmbitiousBusiness.from_dict], obj.get("business"))
        free_sms = from_union([from_float, from_none], obj.get("freeSms"))
        monthly_free_sms = from_union([from_float, from_none], obj.get("monthlyFreeSms"))
        networks = from_union([lambda x: from_list(NetworkElement.from_dict, x), from_none], obj.get("networks"))
        profiles = from_union([lambda x: from_list(lambda x: from_dict(lambda x: x, x), x), from_none], obj.get("profiles"))
        top_services = from_union([ResultTopServices.from_dict, from_none], obj.get("top_services"))
        use_default_sms_template = from_union([from_bool, from_none], obj.get("useDefaultSmsTemplate"))
        yandex_feed_type = from_union([YandexFeedType, from_none], obj.get("yandexFeedType"))
        return BusinessGetProfileByIDResponseResult(active, business, free_sms, monthly_free_sms, networks, profiles, top_services, use_default_sms_template, yandex_feed_type)

    def to_dict(self) -> dict:
        result: dict = {}
        result["active"] = from_union([from_bool, from_none], self.active)
        result["business"] = from_union([from_none, to_float, from_int, from_bool, from_str, lambda x: from_list(lambda x: x, x), lambda x: to_class(AmbitiousBusiness, x)], self.business)
        result["freeSms"] = from_union([to_float, from_none], self.free_sms)
        result["monthlyFreeSms"] = from_union([to_float, from_none], self.monthly_free_sms)
        result["networks"] = from_union([lambda x: from_list(lambda x: to_class(NetworkElement, x), x), from_none], self.networks)
        result["profiles"] = from_union([lambda x: from_list(lambda x: from_dict(lambda x: x, x), x), from_none], self.profiles)
        result["top_services"] = from_union([lambda x: to_class(ResultTopServices, x), from_none], self.top_services)
        result["useDefaultSmsTemplate"] = from_union([from_bool, from_none], self.use_default_sms_template)
        result["yandexFeedType"] = from_union([lambda x: to_enum(YandexFeedType, x), from_none], self.yandex_feed_type)
        return result


class BusinessGetProfileByIDResponse:
    """значение числового типа для идентификации запроса на сервере"""
    id: Optional[float]
    """версия протокола (2.0)"""
    jsonrpc: Optional[str]
    """данные, передаваемые в ответ"""
    result: Optional[BusinessGetProfileByIDResponseResult]
    """объект, содержащий информацию об ошибке"""
    error: Optional[BusinessGetProfileByIDResponseError]

    def __init__(self, id: Optional[float], jsonrpc: Optional[str], result: Optional[BusinessGetProfileByIDResponseResult], error: Optional[BusinessGetProfileByIDResponseError]) -> None:
        self.id = id
        self.jsonrpc = jsonrpc
        self.result = result
        self.error = error

    @staticmethod
    def from_dict(obj: Any) -> 'BusinessGetProfileByIDResponse':
        assert isinstance(obj, dict)
        id = from_union([from_float, from_none], obj.get("id"))
        jsonrpc = from_union([from_str, from_none], obj.get("jsonrpc"))
        result = from_union([BusinessGetProfileByIDResponseResult.from_dict, from_none], obj.get("result"))
        error = from_union([BusinessGetProfileByIDResponseError.from_dict, from_none], obj.get("error"))
        return BusinessGetProfileByIDResponse(id, jsonrpc, result, error)

    def to_dict(self) -> dict:
        result: dict = {}
        result["id"] = from_union([to_float, from_none], self.id)
        result["jsonrpc"] = from_union([from_str, from_none], self.jsonrpc)
        result["result"] = from_union([lambda x: to_class(BusinessGetProfileByIDResponseResult, x), from_none], self.result)
        result["error"] = from_union([lambda x: to_class(BusinessGetProfileByIDResponseError, x), from_none], self.error)
        return result


class GetProfileByID:
    request: BusinessGetProfileByIDRequest
    response: BusinessGetProfileByIDResponse

    def __init__(self, request: BusinessGetProfileByIDRequest, response: BusinessGetProfileByIDResponse) -> None:
        self.request = request
        self.response = response

    @staticmethod
    def from_dict(obj: Any) -> 'GetProfileByID':
        assert isinstance(obj, dict)
        request = BusinessGetProfileByIDRequest.from_dict(obj.get("request"))
        response = BusinessGetProfileByIDResponse.from_dict(obj.get("response"))
        return GetProfileByID(request, response)

    def to_dict(self) -> dict:
        result: dict = {}
        result["request"] = to_class(BusinessGetProfileByIDRequest, self.request)
        result["response"] = to_class(BusinessGetProfileByIDResponse, self.response)
        return result


class BusinessController:
    get_network_data: GetNetworkData
    get_profile_by_id: GetProfileByID

    def __init__(self, get_network_data: GetNetworkData, get_profile_by_id: GetProfileByID) -> None:
        self.get_network_data = get_network_data
        self.get_profile_by_id = get_profile_by_id

    @staticmethod
    def from_dict(obj: Any) -> 'BusinessController':
        assert isinstance(obj, dict)
        get_network_data = GetNetworkData.from_dict(obj.get("get_network_data"))
        get_profile_by_id = GetProfileByID.from_dict(obj.get("get_profile_by_id"))
        return BusinessController(get_network_data, get_profile_by_id)

    def to_dict(self) -> dict:
        result: dict = {}
        result["get_network_data"] = to_class(GetNetworkData, self.get_network_data)
        result["get_profile_by_id"] = to_class(GetProfileByID, self.get_profile_by_id)
        return result


class CunningBusiness:
    """идентификатор бизнеса"""
    id: Union[float, str]

    def __init__(self, id: Union[float, str]) -> None:
        self.id = id

    @staticmethod
    def from_dict(obj: Any) -> 'CunningBusiness':
        assert isinstance(obj, dict)
        id = from_union([from_float, from_str], obj.get("id"))
        return CunningBusiness(id)

    def to_dict(self) -> dict:
        result: dict = {}
        result["id"] = from_union([to_float, from_str], self.id)
        return result


class ClientClass:
    """Данные клиента"""
    birthday: Union[Dict[str, Any], None, str]
    creator_profile_id: Optional[str]
    creator_profile_name: Optional[str]
    driver_license: Optional[str]
    email: Optional[List[str]]
    from_sms: Union[bool, None, str]
    middle_name: Optional[str]
    name: str
    phone: Union[List[Any], bool, PhoneClass, float, int, None, str]
    sex: Optional[Sex]
    surname: str
    taxi_park: Optional[str]
    taxi_park_member_count: Union[float, None, str]

    def __init__(self, birthday: Union[Dict[str, Any], None, str], creator_profile_id: Optional[str], creator_profile_name: Optional[str], driver_license: Optional[str], email: Optional[List[str]], from_sms: Union[bool, None, str], middle_name: Optional[str], name: str, phone: Union[List[Any], bool, PhoneClass, float, int, None, str], sex: Optional[Sex], surname: str, taxi_park: Optional[str], taxi_park_member_count: Union[float, None, str]) -> None:
        self.birthday = birthday
        self.creator_profile_id = creator_profile_id
        self.creator_profile_name = creator_profile_name
        self.driver_license = driver_license
        self.email = email
        self.from_sms = from_sms
        self.middle_name = middle_name
        self.name = name
        self.phone = phone
        self.sex = sex
        self.surname = surname
        self.taxi_park = taxi_park
        self.taxi_park_member_count = taxi_park_member_count

    @staticmethod
    def from_dict(obj: Any) -> 'ClientClass':
        assert isinstance(obj, dict)
        birthday = from_union([from_str, lambda x: from_dict(lambda x: x, x), from_none], obj.get("birthday"))
        creator_profile_id = from_union([from_none, from_str], obj.get("creatorProfileID"))
        creator_profile_name = from_union([from_none, from_str], obj.get("creatorProfileName"))
        driver_license = from_union([from_none, from_str], obj.get("driverLicense"))
        email = from_union([lambda x: from_list(from_str, x), from_none], obj.get("email"))
        from_sms = from_union([from_bool, from_str, from_none], obj.get("fromSms"))
        middle_name = from_union([from_str, from_none], obj.get("middle_name"))
        name = from_str(obj.get("name"))
        phone = from_union([from_none, from_float, from_int, from_bool, from_str, lambda x: from_list(lambda x: x, x), PhoneClass.from_dict], obj.get("phone"))
        sex = from_union([Sex, from_none], obj.get("sex"))
        surname = from_str(obj.get("surname"))
        taxi_park = from_union([from_none, from_str], obj.get("taxiPark"))
        taxi_park_member_count = from_union([from_float, from_str, from_none], obj.get("taxiParkMemberCount"))
        return ClientClass(birthday, creator_profile_id, creator_profile_name, driver_license, email, from_sms, middle_name, name, phone, sex, surname, taxi_park, taxi_park_member_count)

    def to_dict(self) -> dict:
        result: dict = {}
        result["birthday"] = from_union([from_str, lambda x: from_dict(lambda x: x, x), from_none], self.birthday)
        result["creatorProfileID"] = from_union([from_none, from_str], self.creator_profile_id)
        result["creatorProfileName"] = from_union([from_none, from_str], self.creator_profile_name)
        result["driverLicense"] = from_union([from_none, from_str], self.driver_license)
        result["email"] = from_union([lambda x: from_list(from_str, x), from_none], self.email)
        result["fromSms"] = from_union([from_bool, from_str, from_none], self.from_sms)
        result["middle_name"] = from_union([from_str, from_none], self.middle_name)
        result["name"] = from_str(self.name)
        result["phone"] = from_union([from_none, to_float, from_int, from_bool, from_str, lambda x: from_list(lambda x: x, x), lambda x: to_class(PhoneClass, x)], self.phone)
        result["sex"] = from_union([lambda x: to_enum(Sex, x), from_none], self.sex)
        result["surname"] = from_str(self.surname)
        result["taxiPark"] = from_union([from_none, from_str], self.taxi_park)
        result["taxiParkMemberCount"] = from_union([to_float, from_str, from_none], self.taxi_park_member_count)
        return result


class PurpleProfile:
    """идентификатор профиля пользователя"""
    id: str

    def __init__(self, id: str) -> None:
        self.id = id

    @staticmethod
    def from_dict(obj: Any) -> 'PurpleProfile':
        assert isinstance(obj, dict)
        id = from_str(obj.get("id"))
        return PurpleProfile(id)

    def to_dict(self) -> dict:
        result: dict = {}
        result["id"] = from_str(self.id)
        return result


class ClientAddClientRequestParams:
    """параметры запроса"""
    business: CunningBusiness
    client: ClientClass
    profile: Optional[PurpleProfile]
    skip_email_check: Optional[bool]
    skip_profile_update: Optional[bool]

    def __init__(self, business: CunningBusiness, client: ClientClass, profile: Optional[PurpleProfile], skip_email_check: Optional[bool], skip_profile_update: Optional[bool]) -> None:
        self.business = business
        self.client = client
        self.profile = profile
        self.skip_email_check = skip_email_check
        self.skip_profile_update = skip_profile_update

    @staticmethod
    def from_dict(obj: Any) -> 'ClientAddClientRequestParams':
        assert isinstance(obj, dict)
        business = CunningBusiness.from_dict(obj.get("business"))
        client = ClientClass.from_dict(obj.get("client"))
        profile = from_union([PurpleProfile.from_dict, from_none], obj.get("profile"))
        skip_email_check = from_union([from_bool, from_none], obj.get("skipEmailCheck"))
        skip_profile_update = from_union([from_bool, from_none], obj.get("skipProfileUpdate"))
        return ClientAddClientRequestParams(business, client, profile, skip_email_check, skip_profile_update)

    def to_dict(self) -> dict:
        result: dict = {}
        result["business"] = to_class(CunningBusiness, self.business)
        result["client"] = to_class(ClientClass, self.client)
        result["profile"] = from_union([lambda x: to_class(PurpleProfile, x), from_none], self.profile)
        result["skipEmailCheck"] = from_union([from_bool, from_none], self.skip_email_check)
        result["skipProfileUpdate"] = from_union([from_bool, from_none], self.skip_profile_update)
        return result


class ClientAddClientRequest:
    """авторизационные параметры"""
    cred: Optional[Cred]
    """значение числового типа для идентификации запроса на сервере"""
    id: Union[float, str]
    """версия протокола - 2.0"""
    jsonrpc: str
    """название jsonrpc метода"""
    method: str
    """параметры запроса"""
    params: ClientAddClientRequestParams

    def __init__(self, cred: Optional[Cred], id: Union[float, str], jsonrpc: str, method: str, params: ClientAddClientRequestParams) -> None:
        self.cred = cred
        self.id = id
        self.jsonrpc = jsonrpc
        self.method = method
        self.params = params

    @staticmethod
    def from_dict(obj: Any) -> 'ClientAddClientRequest':
        assert isinstance(obj, dict)
        cred = from_union([Cred.from_dict, from_none], obj.get("cred"))
        id = from_union([from_float, from_str], obj.get("id"))
        jsonrpc = from_str(obj.get("jsonrpc"))
        method = from_str(obj.get("method"))
        params = ClientAddClientRequestParams.from_dict(obj.get("params"))
        return ClientAddClientRequest(cred, id, jsonrpc, method, params)

    def to_dict(self) -> dict:
        result: dict = {}
        result["cred"] = from_union([lambda x: to_class(Cred, x), from_none], self.cred)
        result["id"] = from_union([to_float, from_str], self.id)
        result["jsonrpc"] = from_str(self.jsonrpc)
        result["method"] = from_str(self.method)
        result["params"] = to_class(ClientAddClientRequestParams, self.params)
        return result


class ClientAddClientResponseError:
    """объект, содержащий информацию об ошибке
    
    Код ошибки авторизации
    """
    """код ошибки
    
    код ошибки создания клиента
    """
    code: float
    """дополнительные данные об ошибке"""
    data: Optional[str]
    """текстовая информация об ошибке"""
    message: str

    def __init__(self, code: float, data: Optional[str], message: str) -> None:
        self.code = code
        self.data = data
        self.message = message

    @staticmethod
    def from_dict(obj: Any) -> 'ClientAddClientResponseError':
        assert isinstance(obj, dict)
        code = from_float(obj.get("code"))
        data = from_union([from_str, from_none], obj.get("data"))
        message = from_str(obj.get("message"))
        return ClientAddClientResponseError(code, data, message)

    def to_dict(self) -> dict:
        result: dict = {}
        result["code"] = to_float(self.code)
        result["data"] = from_union([from_str, from_none], self.data)
        result["message"] = from_str(self.message)
        return result


class MagentaBusiness:
    id: str

    def __init__(self, id: str) -> None:
        self.id = id

    @staticmethod
    def from_dict(obj: Any) -> 'MagentaBusiness':
        assert isinstance(obj, dict)
        id = from_str(obj.get("id"))
        return MagentaBusiness(id)

    def to_dict(self) -> dict:
        result: dict = {}
        result["id"] = from_str(self.id)
        return result


class FluffyProfile:
    id: str

    def __init__(self, id: str) -> None:
        self.id = id

    @staticmethod
    def from_dict(obj: Any) -> 'FluffyProfile':
        assert isinstance(obj, dict)
        id = from_str(obj.get("id"))
        return FluffyProfile(id)

    def to_dict(self) -> dict:
        result: dict = {}
        result["id"] = from_str(self.id)
        return result


class ClientAddClientResponseResult:
    business: Optional[MagentaBusiness]
    client: ClientClass
    documents: Optional[List[Any]]
    profile: Optional[FluffyProfile]

    def __init__(self, business: Optional[MagentaBusiness], client: ClientClass, documents: Optional[List[Any]], profile: Optional[FluffyProfile]) -> None:
        self.business = business
        self.client = client
        self.documents = documents
        self.profile = profile

    @staticmethod
    def from_dict(obj: Any) -> 'ClientAddClientResponseResult':
        assert isinstance(obj, dict)
        business = from_union([MagentaBusiness.from_dict, from_none], obj.get("business"))
        client = ClientClass.from_dict(obj.get("client"))
        documents = from_union([lambda x: from_list(lambda x: x, x), from_none], obj.get("documents"))
        profile = from_union([FluffyProfile.from_dict, from_none], obj.get("profile"))
        return ClientAddClientResponseResult(business, client, documents, profile)

    def to_dict(self) -> dict:
        result: dict = {}
        result["business"] = from_union([lambda x: to_class(MagentaBusiness, x), from_none], self.business)
        result["client"] = to_class(ClientClass, self.client)
        result["documents"] = from_union([lambda x: from_list(lambda x: x, x), from_none], self.documents)
        result["profile"] = from_union([lambda x: to_class(FluffyProfile, x), from_none], self.profile)
        return result


class ClientAddClientResponse:
    result: Optional[ClientAddClientResponseResult]
    """объект, содержащий информацию об ошибке"""
    error: Optional[ClientAddClientResponseError]
    """значение числового типа для идентификации запроса на сервере"""
    id: Optional[float]
    """версия протокола (2.0)"""
    jsonrpc: Optional[str]

    def __init__(self, result: Optional[ClientAddClientResponseResult], error: Optional[ClientAddClientResponseError], id: Optional[float], jsonrpc: Optional[str]) -> None:
        self.result = result
        self.error = error
        self.id = id
        self.jsonrpc = jsonrpc

    @staticmethod
    def from_dict(obj: Any) -> 'ClientAddClientResponse':
        assert isinstance(obj, dict)
        result = from_union([ClientAddClientResponseResult.from_dict, from_none], obj.get("result"))
        error = from_union([ClientAddClientResponseError.from_dict, from_none], obj.get("error"))
        id = from_union([from_float, from_none], obj.get("id"))
        jsonrpc = from_union([from_str, from_none], obj.get("jsonrpc"))
        return ClientAddClientResponse(result, error, id, jsonrpc)

    def to_dict(self) -> dict:
        result: dict = {}
        result["result"] = from_union([lambda x: to_class(ClientAddClientResponseResult, x), from_none], self.result)
        result["error"] = from_union([lambda x: to_class(ClientAddClientResponseError, x), from_none], self.error)
        result["id"] = from_union([to_float, from_none], self.id)
        result["jsonrpc"] = from_union([from_str, from_none], self.jsonrpc)
        return result


class AddClient:
    request: ClientAddClientRequest
    response: ClientAddClientResponse

    def __init__(self, request: ClientAddClientRequest, response: ClientAddClientResponse) -> None:
        self.request = request
        self.response = response

    @staticmethod
    def from_dict(obj: Any) -> 'AddClient':
        assert isinstance(obj, dict)
        request = ClientAddClientRequest.from_dict(obj.get("request"))
        response = ClientAddClientResponse.from_dict(obj.get("response"))
        return AddClient(request, response)

    def to_dict(self) -> dict:
        result: dict = {}
        result["request"] = to_class(ClientAddClientRequest, self.request)
        result["response"] = to_class(ClientAddClientResponse, self.response)
        return result


class FriskyBusiness:
    """идентификатор бизнеса"""
    id: Union[float, str]

    def __init__(self, id: Union[float, str]) -> None:
        self.id = id

    @staticmethod
    def from_dict(obj: Any) -> 'FriskyBusiness':
        assert isinstance(obj, dict)
        id = from_union([from_float, from_str], obj.get("id"))
        return FriskyBusiness(id)

    def to_dict(self) -> dict:
        result: dict = {}
        result["id"] = from_union([to_float, from_str], self.id)
        return result


class TentacledProfile:
    """идентификатор профиля пользователя"""
    id: str

    def __init__(self, id: str) -> None:
        self.id = id

    @staticmethod
    def from_dict(obj: Any) -> 'TentacledProfile':
        assert isinstance(obj, dict)
        id = from_str(obj.get("id"))
        return TentacledProfile(id)

    def to_dict(self) -> dict:
        result: dict = {}
        result["id"] = from_str(self.id)
        return result


class ClientFindOrCreateClientRequestParams:
    """параметры запроса"""
    business: FriskyBusiness
    client: ClientClass
    profile: Optional[TentacledProfile]
    skip_email_check: Optional[bool]
    skip_profile_update: Optional[bool]

    def __init__(self, business: FriskyBusiness, client: ClientClass, profile: Optional[TentacledProfile], skip_email_check: Optional[bool], skip_profile_update: Optional[bool]) -> None:
        self.business = business
        self.client = client
        self.profile = profile
        self.skip_email_check = skip_email_check
        self.skip_profile_update = skip_profile_update

    @staticmethod
    def from_dict(obj: Any) -> 'ClientFindOrCreateClientRequestParams':
        assert isinstance(obj, dict)
        business = FriskyBusiness.from_dict(obj.get("business"))
        client = ClientClass.from_dict(obj.get("client"))
        profile = from_union([TentacledProfile.from_dict, from_none], obj.get("profile"))
        skip_email_check = from_union([from_bool, from_none], obj.get("skipEmailCheck"))
        skip_profile_update = from_union([from_bool, from_none], obj.get("skipProfileUpdate"))
        return ClientFindOrCreateClientRequestParams(business, client, profile, skip_email_check, skip_profile_update)

    def to_dict(self) -> dict:
        result: dict = {}
        result["business"] = to_class(FriskyBusiness, self.business)
        result["client"] = to_class(ClientClass, self.client)
        result["profile"] = from_union([lambda x: to_class(TentacledProfile, x), from_none], self.profile)
        result["skipEmailCheck"] = from_union([from_bool, from_none], self.skip_email_check)
        result["skipProfileUpdate"] = from_union([from_bool, from_none], self.skip_profile_update)
        return result


class ClientFindOrCreateClientRequest:
    """авторизационные параметры"""
    cred: Optional[Cred]
    """значение числового типа для идентификации запроса на сервере"""
    id: Union[float, str]
    """версия протокола - 2.0"""
    jsonrpc: str
    """название jsonrpc метода"""
    method: str
    """параметры запроса"""
    params: ClientFindOrCreateClientRequestParams

    def __init__(self, cred: Optional[Cred], id: Union[float, str], jsonrpc: str, method: str, params: ClientFindOrCreateClientRequestParams) -> None:
        self.cred = cred
        self.id = id
        self.jsonrpc = jsonrpc
        self.method = method
        self.params = params

    @staticmethod
    def from_dict(obj: Any) -> 'ClientFindOrCreateClientRequest':
        assert isinstance(obj, dict)
        cred = from_union([Cred.from_dict, from_none], obj.get("cred"))
        id = from_union([from_float, from_str], obj.get("id"))
        jsonrpc = from_str(obj.get("jsonrpc"))
        method = from_str(obj.get("method"))
        params = ClientFindOrCreateClientRequestParams.from_dict(obj.get("params"))
        return ClientFindOrCreateClientRequest(cred, id, jsonrpc, method, params)

    def to_dict(self) -> dict:
        result: dict = {}
        result["cred"] = from_union([lambda x: to_class(Cred, x), from_none], self.cred)
        result["id"] = from_union([to_float, from_str], self.id)
        result["jsonrpc"] = from_str(self.jsonrpc)
        result["method"] = from_str(self.method)
        result["params"] = to_class(ClientFindOrCreateClientRequestParams, self.params)
        return result


class ClientFindOfCreateClientResponseError:
    """объект, содержащий информацию об ошибке
    
    Код ошибки авторизации
    """
    """код ошибки
    
    код ошибки создания клиента
    """
    code: float
    """дополнительные данные об ошибке"""
    data: Optional[str]
    """текстовая информация об ошибке"""
    message: str

    def __init__(self, code: float, data: Optional[str], message: str) -> None:
        self.code = code
        self.data = data
        self.message = message

    @staticmethod
    def from_dict(obj: Any) -> 'ClientFindOfCreateClientResponseError':
        assert isinstance(obj, dict)
        code = from_float(obj.get("code"))
        data = from_union([from_str, from_none], obj.get("data"))
        message = from_str(obj.get("message"))
        return ClientFindOfCreateClientResponseError(code, data, message)

    def to_dict(self) -> dict:
        result: dict = {}
        result["code"] = to_float(self.code)
        result["data"] = from_union([from_str, from_none], self.data)
        result["message"] = from_str(self.message)
        return result


class MischievousBusiness:
    id: str

    def __init__(self, id: str) -> None:
        self.id = id

    @staticmethod
    def from_dict(obj: Any) -> 'MischievousBusiness':
        assert isinstance(obj, dict)
        id = from_str(obj.get("id"))
        return MischievousBusiness(id)

    def to_dict(self) -> dict:
        result: dict = {}
        result["id"] = from_str(self.id)
        return result


class StickyProfile:
    id: str

    def __init__(self, id: str) -> None:
        self.id = id

    @staticmethod
    def from_dict(obj: Any) -> 'StickyProfile':
        assert isinstance(obj, dict)
        id = from_str(obj.get("id"))
        return StickyProfile(id)

    def to_dict(self) -> dict:
        result: dict = {}
        result["id"] = from_str(self.id)
        return result


class ClientFindOfCreateClientResponseResult:
    business: Optional[MischievousBusiness]
    client: ClientClass
    documents: Optional[List[Any]]
    profile: Optional[StickyProfile]

    def __init__(self, business: Optional[MischievousBusiness], client: ClientClass, documents: Optional[List[Any]], profile: Optional[StickyProfile]) -> None:
        self.business = business
        self.client = client
        self.documents = documents
        self.profile = profile

    @staticmethod
    def from_dict(obj: Any) -> 'ClientFindOfCreateClientResponseResult':
        assert isinstance(obj, dict)
        business = from_union([MischievousBusiness.from_dict, from_none], obj.get("business"))
        client = ClientClass.from_dict(obj.get("client"))
        documents = from_union([lambda x: from_list(lambda x: x, x), from_none], obj.get("documents"))
        profile = from_union([StickyProfile.from_dict, from_none], obj.get("profile"))
        return ClientFindOfCreateClientResponseResult(business, client, documents, profile)

    def to_dict(self) -> dict:
        result: dict = {}
        result["business"] = from_union([lambda x: to_class(MischievousBusiness, x), from_none], self.business)
        result["client"] = to_class(ClientClass, self.client)
        result["documents"] = from_union([lambda x: from_list(lambda x: x, x), from_none], self.documents)
        result["profile"] = from_union([lambda x: to_class(StickyProfile, x), from_none], self.profile)
        return result


class ClientFindOfCreateClientResponse:
    result: Optional[ClientFindOfCreateClientResponseResult]
    """объект, содержащий информацию об ошибке"""
    error: Optional[ClientFindOfCreateClientResponseError]
    """значение числового типа для идентификации запроса на сервере"""
    id: Optional[float]
    """версия протокола (2.0)"""
    jsonrpc: Optional[str]

    def __init__(self, result: Optional[ClientFindOfCreateClientResponseResult], error: Optional[ClientFindOfCreateClientResponseError], id: Optional[float], jsonrpc: Optional[str]) -> None:
        self.result = result
        self.error = error
        self.id = id
        self.jsonrpc = jsonrpc

    @staticmethod
    def from_dict(obj: Any) -> 'ClientFindOfCreateClientResponse':
        assert isinstance(obj, dict)
        result = from_union([ClientFindOfCreateClientResponseResult.from_dict, from_none], obj.get("result"))
        error = from_union([ClientFindOfCreateClientResponseError.from_dict, from_none], obj.get("error"))
        id = from_union([from_float, from_none], obj.get("id"))
        jsonrpc = from_union([from_str, from_none], obj.get("jsonrpc"))
        return ClientFindOfCreateClientResponse(result, error, id, jsonrpc)

    def to_dict(self) -> dict:
        result: dict = {}
        result["result"] = from_union([lambda x: to_class(ClientFindOfCreateClientResponseResult, x), from_none], self.result)
        result["error"] = from_union([lambda x: to_class(ClientFindOfCreateClientResponseError, x), from_none], self.error)
        result["id"] = from_union([to_float, from_none], self.id)
        result["jsonrpc"] = from_union([from_str, from_none], self.jsonrpc)
        return result


class FindOrCreateClient:
    request: ClientFindOrCreateClientRequest
    response: ClientFindOfCreateClientResponse

    def __init__(self, request: ClientFindOrCreateClientRequest, response: ClientFindOfCreateClientResponse) -> None:
        self.request = request
        self.response = response

    @staticmethod
    def from_dict(obj: Any) -> 'FindOrCreateClient':
        assert isinstance(obj, dict)
        request = ClientFindOrCreateClientRequest.from_dict(obj.get("request"))
        response = ClientFindOfCreateClientResponse.from_dict(obj.get("response"))
        return FindOrCreateClient(request, response)

    def to_dict(self) -> dict:
        result: dict = {}
        result["request"] = to_class(ClientFindOrCreateClientRequest, self.request)
        result["response"] = to_class(ClientFindOfCreateClientResponse, self.response)
        return result


class ClientController:
    add_client: AddClient
    find_or_create_client: Optional[FindOrCreateClient]

    def __init__(self, add_client: AddClient, find_or_create_client: Optional[FindOrCreateClient]) -> None:
        self.add_client = add_client
        self.find_or_create_client = find_or_create_client

    @staticmethod
    def from_dict(obj: Any) -> 'ClientController':
        assert isinstance(obj, dict)
        add_client = AddClient.from_dict(obj.get("add_client"))
        find_or_create_client = from_union([FindOrCreateClient.from_dict, from_none], obj.get("find_or_create_client"))
        return ClientController(add_client, find_or_create_client)

    def to_dict(self) -> dict:
        result: dict = {}
        result["add_client"] = to_class(AddClient, self.add_client)
        result["find_or_create_client"] = from_union([lambda x: to_class(FindOrCreateClient, x), from_none], self.find_or_create_client)
        return result


class BraggadociousBusiness:
    id: str

    def __init__(self, id: str) -> None:
        self.id = id

    @staticmethod
    def from_dict(obj: Any) -> 'BraggadociousBusiness':
        assert isinstance(obj, dict)
        id = from_str(obj.get("id"))
        return BraggadociousBusiness(id)

    def to_dict(self) -> dict:
        result: dict = {}
        result["id"] = from_str(self.id)
        return result


class PurpleTaxonomy:
    id: str

    def __init__(self, id: str) -> None:
        self.id = id

    @staticmethod
    def from_dict(obj: Any) -> 'PurpleTaxonomy':
        assert isinstance(obj, dict)
        id = from_str(obj.get("id"))
        return PurpleTaxonomy(id)

    def to_dict(self) -> dict:
        result: dict = {}
        result["id"] = from_str(self.id)
        return result


class CracCRACDistributedResourcesFreeByDateRequestParam:
    business: BraggadociousBusiness
    resources: List[str]
    taxonomy: PurpleTaxonomy

    def __init__(self, business: BraggadociousBusiness, resources: List[str], taxonomy: PurpleTaxonomy) -> None:
        self.business = business
        self.resources = resources
        self.taxonomy = taxonomy

    @staticmethod
    def from_dict(obj: Any) -> 'CracCRACDistributedResourcesFreeByDateRequestParam':
        assert isinstance(obj, dict)
        business = BraggadociousBusiness.from_dict(obj.get("business"))
        resources = from_list(from_str, obj.get("resources"))
        taxonomy = PurpleTaxonomy.from_dict(obj.get("taxonomy"))
        return CracCRACDistributedResourcesFreeByDateRequestParam(business, resources, taxonomy)

    def to_dict(self) -> dict:
        result: dict = {}
        result["business"] = to_class(BraggadociousBusiness, self.business)
        result["resources"] = from_list(from_str, self.resources)
        result["taxonomy"] = to_class(PurpleTaxonomy, self.taxonomy)
        return result


class CracCRACDistributedResourcesFreeByDateRequest:
    """авторизационные параметры"""
    cred: Optional[Cred]
    """значение числового типа для идентификации запроса на сервере"""
    id: Union[float, str]
    """версия протокола - 2.0"""
    jsonrpc: str
    """название jsonrpc метода"""
    method: str
    """параметры запроса"""
    params: List[CracCRACDistributedResourcesFreeByDateRequestParam]

    def __init__(self, cred: Optional[Cred], id: Union[float, str], jsonrpc: str, method: str, params: List[CracCRACDistributedResourcesFreeByDateRequestParam]) -> None:
        self.cred = cred
        self.id = id
        self.jsonrpc = jsonrpc
        self.method = method
        self.params = params

    @staticmethod
    def from_dict(obj: Any) -> 'CracCRACDistributedResourcesFreeByDateRequest':
        assert isinstance(obj, dict)
        cred = from_union([Cred.from_dict, from_none], obj.get("cred"))
        id = from_union([from_float, from_str], obj.get("id"))
        jsonrpc = from_str(obj.get("jsonrpc"))
        method = from_str(obj.get("method"))
        params = from_list(CracCRACDistributedResourcesFreeByDateRequestParam.from_dict, obj.get("params"))
        return CracCRACDistributedResourcesFreeByDateRequest(cred, id, jsonrpc, method, params)

    def to_dict(self) -> dict:
        result: dict = {}
        result["cred"] = from_union([lambda x: to_class(Cred, x), from_none], self.cred)
        result["id"] = from_union([to_float, from_str], self.id)
        result["jsonrpc"] = from_str(self.jsonrpc)
        result["method"] = from_str(self.method)
        result["params"] = from_list(lambda x: to_class(CracCRACDistributedResourcesFreeByDateRequestParam, x), self.params)
        return result


class CracCRACDistributedResourcesFreeByDateResponseError:
    """объект, содержащий информацию об ошибке
    
    Код ошибки авторизации
    """
    """код ошибки"""
    code: Optional[float]
    """дополнительные данные об ошибке"""
    data: Optional[str]
    """текстовая информация об ошибке"""
    message: Optional[str]

    def __init__(self, code: Optional[float], data: Optional[str], message: Optional[str]) -> None:
        self.code = code
        self.data = data
        self.message = message

    @staticmethod
    def from_dict(obj: Any) -> 'CracCRACDistributedResourcesFreeByDateResponseError':
        assert isinstance(obj, dict)
        code = from_union([from_float, from_none], obj.get("code"))
        data = from_union([from_str, from_none], obj.get("data"))
        message = from_union([from_str, from_none], obj.get("message"))
        return CracCRACDistributedResourcesFreeByDateResponseError(code, data, message)

    def to_dict(self) -> dict:
        result: dict = {}
        result["code"] = from_union([to_float, from_none], self.code)
        result["data"] = from_union([from_str, from_none], self.data)
        result["message"] = from_union([from_str, from_none], self.message)
        return result


class PurpleFree:
    date: datetime
    max_free_minutes: float
    resource: str
    taxonomy: str

    def __init__(self, date: datetime, max_free_minutes: float, resource: str, taxonomy: str) -> None:
        self.date = date
        self.max_free_minutes = max_free_minutes
        self.resource = resource
        self.taxonomy = taxonomy

    @staticmethod
    def from_dict(obj: Any) -> 'PurpleFree':
        assert isinstance(obj, dict)
        date = from_datetime(obj.get("date"))
        max_free_minutes = from_float(obj.get("maxFreeMinutes"))
        resource = from_str(obj.get("resource"))
        taxonomy = from_str(obj.get("taxonomy"))
        return PurpleFree(date, max_free_minutes, resource, taxonomy)

    def to_dict(self) -> dict:
        result: dict = {}
        result["date"] = self.date.isoformat()
        result["maxFreeMinutes"] = to_float(self.max_free_minutes)
        result["resource"] = from_str(self.resource)
        result["taxonomy"] = from_str(self.taxonomy)
        return result


class CracCRACDistributedResourcesFreeByDateResponseResult:
    free: List[PurpleFree]

    def __init__(self, free: List[PurpleFree]) -> None:
        self.free = free

    @staticmethod
    def from_dict(obj: Any) -> 'CracCRACDistributedResourcesFreeByDateResponseResult':
        assert isinstance(obj, dict)
        free = from_list(PurpleFree.from_dict, obj.get("Free"))
        return CracCRACDistributedResourcesFreeByDateResponseResult(free)

    def to_dict(self) -> dict:
        result: dict = {}
        result["Free"] = from_list(lambda x: to_class(PurpleFree, x), self.free)
        return result


class CracCRACDistributedResourcesFreeByDateResponse:
    """объект, содержащий информацию об ошибке"""
    error: Optional[CracCRACDistributedResourcesFreeByDateResponseError]
    """значение числового типа для идентификации запроса на сервере"""
    id: float
    result: Optional[CracCRACDistributedResourcesFreeByDateResponseResult]
    """версия протокола (2.0)"""
    jsonrpc: Optional[str]

    def __init__(self, error: Optional[CracCRACDistributedResourcesFreeByDateResponseError], id: float, result: Optional[CracCRACDistributedResourcesFreeByDateResponseResult], jsonrpc: Optional[str]) -> None:
        self.error = error
        self.id = id
        self.result = result
        self.jsonrpc = jsonrpc

    @staticmethod
    def from_dict(obj: Any) -> 'CracCRACDistributedResourcesFreeByDateResponse':
        assert isinstance(obj, dict)
        error = from_union([from_none, CracCRACDistributedResourcesFreeByDateResponseError.from_dict], obj.get("error"))
        id = from_float(obj.get("id"))
        result = from_union([CracCRACDistributedResourcesFreeByDateResponseResult.from_dict, from_none], obj.get("result"))
        jsonrpc = from_union([from_str, from_none], obj.get("jsonrpc"))
        return CracCRACDistributedResourcesFreeByDateResponse(error, id, result, jsonrpc)

    def to_dict(self) -> dict:
        result: dict = {}
        result["error"] = from_union([from_none, lambda x: to_class(CracCRACDistributedResourcesFreeByDateResponseError, x)], self.error)
        result["id"] = to_float(self.id)
        result["result"] = from_union([lambda x: to_class(CracCRACDistributedResourcesFreeByDateResponseResult, x), from_none], self.result)
        result["jsonrpc"] = from_union([from_str, from_none], self.jsonrpc)
        return result


class CRACDistributedResourcesFreeByDate:
    request: CracCRACDistributedResourcesFreeByDateRequest
    response: CracCRACDistributedResourcesFreeByDateResponse

    def __init__(self, request: CracCRACDistributedResourcesFreeByDateRequest, response: CracCRACDistributedResourcesFreeByDateResponse) -> None:
        self.request = request
        self.response = response

    @staticmethod
    def from_dict(obj: Any) -> 'CRACDistributedResourcesFreeByDate':
        assert isinstance(obj, dict)
        request = CracCRACDistributedResourcesFreeByDateRequest.from_dict(obj.get("request"))
        response = CracCRACDistributedResourcesFreeByDateResponse.from_dict(obj.get("response"))
        return CRACDistributedResourcesFreeByDate(request, response)

    def to_dict(self) -> dict:
        result: dict = {}
        result["request"] = to_class(CracCRACDistributedResourcesFreeByDateRequest, self.request)
        result["response"] = to_class(CracCRACDistributedResourcesFreeByDateResponse, self.response)
        return result


class FluffyTaxonomy:
    id: str

    def __init__(self, id: str) -> None:
        self.id = id

    @staticmethod
    def from_dict(obj: Any) -> 'FluffyTaxonomy':
        assert isinstance(obj, dict)
        id = from_str(obj.get("id"))
        return FluffyTaxonomy(id)

    def to_dict(self) -> dict:
        result: dict = {}
        result["id"] = from_str(self.id)
        return result


class CracCRACResourcesFreeByDateRequestParam:
    duration: float
    resources: List[str]
    taxonomy: FluffyTaxonomy

    def __init__(self, duration: float, resources: List[str], taxonomy: FluffyTaxonomy) -> None:
        self.duration = duration
        self.resources = resources
        self.taxonomy = taxonomy

    @staticmethod
    def from_dict(obj: Any) -> 'CracCRACResourcesFreeByDateRequestParam':
        assert isinstance(obj, dict)
        duration = from_float(obj.get("duration"))
        resources = from_list(from_str, obj.get("resources"))
        taxonomy = FluffyTaxonomy.from_dict(obj.get("taxonomy"))
        return CracCRACResourcesFreeByDateRequestParam(duration, resources, taxonomy)

    def to_dict(self) -> dict:
        result: dict = {}
        result["duration"] = to_float(self.duration)
        result["resources"] = from_list(from_str, self.resources)
        result["taxonomy"] = to_class(FluffyTaxonomy, self.taxonomy)
        return result


class CracCRACResourcesFreeByDateRequest:
    """авторизационные параметры"""
    cred: Optional[Cred]
    """значение числового типа для идентификации запроса на сервере"""
    id: Union[float, str]
    """версия протокола - 2.0"""
    jsonrpc: str
    """название jsonrpc метода"""
    method: str
    """параметры запроса"""
    params: List[CracCRACResourcesFreeByDateRequestParam]

    def __init__(self, cred: Optional[Cred], id: Union[float, str], jsonrpc: str, method: str, params: List[CracCRACResourcesFreeByDateRequestParam]) -> None:
        self.cred = cred
        self.id = id
        self.jsonrpc = jsonrpc
        self.method = method
        self.params = params

    @staticmethod
    def from_dict(obj: Any) -> 'CracCRACResourcesFreeByDateRequest':
        assert isinstance(obj, dict)
        cred = from_union([Cred.from_dict, from_none], obj.get("cred"))
        id = from_union([from_float, from_str], obj.get("id"))
        jsonrpc = from_str(obj.get("jsonrpc"))
        method = from_str(obj.get("method"))
        params = from_list(CracCRACResourcesFreeByDateRequestParam.from_dict, obj.get("params"))
        return CracCRACResourcesFreeByDateRequest(cred, id, jsonrpc, method, params)

    def to_dict(self) -> dict:
        result: dict = {}
        result["cred"] = from_union([lambda x: to_class(Cred, x), from_none], self.cred)
        result["id"] = from_union([to_float, from_str], self.id)
        result["jsonrpc"] = from_str(self.jsonrpc)
        result["method"] = from_str(self.method)
        result["params"] = from_list(lambda x: to_class(CracCRACResourcesFreeByDateRequestParam, x), self.params)
        return result


class CracCRACResourcesFreeByDateResponseError:
    """объект, содержащий информацию об ошибке
    
    Код ошибки авторизации
    """
    """код ошибки"""
    code: Optional[float]
    """дополнительные данные об ошибке"""
    data: Optional[str]
    """текстовая информация об ошибке"""
    message: Optional[str]

    def __init__(self, code: Optional[float], data: Optional[str], message: Optional[str]) -> None:
        self.code = code
        self.data = data
        self.message = message

    @staticmethod
    def from_dict(obj: Any) -> 'CracCRACResourcesFreeByDateResponseError':
        assert isinstance(obj, dict)
        code = from_union([from_float, from_none], obj.get("code"))
        data = from_union([from_str, from_none], obj.get("data"))
        message = from_union([from_str, from_none], obj.get("message"))
        return CracCRACResourcesFreeByDateResponseError(code, data, message)

    def to_dict(self) -> dict:
        result: dict = {}
        result["code"] = from_union([to_float, from_none], self.code)
        result["data"] = from_union([from_str, from_none], self.data)
        result["message"] = from_union([from_str, from_none], self.message)
        return result


class FluffyFree:
    date: datetime
    max_free_minutes: float
    resource: str
    taxonomy: str

    def __init__(self, date: datetime, max_free_minutes: float, resource: str, taxonomy: str) -> None:
        self.date = date
        self.max_free_minutes = max_free_minutes
        self.resource = resource
        self.taxonomy = taxonomy

    @staticmethod
    def from_dict(obj: Any) -> 'FluffyFree':
        assert isinstance(obj, dict)
        date = from_datetime(obj.get("date"))
        max_free_minutes = from_float(obj.get("maxFreeMinutes"))
        resource = from_str(obj.get("resource"))
        taxonomy = from_str(obj.get("taxonomy"))
        return FluffyFree(date, max_free_minutes, resource, taxonomy)

    def to_dict(self) -> dict:
        result: dict = {}
        result["date"] = self.date.isoformat()
        result["maxFreeMinutes"] = to_float(self.max_free_minutes)
        result["resource"] = from_str(self.resource)
        result["taxonomy"] = from_str(self.taxonomy)
        return result


class CracCRACResourcesFreeByDateResponseResult:
    free: List[FluffyFree]

    def __init__(self, free: List[FluffyFree]) -> None:
        self.free = free

    @staticmethod
    def from_dict(obj: Any) -> 'CracCRACResourcesFreeByDateResponseResult':
        assert isinstance(obj, dict)
        free = from_list(FluffyFree.from_dict, obj.get("Free"))
        return CracCRACResourcesFreeByDateResponseResult(free)

    def to_dict(self) -> dict:
        result: dict = {}
        result["Free"] = from_list(lambda x: to_class(FluffyFree, x), self.free)
        return result


class CracCRACResourcesFreeByDateResponse:
    """объект, содержащий информацию об ошибке"""
    error: Optional[CracCRACResourcesFreeByDateResponseError]
    """значение числового типа для идентификации запроса на сервере"""
    id: float
    result: Optional[CracCRACResourcesFreeByDateResponseResult]
    """версия протокола (2.0)"""
    jsonrpc: Optional[str]

    def __init__(self, error: Optional[CracCRACResourcesFreeByDateResponseError], id: float, result: Optional[CracCRACResourcesFreeByDateResponseResult], jsonrpc: Optional[str]) -> None:
        self.error = error
        self.id = id
        self.result = result
        self.jsonrpc = jsonrpc

    @staticmethod
    def from_dict(obj: Any) -> 'CracCRACResourcesFreeByDateResponse':
        assert isinstance(obj, dict)
        error = from_union([from_none, CracCRACResourcesFreeByDateResponseError.from_dict], obj.get("error"))
        id = from_float(obj.get("id"))
        result = from_union([CracCRACResourcesFreeByDateResponseResult.from_dict, from_none], obj.get("result"))
        jsonrpc = from_union([from_str, from_none], obj.get("jsonrpc"))
        return CracCRACResourcesFreeByDateResponse(error, id, result, jsonrpc)

    def to_dict(self) -> dict:
        result: dict = {}
        result["error"] = from_union([from_none, lambda x: to_class(CracCRACResourcesFreeByDateResponseError, x)], self.error)
        result["id"] = to_float(self.id)
        result["result"] = from_union([lambda x: to_class(CracCRACResourcesFreeByDateResponseResult, x), from_none], self.result)
        result["jsonrpc"] = from_union([from_str, from_none], self.jsonrpc)
        return result


class CRACResourcesFreeByDate:
    request: CracCRACResourcesFreeByDateRequest
    response: CracCRACResourcesFreeByDateResponse

    def __init__(self, request: CracCRACResourcesFreeByDateRequest, response: CracCRACResourcesFreeByDateResponse) -> None:
        self.request = request
        self.response = response

    @staticmethod
    def from_dict(obj: Any) -> 'CRACResourcesFreeByDate':
        assert isinstance(obj, dict)
        request = CracCRACResourcesFreeByDateRequest.from_dict(obj.get("request"))
        response = CracCRACResourcesFreeByDateResponse.from_dict(obj.get("response"))
        return CRACResourcesFreeByDate(request, response)

    def to_dict(self) -> dict:
        result: dict = {}
        result["request"] = to_class(CracCRACResourcesFreeByDateRequest, self.request)
        result["response"] = to_class(CracCRACResourcesFreeByDateResponse, self.response)
        return result


class Business1:
    id: str

    def __init__(self, id: str) -> None:
        self.id = id

    @staticmethod
    def from_dict(obj: Any) -> 'Business1':
        assert isinstance(obj, dict)
        id = from_str(obj.get("id"))
        return Business1(id)

    def to_dict(self) -> dict:
        result: dict = {}
        result["id"] = from_str(self.id)
        return result


class TentacledTaxonomy:
    id: str

    def __init__(self, id: str) -> None:
        self.id = id

    @staticmethod
    def from_dict(obj: Any) -> 'TentacledTaxonomy':
        assert isinstance(obj, dict)
        id = from_str(obj.get("id"))
        return TentacledTaxonomy(id)

    def to_dict(self) -> dict:
        result: dict = {}
        result["id"] = from_str(self.id)
        return result


class CracCRACResourcesFreeByDateV2RequestParam:
    business: Business1
    duration: float
    durations: List[float]
    resources: List[str]
    taxonomy: TentacledTaxonomy

    def __init__(self, business: Business1, duration: float, durations: List[float], resources: List[str], taxonomy: TentacledTaxonomy) -> None:
        self.business = business
        self.duration = duration
        self.durations = durations
        self.resources = resources
        self.taxonomy = taxonomy

    @staticmethod
    def from_dict(obj: Any) -> 'CracCRACResourcesFreeByDateV2RequestParam':
        assert isinstance(obj, dict)
        business = Business1.from_dict(obj.get("business"))
        duration = from_float(obj.get("duration"))
        durations = from_list(from_float, obj.get("durations"))
        resources = from_list(from_str, obj.get("resources"))
        taxonomy = TentacledTaxonomy.from_dict(obj.get("taxonomy"))
        return CracCRACResourcesFreeByDateV2RequestParam(business, duration, durations, resources, taxonomy)

    def to_dict(self) -> dict:
        result: dict = {}
        result["business"] = to_class(Business1, self.business)
        result["duration"] = to_float(self.duration)
        result["durations"] = from_list(to_float, self.durations)
        result["resources"] = from_list(from_str, self.resources)
        result["taxonomy"] = to_class(TentacledTaxonomy, self.taxonomy)
        return result


class CracCRACResourcesFreeByDateV2Request:
    """авторизационные параметры"""
    cred: Optional[Cred]
    """значение числового типа для идентификации запроса на сервере"""
    id: Union[float, str]
    """версия протокола - 2.0"""
    jsonrpc: str
    """название jsonrpc метода"""
    method: str
    """параметры запроса"""
    params: List[CracCRACResourcesFreeByDateV2RequestParam]

    def __init__(self, cred: Optional[Cred], id: Union[float, str], jsonrpc: str, method: str, params: List[CracCRACResourcesFreeByDateV2RequestParam]) -> None:
        self.cred = cred
        self.id = id
        self.jsonrpc = jsonrpc
        self.method = method
        self.params = params

    @staticmethod
    def from_dict(obj: Any) -> 'CracCRACResourcesFreeByDateV2Request':
        assert isinstance(obj, dict)
        cred = from_union([Cred.from_dict, from_none], obj.get("cred"))
        id = from_union([from_float, from_str], obj.get("id"))
        jsonrpc = from_str(obj.get("jsonrpc"))
        method = from_str(obj.get("method"))
        params = from_list(CracCRACResourcesFreeByDateV2RequestParam.from_dict, obj.get("params"))
        return CracCRACResourcesFreeByDateV2Request(cred, id, jsonrpc, method, params)

    def to_dict(self) -> dict:
        result: dict = {}
        result["cred"] = from_union([lambda x: to_class(Cred, x), from_none], self.cred)
        result["id"] = from_union([to_float, from_str], self.id)
        result["jsonrpc"] = from_str(self.jsonrpc)
        result["method"] = from_str(self.method)
        result["params"] = from_list(lambda x: to_class(CracCRACResourcesFreeByDateV2RequestParam, x), self.params)
        return result


class CracCRACResourcesFreeByDateV2ResponseError:
    """объект, содержащий информацию об ошибке
    
    Код ошибки авторизации
    """
    """код ошибки"""
    code: Optional[float]
    """дополнительные данные об ошибке"""
    data: Optional[str]
    """текстовая информация об ошибке"""
    message: Optional[str]

    def __init__(self, code: Optional[float], data: Optional[str], message: Optional[str]) -> None:
        self.code = code
        self.data = data
        self.message = message

    @staticmethod
    def from_dict(obj: Any) -> 'CracCRACResourcesFreeByDateV2ResponseError':
        assert isinstance(obj, dict)
        code = from_union([from_float, from_none], obj.get("code"))
        data = from_union([from_str, from_none], obj.get("data"))
        message = from_union([from_str, from_none], obj.get("message"))
        return CracCRACResourcesFreeByDateV2ResponseError(code, data, message)

    def to_dict(self) -> dict:
        result: dict = {}
        result["code"] = from_union([to_float, from_none], self.code)
        result["data"] = from_union([from_str, from_none], self.data)
        result["message"] = from_union([from_str, from_none], self.message)
        return result


class TentacledFree:
    date: datetime
    max_free_minutes: float
    resource: str
    taxonomy: str

    def __init__(self, date: datetime, max_free_minutes: float, resource: str, taxonomy: str) -> None:
        self.date = date
        self.max_free_minutes = max_free_minutes
        self.resource = resource
        self.taxonomy = taxonomy

    @staticmethod
    def from_dict(obj: Any) -> 'TentacledFree':
        assert isinstance(obj, dict)
        date = from_datetime(obj.get("date"))
        max_free_minutes = from_float(obj.get("maxFreeMinutes"))
        resource = from_str(obj.get("resource"))
        taxonomy = from_str(obj.get("taxonomy"))
        return TentacledFree(date, max_free_minutes, resource, taxonomy)

    def to_dict(self) -> dict:
        result: dict = {}
        result["date"] = self.date.isoformat()
        result["maxFreeMinutes"] = to_float(self.max_free_minutes)
        result["resource"] = from_str(self.resource)
        result["taxonomy"] = from_str(self.taxonomy)
        return result


class CracCRACResourcesFreeByDateV2ResponseResult:
    free: List[TentacledFree]

    def __init__(self, free: List[TentacledFree]) -> None:
        self.free = free

    @staticmethod
    def from_dict(obj: Any) -> 'CracCRACResourcesFreeByDateV2ResponseResult':
        assert isinstance(obj, dict)
        free = from_list(TentacledFree.from_dict, obj.get("Free"))
        return CracCRACResourcesFreeByDateV2ResponseResult(free)

    def to_dict(self) -> dict:
        result: dict = {}
        result["Free"] = from_list(lambda x: to_class(TentacledFree, x), self.free)
        return result


class CracCRACResourcesFreeByDateV2Response:
    """объект, содержащий информацию об ошибке"""
    error: Optional[CracCRACResourcesFreeByDateV2ResponseError]
    """значение числового типа для идентификации запроса на сервере"""
    id: float
    result: Optional[CracCRACResourcesFreeByDateV2ResponseResult]
    """версия протокола (2.0)"""
    jsonrpc: Optional[str]

    def __init__(self, error: Optional[CracCRACResourcesFreeByDateV2ResponseError], id: float, result: Optional[CracCRACResourcesFreeByDateV2ResponseResult], jsonrpc: Optional[str]) -> None:
        self.error = error
        self.id = id
        self.result = result
        self.jsonrpc = jsonrpc

    @staticmethod
    def from_dict(obj: Any) -> 'CracCRACResourcesFreeByDateV2Response':
        assert isinstance(obj, dict)
        error = from_union([from_none, CracCRACResourcesFreeByDateV2ResponseError.from_dict], obj.get("error"))
        id = from_float(obj.get("id"))
        result = from_union([CracCRACResourcesFreeByDateV2ResponseResult.from_dict, from_none], obj.get("result"))
        jsonrpc = from_union([from_str, from_none], obj.get("jsonrpc"))
        return CracCRACResourcesFreeByDateV2Response(error, id, result, jsonrpc)

    def to_dict(self) -> dict:
        result: dict = {}
        result["error"] = from_union([from_none, lambda x: to_class(CracCRACResourcesFreeByDateV2ResponseError, x)], self.error)
        result["id"] = to_float(self.id)
        result["result"] = from_union([lambda x: to_class(CracCRACResourcesFreeByDateV2ResponseResult, x), from_none], self.result)
        result["jsonrpc"] = from_union([from_str, from_none], self.jsonrpc)
        return result


class CRACResourcesFreeByDateV2:
    request: CracCRACResourcesFreeByDateV2Request
    response: CracCRACResourcesFreeByDateV2Response

    def __init__(self, request: CracCRACResourcesFreeByDateV2Request, response: CracCRACResourcesFreeByDateV2Response) -> None:
        self.request = request
        self.response = response

    @staticmethod
    def from_dict(obj: Any) -> 'CRACResourcesFreeByDateV2':
        assert isinstance(obj, dict)
        request = CracCRACResourcesFreeByDateV2Request.from_dict(obj.get("request"))
        response = CracCRACResourcesFreeByDateV2Response.from_dict(obj.get("response"))
        return CRACResourcesFreeByDateV2(request, response)

    def to_dict(self) -> dict:
        result: dict = {}
        result["request"] = to_class(CracCRACResourcesFreeByDateV2Request, self.request)
        result["response"] = to_class(CracCRACResourcesFreeByDateV2Response, self.response)
        return result


class PurpleGeneralInfo:
    timezone: str

    def __init__(self, timezone: str) -> None:
        self.timezone = timezone

    @staticmethod
    def from_dict(obj: Any) -> 'PurpleGeneralInfo':
        assert isinstance(obj, dict)
        timezone = from_str(obj.get("timezone"))
        return PurpleGeneralInfo(timezone)

    def to_dict(self) -> dict:
        result: dict = {}
        result["timezone"] = from_str(self.timezone)
        return result


class TentacledWidgetConfiguration:
    crac_server: str
    most_free_enable: Optional[bool]

    def __init__(self, crac_server: str, most_free_enable: Optional[bool]) -> None:
        self.crac_server = crac_server
        self.most_free_enable = most_free_enable

    @staticmethod
    def from_dict(obj: Any) -> 'TentacledWidgetConfiguration':
        assert isinstance(obj, dict)
        crac_server = from_str(obj.get("cracServer"))
        most_free_enable = from_union([from_bool, from_none], obj.get("mostFreeEnable"))
        return TentacledWidgetConfiguration(crac_server, most_free_enable)

    def to_dict(self) -> dict:
        result: dict = {}
        result["cracServer"] = from_str(self.crac_server)
        result["mostFreeEnable"] = from_union([from_bool, from_none], self.most_free_enable)
        return result


class Business2:
    general_info: PurpleGeneralInfo
    id: str
    widget_configuration: TentacledWidgetConfiguration

    def __init__(self, general_info: PurpleGeneralInfo, id: str, widget_configuration: TentacledWidgetConfiguration) -> None:
        self.general_info = general_info
        self.id = id
        self.widget_configuration = widget_configuration

    @staticmethod
    def from_dict(obj: Any) -> 'Business2':
        assert isinstance(obj, dict)
        general_info = PurpleGeneralInfo.from_dict(obj.get("general_info"))
        id = from_str(obj.get("id"))
        widget_configuration = TentacledWidgetConfiguration.from_dict(obj.get("widget_configuration"))
        return Business2(general_info, id, widget_configuration)

    def to_dict(self) -> dict:
        result: dict = {}
        result["general_info"] = to_class(PurpleGeneralInfo, self.general_info)
        result["id"] = from_str(self.id)
        result["widget_configuration"] = to_class(TentacledWidgetConfiguration, self.widget_configuration)
        return result


class PurpleDate:
    date_from: str
    to: str

    def __init__(self, date_from: str, to: str) -> None:
        self.date_from = date_from
        self.to = to

    @staticmethod
    def from_dict(obj: Any) -> 'PurpleDate':
        assert isinstance(obj, dict)
        date_from = from_str(obj.get("from"))
        to = from_str(obj.get("to"))
        return PurpleDate(date_from, to)

    def to_dict(self) -> dict:
        result: dict = {}
        result["from"] = from_str(self.date_from)
        result["to"] = from_str(self.to)
        return result


class ResourceBusiness:
    """идентификатор бизнеса"""
    id: str

    def __init__(self, id: str) -> None:
        self.id = id

    @staticmethod
    def from_dict(obj: Any) -> 'ResourceBusiness':
        assert isinstance(obj, dict)
        id = from_str(obj.get("id"))
        return ResourceBusiness(id)

    def to_dict(self) -> dict:
        result: dict = {}
        result["id"] = from_str(self.id)
        return result


class PurpleResourceFilter:
    business: ResourceBusiness
    """идентификатор ресурса"""
    resource: str

    def __init__(self, business: ResourceBusiness, resource: str) -> None:
        self.business = business
        self.resource = resource

    @staticmethod
    def from_dict(obj: Any) -> 'PurpleResourceFilter':
        assert isinstance(obj, dict)
        business = ResourceBusiness.from_dict(obj.get("business"))
        resource = from_str(obj.get("resource"))
        return PurpleResourceFilter(business, resource)

    def to_dict(self) -> dict:
        result: dict = {}
        result["business"] = to_class(ResourceBusiness, self.business)
        result["resource"] = from_str(self.resource)
        return result


class PurpleFilters:
    date: PurpleDate
    resources: List[PurpleResourceFilter]
    rooms: List[str]
    taxonomies: List[str]

    def __init__(self, date: PurpleDate, resources: List[PurpleResourceFilter], rooms: List[str], taxonomies: List[str]) -> None:
        self.date = date
        self.resources = resources
        self.rooms = rooms
        self.taxonomies = taxonomies

    @staticmethod
    def from_dict(obj: Any) -> 'PurpleFilters':
        assert isinstance(obj, dict)
        date = PurpleDate.from_dict(obj.get("date"))
        resources = from_list(PurpleResourceFilter.from_dict, obj.get("resources"))
        rooms = from_list(from_str, obj.get("rooms"))
        taxonomies = from_list(from_str, obj.get("taxonomies"))
        return PurpleFilters(date, resources, rooms, taxonomies)

    def to_dict(self) -> dict:
        result: dict = {}
        result["date"] = to_class(PurpleDate, self.date)
        result["resources"] = from_list(lambda x: to_class(PurpleResourceFilter, x), self.resources)
        result["rooms"] = from_list(from_str, self.rooms)
        result["taxonomies"] = from_list(from_str, self.taxonomies)
        return result


class CracSlotsGetCRACDistributedResourcesAndRoomsRequestParams:
    """параметры запроса"""
    business: Business2
    filters: PurpleFilters

    def __init__(self, business: Business2, filters: PurpleFilters) -> None:
        self.business = business
        self.filters = filters

    @staticmethod
    def from_dict(obj: Any) -> 'CracSlotsGetCRACDistributedResourcesAndRoomsRequestParams':
        assert isinstance(obj, dict)
        business = Business2.from_dict(obj.get("business"))
        filters = PurpleFilters.from_dict(obj.get("filters"))
        return CracSlotsGetCRACDistributedResourcesAndRoomsRequestParams(business, filters)

    def to_dict(self) -> dict:
        result: dict = {}
        result["business"] = to_class(Business2, self.business)
        result["filters"] = to_class(PurpleFilters, self.filters)
        return result


class CracSlotsGetCRACDistributedResourcesAndRoomsRequest:
    """авторизационные параметры"""
    cred: Optional[Cred]
    """значение числового типа для идентификации запроса на сервере"""
    id: Union[float, str]
    """версия протокола - 2.0"""
    jsonrpc: str
    """название jsonrpc метода"""
    method: str
    """параметры запроса"""
    params: CracSlotsGetCRACDistributedResourcesAndRoomsRequestParams

    def __init__(self, cred: Optional[Cred], id: Union[float, str], jsonrpc: str, method: str, params: CracSlotsGetCRACDistributedResourcesAndRoomsRequestParams) -> None:
        self.cred = cred
        self.id = id
        self.jsonrpc = jsonrpc
        self.method = method
        self.params = params

    @staticmethod
    def from_dict(obj: Any) -> 'CracSlotsGetCRACDistributedResourcesAndRoomsRequest':
        assert isinstance(obj, dict)
        cred = from_union([Cred.from_dict, from_none], obj.get("cred"))
        id = from_union([from_float, from_str], obj.get("id"))
        jsonrpc = from_str(obj.get("jsonrpc"))
        method = from_str(obj.get("method"))
        params = CracSlotsGetCRACDistributedResourcesAndRoomsRequestParams.from_dict(obj.get("params"))
        return CracSlotsGetCRACDistributedResourcesAndRoomsRequest(cred, id, jsonrpc, method, params)

    def to_dict(self) -> dict:
        result: dict = {}
        result["cred"] = from_union([lambda x: to_class(Cred, x), from_none], self.cred)
        result["id"] = from_union([to_float, from_str], self.id)
        result["jsonrpc"] = from_str(self.jsonrpc)
        result["method"] = from_str(self.method)
        result["params"] = to_class(CracSlotsGetCRACDistributedResourcesAndRoomsRequestParams, self.params)
        return result


class CracSlotsGetCRACDistributedResourcesAndRoomsResponseError:
    """объект, содержащий информацию об ошибке
    
    Код ошибки авторизации
    """
    """код ошибки"""
    code: float
    """дополнительные данные об ошибке"""
    data: Optional[str]
    """текстовая информация об ошибке"""
    message: str

    def __init__(self, code: float, data: Optional[str], message: str) -> None:
        self.code = code
        self.data = data
        self.message = message

    @staticmethod
    def from_dict(obj: Any) -> 'CracSlotsGetCRACDistributedResourcesAndRoomsResponseError':
        assert isinstance(obj, dict)
        code = from_float(obj.get("code"))
        data = from_union([from_str, from_none], obj.get("data"))
        message = from_str(obj.get("message"))
        return CracSlotsGetCRACDistributedResourcesAndRoomsResponseError(code, data, message)

    def to_dict(self) -> dict:
        result: dict = {}
        result["code"] = to_float(self.code)
        result["data"] = from_union([from_str, from_none], self.data)
        result["message"] = from_str(self.message)
        return result


class PurpleSlot:
    date: datetime
    resources: List[Any]
    rooms: List[Dict[str, Any]]

    def __init__(self, date: datetime, resources: List[Any], rooms: List[Dict[str, Any]]) -> None:
        self.date = date
        self.resources = resources
        self.rooms = rooms

    @staticmethod
    def from_dict(obj: Any) -> 'PurpleSlot':
        assert isinstance(obj, dict)
        date = from_datetime(obj.get("date"))
        resources = from_list(lambda x: x, obj.get("resources"))
        rooms = from_list(lambda x: from_dict(lambda x: x, x), obj.get("rooms"))
        return PurpleSlot(date, resources, rooms)

    def to_dict(self) -> dict:
        result: dict = {}
        result["date"] = self.date.isoformat()
        result["resources"] = from_list(lambda x: x, self.resources)
        result["rooms"] = from_list(lambda x: from_dict(lambda x: x, x), self.rooms)
        return result


class CracSlotsGetCRACDistributedResourcesAndRoomsResponseResult:
    slots: List[PurpleSlot]

    def __init__(self, slots: List[PurpleSlot]) -> None:
        self.slots = slots

    @staticmethod
    def from_dict(obj: Any) -> 'CracSlotsGetCRACDistributedResourcesAndRoomsResponseResult':
        assert isinstance(obj, dict)
        slots = from_list(PurpleSlot.from_dict, obj.get("slots"))
        return CracSlotsGetCRACDistributedResourcesAndRoomsResponseResult(slots)

    def to_dict(self) -> dict:
        result: dict = {}
        result["slots"] = from_list(lambda x: to_class(PurpleSlot, x), self.slots)
        return result


class CracSlotsGetCRACDistributedResourcesAndRoomsResponse:
    """значение числового типа для идентификации запроса на сервере"""
    id: float
    """версия протокола (2.0)"""
    jsonrpc: str
    result: Optional[CracSlotsGetCRACDistributedResourcesAndRoomsResponseResult]
    """объект, содержащий информацию об ошибке"""
    error: Optional[CracSlotsGetCRACDistributedResourcesAndRoomsResponseError]

    def __init__(self, id: float, jsonrpc: str, result: Optional[CracSlotsGetCRACDistributedResourcesAndRoomsResponseResult], error: Optional[CracSlotsGetCRACDistributedResourcesAndRoomsResponseError]) -> None:
        self.id = id
        self.jsonrpc = jsonrpc
        self.result = result
        self.error = error

    @staticmethod
    def from_dict(obj: Any) -> 'CracSlotsGetCRACDistributedResourcesAndRoomsResponse':
        assert isinstance(obj, dict)
        id = from_float(obj.get("id"))
        jsonrpc = from_str(obj.get("jsonrpc"))
        result = from_union([CracSlotsGetCRACDistributedResourcesAndRoomsResponseResult.from_dict, from_none], obj.get("result"))
        error = from_union([CracSlotsGetCRACDistributedResourcesAndRoomsResponseError.from_dict, from_none], obj.get("error"))
        return CracSlotsGetCRACDistributedResourcesAndRoomsResponse(id, jsonrpc, result, error)

    def to_dict(self) -> dict:
        result: dict = {}
        result["id"] = to_float(self.id)
        result["jsonrpc"] = from_str(self.jsonrpc)
        result["result"] = from_union([lambda x: to_class(CracSlotsGetCRACDistributedResourcesAndRoomsResponseResult, x), from_none], self.result)
        result["error"] = from_union([lambda x: to_class(CracSlotsGetCRACDistributedResourcesAndRoomsResponseError, x), from_none], self.error)
        return result


class GetCRACDistributedResourcesAndRooms:
    request: CracSlotsGetCRACDistributedResourcesAndRoomsRequest
    response: CracSlotsGetCRACDistributedResourcesAndRoomsResponse

    def __init__(self, request: CracSlotsGetCRACDistributedResourcesAndRoomsRequest, response: CracSlotsGetCRACDistributedResourcesAndRoomsResponse) -> None:
        self.request = request
        self.response = response

    @staticmethod
    def from_dict(obj: Any) -> 'GetCRACDistributedResourcesAndRooms':
        assert isinstance(obj, dict)
        request = CracSlotsGetCRACDistributedResourcesAndRoomsRequest.from_dict(obj.get("request"))
        response = CracSlotsGetCRACDistributedResourcesAndRoomsResponse.from_dict(obj.get("response"))
        return GetCRACDistributedResourcesAndRooms(request, response)

    def to_dict(self) -> dict:
        result: dict = {}
        result["request"] = to_class(CracSlotsGetCRACDistributedResourcesAndRoomsRequest, self.request)
        result["response"] = to_class(CracSlotsGetCRACDistributedResourcesAndRoomsResponse, self.response)
        return result


class FluffyGeneralInfo:
    timezone: str

    def __init__(self, timezone: str) -> None:
        self.timezone = timezone

    @staticmethod
    def from_dict(obj: Any) -> 'FluffyGeneralInfo':
        assert isinstance(obj, dict)
        timezone = from_str(obj.get("timezone"))
        return FluffyGeneralInfo(timezone)

    def to_dict(self) -> dict:
        result: dict = {}
        result["timezone"] = from_str(self.timezone)
        return result


class StickyWidgetConfiguration:
    crac_server: str
    most_free_enable: Optional[bool]

    def __init__(self, crac_server: str, most_free_enable: Optional[bool]) -> None:
        self.crac_server = crac_server
        self.most_free_enable = most_free_enable

    @staticmethod
    def from_dict(obj: Any) -> 'StickyWidgetConfiguration':
        assert isinstance(obj, dict)
        crac_server = from_str(obj.get("cracServer"))
        most_free_enable = from_union([from_bool, from_none], obj.get("mostFreeEnable"))
        return StickyWidgetConfiguration(crac_server, most_free_enable)

    def to_dict(self) -> dict:
        result: dict = {}
        result["cracServer"] = from_str(self.crac_server)
        result["mostFreeEnable"] = from_union([from_bool, from_none], self.most_free_enable)
        return result


class Business3:
    general_info: FluffyGeneralInfo
    id: str
    widget_configuration: StickyWidgetConfiguration

    def __init__(self, general_info: FluffyGeneralInfo, id: str, widget_configuration: StickyWidgetConfiguration) -> None:
        self.general_info = general_info
        self.id = id
        self.widget_configuration = widget_configuration

    @staticmethod
    def from_dict(obj: Any) -> 'Business3':
        assert isinstance(obj, dict)
        general_info = FluffyGeneralInfo.from_dict(obj.get("general_info"))
        id = from_str(obj.get("id"))
        widget_configuration = StickyWidgetConfiguration.from_dict(obj.get("widget_configuration"))
        return Business3(general_info, id, widget_configuration)

    def to_dict(self) -> dict:
        result: dict = {}
        result["general_info"] = to_class(FluffyGeneralInfo, self.general_info)
        result["id"] = from_str(self.id)
        result["widget_configuration"] = to_class(StickyWidgetConfiguration, self.widget_configuration)
        return result


class FluffyDate:
    date_from: str
    to: str

    def __init__(self, date_from: str, to: str) -> None:
        self.date_from = date_from
        self.to = to

    @staticmethod
    def from_dict(obj: Any) -> 'FluffyDate':
        assert isinstance(obj, dict)
        date_from = from_str(obj.get("from"))
        to = from_str(obj.get("to"))
        return FluffyDate(date_from, to)

    def to_dict(self) -> dict:
        result: dict = {}
        result["from"] = from_str(self.date_from)
        result["to"] = from_str(self.to)
        return result


class FluffyResourceFilter:
    duration: float
    """идентификатор ресурса"""
    id: str

    def __init__(self, duration: float, id: str) -> None:
        self.duration = duration
        self.id = id

    @staticmethod
    def from_dict(obj: Any) -> 'FluffyResourceFilter':
        assert isinstance(obj, dict)
        duration = from_float(obj.get("duration"))
        id = from_str(obj.get("id"))
        return FluffyResourceFilter(duration, id)

    def to_dict(self) -> dict:
        result: dict = {}
        result["duration"] = to_float(self.duration)
        result["id"] = from_str(self.id)
        return result


class FluffyFilters:
    date: FluffyDate
    insurance_id: str
    resources: List[FluffyResourceFilter]
    rooms: List[str]

    def __init__(self, date: FluffyDate, insurance_id: str, resources: List[FluffyResourceFilter], rooms: List[str]) -> None:
        self.date = date
        self.insurance_id = insurance_id
        self.resources = resources
        self.rooms = rooms

    @staticmethod
    def from_dict(obj: Any) -> 'FluffyFilters':
        assert isinstance(obj, dict)
        date = FluffyDate.from_dict(obj.get("date"))
        insurance_id = from_str(obj.get("insuranceID"))
        resources = from_list(FluffyResourceFilter.from_dict, obj.get("resources"))
        rooms = from_list(from_str, obj.get("rooms"))
        return FluffyFilters(date, insurance_id, resources, rooms)

    def to_dict(self) -> dict:
        result: dict = {}
        result["date"] = to_class(FluffyDate, self.date)
        result["insuranceID"] = from_str(self.insurance_id)
        result["resources"] = from_list(lambda x: to_class(FluffyResourceFilter, x), self.resources)
        result["rooms"] = from_list(from_str, self.rooms)
        return result


class CracSlotsGetCRACInsuranceResourcesAndRoomsRequestParams:
    """параметры запроса"""
    business: Business3
    filters: FluffyFilters

    def __init__(self, business: Business3, filters: FluffyFilters) -> None:
        self.business = business
        self.filters = filters

    @staticmethod
    def from_dict(obj: Any) -> 'CracSlotsGetCRACInsuranceResourcesAndRoomsRequestParams':
        assert isinstance(obj, dict)
        business = Business3.from_dict(obj.get("business"))
        filters = FluffyFilters.from_dict(obj.get("filters"))
        return CracSlotsGetCRACInsuranceResourcesAndRoomsRequestParams(business, filters)

    def to_dict(self) -> dict:
        result: dict = {}
        result["business"] = to_class(Business3, self.business)
        result["filters"] = to_class(FluffyFilters, self.filters)
        return result


class CracSlotsGetCRACInsuranceResourcesAndRoomsRequest:
    """авторизационные параметры"""
    cred: Optional[Cred]
    """значение числового типа для идентификации запроса на сервере"""
    id: Union[float, str]
    """версия протокола - 2.0"""
    jsonrpc: str
    """название jsonrpc метода"""
    method: str
    """параметры запроса"""
    params: CracSlotsGetCRACInsuranceResourcesAndRoomsRequestParams

    def __init__(self, cred: Optional[Cred], id: Union[float, str], jsonrpc: str, method: str, params: CracSlotsGetCRACInsuranceResourcesAndRoomsRequestParams) -> None:
        self.cred = cred
        self.id = id
        self.jsonrpc = jsonrpc
        self.method = method
        self.params = params

    @staticmethod
    def from_dict(obj: Any) -> 'CracSlotsGetCRACInsuranceResourcesAndRoomsRequest':
        assert isinstance(obj, dict)
        cred = from_union([Cred.from_dict, from_none], obj.get("cred"))
        id = from_union([from_float, from_str], obj.get("id"))
        jsonrpc = from_str(obj.get("jsonrpc"))
        method = from_str(obj.get("method"))
        params = CracSlotsGetCRACInsuranceResourcesAndRoomsRequestParams.from_dict(obj.get("params"))
        return CracSlotsGetCRACInsuranceResourcesAndRoomsRequest(cred, id, jsonrpc, method, params)

    def to_dict(self) -> dict:
        result: dict = {}
        result["cred"] = from_union([lambda x: to_class(Cred, x), from_none], self.cred)
        result["id"] = from_union([to_float, from_str], self.id)
        result["jsonrpc"] = from_str(self.jsonrpc)
        result["method"] = from_str(self.method)
        result["params"] = to_class(CracSlotsGetCRACInsuranceResourcesAndRoomsRequestParams, self.params)
        return result


class CracSlotsGetCRACInsuranceResourcesAndRoomsResponseError:
    """объект, содержащий информацию об ошибке
    
    Код ошибки авторизации
    """
    """код ошибки"""
    code: float
    """дополнительные данные об ошибке"""
    data: Optional[str]
    """текстовая информация об ошибке"""
    message: str

    def __init__(self, code: float, data: Optional[str], message: str) -> None:
        self.code = code
        self.data = data
        self.message = message

    @staticmethod
    def from_dict(obj: Any) -> 'CracSlotsGetCRACInsuranceResourcesAndRoomsResponseError':
        assert isinstance(obj, dict)
        code = from_float(obj.get("code"))
        data = from_union([from_str, from_none], obj.get("data"))
        message = from_str(obj.get("message"))
        return CracSlotsGetCRACInsuranceResourcesAndRoomsResponseError(code, data, message)

    def to_dict(self) -> dict:
        result: dict = {}
        result["code"] = to_float(self.code)
        result["data"] = from_union([from_str, from_none], self.data)
        result["message"] = from_str(self.message)
        return result


class FluffySlot:
    date: datetime
    resources: List[Any]
    rooms: List[Dict[str, Any]]

    def __init__(self, date: datetime, resources: List[Any], rooms: List[Dict[str, Any]]) -> None:
        self.date = date
        self.resources = resources
        self.rooms = rooms

    @staticmethod
    def from_dict(obj: Any) -> 'FluffySlot':
        assert isinstance(obj, dict)
        date = from_datetime(obj.get("date"))
        resources = from_list(lambda x: x, obj.get("resources"))
        rooms = from_list(lambda x: from_dict(lambda x: x, x), obj.get("rooms"))
        return FluffySlot(date, resources, rooms)

    def to_dict(self) -> dict:
        result: dict = {}
        result["date"] = self.date.isoformat()
        result["resources"] = from_list(lambda x: x, self.resources)
        result["rooms"] = from_list(lambda x: from_dict(lambda x: x, x), self.rooms)
        return result


class CracSlotsGetCRACInsuranceResourcesAndRoomsResponseResult:
    slots: List[FluffySlot]

    def __init__(self, slots: List[FluffySlot]) -> None:
        self.slots = slots

    @staticmethod
    def from_dict(obj: Any) -> 'CracSlotsGetCRACInsuranceResourcesAndRoomsResponseResult':
        assert isinstance(obj, dict)
        slots = from_list(FluffySlot.from_dict, obj.get("slots"))
        return CracSlotsGetCRACInsuranceResourcesAndRoomsResponseResult(slots)

    def to_dict(self) -> dict:
        result: dict = {}
        result["slots"] = from_list(lambda x: to_class(FluffySlot, x), self.slots)
        return result


class CracSlotsGetCRACInsuranceResourcesAndRoomsResponse:
    """значение числового типа для идентификации запроса на сервере"""
    id: float
    """версия протокола (2.0)"""
    jsonrpc: str
    result: Optional[CracSlotsGetCRACInsuranceResourcesAndRoomsResponseResult]
    """объект, содержащий информацию об ошибке"""
    error: Optional[CracSlotsGetCRACInsuranceResourcesAndRoomsResponseError]

    def __init__(self, id: float, jsonrpc: str, result: Optional[CracSlotsGetCRACInsuranceResourcesAndRoomsResponseResult], error: Optional[CracSlotsGetCRACInsuranceResourcesAndRoomsResponseError]) -> None:
        self.id = id
        self.jsonrpc = jsonrpc
        self.result = result
        self.error = error

    @staticmethod
    def from_dict(obj: Any) -> 'CracSlotsGetCRACInsuranceResourcesAndRoomsResponse':
        assert isinstance(obj, dict)
        id = from_float(obj.get("id"))
        jsonrpc = from_str(obj.get("jsonrpc"))
        result = from_union([CracSlotsGetCRACInsuranceResourcesAndRoomsResponseResult.from_dict, from_none], obj.get("result"))
        error = from_union([CracSlotsGetCRACInsuranceResourcesAndRoomsResponseError.from_dict, from_none], obj.get("error"))
        return CracSlotsGetCRACInsuranceResourcesAndRoomsResponse(id, jsonrpc, result, error)

    def to_dict(self) -> dict:
        result: dict = {}
        result["id"] = to_float(self.id)
        result["jsonrpc"] = from_str(self.jsonrpc)
        result["result"] = from_union([lambda x: to_class(CracSlotsGetCRACInsuranceResourcesAndRoomsResponseResult, x), from_none], self.result)
        result["error"] = from_union([lambda x: to_class(CracSlotsGetCRACInsuranceResourcesAndRoomsResponseError, x), from_none], self.error)
        return result


class GetCRACInsuranceResourcesAndRooms:
    request: CracSlotsGetCRACInsuranceResourcesAndRoomsRequest
    response: CracSlotsGetCRACInsuranceResourcesAndRoomsResponse

    def __init__(self, request: CracSlotsGetCRACInsuranceResourcesAndRoomsRequest, response: CracSlotsGetCRACInsuranceResourcesAndRoomsResponse) -> None:
        self.request = request
        self.response = response

    @staticmethod
    def from_dict(obj: Any) -> 'GetCRACInsuranceResourcesAndRooms':
        assert isinstance(obj, dict)
        request = CracSlotsGetCRACInsuranceResourcesAndRoomsRequest.from_dict(obj.get("request"))
        response = CracSlotsGetCRACInsuranceResourcesAndRoomsResponse.from_dict(obj.get("response"))
        return GetCRACInsuranceResourcesAndRooms(request, response)

    def to_dict(self) -> dict:
        result: dict = {}
        result["request"] = to_class(CracSlotsGetCRACInsuranceResourcesAndRoomsRequest, self.request)
        result["response"] = to_class(CracSlotsGetCRACInsuranceResourcesAndRoomsResponse, self.response)
        return result


class TentacledGeneralInfo:
    timezone: str

    def __init__(self, timezone: str) -> None:
        self.timezone = timezone

    @staticmethod
    def from_dict(obj: Any) -> 'TentacledGeneralInfo':
        assert isinstance(obj, dict)
        timezone = from_str(obj.get("timezone"))
        return TentacledGeneralInfo(timezone)

    def to_dict(self) -> dict:
        result: dict = {}
        result["timezone"] = from_str(self.timezone)
        return result


class IndigoWidgetConfiguration:
    crac_server: str
    most_free_enable: Optional[bool]

    def __init__(self, crac_server: str, most_free_enable: Optional[bool]) -> None:
        self.crac_server = crac_server
        self.most_free_enable = most_free_enable

    @staticmethod
    def from_dict(obj: Any) -> 'IndigoWidgetConfiguration':
        assert isinstance(obj, dict)
        crac_server = from_str(obj.get("cracServer"))
        most_free_enable = from_union([from_bool, from_none], obj.get("mostFreeEnable"))
        return IndigoWidgetConfiguration(crac_server, most_free_enable)

    def to_dict(self) -> dict:
        result: dict = {}
        result["cracServer"] = from_str(self.crac_server)
        result["mostFreeEnable"] = from_union([from_bool, from_none], self.most_free_enable)
        return result


class Business4:
    general_info: TentacledGeneralInfo
    id: str
    widget_configuration: IndigoWidgetConfiguration

    def __init__(self, general_info: TentacledGeneralInfo, id: str, widget_configuration: IndigoWidgetConfiguration) -> None:
        self.general_info = general_info
        self.id = id
        self.widget_configuration = widget_configuration

    @staticmethod
    def from_dict(obj: Any) -> 'Business4':
        assert isinstance(obj, dict)
        general_info = TentacledGeneralInfo.from_dict(obj.get("general_info"))
        id = from_str(obj.get("id"))
        widget_configuration = IndigoWidgetConfiguration.from_dict(obj.get("widget_configuration"))
        return Business4(general_info, id, widget_configuration)

    def to_dict(self) -> dict:
        result: dict = {}
        result["general_info"] = to_class(TentacledGeneralInfo, self.general_info)
        result["id"] = from_str(self.id)
        result["widget_configuration"] = to_class(IndigoWidgetConfiguration, self.widget_configuration)
        return result


class TentacledDate:
    date_from: datetime
    to: datetime

    def __init__(self, date_from: datetime, to: datetime) -> None:
        self.date_from = date_from
        self.to = to

    @staticmethod
    def from_dict(obj: Any) -> 'TentacledDate':
        assert isinstance(obj, dict)
        date_from = from_datetime(obj.get("from"))
        to = from_datetime(obj.get("to"))
        return TentacledDate(date_from, to)

    def to_dict(self) -> dict:
        result: dict = {}
        result["from"] = self.date_from.isoformat()
        result["to"] = self.to.isoformat()
        return result


class TentacledResourceFilter:
    duration: float
    """идентификатор ресурса"""
    id: str

    def __init__(self, duration: float, id: str) -> None:
        self.duration = duration
        self.id = id

    @staticmethod
    def from_dict(obj: Any) -> 'TentacledResourceFilter':
        assert isinstance(obj, dict)
        duration = from_float(obj.get("duration"))
        id = from_str(obj.get("id"))
        return TentacledResourceFilter(duration, id)

    def to_dict(self) -> dict:
        result: dict = {}
        result["duration"] = to_float(self.duration)
        result["id"] = from_str(self.id)
        return result


class TentacledFilters:
    date: TentacledDate
    resources: List[TentacledResourceFilter]
    rooms: List[str]
    taxonomies: List[str]

    def __init__(self, date: TentacledDate, resources: List[TentacledResourceFilter], rooms: List[str], taxonomies: List[str]) -> None:
        self.date = date
        self.resources = resources
        self.rooms = rooms
        self.taxonomies = taxonomies

    @staticmethod
    def from_dict(obj: Any) -> 'TentacledFilters':
        assert isinstance(obj, dict)
        date = TentacledDate.from_dict(obj.get("date"))
        resources = from_list(TentacledResourceFilter.from_dict, obj.get("resources"))
        rooms = from_list(from_str, obj.get("rooms"))
        taxonomies = from_list(from_str, obj.get("taxonomies"))
        return TentacledFilters(date, resources, rooms, taxonomies)

    def to_dict(self) -> dict:
        result: dict = {}
        result["date"] = to_class(TentacledDate, self.date)
        result["resources"] = from_list(lambda x: to_class(TentacledResourceFilter, x), self.resources)
        result["rooms"] = from_list(from_str, self.rooms)
        result["taxonomies"] = from_list(from_str, self.taxonomies)
        return result


class CracSlotsGetCRACResourcesAndRoomsRequestParams:
    """параметры запроса"""
    business: Business4
    filters: TentacledFilters

    def __init__(self, business: Business4, filters: TentacledFilters) -> None:
        self.business = business
        self.filters = filters

    @staticmethod
    def from_dict(obj: Any) -> 'CracSlotsGetCRACResourcesAndRoomsRequestParams':
        assert isinstance(obj, dict)
        business = Business4.from_dict(obj.get("business"))
        filters = TentacledFilters.from_dict(obj.get("filters"))
        return CracSlotsGetCRACResourcesAndRoomsRequestParams(business, filters)

    def to_dict(self) -> dict:
        result: dict = {}
        result["business"] = to_class(Business4, self.business)
        result["filters"] = to_class(TentacledFilters, self.filters)
        return result


class CracSlotsGetCRACResourcesAndRoomsRequest:
    """авторизационные параметры"""
    cred: Optional[Cred]
    """значение числового типа для идентификации запроса на сервере"""
    id: Union[float, str]
    """версия протокола - 2.0"""
    jsonrpc: str
    """название jsonrpc метода"""
    method: str
    """параметры запроса"""
    params: CracSlotsGetCRACResourcesAndRoomsRequestParams

    def __init__(self, cred: Optional[Cred], id: Union[float, str], jsonrpc: str, method: str, params: CracSlotsGetCRACResourcesAndRoomsRequestParams) -> None:
        self.cred = cred
        self.id = id
        self.jsonrpc = jsonrpc
        self.method = method
        self.params = params

    @staticmethod
    def from_dict(obj: Any) -> 'CracSlotsGetCRACResourcesAndRoomsRequest':
        assert isinstance(obj, dict)
        cred = from_union([Cred.from_dict, from_none], obj.get("cred"))
        id = from_union([from_float, from_str], obj.get("id"))
        jsonrpc = from_str(obj.get("jsonrpc"))
        method = from_str(obj.get("method"))
        params = CracSlotsGetCRACResourcesAndRoomsRequestParams.from_dict(obj.get("params"))
        return CracSlotsGetCRACResourcesAndRoomsRequest(cred, id, jsonrpc, method, params)

    def to_dict(self) -> dict:
        result: dict = {}
        result["cred"] = from_union([lambda x: to_class(Cred, x), from_none], self.cred)
        result["id"] = from_union([to_float, from_str], self.id)
        result["jsonrpc"] = from_str(self.jsonrpc)
        result["method"] = from_str(self.method)
        result["params"] = to_class(CracSlotsGetCRACResourcesAndRoomsRequestParams, self.params)
        return result


class CracSlotsGetCRACResourcesAndRoomsResponseError:
    """объект, содержащий информацию об ошибке
    
    Код ошибки авторизации
    """
    """код ошибки"""
    code: float
    """дополнительные данные об ошибке"""
    data: Optional[str]
    """текстовая информация об ошибке"""
    message: str

    def __init__(self, code: float, data: Optional[str], message: str) -> None:
        self.code = code
        self.data = data
        self.message = message

    @staticmethod
    def from_dict(obj: Any) -> 'CracSlotsGetCRACResourcesAndRoomsResponseError':
        assert isinstance(obj, dict)
        code = from_float(obj.get("code"))
        data = from_union([from_str, from_none], obj.get("data"))
        message = from_str(obj.get("message"))
        return CracSlotsGetCRACResourcesAndRoomsResponseError(code, data, message)

    def to_dict(self) -> dict:
        result: dict = {}
        result["code"] = to_float(self.code)
        result["data"] = from_union([from_str, from_none], self.data)
        result["message"] = from_str(self.message)
        return result


class TentacledSlot:
    date: datetime
    resources: List[Any]
    rooms: List[Dict[str, Any]]

    def __init__(self, date: datetime, resources: List[Any], rooms: List[Dict[str, Any]]) -> None:
        self.date = date
        self.resources = resources
        self.rooms = rooms

    @staticmethod
    def from_dict(obj: Any) -> 'TentacledSlot':
        assert isinstance(obj, dict)
        date = from_datetime(obj.get("date"))
        resources = from_list(lambda x: x, obj.get("resources"))
        rooms = from_list(lambda x: from_dict(lambda x: x, x), obj.get("rooms"))
        return TentacledSlot(date, resources, rooms)

    def to_dict(self) -> dict:
        result: dict = {}
        result["date"] = self.date.isoformat()
        result["resources"] = from_list(lambda x: x, self.resources)
        result["rooms"] = from_list(lambda x: from_dict(lambda x: x, x), self.rooms)
        return result


class CracSlotsGetCRACResourcesAndRoomsResponseResult:
    slots: List[TentacledSlot]

    def __init__(self, slots: List[TentacledSlot]) -> None:
        self.slots = slots

    @staticmethod
    def from_dict(obj: Any) -> 'CracSlotsGetCRACResourcesAndRoomsResponseResult':
        assert isinstance(obj, dict)
        slots = from_list(TentacledSlot.from_dict, obj.get("slots"))
        return CracSlotsGetCRACResourcesAndRoomsResponseResult(slots)

    def to_dict(self) -> dict:
        result: dict = {}
        result["slots"] = from_list(lambda x: to_class(TentacledSlot, x), self.slots)
        return result


class CracSlotsGetCRACResourcesAndRoomsResponse:
    """значение числового типа для идентификации запроса на сервере"""
    id: float
    """версия протокола (2.0)"""
    jsonrpc: str
    result: Optional[CracSlotsGetCRACResourcesAndRoomsResponseResult]
    """объект, содержащий информацию об ошибке"""
    error: Optional[CracSlotsGetCRACResourcesAndRoomsResponseError]

    def __init__(self, id: float, jsonrpc: str, result: Optional[CracSlotsGetCRACResourcesAndRoomsResponseResult], error: Optional[CracSlotsGetCRACResourcesAndRoomsResponseError]) -> None:
        self.id = id
        self.jsonrpc = jsonrpc
        self.result = result
        self.error = error

    @staticmethod
    def from_dict(obj: Any) -> 'CracSlotsGetCRACResourcesAndRoomsResponse':
        assert isinstance(obj, dict)
        id = from_float(obj.get("id"))
        jsonrpc = from_str(obj.get("jsonrpc"))
        result = from_union([CracSlotsGetCRACResourcesAndRoomsResponseResult.from_dict, from_none], obj.get("result"))
        error = from_union([CracSlotsGetCRACResourcesAndRoomsResponseError.from_dict, from_none], obj.get("error"))
        return CracSlotsGetCRACResourcesAndRoomsResponse(id, jsonrpc, result, error)

    def to_dict(self) -> dict:
        result: dict = {}
        result["id"] = to_float(self.id)
        result["jsonrpc"] = from_str(self.jsonrpc)
        result["result"] = from_union([lambda x: to_class(CracSlotsGetCRACResourcesAndRoomsResponseResult, x), from_none], self.result)
        result["error"] = from_union([lambda x: to_class(CracSlotsGetCRACResourcesAndRoomsResponseError, x), from_none], self.error)
        return result


class GetCRACResourcesAndRooms:
    request: CracSlotsGetCRACResourcesAndRoomsRequest
    response: CracSlotsGetCRACResourcesAndRoomsResponse

    def __init__(self, request: CracSlotsGetCRACResourcesAndRoomsRequest, response: CracSlotsGetCRACResourcesAndRoomsResponse) -> None:
        self.request = request
        self.response = response

    @staticmethod
    def from_dict(obj: Any) -> 'GetCRACResourcesAndRooms':
        assert isinstance(obj, dict)
        request = CracSlotsGetCRACResourcesAndRoomsRequest.from_dict(obj.get("request"))
        response = CracSlotsGetCRACResourcesAndRoomsResponse.from_dict(obj.get("response"))
        return GetCRACResourcesAndRooms(request, response)

    def to_dict(self) -> dict:
        result: dict = {}
        result["request"] = to_class(CracSlotsGetCRACResourcesAndRoomsRequest, self.request)
        result["response"] = to_class(CracSlotsGetCRACResourcesAndRoomsResponse, self.response)
        return result


class CracSlotsController:
    crac_distributed_resources_free_by_date: Optional[CRACDistributedResourcesFreeByDate]
    crac_resources_free_by_date: Optional[CRACResourcesFreeByDate]
    crac_resources_free_by_date_v2: Optional[CRACResourcesFreeByDateV2]
    get_crac_distributed_resources_and_rooms: GetCRACDistributedResourcesAndRooms
    get_crac_insurance_resources_and_rooms: Optional[GetCRACInsuranceResourcesAndRooms]
    get_crac_resources_and_rooms: Optional[GetCRACResourcesAndRooms]

    def __init__(self, crac_distributed_resources_free_by_date: Optional[CRACDistributedResourcesFreeByDate], crac_resources_free_by_date: Optional[CRACResourcesFreeByDate], crac_resources_free_by_date_v2: Optional[CRACResourcesFreeByDateV2], get_crac_distributed_resources_and_rooms: GetCRACDistributedResourcesAndRooms, get_crac_insurance_resources_and_rooms: Optional[GetCRACInsuranceResourcesAndRooms], get_crac_resources_and_rooms: Optional[GetCRACResourcesAndRooms]) -> None:
        self.crac_distributed_resources_free_by_date = crac_distributed_resources_free_by_date
        self.crac_resources_free_by_date = crac_resources_free_by_date
        self.crac_resources_free_by_date_v2 = crac_resources_free_by_date_v2
        self.get_crac_distributed_resources_and_rooms = get_crac_distributed_resources_and_rooms
        self.get_crac_insurance_resources_and_rooms = get_crac_insurance_resources_and_rooms
        self.get_crac_resources_and_rooms = get_crac_resources_and_rooms

    @staticmethod
    def from_dict(obj: Any) -> 'CracSlotsController':
        assert isinstance(obj, dict)
        crac_distributed_resources_free_by_date = from_union([CRACDistributedResourcesFreeByDate.from_dict, from_none], obj.get("CRACDistributedResourcesFreeByDate"))
        crac_resources_free_by_date = from_union([CRACResourcesFreeByDate.from_dict, from_none], obj.get("CRACResourcesFreeByDate"))
        crac_resources_free_by_date_v2 = from_union([CRACResourcesFreeByDateV2.from_dict, from_none], obj.get("CRACResourcesFreeByDateV2"))
        get_crac_distributed_resources_and_rooms = GetCRACDistributedResourcesAndRooms.from_dict(obj.get("GetCRACDistributedResourcesAndRooms"))
        get_crac_insurance_resources_and_rooms = from_union([GetCRACInsuranceResourcesAndRooms.from_dict, from_none], obj.get("GetCRACInsuranceResourcesAndRooms"))
        get_crac_resources_and_rooms = from_union([GetCRACResourcesAndRooms.from_dict, from_none], obj.get("GetCRACResourcesAndRooms"))
        return CracSlotsController(crac_distributed_resources_free_by_date, crac_resources_free_by_date, crac_resources_free_by_date_v2, get_crac_distributed_resources_and_rooms, get_crac_insurance_resources_and_rooms, get_crac_resources_and_rooms)

    def to_dict(self) -> dict:
        result: dict = {}
        result["CRACDistributedResourcesFreeByDate"] = from_union([lambda x: to_class(CRACDistributedResourcesFreeByDate, x), from_none], self.crac_distributed_resources_free_by_date)
        result["CRACResourcesFreeByDate"] = from_union([lambda x: to_class(CRACResourcesFreeByDate, x), from_none], self.crac_resources_free_by_date)
        result["CRACResourcesFreeByDateV2"] = from_union([lambda x: to_class(CRACResourcesFreeByDateV2, x), from_none], self.crac_resources_free_by_date_v2)
        result["GetCRACDistributedResourcesAndRooms"] = to_class(GetCRACDistributedResourcesAndRooms, self.get_crac_distributed_resources_and_rooms)
        result["GetCRACInsuranceResourcesAndRooms"] = from_union([lambda x: to_class(GetCRACInsuranceResourcesAndRooms, x), from_none], self.get_crac_insurance_resources_and_rooms)
        result["GetCRACResourcesAndRooms"] = from_union([lambda x: to_class(GetCRACResourcesAndRooms, x), from_none], self.get_crac_resources_and_rooms)
        return result


class Controllers:
    appointment: AppointmentController
    business: BusinessController
    client: ClientController
    crac_slots: CracSlotsController

    def __init__(self, appointment: AppointmentController, business: BusinessController, client: ClientController, crac_slots: CracSlotsController) -> None:
        self.appointment = appointment
        self.business = business
        self.client = client
        self.crac_slots = crac_slots

    @staticmethod
    def from_dict(obj: Any) -> 'Controllers':
        assert isinstance(obj, dict)
        appointment = AppointmentController.from_dict(obj.get("Appointment"))
        business = BusinessController.from_dict(obj.get("Business"))
        client = ClientController.from_dict(obj.get("Client"))
        crac_slots = CracSlotsController.from_dict(obj.get("CracSlots"))
        return Controllers(appointment, business, client, crac_slots)

    def to_dict(self) -> dict:
        result: dict = {}
        result["Appointment"] = to_class(AppointmentController, self.appointment)
        result["Business"] = to_class(BusinessController, self.business)
        result["Client"] = to_class(ClientController, self.client)
        result["CracSlots"] = to_class(CracSlotsController, self.crac_slots)
        return result


class Models:
    appointment: Union[List[Any], bool, AppointmentSchema, float, int, None, str]
    business: Union[List[Any], bool, AmbitiousBusiness, float, int, None, str]
    client: ClientClass

    def __init__(self, appointment: Union[List[Any], bool, AppointmentSchema, float, int, None, str], business: Union[List[Any], bool, AmbitiousBusiness, float, int, None, str], client: ClientClass) -> None:
        self.appointment = appointment
        self.business = business
        self.client = client

    @staticmethod
    def from_dict(obj: Any) -> 'Models':
        assert isinstance(obj, dict)
        appointment = from_union([from_none, from_float, from_int, from_bool, from_str, lambda x: from_list(lambda x: x, x), AppointmentSchema.from_dict], obj.get("Appointment"))
        business = from_union([from_none, from_float, from_int, from_bool, from_str, lambda x: from_list(lambda x: x, x), AmbitiousBusiness.from_dict], obj.get("Business"))
        client = ClientClass.from_dict(obj.get("Client"))
        return Models(appointment, business, client)

    def to_dict(self) -> dict:
        result: dict = {}
        result["Appointment"] = from_union([from_none, to_float, from_int, from_bool, from_str, lambda x: from_list(lambda x: x, x), lambda x: to_class(AppointmentSchema, x)], self.appointment)
        result["Business"] = from_union([from_none, to_float, from_int, from_bool, from_str, lambda x: from_list(lambda x: x, x), lambda x: to_class(AmbitiousBusiness, x)], self.business)
        result["Client"] = to_class(ClientClass, self.client)
        return result


class GBookingCoreV2:
    common: Common
    controllers: Controllers
    models: Models

    def __init__(self, common: Common, controllers: Controllers, models: Models) -> None:
        self.common = common
        self.controllers = controllers
        self.models = models

    @staticmethod
    def from_dict(obj: Any) -> 'GBookingCoreV2':
        assert isinstance(obj, dict)
        common = Common.from_dict(obj.get("Common"))
        controllers = Controllers.from_dict(obj.get("Controllers"))
        models = Models.from_dict(obj.get("Models"))
        return GBookingCoreV2(common, controllers, models)

    def to_dict(self) -> dict:
        result: dict = {}
        result["Common"] = to_class(Common, self.common)
        result["Controllers"] = to_class(Controllers, self.controllers)
        result["Models"] = to_class(Models, self.models)
        return result


def g_booking_core_v2_from_dict(s: Any) -> GBookingCoreV2:
    return GBookingCoreV2.from_dict(s)


def g_booking_core_v2_to_dict(x: GBookingCoreV2) -> Any:
    return to_class(GBookingCoreV2, x)
