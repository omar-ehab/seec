'use client';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/ui/dialog';
import { cn } from '@/lib/utils';
import { Button, buttonVariants } from '@/components/ui/button';
import { XIcon } from 'lucide-react';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';

const formSchema = z.object({
  q_1: z.enum(['yes', 'no', 'indifferent']),
  q_2: z.enum(['yes', 'no', 'indifferent']),
  q_3: z.enum(['yes', 'no', 'indifferent']),
  comment: z.string().min(2).max(500),
});

export default function FeedbackDialog() {
  const [open, setOpen] = useState<boolean>(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      q_1: 'yes',
      q_2: 'yes',
      q_3: 'yes',
      comment: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          className={cn(
            buttonVariants({ variant: 'default' }),
            'z-30 rounded-full bg-primary text-white',
          )}
        >
          شاركنا برأيك
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[408px] sm:rounded-3xl">
        <div className="w-full">
          <div className={'flex items-center justify-between mb-8'}>
            <h3 className={'text-black font-bold text-2xl'}>شاركنا برأيك</h3>
            <Button variant={'ghost'} size={'icon'} onClick={() => setOpen(false)}>
              <XIcon />
            </Button>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="q_1"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>هل تعتقد أن استخدام نظام محادثة فوري معزز بتقيات الذكاء الاصطناعي التوليدي؟</FormLabel>
                    <FormControl>
                      <ul className="grid w-full grid-cols-4 gap-4 lg:gap-6">
                        <li>
                          <input
                            type="radio"
                            id="q_1_yes"
                            name="q_1"
                            value="yes"
                            className="peer hidden"
                            required
                            checked={field.value === 'yes'}
                            onChange={field.onChange}
                          />
                          <label
                            htmlFor="q_1_yes"
                            className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg border border-[#7E8989] bg-white p-2 text-sm text-sub_p hover:border-primary hover:bg-primary/10 hover:text-primary peer-checked:border-primary peer-checked:bg-primary peer-checked:font-medium peer-checked:text-white lg:p-3"
                          >
                            نعم
                          </label>
                        </li>
                        <li>
                          <input
                            type="radio"
                            id="q_1_no"
                            name="q_1"
                            value="no"
                            className="peer hidden"
                            required
                            checked={field.value === 'no'}
                            onChange={field.onChange}
                          />
                          <label
                            htmlFor="q_1_no"
                            className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg border border-[#7E8989] bg-white p-2 text-sm text-sub_p hover:border-primary hover:bg-primary/10 hover:text-primary peer-checked:border-primary peer-checked:bg-primary peer-checked:font-medium peer-checked:text-white lg:p-3"
                          >
                            لا
                          </label>
                        </li>
                        <li>
                          <input
                            type="radio"
                            id="q_1_indifferent"
                            name="q_1"
                            value="indifferent"
                            className="peer hidden"
                            required
                            checked={field.value === 'indifferent'}
                            onChange={field.onChange}
                          />
                          <label
                            htmlFor="q_1_indifferent"
                            className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg border border-[#7E8989] bg-white p-2 text-sm text-sub_p hover:border-primary hover:bg-primary/10 hover:text-primary peer-checked:border-primary peer-checked:bg-primary peer-checked:font-medium peer-checked:text-white lg:p-3"
                          >
                            محايد
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
                name="q_2"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>هل تعتقد أن استخدام نظام محادثة فوري معزز بتقيات الذكاء الاصطناعي التوليدي؟</FormLabel>
                    <FormControl>
                      <ul className="grid w-full grid-cols-4 gap-4 lg:gap-6">
                        <li>
                          <input
                            type="radio"
                            id="q_2_yes"
                            name="q_2"
                            value="yes"
                            className="peer hidden"
                            required
                            checked={field.value === 'yes'}
                            onChange={field.onChange}
                          />
                          <label
                            htmlFor="q_2_yes"
                            className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg border border-[#7E8989] bg-white p-2 text-sm text-sub_p hover:border-primary hover:bg-primary/10 hover:text-primary peer-checked:border-primary peer-checked:bg-primary peer-checked:font-medium peer-checked:text-white lg:p-3"
                          >
                            نعم
                          </label>
                        </li>
                        <li>
                          <input
                            type="radio"
                            id="q_2_no"
                            name="q_2"
                            value="no"
                            className="peer hidden"
                            required
                            checked={field.value === 'no'}
                            onChange={field.onChange}
                          />
                          <label
                            htmlFor="q_2_no"
                            className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg border border-[#7E8989] bg-white p-2 text-sm text-sub_p hover:border-primary hover:bg-primary/10 hover:text-primary peer-checked:border-primary peer-checked:bg-primary peer-checked:font-medium peer-checked:text-white lg:p-3"
                          >
                            لا
                          </label>
                        </li>
                        <li>
                          <input
                            type="radio"
                            id="q_2_indifferent"
                            name="q_2"
                            value="indifferent"
                            className="peer hidden"
                            required
                            checked={field.value === 'indifferent'}
                            onChange={field.onChange}
                          />
                          <label
                            htmlFor="q_2_indifferent"
                            className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg border border-[#7E8989] bg-white p-2 text-sm text-sub_p hover:border-primary hover:bg-primary/10 hover:text-primary peer-checked:border-primary peer-checked:bg-primary peer-checked:font-medium peer-checked:text-white lg:p-3"
                          >
                            محايد
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
                name="q_3"
                render={({ field }) => (
                  <FormItem className="space-y-2">
                    <FormLabel>هل تعتقد أن استخدام نظام محادثة فوري معزز بتقيات الذكاء الاصطناعي التوليدي؟</FormLabel>
                    <FormControl>
                      <ul className="grid w-full grid-cols-4 gap-4 lg:gap-6">
                        <li>
                          <input
                            type="radio"
                            id="q_3_yes"
                            name="q_3"
                            value="yes"
                            className="peer hidden"
                            required
                            checked={field.value === 'yes'}
                            onChange={field.onChange}
                          />
                          <label
                            htmlFor="q_3_yes"
                            className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg border border-[#7E8989] bg-white p-2 text-sm text-sub_p hover:border-primary hover:bg-primary/10 hover:text-primary peer-checked:border-primary peer-checked:bg-primary peer-checked:font-medium peer-checked:text-white lg:p-3"
                          >
                            نعم
                          </label>
                        </li>
                        <li>
                          <input
                            type="radio"
                            id="q_3_no"
                            name="q_3"
                            value="no"
                            className="peer hidden"
                            required
                            checked={field.value === 'no'}
                            onChange={field.onChange}
                          />
                          <label
                            htmlFor="q_3_no"
                            className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg border border-[#7E8989] bg-white p-2 text-sm text-sub_p hover:border-primary hover:bg-primary/10 hover:text-primary peer-checked:border-primary peer-checked:bg-primary peer-checked:font-medium peer-checked:text-white lg:p-3"
                          >
                            لا
                          </label>
                        </li>
                        <li>
                          <input
                            type="radio"
                            id="q_3_indifferent"
                            name="q_3"
                            value="indifferent"
                            className="peer hidden"
                            required
                            checked={field.value === 'indifferent'}
                            onChange={field.onChange}
                          />
                          <label
                            htmlFor="q_3_indifferent"
                            className="inline-flex w-full cursor-pointer items-center justify-center rounded-lg border border-[#7E8989] bg-white p-2 text-sm text-sub_p hover:border-primary hover:bg-primary/10 hover:text-primary peer-checked:border-primary peer-checked:bg-primary peer-checked:font-medium peer-checked:text-white lg:p-3"
                          >
                            محايد
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
                name="comment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>تعليقك</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="كتابة التعليق"
                        rows={5}
                        className="resize-none rounded-xl placeholder:text-[#D7DAD7]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className={'w-full rounded-full p-4'}>
                إرسال
              </Button>
            </form>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}