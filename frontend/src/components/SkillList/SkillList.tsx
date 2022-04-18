import { FieldArray } from "formik"
import { FormEvent, SyntheticEvent, useState } from "react"

import close from '../../assets/cancel.png'
import { TStack } from "../../models/IFreelancer"
import { ISkill } from "../../models/IOrder"
import { FieldTitle } from "../Common/Common.style"
import { Close, Input, Skill, SkillsWrapper } from "./SkillList.style"

interface ISkillList {
    skills: Array<{ name: string }>,
    obj: Partial<TStack | ISkill>,
    name: string
}

export const SkillList = ({ skills, obj, name }: ISkillList) => {
    const [Value, setValue] = useState<string>("")
    const changeHandler = (e: FormEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }
    return (
        <FieldArray name={name}>
            {({ remove, push }) => (
                <>
                    <FieldTitle>Навыки</FieldTitle>
                    <SkillsWrapper>{
                        skills && skills.map((skill, i) => (<Skill>{skill.name}
                            <Close src={close} onClick={(e: SyntheticEvent) => { remove(i); e.preventDefault() }} />
                        </Skill>))
                    }
                        < Input placeholder='skill' type="text" value={Value} onChange={changeHandler} onKeyDown={(e: React.KeyboardEvent<HTMLInputElement>) => {
                            if (e.key === 'Enter' && Value.length > 0) {
                                push({ ...obj, name: Value })
                                setValue("")
                                e.preventDefault();
                                return false;
                            }
                        }} />
                    </SkillsWrapper>
                </>
            )}
        </FieldArray>
    )
}