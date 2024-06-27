'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { Dialog, DialogContent, DialogTrigger } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { XIcon } from 'lucide-react';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';


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
  comment: z.string().min(2).max(500),
});

export default function CommentDialog() {
  const [open, setOpen] = useState<boolean>(false);
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
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
          variant={'outline'}
          className={
            'rounded-full border-primary bg-white text-primary hover:text-primary'
          }
        >
          اضافة تعليق
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[408px] sm:rounded-3xl">
        <div className="w-full">
          <div className={'flex items-center justify-between mb-8'}>
            <h3 className={'text-black font-bold text-2xl'}>اضافة تعليق</h3>
            <Button variant={'ghost'} size={'icon'} onClick={() => setOpen(false)}>
              <XIcon />
            </Button>
          </div>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem className={'space-y-4'}>
                    <FormLabel className={'text-base font-normal'}>الاسم</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="ادخال الاسم"
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
                name="phone"
                render={({ field }) => (
                  <FormItem className={'space-y-4'}>
                    <FormLabel className={'text-base font-normal'}>
                      رقم الجوال
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="ادخال رقم الجوال"
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