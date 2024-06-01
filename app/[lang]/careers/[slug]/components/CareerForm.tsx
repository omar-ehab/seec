'use client';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import FileUpload from '@/components/form-items/file-upload';

export const MAX_FILE_SIZE = 5000000;
const formSchema = z.object({
  name: z
    .string()
    .min(2, {
      message: 'Please Enter Name with minimum length of 2',
    })
    .max(50, {
      message: 'Maximum length of name is 50',
    }),
  phone: z.string().min(9).max(15),
  email: z.string().email(),
  cv: z
    .any()
    .transform((files) => (files && files.length > 0 ? files[0] : null))
    .refine(
      (file) => (file && file.size <= MAX_FILE_SIZE) ?? true,
      `Max file size is 5MB.`
    )
    .refine(
      (file) => (file && file.type === 'application/pdf') ?? true,
      'pdf file only is accepted.'
    ),
});
export default function CareerForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      cv: null,
    },
  });
  const setImageToForm = (file: File | null) => {
    form.clearErrors('cv');
    form.setValue('cv', file);
  };

  function onSubmit(values: z.infer<typeof formSchema>) {
    const cv = form.getValues('cv');
    if (!cv) {
      form.setError('cv', {
        message: 'السيرة الذاتية (CV) مطلوبة',
      });
      return;
    }
    console.log({ ...values, cv });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <FormField
          control={form.control}
          name='name'
          render={({ field }) => (
            <FormItem className={'space-y-4'}>
              <FormLabel className={'text-base font-normal'}>الاسم</FormLabel>
              <FormControl>
                <Input
                  placeholder='ادخال الاسم'
                  {...field}
                  className={'rounded-lg placeholder:text-[#D7DAD7]'}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='phone'
          render={({ field }) => (
            <FormItem className={'space-y-4'}>
              <FormLabel className={'text-base font-normal'}>
                رقم الجوال
              </FormLabel>
              <FormControl>
                <Input
                  type='number'
                  placeholder='ادخال رقم الجوال'
                  {...field}
                  className={'rounded-lg placeholder:text-[#D7DAD7]'}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='email'
          render={({ field }) => (
            <FormItem className={'space-y-4'}>
              <FormLabel className={'text-base font-normal'}>
                البريد الإلكتروني
              </FormLabel>
              <FormControl>
                <Input
                  type='email'
                  placeholder='ادخال البريد الإلكتروني'
                  {...field}
                  className={'rounded-lg placeholder:text-[#D7DAD7]'}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name='cv'
          render={({ field }) => (
            <FormItem className={'space-y-4'}>
              <FormLabel className={'text-base font-normal'}>
                السيرة الذاتية (CV)
              </FormLabel>
              <FormControl>
                <FileUpload
                  changeFormItem={(file: File | null) => setImageToForm(file)}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          type='submit'
          className={'w-full rounded-full text-base font-normal'}
        >
          إرسال
        </Button>
      </form>
    </Form>
  );
}
