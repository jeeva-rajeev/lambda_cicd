FROM public.ecr.aws/lambda/nodejs:20
COPY . ${LAMBDA_TASK_ROOT}
CMD [ "index.handler" ]