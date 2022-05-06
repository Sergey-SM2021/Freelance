import { FieldArray } from "formik"
import { FormEvent, SyntheticEvent, useState } from "react"

import close from '../../assets/cancel.png'
import { TStack } from "../../models/IFreelancer"
import { ISkill } from "../../models/IOrder"
import { FieldTitle } from "../Common/Common.style"
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

    const AddSkillHandler = (push: any) => (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && Value.length > 0) {
            push({ name: Value })
            setValue("")
            e.preventDefault();
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
                            skills && skills.map((skill, i) => (<Skill key={i}>{skill.name}
                                <Close src={close} onClick={RemoveSkillHandler(remove, i)} />
                            </Skill>))
                        }
                        <Input placeholder='Добаить навык' type="text" value={Value} onChange={changeHandler} onKeyDown={AddSkillHandler(push)} />
                    </SkillsWrapper>
                </>
            )}
        </FieldArray>
    )
}