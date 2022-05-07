import { FieldArray } from "formik"
import React, { FormEvent, SyntheticEvent, useState } from "react"

import close from '../../assets/cancel.png'
import { ISkill } from "../../models/IOrder"
import { Button, FieldTitle } from "../Common/Common.style"
import { Close, Input, Skill, SkillsWrapper } from "./SkillList.style"

interface ISkillList {
    skills: Array<ISkill>,
    name: string
}

export const SkillList = ({ skills, name }: ISkillList) => {

    const [Value, setValue] = useState<string>("")

    const changeHandler = (e: FormEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    const AddSkillHandler = (push: any) => (e: React.KeyboardEvent<HTMLInputElement> | React.SyntheticEvent<HTMLButtonElement>) => {
        if (e.type == "keydown") {
            // @ts-ignore
            if (e.key === 'Enter' && Value.length > 0) {
                push({ name: Value })
                setValue("")
                e.preventDefault();
            }
        } else {
            if (Value.length > 0) {
                push({ name: Value })
                setValue("")
                e.preventDefault();
            }
        }
    }

    const RemoveSkillHandler = (remove: any, i: number) => (e: SyntheticEvent) => {
        remove(i)
        e.preventDefault()
    }

    return (
        <FieldArray name={name}>
            {({ remove, push }) => (
                <>
                    <FieldTitle>Навыки</FieldTitle>
                    <SkillsWrapper>
                        {
                            skills && skills.map((skill, i) => (<Skill type="button" key={i}>{skill.name}
                                <Close src={close} onClick={RemoveSkillHandler(remove, i)} />
                            </Skill>))
                        }
                        <Input placeholder='Добаить навык' type="text" value={Value} onChange={changeHandler} onKeyDown={AddSkillHandler(push)} />
                    </SkillsWrapper>
                    <Button type="button" onClick={AddSkillHandler(push)}>Добавить</Button>
                </>
            )}
        </FieldArray>
    )
}