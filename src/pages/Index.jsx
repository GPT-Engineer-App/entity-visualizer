import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Select, Stack, Textarea, useToast, VStack, Image } from "@chakra-ui/react";
import { FaUpload, FaEye, FaSave } from "react-icons/fa";

const Index = () => {
  const toast = useToast();

  const handleUpload = () => {
    toast({
      title: "上传成功",
      description: "文件已成功上传，正在处理...",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  const handleExport = () => {
    toast({
      title: "导出成功",
      description: "数据已导出为所选格式。",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  return (
    <Box p={5}>
      <VStack spacing={8}>
        <Heading as="h1" size="xl">
          文档分析系统
        </Heading>

        {/* 文档上传界面 */}
        <FormControl>
          <FormLabel>上传文档</FormLabel>
          <Input type="file" accept=".txt, .pdf" />
          <Button leftIcon={<FaUpload />} colorScheme="blue" mt={2} onClick={handleUpload}>
            上传
          </Button>
        </FormControl>

        {/* 实体关系判断设置界面 */}
        <Box>
          <Heading as="h2" size="lg">
            实体关系判断设置
          </Heading>
          <Select placeholder="选择关系类型">
            <option value="person">人物交互关系</option>
            <option value="event">事件先后关系</option>
          </Select>
          <Textarea placeholder="定义规则和条件" mt={2} />
        </Box>

        {/* 实体关系可视化界面 */}
        <Box>
          <Heading as="h2" size="lg">
            实体关系可视化
          </Heading>
          <Image src="https://images.unsplash.com/photo-1494774157365-9e04c6720e47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbnRpdHklMjByZWxhdGlvbnNoaXAlMjBncmFwaHxlbnwwfHx8fDE3MTQyOTc5OTV8MA&ixlib=rb-4.0.3&q=80&w=1080" />
        </Box>

        {/* 文本分类界面 */}
        <Box>
          <Heading as="h2" size="lg">
            文本分类
          </Heading>
          <Flex>
            <Button leftIcon={<FaEye />} colorScheme="teal" mt={2}>
              查看分类
            </Button>
          </Flex>
        </Box>

        {/* 信息抽取界面 */}
        <Box>
          <Heading as="h2" size="lg">
            信息抽取
          </Heading>
          <Textarea placeholder="抽取的信息显示区域" mt={2} />
          <Button leftIcon={<FaEye />} colorScheme="purple" mt={2}>
            编辑信息
          </Button>
        </Box>

        {/* 结果导出界面 */}
        <Box>
          <Heading as="h2" size="lg">
            结果导出
          </Heading>
          <Select placeholder="选择导出格式">
            <option value="image">图像</option>
            <option value="text">文本文件</option>
          </Select>
          <Button leftIcon={<FaSave />} colorScheme="orange" mt={2} onClick={handleExport}>
            导出
          </Button>
        </Box>
      </VStack>
    </Box>
  );
};

export default Index;
