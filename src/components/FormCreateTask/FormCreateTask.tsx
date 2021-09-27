import { AddIcon } from "@chakra-ui/icons";
import { Box, BoxProps, Button, Flex, Input, Text } from "@chakra-ui/react";
import { useForm } from "react-hook-form";

export interface FormFields {
  description: string;
}

export interface FormCreateTaskProps extends Omit<BoxProps, "onSubmit"> {
  onSubmit?: (values: FormFields) => void;
}

export const FormCreateTask = ({
  onSubmit: onSubmitProp,
  ...props
}: FormCreateTaskProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      description: "",
    },
  });

  const onSubmit = (values: FormFields) => {
    reset();
    onSubmitProp?.(values);
  };

  return (
    <Box as="form" onSubmit={handleSubmit(onSubmit)}>
      <Flex alignItems="center" py={2} {...props}>
        <Input
          flex={1}
          isInvalid={Boolean(errors.description)}
          mr={2}
          placeholder="Add Task"
          {...register("description", { required: true, minLength: 1 })}
        />
        <Button colorScheme="blue" type="submit">
          <AddIcon />
        </Button>
      </Flex>
      {errors.description && (
        <Text color="red.500" fontSize="sm" fontWeight="medium">
          This field is required
        </Text>
      )}
    </Box>
  );
};
