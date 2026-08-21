import { Select, Button, Flex, Portal, createListCollection } from "@chakra-ui/react"
import { departments } from "../api/departments";
import { useState } from "react";

const Departments = ({ register, onSubmit, Controller, control }) => {
    const [dept, setCurDept] = useState(null);

    return (
        <form onSubmit={onSubmit}>
            <Flex
                direction={"column"}
                alignItems={"center"}
                width={"fit-content"}
                margin={"2rem auto"}
                gap={"2"}
            >
                <Controller
                    control={control}
                    name="department"
                    render={({ field }) => (
                        <Select.Root
                            name={field.name}
                            value={field.value}
                            onValueChange={({value}) => field.onChange(value)}
                            w={"xs"}
                            collection={frameworks}
                        >
                            <Select.Label>
                                Choose a department
                            </Select.Label>
                            <Select.Control>
                                <Select.Trigger>
                                    <Select.ValueText placeholder="Select department" onChange={() => console.log('change detected')} />
                                    <Select.Indicator />
                                </Select.Trigger>
                            </Select.Control>
                            <Portal>
                                <Select.Positioner>
                                    <Select.Content>
                                        {frameworks.items.map((framework) => (
                                            <Select.Item
                                                key={framework.value}
                                                item={framework}
                                            >
                                                {framework.label}
                                            </Select.Item>
                                        ))}
                                    </Select.Content>
                                </Select.Positioner>
                            </Portal>
                        </Select.Root>)
                    }
                />
                <Button
                    size={"xs"}
                    alignSelf={"end"}
                >
                    Submit
                </Button>
            </Flex>
        </form >
    )
}


const frameworks = createListCollection({
  items: [
    { label: "React.js", value: "react" },
    { label: "Vue.js", value: "vue" },
    { label: "Angular", value: "angular" },
    { label: "Svelte", value: "svelte" },
  ],
})

export default Departments;