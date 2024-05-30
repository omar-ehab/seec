'use client';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const formSchema = z.object({
  name: z.string().min(2).max(50),
  phone: z.string(),
  email: z.string().email(),
  topic: z.enum(['question', 'complaint', 'suggestion', 'request']),
  message: z.string().min(2).max(500),
});

export default function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      topic: 'question',
      message: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className={'z-10 h-full w-full md:rounded-3xl md:p-6'}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem className={'space-y-4'}>
                <FormLabel className={'text-black'}>الأسم</FormLabel>
                <FormControl>
                  <Input
                    className={'rounded-lg py-5 placeholder:text-[#D7DAD7]'}
                    placeholder='ادخال الاسم'
                    {...field}
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
                <FormLabel className={'text-black'}>رقم الجوال</FormLabel>
                <FormControl>
                  <Input
                    className={'rounded-lg py-5 placeholder:text-[#D7DAD7]'}
                    placeholder='ادخال رقم الجوال'
                    {...field}
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
                <FormLabel className={'text-black'}>
                  البريد الإلكتروني
                </FormLabel>
                <FormControl>
                  <Input
                    className={'rounded-lg py-5 placeholder:text-[#D7DAD7]'}
                    placeholder='ادخال البريد الإلكتروني'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='topic'
            render={({ field }) => (
              <FormItem className='space-y-3'>
                <FormLabel>الموضوع</FormLabel>
                <FormControl>
                  <ul className='grid w-full grid-cols-4 gap-4 lg:gap-6'>
                    <li>
                      <input
                        type='radio'
                        id='question'
                        name='topic'
                        value='question'
                        className='peer hidden'
                        required
                        checked={field.value === 'question'}
                        onChange={field.onChange}
                      />
                      <label
                        htmlFor='question'
                        className='inline-flex w-full cursor-pointer items-center justify-center rounded-lg border border-[#7E8989] bg-white p-2 text-sm text-sub_p hover:border-primary hover:bg-primary/10 hover:text-primary peer-checked:border-primary peer-checked:bg-primary peer-checked:font-medium peer-checked:text-white lg:p-3'
                      >
                        سؤال
                      </label>
                    </li>
                    <li>
                      <input
                        type='radio'
                        id='complaint'
                        name='topic'
                        value='complaint'
                        className='peer hidden'
                        required
                        checked={field.value === 'complaint'}
                        onChange={field.onChange}
                      />
                      <label
                        htmlFor='complaint'
                        className='inline-flex w-full cursor-pointer items-center justify-center rounded-lg border border-[#7E8989] bg-white p-2 text-sm text-sub_p hover:border-primary hover:bg-primary/10 hover:text-primary peer-checked:border-primary peer-checked:bg-primary peer-checked:font-medium peer-checked:text-white lg:p-3'
                      >
                        شكوى
                      </label>
                    </li>
                    <li>
                      <input
                        type='radio'
                        id='suggestion'
                        name='topic'
                        value='suggestion'
                        className='peer hidden'
                        required
                        checked={field.value === 'suggestion'}
                        onChange={field.onChange}
                      />
                      <label
                        htmlFor='suggestion'
                        className='inline-flex w-full cursor-pointer items-center justify-center rounded-lg border border-[#7E8989] bg-white p-2 text-sm text-sub_p hover:border-primary hover:bg-primary/10 hover:text-primary peer-checked:border-primary peer-checked:bg-primary peer-checked:font-medium peer-checked:text-white lg:p-3'
                      >
                        إقتراح
                      </label>
                    </li>
                    <li>
                      <input
                        type='radio'
                        id='request'
                        name='topic'
                        value='request'
                        className='peer hidden'
                        required
                        checked={field.value === 'request'}
                        onChange={field.onChange}
                      />
                      <label
                        htmlFor='request'
                        className='inline-flex w-full cursor-pointer items-center justify-center rounded-lg border border-[#7E8989] bg-white p-2 text-sm text-sub_p hover:border-primary hover:bg-primary/10 hover:text-primary peer-checked:border-primary peer-checked:bg-primary peer-checked:font-medium peer-checked:text-white lg:p-3'
                      >
                        طلب
                      </label>
                    </li>
                  </ul>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='message'
            render={({ field }) => (
              <FormItem>
                <FormLabel>الرسالة</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder='ادخال الرسالة'
                    rows={5}
                    className='resize-none rounded-xl placeholder:text-[#D7DAD7]'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type='submit' className={'w-full rounded-full p-4'}>
            إرسال
          </Button>
        </form>
      </Form>
    </div>
  );
}
