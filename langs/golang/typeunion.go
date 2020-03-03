package ru.gbooking.apiv2

type TypeUnion struct {
	Enum      *TypeElement
	EnumArray []TypeElement
}

func (x *TypeUnion) UnmarshalJSON(data []byte) error {
	x.EnumArray = nil
	x.Enum = nil
	object, err := unmarshalUnion(data, nil, nil, nil, nil, true, &x.EnumArray, false, nil, false, nil, true, &x.Enum, false)
	if err != nil {
		return err
	}
	if object {
	}
	return nil
}

func (x *TypeUnion) MarshalJSON() ([]byte, error) {
	return marshalUnion(nil, nil, nil, nil, x.EnumArray != nil, x.EnumArray, false, nil, false, nil, x.Enum != nil, x.Enum, false)
}
