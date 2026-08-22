import { Select, Button, Flex, Portal, createListCollection } from "@chakra-ui/react"
import { departments } from "../api/departments";

const Departments = ({ onSubmit, Controller, control }) => {

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
                            onValueChange={({ value }) => field.onChange(value)}
                            w={"xs"}
                            collection={departmentsCollection}
                        >
                            <Select.Label>
                                Choose a department
                            </Select.Label>
                            <Select.Control>
                                <Select.Trigger>
                                    <Select.ValueText placeholder="Select department" />
                                    <Select.Indicator />
                                </Select.Trigger>
                            </Select.Control>
                            <Portal>
                                <Select.Positioner>
                                    <Select.Content>
                                        {departmentsCollection.items.map((department) => (
                                            <Select.Item
                                                key={department.value}
                                                item={department}
                                            >
                                                {department.label}
                                            </Select.Item>
                                        )
                                        )}
                                    </Select.Content>
                                </Select.Positioner>
                            </Portal>
                        </Select.Root>)
                    }
                />
                <Button
                    type="submit"
                    size={"xs"}
                    alignSelf={"end"}
                >
                    Submit
                </Button>
            </Flex>
        </form >
    )
}

const departmentsCollection = createListCollection({
    items: departments.departments.map((department) => {
        return {
            label: department.displayName,
            value: department.departmentId
        }
    })
})

export default Departments;